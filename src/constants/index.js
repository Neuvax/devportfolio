const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 4, suffix: "+", label: "Personal Projects Completed" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    name: "Company 1",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    name: "Company 2",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    name: "Company 3",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    name: "Company 4",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    name: "Company 5",
  },
];

const abilities = [
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Approaching challenges with creativity and logic to deliver effective solutions.",
  },
  {
    imgPath: "/images/teamwork.png",
    title: "Teamwork",
    desc: "Collaborating efficiently with teams to achieve shared goals and deliver success.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Consistently meeting deadlines without compromising on quality or detail.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/c.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Jorge’s personal projects reflect his innovative thinking and technical versatility, especially in web development.",
    imgPath: "/images/project1.png",
    logoPath: "/images/developer.png",
    title: "Personal Projects Developer",
    date: "2021 - Present",
    responsibilities: [
      "Designed and built interactive web applications using React and Three.js.",
      "Integrated animations and visual effects using GSAP for enhanced user engagement.",
      "Deployed projects to cloud platforms and maintained version control with Git.",
      "Continuously improved projects based on user feedback and self-assessment.",
    ],
  },
  {
    review:
      "Jorge demonstrated strong problem-solving skills and technical proficiency while leading a major academic project. His dedication to quality and continuous learning stands out.",
    imgPath: "/images/project2.png",
    logoPath: "/images/logo2.png",
    title: "Academic Project Lead",
    date: "September 2023 - May 2024",
    responsibilities: [
      "Led a team of peers in developing a full-stack web application using React, Node.js, and MongoDB.",
      "Collaborated with team members to design user interfaces and implement responsive layouts.",
      "Conducted code reviews and ensured best practices for maintainability and performance.",
      "Presented project results to faculty and industry professionals, receiving positive feedback.",
    ],
  },
  {
    review:
      "Jorge's project is an outstanding application of compiler engineering and AI, creating a practical tool that directly addresses developer productivity. The system's ability to analyze code, classify its paradigm, and suggest automated fixes before a commit is a significant innovation.",
    imgPath: "/images/team_overview.png",
    logoPath: "/images/c3ai-logo.png",
    title: "AI-Powered Pre-Commit Static Analyzer and Code Repair Agent",
    date: "February 2025 - June 2025",
    responsibilities: [
      "Developed SWE-Agent Fixer, an AI-powered tool that automatically detects and remediates coding errors in Python and Java during Git commits.",
      "Built a custom compiler front-end for deep static analysis, extracting ASTs to provide rich context for code correction.",
      "Fine-tuned a local LLM and integrated a BM25 retriever to deliver highly accurate, context-aware code fixes via a seamless pre-commit workflow.",
      "Project selected by C3.ai executives from 30+ teams for special recognition, highlighting its technical innovation and real-world impact.",
    ],
  },
];

const testimonials = [
  {
    name: "Santiago Gonzalez de Cosio",
    mentions: "@santi_gdc",
    socialLink: "https://instagram.com/santi_gdc",
    review:
      "Jorge was a reliable, proactive, and collaborative team member who consistently delivered quality work and helped drive the project forward. He showed great skills of adaptability and was always prepared to guide the team to involve new technologies which benefitted the project",
    imgPath: "/images/client1.png",
  },
  {
    name: "Jorge Madrigal",
    mentions: "@madrigal-jer",
    socialLink: "https://linkedin.com/in/madrigal-jer",
    review:
      "Jorge is one of the most intelligent people I have worked with. He has outstanding problem-solving skills and an incredible ability to manage both situations and emotions. Technically, I can confidently say that he is a great full-stack developer, especially on the backend. His 'Airbnb Clone' project is the one that impressed me the most.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Armando Terrazas",
    mentions: "@armando-terrazas-gomez",
    socialLink: "https://linkedin.com/in/armando-terrazas-gomez",
    review:
      "I had the pleasure of working closely with Jorge on our Flutter application, where he was responsible for integrating authentication and OAuth services using Firebase. He did an outstanding job implementing Google sign-in, email/password authentication, and multi-factor authentication, including secure SMS verification. Thanks to his expertise, our app now runs smoothly and securely, meeting all necessary security standards. His contributions were crucial to the success of our project.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Ingrid Gonzalez",
    mentions: "@ingrid-gonzalez",
    socialLink: "https://www.linkedin.com/in/ingrid-gonzález",
    review:
      "Jorge was an excellent collaborator during our Software Engineering degree. He was always clear when explaining, solved complex problems with ease, and was always willing to help. It was truly a pleasure to work with him.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Ana Biebrich",
    mentions: "@anabiebrich_art",
    socialLink: "https://instagram.com/anabiebrich_art",
    review:
      "Jorge is amazing, everything from helping me land on what I wanted and taking me step by step in the process. He was able to understand what I needed and take it to the next level. His skills are unmatched and I strongly recommend him.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Paulo Dominguez",
    mentions: "@paulo-dominguez",
    socialLink: "https://www.linkedin.com/in/paulo-dominguez-500481237",
    review:
      "Our AI project had a lot of moving parts—everything from custom model training to integrating third-party APIs and managing noisy datasets. Jorge approached each challenge with confidence and clarity. His attention to both detail and big-picture outcomes helped us deliver a system that was not just technically sound but commercially viable.",
    imgPath: "/images/client6.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  techStackIcons,
  navLinks,
};
