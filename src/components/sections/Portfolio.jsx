import React, { useEffect, useState } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  
  useEffect(() => {
    // Initialize GLightbox
    GLightbox({
      selector: '.glightbox'
    });
  }, []);

  const projects = [
  {
    title: 'Quiz App',
    description: 'Developed a comprehensive quiz application using FastAPI as the backend, enabling efficient data processing and management. Built the frontend using ReactJS, integrated an LLM (Llama) for dynamic question generation and evaluation based on user input. Connected both frontend and backend, and managed the API connectivity.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/Quiz_App',
    technologies: ['FastAPI', 'ReactJS', 'LLM', 'API']
  },
  {
    title: 'Roadmap Generation',
    description: 'Built a roadmap generation application based on the academic curriculum. Implemented using FastAPI, ReactJS, Reactflow, and MongoDB for building the application and using Gemini model for generation of context. Developed application logic and content generation by Gemini model.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/Roadmap_GENAI',
    technologies: ['FastAPI', 'ReactJS', 'MongoDB', 'Gemini']
  },
  {
    title: 'Micro Climate LSTM Prediction',
    description: 'A project for micro climate prediction using LSTM neural networks.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/Micro_Climate_LSTM_Prediction',
    technologies: ['Python', 'LSTM', 'Deep Learning']
  },
  {
    title: 'Weather Forecasting Program',
    description: 'A weather forecasting program in Python.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/Weather-forecasting-program-in-python/tree/main',
    technologies: ['Python', 'Weather API']
  },
  {
    title: 'Phishing Website Detection',
    description: 'A phishing website detection project using URL analysis.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/Pishing_Website_Detection_by_url',
    technologies: ['Python', 'URL Analysis', 'Security']
  },
  {
    title: 'SOC Agent Automation Platform',
    description: 'Designed an automated SOC agent integrating Wazuh SIEM, event correlation logic, and Azure cloud log aggregation. Implemented dynamic threat-detection workflows and automated incident-response mechanisms. Strengthened system reliability through observability, structured data flows, and robust backend orchestration.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Sachinn-p/SOC_Agent_Automation_Platform',
    technologies: ['Python', 'Streamlit', 'FastAPI', 'Wazuh SIEM', 'Azure', 'Groq LLM', 'Event Correlation']
  }
];

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>My Projects</p>
      </div>

      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 portfolio-item mb-4" key={index}>
              <div className="portfolio-wrap">
                <img src={project.image} className="img-fluid" alt={project.title} />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge">{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="portfolio-links">
                      <a href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         title="View Project">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
