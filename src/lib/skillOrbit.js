export const createMonogramIcon = (label, foreground, background) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#050508" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#grad)" />
      <rect x="4" y="4" width="56" height="56" rx="14" fill="none" stroke="${foreground}" stroke-width="2.5" />
      <text
        x="32"
        y="37"
        text-anchor="middle"
        font-family="Space Mono, monospace"
        font-size="${label.length > 1 ? 18 : 24}"
        font-weight="700"
        fill="${foreground}"
      >
        ${label}
      </text>
    </svg>
  `)}`;

export const getSkillBadgeLabel = (name) => {
  if (name === 'GitHub Actions') {
    return 'GA';
  }

  if (name === 'FastAPI') {
    return 'FA';
  }

  if (name === 'JavaScript') {
    return 'JS';
  }

  return name
    .split(/[\s/-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
};
