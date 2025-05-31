import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../../assets/files/Deedy_CV_Sachinn_P.pdf'; 
import profileImg from '../../assets/img/my-profile-img.jpeg'; 

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
          <p>
            I'm Sachinn P, a passionate Software Engineer currently pursuing a B.E. in Computer Science and Engineering.  
            I specialize in web development and have a strong foundation in computer science.  
            I enjoy crafting elegant solutions to complex problems and am always eager to learn and explore new technologies.
          </p>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-4">
            <img src={profileImg} className="img-fluid rounded about-img" alt="Profile" />
            <div className="text-center mt-3">
              <a href={resumePDF} download className="resume-download-btn" data-aos="fade-up" data-aos-delay="200">
                <FontAwesomeIcon icon={faDownload} /> Download Resume
              </a>
            </div>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Software Engineer &amp; Backend Developer</h3>
            <p className="fst-italic">
              Passionate about backend development, cybersecurity, and artificial intelligence.
            </p>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>Education:</strong> <span>B.E. Computer Science</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>University:</strong> <span>Kongunadu College of Engineering & Technology</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>Email:</strong> <span>sachinn2413@gmail.com</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>Location:</strong> <span>Namakkal</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>CGPA:</strong> <span>7.9</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>Year:</strong> <span>2022 - 2026</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>Website:</strong> <span>sachinnp.netlify.app</span></li>
                  <li><FontAwesomeIcon icon={faChevronRight} /> <strong>School:</strong> <span>Sri Vani Matric. HR. SEC. School (86.6%)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;