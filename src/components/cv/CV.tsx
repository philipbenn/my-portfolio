import React from 'react';
import './styles/CV.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import fellowmind from '../../images/fellowmind.jpg';
import jagger from '../../images/jagger.jpg';

const CV: React.FC = () => {
  return (
    <section id='cv' className='cv'>
      <div className='content-wrapper-cv' data-aos="fade-left">
        <div data-aos="fade-up" className="cv-header">
          <FontAwesomeIcon icon={faBriefcase} className="cv-icon" />
          <h2 className="cv-title">Work Experience</h2>
        </div>

        <div className="cv-body">
          <div className="work">
            <img
              src={fellowmind}
              alt="Fellowmind"
              className="cv-image"
            />
            <div className="cv-details">
              <div className="cv-job-title">Fellowmind</div>
              <div className="cv-subtitle">Frontend Developer Intern</div>
              <div className="cv-duration">26/08-2024 - 01/11-2024</div>
            </div>
          </div>

          <div className="work">
            <img
              src={jagger}
              alt="Jagger"
              className="cv-image"
            />
            <div className="cv-details">
              <div className="cv-job-title">Jagger</div>
              <div className="cv-subtitle">Buzzer</div>
              <div className="cv-duration">01/09-2022 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;