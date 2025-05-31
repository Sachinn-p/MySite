import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  useEffect(() => {
    new Swiper('.testimonials-slider', {
      modules: [Navigation, Pagination],
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }, []);

  const testimonials = [
    {
      image: '/src/assets/img/testimonials/testimonials-1.jpg',
      name: 'Client 1',
      position: 'CEO & Founder',
      text: 'Sachin is a fantastic developer!'
    },
    {
      image: '/src/assets/img/testimonials/testimonials-2.jpg',
      name: 'Client 2',
      position: 'Designer',
      text: 'Great to work with and very professional.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What people say</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonials-slider swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide" key={index}>
                <div className="testimonial-item">
                  <img src={testimonial.image} className="testimonial-img" alt="" />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
