import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, ChevronRight, Code2, GraduationCap, BookOpen } from 'lucide-react';
import pfimg from "../assets/pfimg.png"; 
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const skills = [
    { 
      name: 'Python', 
      progress: '90%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'HTML', 
      progress: '85%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS', 
      progress: '80%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript', 
      progress: '75%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'FastAPI', 
      progress: '70%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
    },
    { 
      name: 'TensorFlow', 
      progress: '65%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    { 
      name: 'Scikit-Learn', 
      progress: '75%',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
    },
    { 
      name: 'MySQL', 
      progress: '80%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'MongoDB', 
      progress: '70%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'Git', 
      progress: '85%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'C', 
      progress: '75%',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80",
      title: "Micro Climate LSTM Prediction",
      link: "https://github.com/Sachinn-p/Micro_Climate_LSTM_Prediction"
    },
    {
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      title: "Weather Forecasting Program",
      link: "https://github.com/Sachinn-p/Weather-forecasting-program-in-python/tree/main"
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      title: "Phishing Website Detection",
      link: "https://github.com/Sachinn-p/Pishing_Website_Detection_by_url"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-slate-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Sachinn P</h1>
          <nav className="hidden md:flex space-x-8">
              <a href="#myself" className="hover:text-blue-500 transition-colors">Myself</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#platforms" className="hover:text-blue-500 transition-colors">Platforms</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Myself Section */}
        <section id="myself" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Hello, I'm Sachinn.</h2>

              <ul className="space-y-4">
                <li className="flex items-start p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <GraduationCap className="mr-3 mt-1 text-blue-500" size={20} />
                  <p>Currently pursuing a Bachelor's degree in Computer Science and Engineering at <a href="http://www.kongunadu.ac.in/" className="text-blue-500 hover:underline">Kongunadu College of Engineering and Technology</a>.</p>
                </li>
                <li className="flex items-start p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <Code2 className="mr-3 mt-1 text-blue-500" size={20} />
                  <p>As a Software Engineer based in India, I specialize in developing innovative solutions and technologies.</p>
                </li>
                <li className="flex items-start p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <BookOpen className="mr-3 mt-1 text-blue-500" size={20} />
                  <p>Currently deepening my knowledge in backend development, securing and developing websites through cybersecurity and AI & ML.</p>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-[370px] h-[370px] rounded-full p-1 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img 
                    src={pfimg} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full shadow-xl transition-transform duration-500 transform hover:scale-105 grayscale-[5%] brightness-105 contrast-110"
                  />
                </div>
              </div>
            </div>





          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className={`p-6 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} transform hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="relative w-full h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover:from-purple-500 group-hover:to-blue-500"
                    style={{ width: skill.progress }}
                  ></div>
                </div>
                <span className="block mt-2 text-sm text-right">{skill.progress}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} transform hover:scale-[1.02] transition-all duration-300`}>
              <h3 className="text-xl font-semibold mb-4">Train@Hackathon</h3>
              <p className="mb-4">
                Our college organized a hackathon on a moving train from Trichy to Chennai, which gained significant attention and was covered by many news channels. The event was attended by higher officials and provided me with valuable learning experiences.
              </p>
              <a 
                href="https://youtu.be/nGlMSo3En4s?si=9Gm4N_c03VKFEFbR" 
                className="text-blue-500 hover:text-blue-400 flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} transform hover:scale-[1.02] transition-all duration-300`}>
              <h3 className="text-xl font-semibold mb-4">Websino Technology</h3>
              <p className="mb-4">
                The internship has equipped me with essential skills and knowledge that will greatly benefit my future projects. The hands-on experience gained will enhance my ability to tackle new challenges and apply what I've learned effectively.
              </p>
              <p>Technologies learned: HTML, CSS, JS, Git, GitHub</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</h2>
          <div className="relative group">
            <div className="overflow-hidden rounded-xl">
              <div className="relative">
                <img 
                  src={projects[currentSlide].image} 
                  alt={projects[currentSlide].title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-semibold text-white mb-2">{projects[currentSlide].title}</h3>
                  <a 
                    href={projects[currentSlide].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center group"
                  >
                    View Project <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Platforms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href="https://www.geeksforgeeks.org/user/sachin9x4a/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-[1.02]`}
            >
              <img 
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" 
                alt="GeeksforGeeks" 
                className="w-8 h-8 mr-4"
              />
              <span className="font-semibold">GeeksforGeeks</span>
            </a>
            <a 
              href="https://leetcode.com/u/sachinn2413/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-[1.02]`}
            >
              <img 
                src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" 
                alt="LeetCode" 
                className="w-8 h-8 mr-4"
              />
              <span className="font-semibold">LeetCode</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Contact Me</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a 
              href="mailto:sachinn2413@gmail.com"
              className={`flex items-center justify-center p-4 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-[1.02] group`}
            >
              <Mail size={20} className="mr-2 group-hover:text-blue-500 transition-colors" />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sachinn-p/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-4 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-[1.02] group`}
            >
              <Linkedin size={20} className="mr-2 group-hover:text-blue-500 transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Sachinn-p"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-4 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-[1.02] group`}
            >
              <Github size={20} className="mr-2 group-hover:text-blue-500 transition-colors" />
              <span>GitHub</span>
            </a>
            
          </div>
        </section>
      </main>

      <footer className={`py-8 text-center ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
        <p>&copy; 2025, My Portfolio. Keep Learning...!</p>
      </footer>
    </div>
  );
}

export default App;