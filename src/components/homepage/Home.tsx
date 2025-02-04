import React from 'react';
import './styles/Home.css';
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
          <div className="text-left">
            <h1>{info.homepage.title}</h1>
            <h4>Hi, I'm <span className='name'>Philip</span>! {info.homepage.description}</h4>
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
        </div>
        <div className="image-content">
          <div className="text-right">
            <img src={info.homepage.imageSrc} alt='Phil' className='profile-pic' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;