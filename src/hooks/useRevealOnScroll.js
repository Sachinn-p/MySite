import { useEffect } from 'react';

function useRevealOnScroll() {
  useEffect(() => {
    const observedTargets = new Set();

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((target) => {
        target.classList.add('is-visible');
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observedTargets.delete(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
      },
    );

    const observeTargets = () => {
      document.querySelectorAll('.reveal').forEach((target) => {
        if (target.classList.contains('is-visible') || observedTargets.has(target)) {
          return;
        }

        observedTargets.add(target);
        observer.observe(target);
      });
    };

    observeTargets();

    const mutationObserver = new MutationObserver(observeTargets);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      observedTargets.clear();
    };
  }, []);
}

export default useRevealOnScroll;
