import React from 'react';
import './styles/Home.css';
import imagePath from '../../images/phil3.jpg';
import info from '../../data/user.js';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
  return (
    <section id="description" className="description">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>{info.homepage.title}</h1>
          <h4>{info.homepage.description}</h4>
          <div className="social-links">
            <a href={info.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={info.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={info.socials.email} aria-label="Email">
              <FontAwesomeIcon icon={faMailBulk} size="2x" />
            </a>
          </div>
        </div>
        <div className="image-content">
          <img src={imagePath} alt='Phil' className='profile-pic' />
        </div>
      </div>
    </section>
  );
};

export default Home;