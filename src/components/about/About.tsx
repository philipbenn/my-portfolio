import React from 'react';
import './styles/About.css';
import info from '../../data/user';

const About: React.FC = () => {
  return (
    <section id="about" className='about'>
      <div className="content-wrapper-about">
        <h1>{info.about.title}</h1>
        <p>{info.about.description}</p>
        <h2>{info.about.skillsTitle}</h2>
        {info.about.skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              <div
                className="skill-level-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;