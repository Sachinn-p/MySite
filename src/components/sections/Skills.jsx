import { useRef } from 'react';
import ContentSection from '../common/ContentSection';
import Panel from '../common/Panel';
import { skillRings, skillsSection } from '../../content/siteContent';
import useSkillsOrbit from '../../hooks/useSkillsOrbit';

function Skills() {
  const canvasRef = useRef(null);
  useSkillsOrbit(canvasRef, skillRings);

  return (
    <ContentSection
      id="skills"
      className="reveal"
      eyebrow={skillsSection.eyebrow}
      title={skillsSection.title}
      copy={skillsSection.copy}
    >
      <Panel className="skills-panel" innerClassName="skills-inner">
        <div className="skills-canvas-wrap">
          <canvas ref={canvasRef} id="skills-canvas" aria-label="Orbiting skill map" />
        </div>
      </Panel>
    </ContentSection>
  );
}

export default Skills;
