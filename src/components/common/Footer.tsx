import * as React from 'react';
import './styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="page-content">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;