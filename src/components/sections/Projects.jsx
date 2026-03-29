import ContentSection from '../common/ContentSection';
import { projects, projectsSection } from '../../content/siteContent';
import { getLinkProps } from '../../utils/linkProps';

function Projects() {
  return (
    <ContentSection
      id="projects"
      className="reveal"
      eyebrow={projectsSection.eyebrow}
      title={projectsSection.title}
      copy={projectsSection.copy}
    >
      <div className="projects-list">
        {projects.map((project) => {
          const content = (
            <>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-blurb">{project.copy}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-arrow" aria-hidden="true">
                -&gt;
              </div>
            </>
          );

          if (project.href) {
            return (
              <a key={project.title} className="project-row" {...getLinkProps(project.href)}>
                {content}
              </a>
            );
          }

          return (
            <div key={project.title} className="project-row">
              {content}
            </div>
          );
        })}
      </div>
    </ContentSection>
  );
}

export default Projects;
