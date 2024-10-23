import React from 'react';
import './styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import info from '../../data/user';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className='contact'>
      <h1>Contact</h1>
      <p id='contact-text'>Feel free to reach out to me with any questions or opportunities!</p>
      <div className='contact-container'>
        <form id='contactForm' action='https://formspree.io/f/mrgwvqag' method='POST'>
          <div className='form-header'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' required />
          </div>

          <div className='form-header'>
            <label htmlFor='description'>Description</label>
            <textarea id='description' name='description' rows={5} required></textarea>
          </div>

          <div className="submit-button-container">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>

      <div className='buttom-contact-container'>
        <h2>Other ways to reach me:</h2>
        <div className="social-links">
          <a href={info.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={info.socials.email} aria-label="Email">
            <FontAwesomeIcon icon={faMailBulk} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;