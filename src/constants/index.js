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
  {
    imgPath: "/images/logos/company-logo-6.png",
    name: "Company 6",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    name: "Company 7",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    name: "Company 8",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    name: "Company 9",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    name: "Company 10",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    name: "Company 11",
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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
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

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
