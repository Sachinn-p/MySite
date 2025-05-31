import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Software Engineer', 'Backend Developer', 'Cybersecurity Enthusiast'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/src/assets/img/hero-bg.jpeg" alt="" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h1>Sachinn P</h1>
        <p>I'm <span ref={typedRef}></span></p>
        
      </div>
    </section>
  );
};

export default Hero;