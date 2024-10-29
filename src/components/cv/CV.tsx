import React from 'react';
import './styles/CV.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import info from '../../data/user';

const CV: React.FC = () => {
  return (
    <section id='cv' className='cv'>
      <div className='content-wrapper-cv' data-aos="fade-left">
        <div data-aos="fade-up" className="cv-header">
          <FontAwesomeIcon icon={faBriefcase} className="cv-icon" />
          <h2 className="cv-title">{info.cv.title}</h2>
        </div>

        <div className="cv-body">
          {info.cv.work.map((job, index) => (
            <div className="work" key={index}>
              <img
                src={job.image}
                alt={job.subtitle}
                className="cv-image"
              />
              <div className="cv-details">
                <div className="cv-job-title">{job.title}</div>
                <div className="cv-subtitle">{job.subtitle}</div>
                <div className="cv-duration">{job.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CV;