import { useRef } from 'react';
import { heroContent, siteMeta } from '../../content/siteContent';
import profileImage from '../../assets/img/my-profile-img.png';
import useHeroScene from '../../hooks/useHeroScene';

function Hero() {
  const mountRef = useRef(null);
  useHeroScene(mountRef);

  return (
    <section id="hero" className="hero reveal is-visible">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-visual-shell" />
        <div id="three-container" ref={mountRef} />
      </div>
      <div className="hero-grid">
        <div className="hero-text-block">
          <div className="eyebrow">{heroContent.eyebrow}</div>
          <h1>
            {heroContent.heading[0]}
            <br />
            <span className="accent-line">{heroContent.heading[1]}</span>
            <br />
            {heroContent.heading[2]}
          </h1>
          <p className="hero-description">
            {siteMeta.name}. {heroContent.description}
          </p>
        </div>

        <aside className="hero-profile-card" aria-label={`${siteMeta.name} profile card`}>
          <div className="hero-profile-media">
            <div className="hero-photo-frame">
              <img
                className="hero-photo"
                src={profileImage}
                alt={`${siteMeta.name} portrait`}
                loading="eager"
              />
            </div>
          </div>
          <div className="hero-profile-copy">
            <span className="hero-profile-label">{heroContent.profile.label}</span>
            <div className="hero-profile-name">{siteMeta.name}</div>
            <p>{heroContent.profile.blurb}</p>
          </div>
        </aside>

        <div className="hero-meta">
          {heroContent.pills.map((pill) => (
            <div key={pill} className="hero-pill">
              {pill}
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a className="cta-button" href={heroContent.primaryCta.href}>
            <span>{heroContent.primaryCta.label}</span>
          </a>
          <a className="cta-button" href={heroContent.secondaryCta.href}>
            <span>{heroContent.secondaryCta.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
