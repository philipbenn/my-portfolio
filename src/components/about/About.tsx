import React from 'react';
import './styles/About.css';
import info from '../../data/user';
import { Icon } from '@fluentui/react';

const About: React.FC = () => {
  return (
    <section id="about" className='about'>
      <div className="content-wrapper-about">
        <h1>{info.about.title}</h1>
        <p className='about-description'>{info.about.description}</p>
        <div className="about-columns">
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='Education' />
              <p><span>Degree:</span> {info.about.degree}</p>
            </div>
            <div className="about-item">
              <Icon iconName='Location' />
              <p><span>Location:</span> {info.about.location}</p>
            </div>
          </div>
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='ReadingMode' />
              <p><span>School:</span> {info.about.school}</p>
            </div>
            <a href="mailto:philip@des-design.com">
              <div className="about-item">
                <Icon iconName='Mail' />
                <p><span>Email:</span> {info.about.email}</p>
              </div>
            </a>
          </div>
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='Calendar' />
              <p><span>Age:</span> {info.about.age}</p>
            </div>
            <div className="about-item">
              <Icon iconName='Game' />
              <p><span>Hobbies:</span> {info.about.interests}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
