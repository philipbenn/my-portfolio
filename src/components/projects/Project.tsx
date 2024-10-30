import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './styles/Project.css';

interface ProjectProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  linkText: string;
  images?: string[];
  deployLink?: string;
  onOpenModal: () => void;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  icon,
  link,
  deployLink,
  onOpenModal
}) => {

  const demoLinkText = deployLink ? 'View Demo' : 'View Images';

  return (
    <div className="project">
      <div className="project-logo">
        <img src={icon} alt={`${title} logo`} />
      </div>
      <div className="project-title">{title}</div>
      <div className="project-description">{description}</div>
      <div className="project-links">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <FontAwesomeIcon icon={faLink} className="project-link-icon" />
            <span className="project-link-text">View Project</span>
          </a>
        )}
        <div style={{ cursor: 'pointer' }} className="project-demo-link" onClick={onOpenModal}>
          <FontAwesomeIcon icon={faLink} className="project-link-icon" />
          <span className="project-link-text">{demoLinkText}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
