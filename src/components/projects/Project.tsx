import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './styles/Project.css';

interface ProjectProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  linkText: string;
  images?: string[];
  deployLink?: string;
  onOpenModal: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, description, icon, link, onOpenModal }) => {
  return (
    <div className="project">
      <div className="project-container" onClick={onOpenModal}>
        <div className="project-logo">
          <img src={icon} alt={`${title} logo`} />
        </div>
        <div className="project-title">
          {title}
          <span className="project-hover-text">Click to see the project!</span>
        </div>
        <div className="project-description">{description}</div>
        <div className="project-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="project-link-icon" />
            <span className="project-link-text">View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
