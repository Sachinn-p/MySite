import React from 'react';

const Resume = () => {
  const certifications = [
    'POSTMAN - API Fundamentals Student Expert',
    'Microsoft Azure Fundamentals (AZ-900)',
    'Guvi - Python Zero to Hero',
    'Guvi - Machine Learning 101',
    'MongoDB ICT Academy',
    'Kaggle - Pandas',
    'Kaggle - Intro to Deep Learning'
  ];

  const achievements = [
    'Winner of HACK $ DAY - Global hackathon series powered by 0xDay',
    'First place in Technical Quiz - Chettinad College of Engineering & Technology',
    'First place in Paper Presentation - Paavai College of Engineering',
    'Second place in Dark Code Event - Paavai College of Engineering'
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>My Experience & Education</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.E. in Computer Science and Engineering</h4>
              <h5>2022 - 2026</h5>
              <p><em>Kongunadu College of Engineering & Technology, Namakkal</em></p>
              <p>CGPA: 7.9</p>
            </div>
            <div className="resume-item">
              <h4>Computer Science</h4>
              <h5>2021 - 2022</h5>
              <p><em>Sri Vani Matric. HR. SEC. School</em></p>
              <p>Score: 86.6% (Top Scorer)</p>
            </div>

            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <ul>
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Backend Intern</h4>
              <h5>Jan 2025 - Jun 2025</h5>
              <p><em>WAY2SKILLS, Remote</em></p>
              <ul>
                <li>Engineered low-latency, async FastAPI services with precise attention to detail, well-structured API architecture, and clean RESTful design.</li>
                <li>Built scalable backend modules with strong testability, optimized MongoDB interactions, and refined data flows.</li>
                <li>Implemented JWT-based authentication to secure API access and enforce controlled identity flows.</li>
                <li>Participated across all product lifecycle stages—design, implementation, testing, optimization, and CI/CD-driven deployment.</li>
                <li>Collaborated with frontend teams and contributed to architectural decisions involving API versioning and seamless backend–frontend integration.</li>
                <li>Enhanced backend reliability through thoughtful data modeling, improved query performance, and observability-focused design.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer Intern</h4>
              <h5>July 2023</h5>
              <p><em>WEBSINO TECHNOLOGY, Remote</em></p>
              <ul>
                <li>Gained hands-on experience in front-end technologies, including HTML, CSS, and JavaScript.</li>
                <li>Developed projects using Git, GitHub, and version control systems.</li>
              </ul>
            </div>

            <h3 className="resume-title">Achievements</h3>
            <div className="resume-item">
              <ul>
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">Coding Profiles</h3>
            <div className="resume-item">
              <div className="coding-profiles">
                <div className="profile-link mb-3">
                  <strong>LeetCode:</strong> <a href="https://leetcode.com/u/sachinn2413" target="_blank" rel="noopener noreferrer">leetcode.com/u/sachinn2413</a>
                </div>
                <div className="profile-link mb-3">
                  <strong>GeeksforGeeks:</strong> <a href="https://geeksforgeeks.org/user/sachin9x4a" target="_blank" rel="noopener noreferrer">geeksforgeeks.org/user/sachin9x4a</a>
                </div>
                <div className="profile-link mb-3">
                  <strong>GitHub:</strong> <a href="https://github.com/Sachinn-p" target="_blank" rel="noopener noreferrer">github.com/Sachinn-p</a>
                </div>
                <div className="profile-link mb-3">
                  <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sachinn-p" target="_blank" rel="noopener noreferrer">linkedin.com/in/sachinn-p</a>
                </div>
                <div className="profile-link">
                  <strong>Medium Blog:</strong> <a href="https://medium.com/@sachinn2413" target="_blank" rel="noopener noreferrer">medium.com/@sachinn2413</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
