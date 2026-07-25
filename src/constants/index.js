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
  javascript,
  sql,
  spring,
  fastapi,
  flask,
  azure,
  postgresql,
  mysql,
  bash,
  cicd,
  CloudRaft,
  sgsits,
  Sparobix,
  MuktaLabs,
  HealthApp,
  truthtrack,
  githubIcon,
  gmailIcon,
  linkedinIcon,
} from "../assets";

export const introAnimatedText = [
  "Developer",
  "Programmer",
  "AI Enthusiast",
  "Open Source",
];
export const shortDescription = "Software Engineer & AI/ML Engineer";
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
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    category: "Languages",
  },
  {
    name: "Java",
    icon: java,
    category: "Languages",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages",
  },
  {
    name: "SQL",
    icon: sql,
    category: "Languages",
  },
  {
    name: "Bash",
    icon: bash,
    category: "Languages",
  },
  {
    name: "PyTorch",
    icon: pytorch,
    category: "AI/ML",
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    category: "AI/ML",
  },
  {
    name: "Transformers",
    icon: tensorflow,
    category: "AI/ML",
  },
  {
    name: "RAG",
    icon: tensorflow,
    category: "AI/ML",
  },
  {
    name: "Spring Boot",
    icon: spring,
    category: "Backend",
  },
  {
    name: "FastAPI",
    icon: fastapi,
    category: "Backend",
  },
  {
    name: "Flask",
    icon: flask,
    category: "Backend",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Cloud & DevOps",
  },
  {
    name: "Azure",
    icon: azure,
    category: "Cloud & DevOps",
  },
  {
    name: "Git",
    icon: git,
    category: "Cloud & DevOps",
  },
  {
    name: "CI/CD",
    icon: cicd,
    category: "Cloud & DevOps",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    category: "Databases",
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "Databases",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Databases",
  },
];

const experiences = [
  {
    type: "internship",
    title: "Software Engineering Intern",
    company_name: "Mukta Labs",
    icon: MuktaLabs,
    iconBg: "#1a1a2e",
    date: "Jun 2026 - Present",
    points: [
      "Delivered a knowledge graph prototype that turns unstructured documents into structured, queryable entities and relationships, by designing and building the core backend end-to-end, successfully demoed to CXO-level leadership.",
      "Improved downstream query accuracy by implementing Coreference Resolution and Relation Extraction with spaCy, removing entity disambiguation errors across multi-document corpora.",
      "Automated a modular, testable pipeline architecture for the team by integrating entity extraction, relationship generation, and PostgreSQL persistence into one backend, validated end-to-end ahead of the CXO demo.",
    ],
  },
  {
    type: "internship",
    title: "Software Engineering Intern",
    company_name: "Compu-Rf",
    icon: sgsits,
    iconBg: "#E6DEDD",
    date: "Apr 2026 - Jun 2026",
    points: [
      "Shipped an automated alternative to manual TLC Rf/AUC measurement by directing end-to-end development of the computer vision pipeline (YOLO detection, OpenCV) and personally resolving architecture blockers across the team, taking the product to live rollout.",
      "Enabled reliable Rf measurement across varying chromatography conditions by engineering solvent-aware OpenCV pipeline for spot detection, geometric alignment, and contour processing.",
      "Cut manual analysis time for lab technicians by optimizing preprocessing/inference pipelines and owning the native ONNX Runtime backend integration, achieving 95% spot detection accuracy in live deployment.",
    ],
  },
  {
    type: "internship",
    title: "AI Research Intern",
    company_name: "CloudRaft Technologies",
    icon: CloudRaft,
    iconBg: "#fff",
    date: "Jul 2025 - Nov 2025",
    points: [
      "Shipped a client-facing analytics Business Trend Analysis Dashboard, processing 100,000+ business records enabling production-scale clustering and analytics for enterprise users.",
      "Developed the foundation of a GraphRAG pipeline by integrating Neo4j, FAISS, and Sentence Transformers, enabling semantic retrieval across internal technology documentation for engineering teams.",
      "Reduced semantic retrieval latency by 40% and implemented automated Knowledge Graph ingestion from technical documentation, establishing a scalable foundation for developer-centric RAG workflows.",
    ],
  },
  {
    type: "internship",
    title: "Research Intern",
    company_name: "Sparobix",
    icon: Sparobix,
    iconBg: "#111111",
    date: "Mar 2025 - Aug 2025",
    points: [
      "Implemented and analyzed Histogram of Oriented Gradients (HOG) descriptors merged with Support Vector Machines (SVM) for terrestrial object identification.",
      "Developed swarm intelligence optimization algorithms, including Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO), for applied problem-solving.",
      "Contributed to the design and development of Neural Networks for static image classification of space-based imagery.",
    ],
  },
  {
    type: "internship",
    title: "AI & Backend Developer",
    company_name: "CompuRf (SGSITS)",
    icon: sgsits,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - May 2025",
    points: [
      "Developed a production-ready computer vision backend using OpenCV, automating Rf value computation for Thin Layer Chromatography (TLC).",
      "Achieved 95% spot detection accuracy by architecting an image processing pipeline with contour filtering and custom data augmentation.",
      "Engineered high-performance RESTful APIs using Python to integrate the deep learning engine with a Flutter mobile application.",
    ],
  },
];

