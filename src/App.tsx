import React from 'react';
import Navbar from './components/common/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/common/Footer';
import Home from './components/homepage/Home';
import Projects from './components/projects/Projects';
import CV from './components/cv/CV';
import About from './components/about/About';
import TechStack from './components/techstack/TechStack';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
  const items = ['Home', 'About', 'Projects', 'Contact'];
  return (
    <div className="App">
      <div className='page-content'>
        <Navbar navItems={items} />
        <Home />
        <div className='cv-about-container'>
          <About />
          <CV />
        </div>
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;