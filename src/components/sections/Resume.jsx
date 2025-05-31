import React from 'react';

const Resume = () => {
  const certifications = [
    'POSTMAN - API Fundamentals Student Expert',
    'Guvi - Python Zero to Hero',
    'Guvi - Machine Learning 101',
    'MongoDB University',
    'Kaggle - Pandas',
    'Kaggle - Intro to Deep Learning',
    'Websino Technology Internship'
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
              <h4>Software Engineer Intern</h4>
              <h5>Jan 2025 - Present</h5>
              <p><em>WAY2SKILLS, Remote</em></p>
              <ul>
                <li>Working as a software engineer, focusing on developing real-world applications.</li>
                <li>Engaging in solving practical problems while expanding knowledge across various domain fields.</li>
                <li>Primarily enhancing skills in backend engineering.</li>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
