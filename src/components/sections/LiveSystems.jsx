import ContentSection from '../common/ContentSection';
import { liveSystems, liveSystemsSection } from '../../content/siteContent';
import { getLinkProps } from '../../utils/linkProps';

function LiveSystems() {
  return (
    <ContentSection
      id="live-systems"
      className="live-systems-section reveal"
      eyebrow={liveSystemsSection.eyebrow}
      title={liveSystemsSection.title}
      copy={liveSystemsSection.copy}
    >
      <div className="live-systems-grid">
        {liveSystems.map((system) => (
          <article key={system.name} className="live-system-card">
            <div className="live-system-rail" aria-hidden="true" />
            <div className="live-system-header">
              <span className="live-system-status">
                <span className="status-dot" aria-hidden="true" />
                {system.status}
              </span>
              <span className="live-system-role">{system.role}</span>
            </div>

            <div className="live-system-body">
              <h3>{system.name}</h3>
              <p className="live-system-summary">{system.summary}</p>

              <ul className="live-system-highlights">
                {system.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="live-system-flow" aria-label={`${system.name} architecture flow`}>
              {system.flow.map((step, index) => (
                <div key={step} className="live-flow-item">
                  <span className="live-flow-step">{step}</span>
                  {index < system.flow.length - 1 ? (
                    <span className="live-flow-arrow" aria-hidden="true">
                      -&gt;
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="live-system-footer">
              <div className="live-system-stack">
                {system.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {system.href ? (
                <a className="live-system-link" {...getLinkProps(system.href)}>
                  <span>Open live</span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : (
                <span className="live-system-note">Private deployment</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
  );
}

export default LiveSystems;
