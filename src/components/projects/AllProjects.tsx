import React, { useState } from 'react';
import './styles/AllProjects.css';
import Project from './Project';
import info from '../../data/user';
import { IconButton, Modal } from '@fluentui/react';

const AllProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    if (window.innerWidth >= 1024) {
      setSelectedProject({ ...project, currentImageIndex: 0 });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handlePreviousImage = () => {
    setSelectedProject((prev: any) => ({
      ...prev,
      currentImageIndex:
        (prev.currentImageIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleNextImage = () => {
    setSelectedProject((prev: any) => ({
      ...prev,
      currentImageIndex:
        (prev.currentImageIndex + 1) % prev.images.length,
    }));
  };

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      {info.projects.data.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <div data-aos="fade-up">
            <Project
              icon={project.icon}
              title={project.title}
              description={project.description}
              linkText="View Project"
              link={project.link}
              images={project.images}
              deployLink={project.deployLink}
              onOpenModal={() => openModal(project)}
            />
          </div>
        </div>
      ))}

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onDismiss={closeModal}
          isBlocking={false}
          containerClassName="project-modal-container"
        >
          <div className="project-modal-header">
            <h2>{selectedProject.title}</h2>
            <IconButton
              iconProps={{ iconName: 'Cancel' }}
              ariaLabel="Close modal"
              onClick={closeModal}
            />
          </div>
          <div className="project-modal-content">
            {selectedProject.deployLink ? (
              <iframe
                src={selectedProject.deployLink}
                title={selectedProject.title}
                className="project-modal-iframe"
              />
            ) : (
              <div className="project-modal-slideshow">
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <>
                    {selectedProject.images.length > 1 && (
                      <IconButton
                        iconProps={{ iconName: 'ChevronLeft' }}
                        onClick={handlePreviousImage}
                        ariaLabel="Previous image"
                      />
                    )}
                    <img
                      src={selectedProject.images[selectedProject.currentImageIndex || 0]}
                      alt={`Slide ${selectedProject.currentImageIndex + 1}`}
                      className="project-modal-image"
                    />
                    {selectedProject.images.length > 1 && (
                      <IconButton
                        iconProps={{ iconName: 'ChevronRight' }}
                        onClick={handleNextImage}
                        ariaLabel="Next image"
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default AllProjects;
