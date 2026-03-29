function SectionHeading({ eyebrow, title, copy }) {
  return (
    <header className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </header>
  );
}

export default SectionHeading;
