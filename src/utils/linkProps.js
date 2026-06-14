export const getLinkProps = (href, rel) => {
  if (!href) {
    return {};
  }

  if (/^https?:/i.test(href)) {
    return {
      href,
      target: '_blank',
      rel: rel ? `${rel} noreferrer` : 'noreferrer',
    };
  }

  return { href };
};
