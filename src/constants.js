// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import novaNectarLogo from './assets/company_logo/Novanectar_logo.jfif';

// Education Section Logo's
import srhulogo from './assets/education_logo/srhu_logo.png';
import oimtlogo from './assets/education_logo/oimt_logo.png';

// Project Section Logo's
import jobhuntLogo from './assets/work_logo/jobhunt.png';
import ecommerceLogo from './assets/work_logo/ecommercelogo.png';
import chatApplicationLogo from './assets/work_logo/chatApplicationlogo.png';
import twitterCloneLogo from './assets/work_logo/twitterClonelogo.png';
import movieAppLogo from './assets/work_logo/movieapplogo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: novaNectarLogo, // replace with actual logo import
    role: "MERN Stack Developer Intern",
    company: "NovaNectar Services Pvt. Ltd.",
    date: "September 2025 - March 2026",
    // desc: "Worked as a MERN Stack Developer Intern, contributing to the development of full-stack web applications using MongoDB, Express.js, React, and Node.js. Built responsive frontend interfaces, developed RESTful APIs, integrated backend services, and collaborated with the team to deliver scalable and user-focused solutions.",
    desc: "Contributed to the development of full-stack web applications using the MERN stack. Designed responsive UI components, built RESTful APIs, managed database operations with MongoDB, and assisted in deploying scalable solutions. Gained hands-on experience in writing clean, maintainable code within an agile development environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "Redux"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: srhulogo,
    school: "Swami Rama Himalayan University, Dehradun",
    date: "Sept 2022 - July 2024",
    grade: "8.4 CGPA",
    desc: "Focused on core computer science subjects including Data Structures, Algorithms, DBMS, Web Development, and Software Engineering. Strengthened practical development skills through workshops, technical events, and hands-on academic projects.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: oimtlogo,
    school: "Omkarananda Institute of Management and Technology, Rishikesh",
    date: "Sept 2019 - July 2022",
    grade: "6.7 CGPA",
    desc: "Built a strong foundation in programming and computer science fundamentals including C, Data Structures, DBMS, and Web Development. Participated in coding competitions and academic projects to enhance problem-solving and practical skills.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "JobHunt",
    description:
      "A React.js-based job search application that allows users to search for jobs, view detailed job descriptions, and apply directly through the platform. The app integrates with external APIs to provide real-time job listings and offers a user-friendly interface for job seekers.",
    image: jobhuntLogo,
    tags: ["React JS", "API Integration", "Job Search", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Akhilkhatri10/JobHunt",
    webapp: "https://job-hunt-frontend-five.vercel.app/",
  },
  {
    id: 1,
    title: "E-Commerce Application",
    description:
      "A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The app features user authentication, product browsing, shopping cart functionality, and a secure checkout process. It provides a seamless shopping experience for users while allowing administrators to manage products and orders efficiently.",
    image: ecommerceLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "E-commerce"],
    github: "https://github.com/Akhilkhatri10/mars-cosmetics-frontend",
    webapp: "https://mars-cosmetics-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Chat Application",
    description:
      "A real-time chat application developed using the MERN stack and Socket.io. The app allows users to create accounts, and communicate with others in real-time. It features a responsive design, user authentication, and efficient message handling to provide a seamless chatting experience.",
    image: chatApplicationLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "socket.io", "Real-time Chat"],
    github: "https://github.com/Akhilkhatri10/chat-application-frontend",
    webapp: "https://chat-application-frontend-jade.vercel.app/",
  },
  {
    id: 3,
    title: "Social Media clone Application",
    description:
      "A twitter clone application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The app features user authentication, profile management, and a news feed for sharing updates and content. It provides a seamless social networking experience for users while allowing administrators to manage users and content efficiently.",
    image: twitterCloneLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Social Media"],
    github: "https://github.com/Akhilkhatri10/twitter-clone-frontend",
    webapp: "https://twitter-clone-frontend-iota-brown.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Application",
    description:
      "A movie application built with React.js that allows users to browse and search for movies using the TMDB API. The app features a responsive design, user authentication, and efficient data handling to provide a seamless movie browsing experience.",
    image: movieAppLogo,
    tags: ["React JS", "TMDB API", "Tailwind CSS", "appwrite", "Movie App"],
    github: "https://github.com/Akhilkhatri10/Movie-App",
    webapp: "https://movie-app-opal-phi.vercel.app/",
  },
];  