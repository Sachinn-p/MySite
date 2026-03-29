import SectionHeading from './SectionHeading';

function ContentSection({
  id,
  className = 'reveal',
  eyebrow,
  title,
  copy,
  sectionRef,
  children,
}) {
  return (
    <section ref={sectionRef} id={id} className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
      {children}
    </section>
  );
}

export default ContentSection;
