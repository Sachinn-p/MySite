import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faEnvelope, 
  faPhone, 
  faPaperPlane,
  faSpinner 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

  const contactInfo = [
    {
      icon: faLocationDot,
      title: 'Location',
      content: 'Namakkal, Tamil Nadu',
      link: null
    },
    {
      icon: faPhone,
      title: 'Phone',
      content: '+91 6381192193',
      link: 'tel:+916381192193'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'sachinn2413@gmail.com',
      link: 'mailto:sachinn2413@gmail.com'
    },
    {
      icon: faGithub,
      title: 'GitHub',
      content: 'github.com/Sachinn-p',
      link: 'https://github.com/Sachinn-p'
    },
    {
      icon: faLinkedin,
      title: 'LinkedIn',
      content: 'linkedin.com/in/sachinn-p',
      link: 'https://linkedin.com/in/sachinn-p'
    },
    {
      icon: faTelegram,
      title: 'Telegram',
      content: 't.me/Sachinn_P',
      link: 'https://t.me/Sachinn_P'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's Connect</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="contact-info" data-aos="fade-up">
              <h3>Get in Touch</h3>
              <p>Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              
              <div className="info-container">
                {contactInfo.map((info, index) => (
                  <div className="info-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="icon-box">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer">
                          {info.content}
                        </a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {state.succeeded ? (
              <div className="alert alert-success" data-aos="fade-up" data-aos-delay="300">
                <h4>Thank you for reaching out!</h4>
                <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
                <div className="row gy-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      placeholder="Message"
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="submit-btn" 
                      disabled={state.submitting}
                    >
                      {state.submitting ? (
                        <><FontAwesomeIcon icon={faSpinner} spin /> Sending...</>
                      ) : (
                        <><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>
                      )}
                    </button>
                  </div>
                </div>
                
                {state.errors && state.errors.length > 0 && (
                  <div className="alert alert-danger mt-3">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
