import {
  mobile,
  backend,
  web,
  git,
  python,
  javascript,
  sql,
  fastapi,
  flask,
  postgresql,
  mysql,
  bash,
  CloudRaft,
  sgsits,
  MuktaLabs,
  HealthApp,
  truthtrack,
  CompuRf,
  compurf_home,
  sgsits_website,
  githubIcon,
  gmailIcon,
  linkedinIcon,
  compurf,
  include_sgsits_logo,
  team_nakshatra_logo,
  Depth_Estimator,
  Lexicon,
  CoderKabila,
} from "../assets";

// High-resolution SVG data URIs for skill icons without static file assets
const tsSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233178C6'><rect width='24' height='24' rx='4'/><text x='15' y='17' font-size='10' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='end'>TS</text></svg>";
const htmlCssSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E34F26'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>HTML</text></svg>";
const kotlinSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237F52FF'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='9' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>KT</text></svg>";
const cppSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300599C'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='9' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>C++</text></svg>";
const spacySvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2309A3D5'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>spaCy</text></svg>";
const stSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD21E'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='%23111' font-family='sans-serif' text-anchor='middle'>ST</text></svg>";
const faissSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230467DF'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='7.5' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>FAISS</text></svg>";
const neo4jSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23008CC1'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>Neo4j</text></svg>";
const opencvSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%235C3EE8'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>CV</text></svg>";
const yoloSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300FFFF'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='%23111' font-family='sans-serif' text-anchor='middle'>YOLO</text></svg>";
const onnxSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23005CED'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='7.5' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>ONNX</text></svg>";
const nodeSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23339933'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>Node</text></svg>";
const reactSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2361DAFB'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='%23111' font-family='sans-serif' text-anchor='middle'>React</text></svg>";
const nginxSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23009639'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>Nginx</text></svg>";
const pm2Svg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232B037A'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle'>PM2</text></svg>";
const linuxSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FCC624'><rect width='24' height='24' rx='4'/><text x='12' y='16' font-size='8' font-weight='bold' fill='%23111' font-family='sans-serif' text-anchor='middle'>Linux</text></svg>";
const vercelSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'><rect width='24' height='24' rx='4' fill='%23111'/><path d='M12 5L20 19H4L12 5Z' fill='white'/></svg>";

// Phone SVG Data URI
const phoneIconSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234FA37A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/></svg>";
// LeetCode SVG Data URI
const leetcodeIconSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFA116'><path d='M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.416.977c.004.383.162.748.434 1.011l6.104 5.908a1.374 1.374 0 0 0 1.956 0 1.374 1.374 0 0 0 0-1.956l-5.143-4.98 5.342-5.342a1.374 1.374 0 0 0-.964-2.408zm-5.71 10.94a1.374 1.374 0 0 0-.966.417l-5.38 5.38a1.374 1.374 0 0 0 0 1.956l5.38 5.38a1.374 1.374 0 1 0 1.956-1.956l-4.402-4.402 4.402-4.402a1.374 1.374 0 0 0-.99-2.373zm9.843 0a1.374 1.374 0 0 0-.967.417 1.374 1.374 0 0 0 0 1.956l4.402 4.402-4.402 4.402a1.374 1.374 0 1 0 1.956 1.956l5.38-5.38a1.374 1.374 0 0 0 0-1.956l-5.38-5.38a1.374 1.374 0 0 0-.989-.417z'/></svg>";
// Portfolio SVG Data URI
const portfolioIconSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9C24D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><line x1='2' y1='12' x2='22' y2='12'/><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/></svg>";

export const introAnimatedText = [
  "Software Engineer",
  "AI/ML Engineer",
  "Backend Systems Specialist",
  "Knowledge Graph Developer",
];

export const shortDescription = "Software Engineer & AI/ML Engineer";
export const myName = "Murtaza Sadriwala";
export const myEmail = "murtazasadriwala09@gmail.com";
export const myPhone = "+91 8435358999";
export const myLinkedIn = "https://www.linkedin.com/in/murtazasadriwala/";
export const myGithub = "https://github.com/murtaza-sadri-19";
export const myPortfolio = "https://tech-trove-murtaza-sadriwala.vercel.app/";
export const myLeetCode = "https://leetcode.com/u/murtaza19/";

