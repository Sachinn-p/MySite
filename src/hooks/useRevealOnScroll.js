import { useEffect } from 'react';

function useRevealOnScroll() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
      },
    );

    revealTargets.forEach((target) => {
      if (!target.classList.contains('is-visible')) {
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, []);
}

export default useRevealOnScroll;
