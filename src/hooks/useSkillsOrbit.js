import { useEffect } from 'react';
import { createMonogramIcon, getSkillBadgeLabel } from '../lib/skillOrbit';

function useSkillsOrbit(canvasRef, rings) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionFactor = prefersReducedMotion ? 0.28 : 1;
    const iconCache = new Map();
    let width = 0;
    let height = 0;
    let dpr = 1;
    let scale = 1;
    let animationFrameId = 0;
    let lastFrameTime = 0;
    const ringAngles = rings.map((_, index) => index * 0.9);

    rings.forEach((ring) => {
      ring.items.forEach((item) => {
        if (iconCache.has(item.name)) {
          return;
        }

        const image = new Image();
        const fallbackImage = new Image();
        const fallbackSrc = createMonogramIcon(
          getSkillBadgeLabel(item.name),
          ring.color,
          '#101722',
        );

        fallbackImage.src = fallbackSrc;
        image.decoding = 'async';

        if (item.src && !/^https?:/i.test(item.src)) {
          image.src = item.src;
        } else if (item.src) {
          image.crossOrigin = 'anonymous';
          image.onerror = () => {
            image.onerror = null;
            image.src = fallbackSrc;
          };
          image.src = item.src;
        } else {
          image.src = fallbackSrc;
        }

        iconCache.set(item.name, {
          image,
          fallbackImage,
        });
      });
    });

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width || canvas.parentElement?.clientWidth || 720;
      height = bounds.height || 720;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = width < 520 ? 0.58 : width < 760 ? 0.74 : width < 980 ? 0.88 : 1;
    };

    const draw = (time) => {
      try {
        const deltaSeconds = lastFrameTime
          ? Math.min((time - lastFrameTime) / 1000, 0.05)
          : 1 / 60;
        lastFrameTime = time;

        const centerX = width / 2;
        const centerY = height / 2;

        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.fillStyle = 'rgba(127, 239, 189, 0.18)';
        ctx.arc(centerX, centerY, 32 * scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#7fefbd';
        ctx.arc(centerX, centerY, 18 * scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#050508';
        ctx.font = `${Math.max(12, 16 * scale)}px Space Mono`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('SP_', centerX, centerY);

        rings.forEach((ring, ringIndex) => {
          const radius = ring.radius * scale;
          ringAngles[ringIndex] += ring.speed * ring.direction * deltaSeconds * motionFactor;
          const angleOffset = ringAngles[ringIndex];

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255,255,255,0.08)';
          ctx.lineWidth = 1;
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();

          ring.items.forEach((item, itemIndex) => {
            const angle = angleOffset + (Math.PI * 2 * itemIndex) / ring.items.length;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            const iconSize = Math.max(16, 21 * scale);
            const badgeRadius = Math.max(14, 19 * scale);

            ctx.beginPath();
            ctx.fillStyle = 'rgba(9, 12, 17, 0.95)';
            ctx.arc(x, y, badgeRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.strokeStyle = ring.color;
            ctx.lineWidth = 1.5;
            ctx.arc(x, y, badgeRadius, 0, Math.PI * 2);
            ctx.stroke();

            const cached = iconCache.get(item.name);
            const activeImage =
              cached?.image && cached.image.complete && cached.image.naturalWidth > 0
                ? cached.image
                : cached?.fallbackImage &&
                    cached.fallbackImage.complete &&
                    cached.fallbackImage.naturalWidth > 0
                  ? cached.fallbackImage
                  : null;

            if (activeImage) {
              try {
                ctx.drawImage(activeImage, x - iconSize / 2, y - iconSize / 2, iconSize, iconSize);
              } catch (error) {
                ctx.fillStyle = ring.color;
                ctx.font = `700 ${Math.max(9, 11.5 * scale)}px Space Mono`;
                ctx.fillText(getSkillBadgeLabel(item.name), x, y + 0.5);
              }
            } else {
              ctx.fillStyle = ring.color;
              ctx.font = `700 ${Math.max(9, 11.5 * scale)}px Space Mono`;
              ctx.fillText(getSkillBadgeLabel(item.name), x, y + 0.5);
            }
          });
        });
      } finally {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrameId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, rings]);
}

export default useSkillsOrbit;
