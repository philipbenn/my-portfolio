const info = {
  homepage: {
    description: `I am currently studying at Copenhagen School of Design and Technology where I am pursuing a degree in Computer Science. I have a passion for coding and love to create innovative solutions.`,
    title: "Frontend Web Developer",
    imageSrc: "images/fellowphi.jpg"
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
        images: ['images/bildash.png', 'images/biltable.png'],
        skills: ['Java', 'Spring Boot', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Kino XP',
        description: 'Kino XP was a cinema project undertaken during our 3rd semester, creating a platform for managing cinema operations.',
        link: 'https://github.com/Scrumbledore-s-Army/Kino-Project-Frontend-app',
        images: ['images/bioseat.png', 'images/biomovies.png'],
        skills: ['Java', 'JavaScript', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Scandinavian Training Academy',
        description: 'Scandinavian Training Academy project, involved implementing a comprehensive training platform for a real customer.',
        link: 'https://github.com/Scrumbledore-s-Army/STA-Project-Backend-Web',
        images: ['images/stacontact.png', 'images/staindex.png', 'images/statype.png'],
        skills: ['Java', 'Spring Boot', 'JavaScript', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
      },
      {
        title: 'Blom Biler',
        description: 'Blom Biler focused on car dealership management systems, enhancing customer experience within the automotive industry.',
        link: 'https://github.com/philipbenn/BlomBiler',
        images: ['images/blombilview.png', 'images/blomlogin.png'],
        skills: ['Java', 'Spring Boot', 'MySQL'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
      },
      {
        title: 'Pacman',
        description: 'Pacman was my exam project for a datastructures and algorithms course, involving implementation of pathfinding algorithms.',
        link: 'https://github.com/philipbenn/Pacman',
        images: ['images/pacman-dsa.png'],
        skills: ['JavaScript', 'HTML', 'CSS'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        deployLink: "https://philipbenn.github.io/Pacman"
      },
      {
        title: 'Zelda',
        description: 'Zelda, a 2D grid-based game project from my datastructures and algorithms course.',
        link: 'https://github.com/philipbenn/GridZelda',
        images: ['images/gridzelda.png'],
        skills: ['JavaScript', 'HTML', 'CSS'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        deployLink: "https://philipbenn.github.io/GridZelda/"
      },
      {
        title: 'Stock Predictor',
        description: 'Stock Predictor aimed to predict the S&P 500 index based on historical data.',
        link: 'https://github.com/philipbenn/StockPredictor',
        images: ['images/StockPredictor.png'],
        skills: ['Python', 'Machine Learning', 'Pandas', 'Numpy'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
      },
      {
        title: 'Fellowmind Advent Calender',
        description: 'The calender was a webpart i made for Fellowmind. They wanted a advent calender for their employees.',
        images: ['images/adventexpand.png', 'images/adventcollapsed.png'],
        skills: ['TypeScript', 'React', 'SPFx'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
        link: "https://github.com/philipbenn/Adventskalender"
      },
      {
        title: 'Novo Nordisk Engineering Pending Actions',
        description: 'Novo Nordisk Engineering Pending Actions was a webpart done for Novo Nordisk. The source code is not available due to company policy.',
        images: ['images/NNE Pending Actions.png'],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      },
      {
        title: 'Novo Nordisk Engineering Quick Links',
        description: 'Novo Nordisk Engineering Quick Links was a project for Novo Nordisk. The source code is not available due to company policy.',
        images: ['images/NNE QuickLinks.png'],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      },
      {
        title: 'Apotekerforeningen',
        description: 'Apotekerforeningen was a project for the Danish Pharmacy Association. The source code is not available due to company policy.',
        images: ['images/Apotekerforeningen.png'],
        skills: ['TypeScript', 'React', 'SPFx', 'Azure DevOps'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
      },
      {
        title: 'WSP Communication System',
        description: 'WSP Communication System was a project for WSP. The source code is not available due to company policy.',
        images: ['images/wspemail.png', 'images/wspopret.png', 'images/wsptabel.png'],
        skills: ['C#', '.NET'],
        icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.png"
      }
   
    ],
    title: 'Projects',
    description: 'Here are some of my projects:',
  },
  about: {
    title: 'About Me',
    description: `I'm a computer science student starting off my fifth semester, and I'm really into web development.
          I focus on frontend and UI/UX, and I love creating smooth, user-friendly experiences with my designs.
          Through my projects, I'm trying to develop a better understanding of modern frontend technologies like React,
          TypeScript, and CSS frameworks.`,
    location: 'Copenhagen',
    email: 'philip@des-design.com',
    school: 'Copenhagen School of Design and Technology',
    degree: 'Computer Science',
    age: '23',
    interests: 'Fitness',
    animatedphilsrc: 'images/animatedphil.png'
  },
  techstack: {
    title: 'Tech Stack',
    description: 'Here are some of the technologies I have worked with:',
    skills: [
      {
        name: 'JavaScript',
        imgSrc: 'images/icons/javascript.svg'
      },
      {
        name: 'Java',
        imgSrc: 'images/icons/java.svg'
      },
      {
        name: 'Azure',
        imgSrc: 'images/icons/azure.svg'
      },
      {
        name: 'Bootstrap',
        imgSrc: 'images/icons/bootstrap.svg'
      },
      {
        name: 'Firebase',
        imgSrc: 'images/icons/firebase.svg'
      },
      {
        name: 'Github',
        imgSrc: 'images/icons/github.svg'
      },
      {
        name: 'MySQL',
        imgSrc: 'images/icons/mysql.svg'
      },
      {
        name: 'React',
        imgSrc: 'images/icons/react.svg'
      },
      {
        name: 'Spring',
        imgSrc: 'images/icons/spring.svg'
      },
      {
        name: 'TypeScript',
        imgSrc: 'images/icons/typescript.svg'
      },
      {
        name: 'Docker',
        imgSrc: 'images/icons/docker.svg'
      },
      {
        name: 'HTML',
        imgSrc: 'images/icons/html.svg'
      },
      {
        name: 'CSS',
        imgSrc: 'images/icons/css.svg'
      },
      {
        name: 'Tailwind',
        imgSrc: 'images/icons/tailwind.svg'
      },
      {
        name: 'SPFx',
        imgSrc: 'images/icons/spfx.png'
      },
      {
        name: 'DevOps',
        imgSrc: 'images/icons/devops.png'
      },
      {
        name: 'C#',
        imgSrc: 'images/icons/csharp.png'
      },
      {
        name: '.NET',
        imgSrc: 'images/icons/dotnet.png'
      }
    ],
  },
  contact: {
    title: 'Contact',
    description: 'Feel free to reach out to me with any questions or opportunities!',
  },
  cv: {
    title: 'Work Experience',
    work: [
      {
        title: 'Fellowmind',
        subtitle: 'Frontend Developer Intern',
        duration: '26/08-2024 - 01/11-2024',
        image: 'images/fellowmind.jpg'
      },
      {
        title: 'Fellowmind',
        subtitle: 'Student Assistant',
        duration: '1/12-2024 - Present',
        image: 'images/fellowmind.jpg'
      },
      {
        title: 'Jagger',
        subtitle: 'Buzzer',
        duration: '01/09-2022 - Present',
        image: 'images/jagger.jpg'
      }
    ],
  },
};

export default info;
