import { useEffect, useRef } from 'react';

function BackgroundEffects() {
  const networkCanvasRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const canvas = networkCanvasRef.current;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const particles = [];
    const particleCount = 80;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId = 0;
    let cursorAnimationFrameId = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const createParticles = () => {
      particles.length = 0;

      for (let index = 0; index < particleCount; index += 1) {
        particles.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          vx: randomBetween(-0.28, 0.28),
          vy: randomBetween(-0.28, 0.28),
          radius: randomBetween(1, 2.2),
        });
      }
    };

    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += prefersReducedMotion ? 0 : particle.vx;
        particle.y += prefersReducedMotion ? 0 : particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }
      });

      for (let index = 0; index < particles.length; index += 1) {
        const first = particles[index];

        ctx.beginPath();
        ctx.fillStyle = 'rgba(127,239,189,0.55)';
        ctx.arc(first.x, first.y, first.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let innerIndex = index + 1; innerIndex < particles.length; innerIndex += 1) {
          const second = particles[innerIndex];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 120) {
            continue;
          }

          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,255,${((1 - distance / 120) * 0.12).toFixed(3)})`;
          ctx.moveTo(first.x, first.y);
          ctx.lineTo(second.x, second.y);
          ctx.stroke();
        }
      }

      animationFrameId = window.requestAnimationFrame(renderParticles);
    };

    resizeCanvas();
    createParticles();
    renderParticles();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    let handleMouseMove = null;

    if (finePointer && !prefersReducedMotion) {
      document.body.classList.add('custom-cursor-enabled');
      const pointer = { x: width / 2, y: height / 2 };
      const ringPosition = { x: pointer.x, y: pointer.y };

      handleMouseMove = (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;

        if (dot) {
          dot.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animateRing = () => {
        ringPosition.x += (pointer.x - ringPosition.x) * 0.16;
        ringPosition.y += (pointer.y - ringPosition.y) * 0.16;

        if (ring) {
          ring.style.transform = `translate(${ringPosition.x}px, ${ringPosition.y}px) translate(-50%, -50%)`;
        }

        cursorAnimationFrameId = window.requestAnimationFrame(animateRing);
      };

      animateRing();
    } else {
      if (dot) {
        dot.style.display = 'none';
      }

      if (ring) {
        ring.style.display = 'none';
      }
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.cancelAnimationFrame(cursorAnimationFrameId);
      window.removeEventListener('resize', handleResize);

      if (handleMouseMove) {
        window.removeEventListener('mousemove', handleMouseMove);
      }

      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <>
      <canvas id="network-canvas" ref={networkCanvasRef} aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={cursorRingRef} aria-hidden="true" />
    </>
  );
}

export default BackgroundEffects;
