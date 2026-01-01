import {
  mobile,
  backend,
  web,
  mongodb,
  git,
  docker,
  python,
  java,
  firebase,
  tensorflow,
  pytorch,
  CloudRaft,
  sgsits,
  naivedya,
  dhoomketu,
  Sparobix,
  HealthApp,
  truthtrack,
  githubIcon,
  gmailIcon,
  linkedinIcon,
} from "../assets";

export const introAnimatedText = [
  "Developer",
  "Programmer",
  "Tech Enthusiast",
  "Gamer",
];
export const shortDescription = "Full Stack Developer and ML Engineer";
export const myName = "Murtaza Sadriwala";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science & ML Engineer",
    icon: mobile,
  },
  {
    title: "Java Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  }
];

const experiences = [
  {
    title: "AI Research Intern",
    company_name: "CloudRaft",
    icon: CloudRaft, // Ensure you have this icon in your assets
    iconBg: "#fff",
    date: "July 2025 - Nov 2025",
    points: [
      "Architected a Retrieval-Augmented Generation (RAG) system to map 10,000+ entity relationships, enabling advanced multi-hop reasoning and knowledge extraction.",
      "Enhanced retrieval performance through advanced vectorization, achieving a 40% reduction in latency for large-scale semantic search operations.",
      "Developed a trend analysis dashboard using unsupervised learning to cluster 100,000+ business data points, identifying key market trends for strategic decisions.",
      "Researched and engineered an AI Data Summarizer providing contextual, actionable insights from complex documentation.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Sparobix",
    icon: Sparobix, // Ensure you have this icon in your assets
    iconBg: "#111111",
    date: "March 2025 - August 2025",
    points: [
      "Implemented and analyzed Histogram of Oriented Gradients (HOG) descriptors merged with Support Vector Machines (SVM) for terrestrial object identification.",
      "Developed swarm intelligence optimization algorithms, including Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO), for applied problem-solving.",
      "Contributed to the design and development of Neural Networks for static image classification of space-based imagery.",
      "Researched domain adaptation techniques for advanced space imagery analysis and autonomous decision-making frameworks.",
    ],
  },
  {
    title: "AI & Backend Developer",
    company_name: "CompuRf (SGSITS)",
    icon: sgsits, // Ensure you have this icon in your assets
    iconBg: "#E6DEDD",
    date: "March 2025 - May 2025",
    points: [
      "Developed a production-ready computer vision backend using OpenCV, automating Rf value computation for Thin Layer Chromatography (TLC).",
      "Achieved 95% spot detection accuracy by architecting an image processing pipeline with contour filtering and custom data augmentation.",
      "Engineered high-performance RESTful APIs using Python to integrate the deep learning engine with a Flutter mobile application.",
      "Reduced manual analysis time by 80% and errors by 30% through real-time lab automation logic.",
    ],
  },
  {
    title: "Head Electronics & Web Development",
    company_name: "Team Naivedya (TIFAN)",
    icon: naivedya, // Ensure you have this icon in your assets
    iconBg: "#fff",
    date: "Sept 2023 - Sept 2025",
    points: [
      "Led agricultural innovation initiatives at TIFAN (SAEINDIA), focusing on technical solutions for modern farming practices.",
      "Conducted extensive field testing to validate the practical application of innovative agricultural technologies.",
      "Developed an automated multi-vegetable transplanter utilizing mechanical synchronization, for which I hold a patent.",
      "Provided ongoing technical leadership for electronics and web-based systems within a cross-functional engineering team.",
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "Team Dhoomketu",
    icon: dhoomketu, // Ensure you have this icon in your assets
    iconBg: "#111111",
    date: "Feb 2024 - June 2024",
    points: [
      "Collaborated on the ISRO IROC 2024 object detection challenge, developing advanced computer vision solutions.",
      "Trained machine learning models utilizing Recurrent Neural Networks (RNN) for specialized sequence-based tasks.",
      "Contributed to a dynamic startup environment focused on innovative technology solutions and detection capabilities.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dhruval proved me wrong.",
    name: "Devesh Mani Tripathi",
    designation: "CEO",
    company: "ConnectBees",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dhruval does.",
    name: "Alok Maurya",
    designation: "CTO",
    company: "AltWorld",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "After Dhruval optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shikha Gupta",
    designation: "Senior Product Manager",
    company: "City Future Labs, IIT Kharagpur",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const projects = [
  {
    name: "TruthTrack: News Vigilance",
    description:
      "A production-grade news verification system that utilizes semantic retrieval and contextual reasoning to identify misinformation. Recognized as Top 25 nationally at the ICEA TruthTell Hackathon.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "transformers",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: truthtrack,
    deploymentStatus: "Deploying soon",
  },
  {
    name: "Health Survey App",
    description:
      "HealthSurveyAppAndroid is an Android application for collecting health survey data. The app features a user-friendly interface for data entry, offline capabilities for remote areas, and secure data storage. It aims to streamline health data collection.",
    tags: [
      { name: "pytorch", color: "blue-text-gradient" },
      { name: "computer-vision", color: "green-text-gradient" },
      { name: "midas", color: "pink-text-gradient" },
    ],
    image: HealthApp, // Reference your asset here
    source_code_link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid"
  }
];

const contactLinks = [
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/murtaza-sadri-19",
    color: "#00d4ff",
    description: "Check out my projects",
    bgGradient: "from-blue-900/20 to-cyan-900/20",
    username: "murtaza-sadri-19",
  },
  {
    name: "Email",
    icon: gmailIcon,
    url: "mailto:murtazasadriwala09@gmail.com",
    color: "#bf61ff",
    description: "Send me an email",
    bgGradient: "from-purple-900/20 to-pink-900/20",
    username: "murtazasadriwala09@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/murtazasadriwala/",
    color: "#00cea8",
    description: "Connect with me",
    bgGradient: "from-green-900/20 to-cyan-900/20",
    username: "murtazasadriwala",
  },
];

export { services, technologies, experiences, testimonials, projects, contactLinks};