const leadership = [
  {
    title: "President",
    organization: "#include - Student Technical Club, IT Dept, SGSITS",
    date: "Apr 2026",
    icon: sgsits,
    iconBg: "#E6DEDD",
    points: [
      "Leading the IT department's technical club, organizing workshops, hackathons, and coding competitions for the student community.",
    ],
  },
  {
    title: "Team Captain",
    organization: "Team Nakshatra — ISRO Robotics Challenge 2026 (IRoC–U)",
    date: "Dec 2025",
    icon: sgsits,
    iconBg: "#E6DEDD",
    points: [
      "Led the team in the ISRO Robotics Challenge, coordinating development and strategy for the competition.",
    ],
  },
  {
    title: "GATE 2026",
    organization: "AIR 1765 — CS/IT",
    date: "Feb 2026",
    icon: sgsits,
    iconBg: "#E6DEDD",
    points: [
      "Secured All India Rank 1765 in GATE 2026 Computer Science & Information Technology.",
    ],
  },
  {
    title: "Top 300",
    organization: "Amazon ML Challenge 2025",
    date: "Oct 2025",
    icon: sgsits,
    iconBg: "#E6DEDD",
    points: [
      "Ranked among the Top 300 in the Amazon Machine Learning Challenge 2025.",
    ],
  },
  {
    title: "Top 25",
    organization: "ICEA TruthTell 2025 — Ministry of IT & ICEA",
    date: "Jan 2025",
    icon: sgsits,
    iconBg: "#E6DEDD",
    points: [
      "Secured Top 25 nationally at the ICEA TruthTell Hackathon, organized by Ministry of IT and ICEA.",
    ],
  },
];

const projects = [
  {
    name: "Official SGSITS Website",
    description:
      "Provisioned a production-grade Debian Linux server and deployed the application stack using Node.js, MySQL, PM2, and Nginx, enabling secure hosting for a platform serving 6,000+ students, 400+ faculty members, and 150+ CMS administrators. Automated MySQL backup, recovery, deployment, and routine server maintenance using Cron Jobs. Configured Nginx with reverse proxy, SSL termination, gzip compression, rate limiting, and server hardening.",
    tags: [
      { name: "node.js", color: "green-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "nginx", color: "orange-text-gradient" },
      { name: "linux", color: "pink-text-gradient" },
    ],
    image: sgsits,
    source_code_link: "https://github.com/murtaza-sadri-19",
  },
  {
    name: "Veritify: Real-Time News Verification",
    description:
      "Built an AI-powered fact verification platform integrating NLP, semantic retrieval, and claim-evidence matching to evaluate news credibility in real time. Engineered a modular NLP pipeline using Sentence Transformers, semantic similarity, topic extraction, and external news retrieval APIs, reducing average verification time by 95%. Designed RESTful Flask APIs and integrated them with a React frontend, enabling scalable ML inference with sub-second response latency.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "transformers", color: "green-text-gradient" },
      { name: "flask", color: "orange-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: truthtrack,
    source_code_link: "https://github.com/murtaza-sadri-19/Veritify-AI-News-Vigilance",
    deploymentStatus: "Deployed",
    deploymentLink: "https://huggingface.co/spaces/murtaza19/Veritify-News-Vigilance",
  },
  {
    name: "Health Survey App",
    description:
      "An Android application for collecting health survey data with a user-friendly interface for data entry, offline capabilities for remote areas, and secure data collection.",
    tags: [
      { name: "android", color: "green-text-gradient" },
      { name: "backend", color: "blue-text-gradient" },
      { name: "database", color: "orange-text-gradient" },
    ],
    image: HealthApp,
    source_code_link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid",
  },
];

const contactLinks = [
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/murtaza-sadri-19",
    color: "#c47d5a",
    description: "Check out my projects",
    bgGradient: "from-orange-900/20 to-red-900/20",
    username: "murtaza-sadri-19",
  },
  {
    name: "Email",
    icon: gmailIcon,
    url: "mailto:murtazasadriwala09@gmail.com",
    color: "#7d9b76",
    description: "Send me an email",
    bgGradient: "from-green-900/20 to-emerald-900/20",
    username: "murtazasadriwala09@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/murtazasadriwala/",
    color: "#6b9eb8",
    description: "Connect with me",
    bgGradient: "from-blue-900/20 to-cyan-900/20",
    username: "murtazasadriwala",
  },
];

export { services, technologies, experiences, leadership, projects, contactLinks };