export const education = {
  institution: "SGSITS (Shri Govindram Seksaria Institute of Technology and Science), Indore",
  shortName: "SGSITS Indore",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology",
  period: "2022 - 2026",
  details: "Focused on Information Technology, Computer Science, Algorithms, Machine Learning, Operating Systems, and Backend Architecture.",
  logo: sgsits,
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Skills" },
  { id: "work", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: mobile,
    description: "Knowledge Graphs, NLP pipelines, RAG systems, Computer Vision, spaCy & PyTorch.",
    tags: ["spaCy", "Sentence Transformers", "FAISS", "Neo4j", "YOLO", "OpenCV"],
  },
  {
    title: "Full Stack Developer",
    icon: web,
    description: "Modern React frontends, RESTful APIs, Flask, Node.js, and TypeScript application design.",
    tags: ["React", "TypeScript", "Flask", "Node.js", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend Engineer",
    icon: backend,
    description: "High-performance server architecture, PostgreSQL, MySQL, Linux administration, PM2, and Nginx.",
    tags: ["PostgreSQL", "MySQL", "Nginx", "PM2", "Linux", "Docker"],
  },
];

// All 20+ Skills Categorized into 4 domains
const technologies = [
  // 1. Languages (7)
  { name: "Python", icon: python, category: "Languages" },
  { name: "JavaScript", icon: javascript, category: "Languages" },
  { name: "TypeScript", icon: tsSvg, category: "Languages" },
  { name: "HTML/CSS", icon: htmlCssSvg, category: "Languages" },
  { name: "Kotlin", icon: kotlinSvg, category: "Languages" },
  { name: "SQL", icon: sql, category: "Languages" },
  { name: "C++", icon: cppSvg, category: "Languages" },

  // 2. ML/AI Frameworks (7)
  { name: "spaCy", icon: spacySvg, category: "ML/AI Frameworks" },
  { name: "Sentence Transformers", icon: stSvg, category: "ML/AI Frameworks" },
  { name: "FAISS", icon: faissSvg, category: "ML/AI Frameworks" },
  { name: "Neo4j", icon: neo4jSvg, category: "ML/AI Frameworks" },
  { name: "OpenCV", icon: opencvSvg, category: "ML/AI Frameworks" },
  { name: "YOLO", icon: yoloSvg, category: "ML/AI Frameworks" },
  { name: "ONNX Runtime", icon: onnxSvg, category: "ML/AI Frameworks" },

  // 3. Web & Backend (5)
  { name: "Node.js", icon: nodeSvg, category: "Web & Backend" },
  { name: "Flask", icon: flask, category: "Web & Backend" },
  { name: "React", icon: reactSvg, category: "Web & Backend" },
  { name: "PostgreSQL", icon: postgresql, category: "Web & Backend" },
  { name: "MySQL", icon: mysql, category: "Web & Backend" },

  // 4. DevOps & Infrastructure (5)
  { name: "Nginx", icon: nginxSvg, category: "DevOps & Infrastructure" },
  { name: "PM2", icon: pm2Svg, category: "DevOps & Infrastructure" },
  { name: "Linux", icon: linuxSvg, category: "DevOps & Infrastructure" },
  { name: "Git", icon: git, category: "DevOps & Infrastructure" },
  { name: "Vercel", icon: vercelSvg, category: "DevOps & Infrastructure" },
];

// Exact 3 Work Experiences matching source profile
const experiences = [
  {
    type: "internship",
    title: "Software Engineering Intern",
    company_name: "Mukta Labs",
    location: "Remote",
    icon: MuktaLabs,
    iconBg: "#1a1a2e",
    date: "Jun 2026 - Present",
    points: [
      "Built knowledge graph prototype for CXO demo, turning unstructured documents into structured, queryable entities and relationships.",
      "Implemented coreference resolution & relation extraction using spaCy to resolve entity disambiguation errors across multi-document corpora.",
      "Architected entity extraction → relationship generation → PostgreSQL persistence pipeline.",
    ],
    tech: ["Knowledge Graphs", "spaCy", "Relation Extraction", "PostgreSQL", "Python"],
  },
  {
    type: "internship",
    title: "Software Engineering Intern",
    company_name: "Compu-Rf",
    location: "Indore",
    icon: compurf,
    iconBg: "#E6DEDD",
    date: "Apr 2026 - Jun 2026",
    points: [
      "Automated Thin Layer Chromatography (TLC) Rf/AUC measurement via YOLO + OpenCV computer vision pipeline, taking product to live rollout.",
      "Developed solvent-aware OpenCV pipeline for spot detection, geometric alignment, and contour processing.",
      "Integrated native ONNX Runtime backend, achieving 95% spot detection accuracy in live deployment.",
    ],
    tech: ["YOLO", "OpenCV", "ONNX Runtime", "Computer Vision", "Python"],
  },
  {
    type: "internship",
    title: "AI Research Intern",
    company_name: "CloudRaft Technologies",
    location: "Remote",
    icon: CloudRaft,
    iconBg: "#ffffff",
    date: "Jul 2025 - Nov 2025",
    points: [
      "Built Business Trend Analysis Dashboard processing 100,000+ business records for enterprise users.",
      "Developed GraphRAG pipeline integrating Neo4j, FAISS, and Sentence Transformers for semantic retrieval over internal technical documentation.",
      "Achieved 40% semantic retrieval latency reduction and automated Knowledge Graph ingestion.",
    ],
    tech: ["GraphRAG", "Neo4j", "FAISS", "Sentence Transformers", "Python"],
  },
];

// Exact 5 Achievements matching source profile
const leadership = [
  {
    title: "GATE 2026 CS/IT AIR 1765",
    organization: "Computer Science & Information Technology",
    date: "Feb 2026",
    icon: sgsits,
    iconBg: "#E6DEDD",
    tag: "Achievement",
    points: [
      "Secured All India Rank (AIR) 1765 in GATE 2026 Computer Science & Information Technology.",
    ],
  },
  {
    title: "President, #include",
    organization: "Student Technical Club of IT Dept, SGSITS",
    date: "Apr 2026",
    icon: include_sgsits_logo,
    iconBg: "#1a1d24",
    tag: "Leadership",
    points: [
      "Led the IT department's student technical club, driving technical workshops, hackathons, and competitive programming initiatives for students.",
    ],
  },
  {
    title: "Team Captain, Team Nakshatra",
    organization: "ISRO Robotics Challenge 2026 (IRoC–U)",
    date: "Dec 2025",
    icon: team_nakshatra_logo,
    iconBg: "#1a1d24",
    tag: "Leadership",
    points: [
      "Captain of Team Nakshatra in the ISRO Robotics Challenge 2026, leading software firmware, navigation control, and hardware integration.",
    ],
  },
  {
    title: "Top 300, Amazon ML Challenge 2025",
    organization: "Amazon Machine Learning Challenge 2025",
    date: "Oct 2025",
    icon: sgsits,
    iconBg: "#E6DEDD",
    tag: "Achievement",
    points: [
      "Achieved Top 300 rank nationwide out of thousands of competing student teams in machine learning and predictive model engineering.",
    ],
  },
  {
    title: "Top 25, ICEA TruthTell 2025",
    organization: "Ministry of IT and ICEA",
    date: "Jan 2025",
    icon: sgsits,
    iconBg: "#E6DEDD",
    tag: "Achievement",
    points: [
      "Recognized in the Top 25 teams nationally at ICEA TruthTell 2025, organized by Ministry of IT and ICEA for AI fact verification solutions.",
    ],
  },
];

// Achievements alias for clear component naming
export const achievements = leadership;

// Comprehensive Key Projects Showcase (8 Key Projects)
const projects = [
  {
    name: "Production Server Deployment",
    description:
      "Provisioned a production-grade Debian Linux server with Node.js, MySQL, PM2, and Nginx serving 6,000+ students, 400+ faculty, and 150+ CMS administrators. Automated MySQL backup, recovery, and maintenance with Cron Jobs; configured Nginx with reverse proxy, SSL termination, gzip compression, rate limiting, and server hardening.",
    tags: [
      { name: "debian", color: "blue-text-gradient" },
      { name: "nginx", color: "green-text-gradient" },
      { name: "mysql", color: "orange-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    category: "DevOps & Infrastructure",
    image: sgsits_website,
    deploymentStatus: "Live Deployment",
    deploymentLink: "https://www.sgsits.ac.in",
    source_code_link: "https://github.com/murtaza-sadri-19",
  },
  {
    name: "Veritify (AI News Verification)",
    description:
      "AI-powered fact verification platform integrating NLP, semantic retrieval, and claim-evidence matching. Built a Sentence Transformers pipeline that reduced verification time by 95% (300s down to 10s per claim) with RESTful Flask APIs and a responsive React frontend.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "transformers", color: "green-text-gradient" },
      { name: "flask", color: "orange-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    category: "ML/AI Frameworks",
    image: truthtrack,
    deploymentStatus: "Deployed",
    deploymentLink: "https://huggingface.co/spaces/murtaza19/Veritify-News-Vigilance",
    source_code_link: "https://github.com/murtaza-sadri-19/Veritify-AI-News-Vigilance",
  },
  {
    name: "Compu-Rf Spot Detection Engine",
    description:
      "Automated Thin Layer Chromatography (TLC) Rf/AUC spot detection pipeline utilizing YOLO, OpenCV, and native ONNX Runtime backend integration. Reached 95% spot detection accuracy in live deployment, streamlining chromatographic analysis.",
    tags: [
      { name: "yolo", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "onnx-runtime", color: "orange-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    category: "ML/AI Frameworks",
    image: compurf_home,
    deploymentStatus: "Live Rollout",
    deploymentLink: "https://play.google.com/store/apps/details?id=com.compu.rf.compurf",
    source_code_link: "https://github.com/murtaza-sadri-19",
  },
  {
    name: "Nakshatra 2026 Firmware",
    description:
      "Python-based autonomous robotics firmware designed for Team Nakshatra in the ISRO Robotics Challenge 2026. Includes sensor ingestion, navigation control loops, motor telemetry, and autonomous obstacle handling.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "robotics", color: "green-text-gradient" },
      { name: "isro", color: "orange-text-gradient" },
      { name: "telemetry", color: "pink-text-gradient" },
    ],
    category: "Languages",
    image: Depth_Estimator,
    source_code_link: "https://github.com/murtaza-sadri-19/Nakshatra-2026-Firmware",
  },
  {
    name: "Tumor Classification System",
    description:
      "Medical image diagnostic system implemented in Python / Jupyter using deep convolutional neural networks. Performs automated classification of brain tumor MRI scans with feature extraction and evaluation metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "jupyter", color: "green-text-gradient" },
      { name: "cnn", color: "orange-text-gradient" },
      { name: "opencv", color: "pink-text-gradient" },
    ],
    category: "ML/AI Frameworks",
    image: Lexicon,
    source_code_link: "https://github.com/murtaza-sadri-19/Tumor-Classification-System",
  },
  {
    name: "HealthSurveyAppAndroid",
    description:
      "Kotlin-based Android application for field health survey data collection. Features offline-first local data entry, form state validation, and secure RESTful payload synchronization.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "android", color: "green-text-gradient" },
      { name: "sqlite", color: "orange-text-gradient" },
    ],
    category: "Web & Backend",
    image: HealthApp,
    source_code_link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid",
  },
  {
    name: "ExpenseTrackerApp",
    description:
      "Native Kotlin Android expense tracker providing categorical transaction logging, financial budgeting insights, local SQLite persistence, and monthly summary visualizers.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "android", color: "green-text-gradient" },
      { name: "mobile", color: "orange-text-gradient" },
    ],
    category: "Web & Backend",
    image: CoderKabila,
    source_code_link: "https://github.com/murtaza-sadri-19/ExpenseTrackerApp",
  },
  {
    name: "Vendor Cloud Hub",
    description:
      "TypeScript full-stack vendor management portal. Enables vendor registration, compliance document management, contract metric evaluation, and cloud workflow automation.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "orange-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    category: "Web & Backend",
    image: sgsits_website,
    source_code_link: "https://github.com/murtaza-sadri-19/Vendor-Cloud-Hub",
  },
  {
    name: "Riverwood Voice Agent",
    description:
      "Python AI voice assistant featuring real-time speech input stream processing, NLP intent classification, dialogue state handling, and automated vocal response generation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "speech-ai", color: "green-text-gradient" },
      { name: "nlp", color: "orange-text-gradient" },
    ],
    category: "ML/AI Frameworks",
    image: truthtrack,
    source_code_link: "https://github.com/murtaza-sadri-19/Riverwood-Voice-Agent",
  },
];

// All 6 Contact platform links including Phone & LeetCode
const contactLinks = [
  {
    name: "Email",
    icon: gmailIcon,
    url: "mailto:murtazasadriwala09@gmail.com",
    color: "#4FA37A",
    description: "Send an email",
    username: "murtazasadriwala09@gmail.com",
  },
  {
    name: "Phone",
    icon: phoneIconSvg,
    url: "tel:+918435358999",
    color: "#4FA37A",
    description: "Direct Phone Contact",
    username: "+91 8435358999",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/murtazasadriwala/",
    color: "#6b9eb8",
    description: "Connect on LinkedIn",
    username: "murtazasadriwala",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/murtaza-sadri-19",
    color: "#D9C24D",
    description: "Explore 35+ repositories",
    username: "murtaza-sadri-19",
  },
  {
    name: "LeetCode",
    icon: leetcodeIconSvg,
    url: "https://leetcode.com/u/murtaza19/",
    color: "#FFA116",
    description: "Problem Solving Profile",
    username: "murtaza19",
  },
  {
    name: "Portfolio",
    icon: portfolioIconSvg,
    url: "https://tech-trove-murtaza-sadriwala.vercel.app/",
    color: "#D9C24D",
    description: "Official TechTrove Site",
    username: "tech-trove-murtaza-sadriwala",
  },
];

export { services, technologies, experiences, leadership, projects, contactLinks };
