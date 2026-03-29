import './styles/app-shell.css';
import './styles/effects.css';
import './styles/layout.css';
import './styles/sections.css';
import './styles/responsive.css';
import BackgroundEffects from './components/effects/BackgroundEffects';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Curiosity from './components/sections/Curiosity';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Terminal from './components/sections/Terminal';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  useRevealOnScroll();

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <BackgroundEffects />
      <Header />
      <main id="main-content" className="page">
        <Hero />
        <Curiosity />
        <Skills />
        <Projects />
        <Terminal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
