import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faTelegram
} from '@fortawesome/free-brands-svg-icons';
import {
  faHouse, faUser, faFile, faImage, faServer, faEnvelope, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') setIsNavOpen(false);
    };

    const handleClickOutside = (e) => {
      const header = document.getElementById('header');
      const toggle = document.querySelector('.header-toggle');
      if (isNavOpen && header && !header.contains(e.target) && !toggle.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Hamburger Toggle Button */}
      <FontAwesomeIcon
        icon={faBars}
        className="header-toggle"
        onClick={toggleNav}
        aria-label="Open menu"
      />

      {isNavOpen && (
        <header id="header" className="header mobile-nav-active dark-background">
          {/* Close Button */}
          <FontAwesomeIcon
            icon={faXmark}
            className="header-toggle-close"
            onClick={toggleNav}
            aria-label="Close menu"
          />

          {/* Profile Image */}
          <div className="profile-img">
            <img src="/src/assets/img/my-profile-img.jpeg" alt="Profile" className="profile-pic" />
          </div>

          {/* Site Name */}
          <Link to="/" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Sachinn P</h1>
          </Link>

          {/* Social Links */}
          <div className="social-links text-center">
            <a href="https://github.com/Sachinn-p" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/sachinn-p" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://t.me/Sachinn_P" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://geeksforgeeks.org/user/sachin9x4a" target="_blank" rel="noopener noreferrer" className="gfg">GFG</a>
            <a href="https://leetcode.com/u/sachinn2413" target="_blank" rel="noopener noreferrer" className="leetcode">LC</a>
          </div>

          {/* Navigation Menu */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" onClick={handleNavClick}><FontAwesomeIcon icon={faHouse} className="navicon" />Home</a></li>
              <li><a href="#about" onClick={handleNavClick}><FontAwesomeIcon icon={faUser} className="navicon" />About</a></li>
              <li><a href="#resume" onClick={handleNavClick}><FontAwesomeIcon icon={faFile} className="navicon" />Resume</a></li>
              <li><a href="#portfolio" onClick={handleNavClick}><FontAwesomeIcon icon={faImage} className="navicon" />Portfolio</a></li>
              <li><a href="#services" onClick={handleNavClick}><FontAwesomeIcon icon={faServer} className="navicon" />Services</a></li>
              <li><a href="#contact" onClick={handleNavClick}><FontAwesomeIcon icon={faEnvelope} className="navicon" />Contact</a></li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
