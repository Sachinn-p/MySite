import { useRef } from 'react';
import ContentSection from '../common/ContentSection';
import { terminalLines, terminalSection } from '../../content/siteContent';
import useTerminalTyping from '../../hooks/useTerminalTyping';

function Terminal() {
  const sectionRef = useRef(null);
  const outputRef = useRef(null);
  useTerminalTyping(sectionRef, outputRef, terminalLines);

  return (
    <ContentSection
      id="terminal"
      className="reveal"
      sectionRef={sectionRef}
      eyebrow={terminalSection.eyebrow}
      title={terminalSection.title}
      copy={terminalSection.copy}
    >
      <div className="terminal-shell">
        <div className="terminal-topbar" aria-hidden="true">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <div
          ref={outputRef}
          className="terminal-body"
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
        />
      </div>
    </ContentSection>
  );
}

export default Terminal;
