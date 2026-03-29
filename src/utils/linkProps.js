export const getLinkProps = (href) => {
  if (!href) {
    return {};
  }

  if (/^https?:/i.test(href)) {
    return {
      href,
      target: '_blank',
      rel: 'noreferrer',
    };
  }

  return { href };
};
