import ContentSection from '../common/ContentSection';
import { curiosityCards, curiositySection } from '../../content/siteContent';

function Curiosity() {
  return (
    <ContentSection
      id="curiosity"
      className="reveal"
      eyebrow={curiositySection.eyebrow}
      title={curiositySection.title}
      copy={curiositySection.copy}
    >
      <div className="curiosity-grid">
        {curiosityCards.map((card) => (
          <div key={card.title} className="curiosity-card" role="region" aria-label={card.title}>
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Curiosity;
