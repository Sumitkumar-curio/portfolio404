import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Quantum Computing",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: backend,
  },
  {
    title: "Full Stack developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Masters in Quantum technologies - Specialization in Qunatum Computing.",
    company_name: "Indian Institute of technology Jodhpur",
    icon: oist,
    iconBg: "#fff",
    date: "2023-2025",
    points: [

      "Quantum Computing, Quantum Algorithm, Quantum machine learning, Quantum Optimization, Quantum Cryptography, Quantum Mechanics",
      "Fundamental of Machine learning",
      "CGPA: 7.1/10",
    ],
  },
  {
    title: "Bachelors in Computer Science and Engineering",
    company_name: "",
    icon: karate,
    iconBg: "#fff",
    date: "2017-2021",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, ",
      "Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence",
      "Machine Learning, Artifical Intelligence, Data Science, Internet of Things.",
      "CGPA: 8.23/10",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Sheerwood college-CBSE",
    icon: samaritans,
    iconBg: "#fff",
    date: "2017-2021",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
      "Percentage: 78.4%",
      ,
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Sheerwood college-CBSE",
    icon: samaritans,
    iconBg: "#fff",
    date: "2016-2017",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "CGPA: 7.2/10",
    ],
  },
  {
    title: "Diploma of Education - Online",
    company_name: "Latvijas Universitate",
    icon: samaritans,
    iconBg: "#fff",
    date: "2023-2024",
    points: [
      "Quantum Comoputing and Quantum Algorithm",
      "Skills: Qiskit · cirq · Quantum Computing · Python (Programming Language)",
    ],
  },
  {
    title: "Diploma of Education - Online",
    company_name: "The Coding School",
    icon: samaritans,
    iconBg: "#fff",
    date: "2023-2024",
    points: [
      "Qubit by Qubit is the Quantum Initiative of the Coding School.",
      "Skills: Qiskit · cirq · Quantum Computing · Python (Programming Language)",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Accenture",
    icon: cognizant,
    iconBg: "#fff",
    date: "2021-2022",
    points: [ "Worked on IT and automation-related tasks, including Managed File Transfer (MFT), Incident Management, ServiceNow, Mulesoft, SmartAutomation (SA), and Testing, Selenium java."]
  },
  {
    title: "Data Science Intern - Remote",
    company_name: "CodSoft",
    icon: nextinnovation,
    iconBg: "white",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Currently interning in Data Science, focusing on projects like movie rating prediction, Iris flower classification, and sales forecasting using Python.",
      "Demonstrating hands-on experience in data analysis, preprocessing, and machine learning techniques.",
      "Applying Python skills to solve real-world problems, emphasizing practicality and relevance in the field of data science",
    ],
  },
  {
    title: "Machine Learning Intern - Remote",
    company_name: "Navodita",
    icon: linkedin,
    iconBg: "white",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developing a Convolutional Neural Network (CNN) model for image classification.",
      "Targeting datasets like CIFAR-10 or ImageNet to enhance classification accuracy.",
      "Motivated students to enhance their skills by utilizing the opportunities provided by Internshala.",
      "Actively exploring optimization techniques for improved model performance in image categorization.",
    ],
  },
];

const extracurricular = [
  {
    title: "Founder of Club-QCIG",
    type: "QCIG- Quantum Computing Innovators Group",
   // icon: linkedin,
    iconBg: "#007BB5",
    date: "Dec 2023- Present",
    points: ["Initiator of Club at IIT Jodhpur",
    "Quantum Computing, Quantum Algorithm, Quantum Sensing and device and other specialization",
    "WorkShop, Seminar and Guest lecture",
  ],
    //credential: "",
  },
  {
    title: "Student Respresentative",
    type: "Position of Responsibility",
    icon: oist,
    iconBg: "white",
    date: "Oct 2023- Present",
    points: ["Student Representative of the IDPR (Interdisciplinary Research Platform) department, actively contributing to collaborative initiatives and promoting interdisciplinary research within the academic community.",
            "At IIT Jodhpur",
  ],
    //credential: "",
  },
  {
    title: "Contigent Leader ",
    type: "Position of Responsibility",
    //icon: hackerrank,
    iconBg: "#050C18",
    date: "Dec 2023 - Present",
    points: [
      "Inter-Departmental General Championship IIT Jodhpur",
    ],
    //credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  {
    title: "Python",
    type: "Great learing, Coursera, Linkedin Certification",
    icon: internshala,
    //iconBg: "#1294C8",
    date: "Sept 2021",
    points: ["Python Programming, Python for Machine learning"],
    //credential:
     // "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  },
  {
    title: "Build a Face Recognition Application using Python",
    type: "GUVI Geek Networks, IITM Research Park",
    //icon: karate,
    iconBg: "#CCCFD8",
    date: "April 2021",
    points: [
      "Build a Face Recognition Application using Python",
      "Machine Learing Basics",
    ],
  },
  {
    title: "Certified automation practioner ",
    type: "Accenture",
    icon: cognizant,
    iconBg: "#CCCFD8",
    date: "2021-2022",
    points: [
      "Focus: Validates expertise in automation practices within the Accenture framework",
      "Skills Verified: Proficiency in implementing Accenture's automation solutions and technologies.",
      "Demonstrates: Solid understanding of automation principles, tools, and best practices.",
    ],
  },
  {
    title: "GATE",
    type: " MINISTRY OF EDUCATION, GOVERNMENT OF INDIA",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "2006-2020",
    points: [
      "Skills: Algorithms · Data Structures · Computer Science",
    ],
  },
  {
    title: "IOT what is IOT ",
    type: "Great Learning",
    //icon: karate,
    iconBg: "#CCCFD8",
    date: "2021-2022",
    points: [
      "Interconnected Devices: IoT involves connecting various physical devices through the internet, enabling them to communicate and share data.",
      "Automation and Efficiency: IoT enables automation and enhances efficiency by collecting, analyzing, and leveraging data from interconnected devices.",
    ],
  },

  {
    title: "Quantum Computing Basics and QML ",
    type: "Quantum Computing India",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Education and Research: The program includes educational initiatives covering the basics of QM and Quantum Machine Learning (QML), fostering research in these foundational quantum concepts.",
  
    ],
  },
  {
    title: "Prompt Engineering for ChatGPTPrompt Engineering for ChatGPT.",
    type: "Vanderbilt Universit",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "2021-2022",
    points: [
     "Skills: Generative AI · Prompt Engineering · Large Language Models (LLM) · ChatGPT",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
   
  },
  {
    name: "QCNN Automated medical Image Diagnostics using QML",
  
    description: "QCNN project leverages Quantum Machine Learning for efficient and accurate medical image diagnostics, blending quantum computing principles with deep learning techniques for enhanced analysis and diagnosis.",
    tags: [
      {
        name: "Qiskit",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Dataset",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    
  },
  {
    name: "Quantum Game - Sum–Hit",
    description: "Quantum Game development, Shooting Game, Arcade Car has to hit the target",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Qiskit & Python",
        color: "blue-text-gradient",
      },
    ],
   // image: sortingvisualiser,
  }
  ];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
