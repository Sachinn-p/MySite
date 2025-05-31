import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faCode, 
  faShieldHalved, 
  faRobot, 
  faDatabase, 
  faMobileScreen,
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faServer,
      title: 'Backend Development',
      description: 'Building robust and scalable backend systems using FastAPI, Python, and modern databases.',
      features: [
        'RESTful API Development',
        'Database Architecture',
        'Server Management',
        'Performance Optimization'
      ]
    },
    {
      icon: faShieldHalved,
      title: 'Cybersecurity',
      description: 'Implementing secure practices and developing solutions for web security and threat detection.',
      features: [
        'Security Auditing',
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Best Practices'
      ]
    },
    {
      icon: faRobot,
      title: 'AI Integration',
      description: 'Integrating AI models (LLM, Gemini) for intelligent features and automated solutions.',
      features: [
        'LLM Implementation',
        'AI Model Integration',
        'Automated Systems',
        'Intelligent Features'
      ]
    },
    {
      icon: faDatabase,
      title: 'Database Management',
      description: 'Working with both SQL (MySQL) and NoSQL (MongoDB) databases for efficient data handling.',
      features: [
        'Database Design',
        'Query Optimization',
        'Data Migration',
        'Performance Tuning'
      ]
    },
    {
      icon: faCode,
      title: 'Frontend Development',
      description: 'Creating responsive web interfaces using ReactJS, HTML, CSS, and modern frameworks.',
      features: [
        'Responsive Design',
        'UI/UX Implementation',
        'Modern Frameworks',
        'Performance Optimization'
      ]
    },
    {
      icon: faMobileScreen,
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs with proper documentation and testing.',
      features: [
        'API Architecture',
        'Documentation',
        'Testing & QA',
        'Version Control'
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Professional Expertise</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <FontAwesomeIcon icon={faArrowRight} className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
