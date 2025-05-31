import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <a 
          href="#" 
          id="scroll-top" 
          className="scroll-top d-flex align-items-center justify-content-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
