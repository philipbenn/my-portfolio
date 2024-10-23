import React from 'react';
import info from '../../data/user';
import './styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1>{info.projects.title}</h1>
      <p>{info.projects.description}</p>
      <div className="projects-grid">
        {info.projects.data.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-images">
              {project.images.map((image, i) => (
                <img key={i} src={image} alt={`${project.title} screenshot ${i + 1}`} />
              ))}
            </div>
            <p><strong>Skills:</strong> {project.skills.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;