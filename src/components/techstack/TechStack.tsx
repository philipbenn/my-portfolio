import React from 'react';
import info from '../../data/user';
import './styles/TechStack.css';

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="techstack">
      <div className="content-wrapper-techstack">
        <h1>{info.techstack.title}</h1>
        <p>{info.techstack.description}</p>
        <div className="tech-stack-container">
          <div className="tech-stack-wrapper">
            {info.techstack.skills.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.imgSrc} alt={tech.name} className="tech-icon" />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;