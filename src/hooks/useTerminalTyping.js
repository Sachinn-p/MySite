import { useEffect } from 'react';

function useTerminalTyping(sectionRef, outputRef, lines) {
  useEffect(() => {
    const section = sectionRef.current;
    const output = outputRef.current;

    if (!section || !output) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = [];
    let started = false;

    output.textContent = '';

    const startTyping = () => {
      if (started) {
        return;
      }

      started = true;
      let lineIndex = 0;

      const typeLine = () => {
        if (lineIndex >= lines.length) {
          const finalLine = document.createElement('div');
          finalLine.className = 'terminal-line';

          const prompt = document.createElement('span');
          prompt.textContent = '$ ';

          const caret = document.createElement('span');
          caret.className = 'terminal-caret';
          caret.setAttribute('aria-hidden', 'true');

          finalLine.appendChild(prompt);
          finalLine.appendChild(caret);
          output.appendChild(finalLine);
          return;
        }

        const lineElement = document.createElement('div');
        lineElement.className = 'terminal-line';
        output.appendChild(lineElement);

        const text = lines[lineIndex];
        let charIndex = 0;

        const typeChar = () => {
          lineElement.textContent = text.slice(0, charIndex);
          charIndex += 1;

          if (charIndex <= text.length) {
            timers.push(window.setTimeout(typeChar, prefersReducedMotion ? 0 : 24));
            return;
          }

          lineIndex += 1;
          timers.push(window.setTimeout(typeLine, prefersReducedMotion ? 0 : 170));
        };

        typeChar();
      };

      typeLine();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          startTyping();
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [lines, outputRef, sectionRef]);
}

export default useTerminalTyping;
