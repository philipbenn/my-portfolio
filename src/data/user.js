import bildash from '../images/bildash.png';
import biltable from '../images/biltable.png';
import bioseat from '../images/bioseat.png';
import stacontact from '../images/stacontact.png';
import staindex from '../images/staindex.png';
import blombilview from '../images/blombilview.png';
import blomlogin from '../images/blomlogin.png';
import pacman from '../images/pacman-dsa.png';
import zelda from '../images/gridzelda.png';
import stockpredictor from '../images/StockPredictor.png';
import nnePending from '../images/NNE Pending Actions.png';
import nneQuickLinks from '../images/NNE QuickLinks.png';
import apoteker from '../images/Apotekerforeningen.png';
import animatedphil from '../images/animatedphil.png';

// Tech stack icons
import javascriptIcon from '../images/icons/javascript.svg';
import javaIcon from '../images/icons/java.svg';
import azureIcon from '../images/icons/azure.svg';
import bootstrapIcon from '../images/icons/bootstrap.svg';
import firebaseIcon from '../images/icons/firebase.svg';
import githubIcon from '../images/icons/github.svg';
import mysqlIcon from '../images/icons/mysql.svg';
import reactIcon from '../images/icons/react.svg';
import springIcon from '../images/icons/spring.svg';
import typescriptIcon from '../images/icons/typescript.svg';
import dockerIcon from '../images/icons/docker.svg';
import htmlIcon from '../images/icons/html.svg';
import cssIcon from '../images/icons/css.svg';
import tailwindIcon from '../images/icons/tailwind.svg';
import spfxIcon from '../images/icons/spfx.png';
import devopsIcon from '../images/icons/devops.png';

const info = {
  homepage: {
    description: `I am currently studying at Copenhagen School of Design and Technology where I am pursuing a degree in Computer Science. I have a passion for coding and love to create innovative solutions.`,
    title: "Frontend Web Developer",
  },
  socials: {
    github: "https://github.com/philipbenn",
    linkedin: "https://www.linkedin.com/in/philip-sch%C3%B8nning-0970041b7/",
    email: "mailto:philip@des-design.com",
  },
  projects: {
    data: [
      {
        title: 'Bil Abonnement',
        description: 'Bil Abonnement, another project from our 2nd semester, was centered around subscription-based car services.',
        link: 'https://github.com/philipbenn/BilAbonnement',
        images: [bildash, biltable],
        skills: ['Java', 'Spring Boot', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Kino XP',
        description: 'Kino XP was a cinema project undertaken during our 3rd semester, creating a platform for managing cinema operations.',
        link: 'https://github.com/Scrumbledore-s-Army/Kino-Project-Frontend-app',
        images: [bioseat],
        skills: ['Java', 'JavaScript', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Scandinavian Training Academy',
        description: 'Scandinavian Training Academy project, involved implementing a comprehensive training platform for a real customer.',
        link: 'https://github.com/Scrumbledore-s-Army/STA-Project-Backend-Web',
        images: [stacontact, staindex],
        skills: ['Java', 'Spring Boot', 'JavaScript', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
      },
      {
        title: 'Blom Biler',
        description: 'Blom Biler focused on car dealership management systems, enhancing customer experience within the automotive industry.',
        link: 'https://github.com/philipbenn/BlomBiler',
        images: [blombilview, blomlogin],
        skills: ['Java', 'Spring Boot', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Pacman',
        description: 'Pacman was my exam project for a datastructures and algorithms course, involving implementation of pathfinding algorithms.',
        link: 'https://github.com/philipbenn/Pacman',
        images: [pacman],
        skills: ['JavaScript', 'HTML', 'CSS'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        deployLink: "https://philipbenn.github.io/Pacman"
      },
      {
        title: 'Zelda',
        description: 'Zelda, a 2D grid-based game project from my datastructures and algorithms course.',
        link: 'https://github.com/philipbenn/GridZelda',
        images: [zelda],
        skills: ['JavaScript', 'HTML', 'CSS'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        deployLink: "https://philipbenn.github.io/GridZelda/"
      },
      {
        title: 'Stock Predictor',
        description: 'Stock Predictor aimed to predict the S&P 500 index based on historical data.',
        link: 'https://github.com/philipbenn/StockPredictor',
        images: [stockpredictor],
        skills: ['Python', 'Machine Learning', 'Pandas', 'Numpy'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
      },
      {
        title: 'Novo Nordisk Engineering Pending Actions',
        description: 'Novo Nordisk Engineering Pending Actions was a project for Novo Nordisk, involving a SharePoint Framework solution.',
        link: 'https://github.com/philipbenn',
        images: [nnePending],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      },
      {
        title: 'Novo Nordisk Engineering Quick Links',
        description: 'Novo Nordisk Engineering Quick Links was a project for Novo Nordisk, involving a SharePoint Framework solution.',
        link: 'https://github.com/philipbenn',
        images: [nneQuickLinks],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      },
      {
        title: 'Apotekerforeningen',
        description: 'Apotekerforeningen was a project for the Danish Pharmacy Association, involving a SharePoint Framework solution.',
        link: 'https://github.com/philipbenn',
        images: [apoteker],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      }
    ],
    title: 'Projects',
    description: 'Here are some of my projects:',
  },
  about: {
    title: 'About Me',
    description: `I'm a computer science student starting off my fifth semester, and I'm really into web development.
          I focus on frontend and UI/UX, and I love creating smooth, user-friendly experiences with my designs.
          Through my projects, I'm trying to develop an better understanding of modern frontend technologies like React,
          TypeScript, and CSS frameworks.`,

    location: 'Copenhagen',
    email: 'philip@des-design.com',
    school: 'Copenhagen School of Design and Technology',
    degree: 'Computer Science',
    age: '23',
    interests: 'Video games & Fitness',
    animatedphilsrc: animatedphil
  },
  techstack: {
    title: 'Tech Stack',
    description: 'Here are some of the technologies I have worked with:',
    skills: [
      {
        name: 'JavaScript',
        imgSrc: javascriptIcon
      },
      {
        name: 'Java',
        imgSrc: javaIcon
      },
      {
        name: 'Azure',
        imgSrc: azureIcon
      },
      {
        name: 'Bootstrap',
        imgSrc: bootstrapIcon
      },
      {
        name: 'Firebase',
        imgSrc: firebaseIcon
      },
      {
        name: 'Github',
        imgSrc: githubIcon
      },
      {
        name: 'MySQL',
        imgSrc: mysqlIcon
      },
      {
        name: 'React',
        imgSrc: reactIcon
      },
      {
        name: 'Spring',
        imgSrc: springIcon
      },
      {
        name: 'TypeScript',
        imgSrc: typescriptIcon
      },
      {
        name: 'Docker',
        imgSrc: dockerIcon
      },
      {
        name: 'HTML',
        imgSrc: htmlIcon
      },
      {
        name: 'CSS',
        imgSrc: cssIcon
      },
      {
        name: 'Tailwind',
        imgSrc: tailwindIcon
      },
      {
        name: 'SPFx',
        imgSrc: spfxIcon
      },
      {
        name: 'DevOps',
        imgSrc: devopsIcon
      }
    ],
  }
};

export default info;
