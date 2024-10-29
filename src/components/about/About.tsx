import React from 'react';
import './styles/About.css';
import info from '../../data/user';
import { Icon } from '@fluentui/react';

const About: React.FC = () => {
  return (
    <section id="about" className='about'>
      <div className="content-wrapper-about" data-aos="fade-up">
        <h1 data-aos="fade-up">{info.about.title}</h1>
        <p className='about-description'>{info.about.description}</p>
        <div className="about-columns" data-aos="fade-right">
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='Education' />
              <p><span>Degree:</span><br/> {info.about.degree}</p>
            </div>
            <div className="about-item">
              <Icon iconName='Location' />
              <p><span>Location:</span><br/> {info.about.location}</p>
            </div>
          </div>
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='ReadingMode' />
              <p><span>School:</span><br/> {info.about.school}</p>
            </div>
            <a href="mailto:philip@des-design.com">
              <div className="about-item">
                <Icon iconName='Mail' />
                <p><span>Email:</span><br/> {info.about.email}</p>
              </div>
            </a>
          </div>
          <div className="about-column">
            <div className="about-item">
              <Icon iconName='Calendar' />
              <p><span>Age:</span><br/> {info.about.age}</p>
            </div>
            <div className="about-item">
              <Icon iconName='Game' />
              <p><span>Hobbies:</span><br/> {info.about.interests}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
