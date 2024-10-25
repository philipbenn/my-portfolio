import React from 'react';
import info from '../../data/user';
import './styles/TechStack.css';

const TechStack: React.FC = () => {
  const duplicatedSkills = [...info.techstack.skills, ...info.techstack.skills];

  return (
    <section id="techstack" className="techstack">
      <div className="content-wrapper-techstack">
        <h1>{info.techstack.title}</h1>
        <p className='techstack-description'>{info.techstack.description}</p>
        <div className="tech-stack-container">
          <div className="tech-stack-wrapper">
            {duplicatedSkills.map((tech, index) => (
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
