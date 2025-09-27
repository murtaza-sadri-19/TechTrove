// 'use client';
// import { useState } from 'react';
// import { ExternalLink, Brain, Satellite, Search, Smartphone, BarChart, Trophy } from 'lucide-react';

// export function Projects() {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const projects = [
//     {
//       id: 1,
//       title: "OCR Research (CRNN + CTC)",
//       description: "Deep learning-based OCR pipeline for French and multilingual handwritten text recognition.",
//       category: ["ml", "research"],
//       tags: ["TensorFlow", "CRNN", "CTC"],
//       metrics: { accuracy: 96.2, inference: 15 },
//       link: "https://github.com/murtaza-sadri-19/OCR-CRNN",
//       icon: Brain
//     },
//     {
//       id: 2,
//       title: "6D Pose Estimation",
//       description: "Research project on deep learning-based perception for space debris tracking.",
//       category: ["ml", "research"],
//       tags: ["PyTorch", "Computer Vision", "Research"],
//       metrics: { precision: 91.7, processing: 22 },
//       link: "#",
//       icon: Satellite
//     },
//     {
//       id: 3,
//       title: "TLC Image Processing",
//       description: "Automated plate, strip, and spot detection using YOLO + OpenCV.",
//       category: ["ml"],
//       tags: ["YOLO", "OpenCV", "Python"],
//       metrics: { detection: 88.9, speed: 31 },
//       link: "#",
//       icon: Search
//     },
//     {
//       id: 4,
//       title: "CoderKabila",
//       description: "Community-driven DSA practice tracker app with Firebase backend.",
//       category: ["web"],
//       tags: ["Flutter", "Firebase", "DSA"],
//       metrics: { users: "1.2k+", uptime: 99.9 },
//       link: "#",
//       icon: Smartphone
//     },
//     {
//       id: 5,
//       title: "Health Survey App",
//       description: "Kotlin + Firebase-based survey system for health and education policy planning.",
//       category: ["web"],
//       tags: ["Kotlin", "Firebase", "Google Sheets API"],
//       metrics: { surveys: "5k+", analytics: "Real-time" },
//       link: "https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid",
//       icon: BarChart
//     },
//     {
//       id: 6,
//       title: "BlueTriangle Absenteeism",
//       description: "Hackathon-winning project on absenteeism prediction and analysis.",
//       category: ["ml"],
//       tags: ["ML", "Analytics", "Hackathon"],
//       metrics: { award: "🏆", accuracy: 92.4 },
//       link: "https://github.com/murtaza-sadri-19/BlueTriangle-Absenteeism",
//       icon: Trophy
//     }
//   ];

//   const filters = [
//     { id: 'all', label: 'All' },
//     { id: 'ml', label: 'ML/AI' },
//     { id: 'web', label: 'Web' },
//     { id: 'research', label: 'Research' }
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category.includes(activeFilter));

//   return (
//     <section id="projects" className="py-20 bg-secondary">
//       <div className="container-section">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Featured Projects</h2>
        
//         {/* Project Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {filters.map(filter => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-4 py-2 rounded-full font-medium transition-all ${
//                 activeFilter === filter.id
//                   ? 'bg-primary text-primary-foreground'
//                   : 'bg-card border border-border hover:bg-muted'
//               }`}
//               data-testid={`filter-${filter.id}`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
//           {filteredProjects.map((project) => {
//             const IconComponent = project.icon;
//             return (
//               <div 
//                 key={project.id} 
//                 className="card p-6 hover:shadow-lg hover:scale-105 transition-all"
//                 data-testid={`project-card-${project.id}`}
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   <IconComponent className="text-primary text-xl" size={24} />
//                   <h3 className="text-xl font-semibold">{project.title}</h3>
//                 </div>
//                 <p className="text-muted-foreground mb-4">{project.description}</p>
                
//                 {/* Performance Metrics */}
//                 <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                   {Object.entries(project.metrics).map(([key, value], index) => (
//                     <div key={key} className="text-center">
//                       <div className="text-lg font-bold text-primary">{value}{typeof value === 'number' && key !== 'users' && key !== 'surveys' ? (key.includes('time') || key.includes('speed') || key.includes('inference') || key.includes('processing') ? 'ms' : '%') : ''}</div>
//                       <div className="text-muted-foreground capitalize">{key}</div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-2 flex-wrap mb-4">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span 
//                       key={tagIndex} 
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         tagIndex % 2 === 0 
//                           ? 'bg-primary/10 text-primary' 
//                           : 'bg-accent/10 text-accent'
//                       }`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <a 
//                   href={project.link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-primary hover:underline font-medium inline-flex items-center gap-1"
//                   data-testid={`project-link-${project.id}`}
//                 >
//                   View Project <ExternalLink size={16} />
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// sections/Projects.tsx
/**
 * Project cards, filter tabs, deep-dive modal, keyboard access.
 * Cards inspired by WallOfPortfolios, modal by shadcn/ui patterns.
 */
'use client';
import React, { useState, useEffect } from 'react'
import { Folder, ExternalLink, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/*
==============================
📊 PROJECT PORTFOLIO OVERVIEW
==============================

🎯 CATEGORIES:
- ML/AI: Machine Learning, Computer Vision, NLP projects
- E-commerce: Online stores, payment systems, shopping platforms  
- Web: Full-stack applications, APIs, frontend showcases
- Research: Academic projects, experimental implementations

🚀 FEATURED PROJECTS BREAKDOWN:

1. 📝 OCR RESEARCH (CRNN + CTC)
   ├── Description: Deep learning OCR for French/multilingual handwritten text
   ├── Tech Stack: TensorFlow, CRNN Architecture, CTC Loss
   ├── Performance: 96.2% accuracy, 15ms inference time
   ├── Category: ML/Research
   └── GitHub: https://github.com/murtaza-sadri-19/OCR-CRNN

2. 🛰️ 6D POSE ESTIMATION
   ├── Description: Space debris tracking using deep learning perception
   ├── Tech Stack: PyTorch, Computer Vision, 3D Transformations
   ├── Performance: 91.7% precision, 22ms processing time
   ├── Category: ML/Research
   └── Status: Research project (private repo)

3. 🔍 TLC IMAGE PROCESSING
   ├── Description: Automated plate/strip/spot detection system
   ├── Tech Stack: YOLO v5/v8, OpenCV, Python
   ├── Performance: 88.9% detection rate, 31ms speed
   ├── Category: ML/Computer Vision
   └── Use Case: Laboratory automation

4. 📱 CODERKABILA DSA TRACKER
   ├── Description: Community DSA practice tracker with Firebase
   ├── Tech Stack: Flutter, Firebase, Real-time Database
   ├── Metrics: 1.2k+ active users, 99.9% uptime
   ├── Category: Mobile/Web
   └── Features: Progress tracking, leaderboards, problem sets

5. 📊 HEALTH SURVEY APP
   ├── Description: Survey system for health/education policy planning
   ├── Tech Stack: Kotlin, Firebase, Google Sheets API
   ├── Impact: 5k+ surveys collected, real-time analytics
   ├── Category: Mobile/Analytics
   └── GitHub: https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid

6. 🏆 BLUETRIANGLE ABSENTEEISM
   ├── Description: Hackathon winner - absenteeism prediction ML model
   ├── Tech Stack: Scikit-learn, Pandas, Data Analysis
   ├── Achievement: 🏆 First place, 92.4% prediction accuracy  
   ├── Category: ML/Analytics
   └── GitHub: https://github.com/murtaza-sadri-19/BlueTriangle-Absenteeism

7. 🛒 SMARTSHOP E-COMMERCE PLATFORM
   ├── Description: Full-stack e-commerce with ML recommendations
   ├── Tech Stack: React, Node.js, MongoDB, TensorFlow.js
   ├── Features: Real-time recommendations, payment integration
   ├── Performance: 35% conversion increase, sub-100ms response
   ├── Category: E-commerce/ML
   └── Status: In development

8. 🌐 TECHTROVE PORTFOLIO
   ├── Description: Modern portfolio with interactive ML visualizations
   ├── Tech Stack: Next.js 15, TypeScript, Framer Motion, Tailwind
   ├── Features: Dark/light theme, binary animations, responsive
   ├── Performance: 98+ Lighthouse score, SSR optimized
   ├── Category: Web/Frontend
   └── Current Project: This website!

🔧 TECHNICAL EXPERTISE DEMONSTRATED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Machine Learning:
- Deep Learning: TensorFlow, PyTorch, CRNN, YOLO
- Computer Vision: OpenCV, Image Processing, Object Detection
- NLP: Text Recognition, Language Models
- MLOps: Model optimization, inference optimization

Full-Stack Development:  
- Frontend: React, Next.js, Flutter, TypeScript
- Backend: Node.js, Firebase, REST APIs
- Database: MongoDB, Firestore, Real-time DB
- Cloud: Firebase hosting, serverless functions

Mobile Development:
- Android: Kotlin, Java, native development
- Cross-platform: Flutter, React Native
- Backend integration: Firebase, REST APIs

Research & Analytics:
- Academic research methodologies
- Data analysis and visualization
- Performance optimization
- Statistical modeling

📈 IMPACT METRICS:
- 7k+ combined users across applications
- 96%+ average ML model accuracy
- 99%+ application uptime
- Multiple hackathon wins
- Open source contributions
*/

const demoProjects = [
  {
    title: 'OCR Research (CRNN + CTC)',
    category: 'ML',
    summary: 'Deep learning-based OCR pipeline for French and multilingual handwritten text recognition with 96.2% accuracy.',
    image: '/ocr-project.png',
    tags: ['TensorFlow', 'CRNN', 'CTC', 'Python', 'Computer Vision'],
    links: { 
      live: 'https://ocr-demo.vercel.app', 
      code: 'https://github.com/murtaza-sadri-19/OCR-CRNN' 
    },
    details: 'Challenge: Recognizing handwritten French text with high accuracy. Approach: CRNN architecture with CTC loss for sequence learning. Results: 96.2% accuracy, 15ms inference time. Used data augmentation and transfer learning for optimal performance.',
  },
  {
    title: '6D Pose Estimation',
    category: 'ML',
    summary: 'Research project on deep learning-based perception for space debris tracking using computer vision.',
    image: '/pose-estimation.png',
    tags: ['PyTorch', 'Computer Vision', '3D Geometry', 'Research'],
    links: { 
      live: '#', 
      code: '#' 
    },
    details: 'Challenge: Accurate 6D pose estimation of space objects. Approach: Custom CNN architecture with geometric constraints. Results: 91.7% precision, 22ms processing time. Implemented quaternion-based rotation representation.',
  },
  {
    title: 'TLC Image Processing',
    category: 'ML',
    summary: 'Automated plate, strip, and spot detection system using YOLO and OpenCV for laboratory automation.',
    image: '/tlc-detection.png',
    tags: ['YOLO', 'OpenCV', 'Python', 'Object Detection'],
    links: { 
      live: '#', 
      code: '#' 
    },
    details: 'Challenge: Automated detection of laboratory samples. Approach: YOLO v8 for object detection with custom dataset. Results: 88.9% detection rate, 31ms processing speed. Integrated with lab workflow systems.',
  },
  {
    title: 'CoderKabila DSA Tracker',
    category: 'Web',
    summary: 'Community-driven DSA practice tracker app with Firebase backend serving 1.2k+ active users.',
    image: '/coderkabila.png',
    tags: ['Flutter', 'Firebase', 'DSA', 'Real-time DB'],
    links: { 
      live: 'https://coderkabila.app', 
      code: '#' 
    },
    details: 'Challenge: Building engaging DSA practice platform. Approach: Flutter app with Firebase real-time database. Results: 1.2k+ users, 99.9% uptime. Features include progress tracking, leaderboards, and collaborative problem solving.',
  },
  {
    title: 'Health Survey App',
    category: 'Web',
    summary: 'Kotlin + Firebase survey system for health and education policy planning with 5k+ surveys collected.',
    image: '/health-survey.png',
    tags: ['Kotlin', 'Firebase', 'Google Sheets API', 'Analytics'],
    links: { 
      live: '#', 
      code: 'https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid' 
    },
    details: 'Challenge: Large-scale data collection for policy making. Approach: Android app with Firebase backend and Google Sheets integration. Results: 5k+ surveys, real-time analytics dashboard. Offline-first architecture for rural areas.',
  },
  {
    title: 'SmartShop E-commerce',
    category: 'E-commerce',
    summary: 'Full-stack e-commerce platform with ML-powered recommendations and seamless checkout experience.',
    image: '/smartshop.png',
    tags: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Stripe'],
    links: { 
      live: 'https://smartshop-demo.vercel.app', 
      code: 'https://github.com/murtaza-sadri-19/smartshop' 
    },
    details: 'Challenge: Building scalable e-commerce with personalization. Approach: MERN stack with TensorFlow.js recommendations. Results: 35% conversion increase, sub-100ms API response. Features include real-time inventory, payment processing, and ML recommendations.',
  }
];

const categories = ['All', 'Web', 'ML', 'E-commerce'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [modalIdx, setModalIdx] = useState<number|null>(null);

  const filtered = active==='All'
    ? demoProjects
    : demoProjects.filter(p => p.category === active);

  // Trap focus inside modal when open
  useEffect(() => {
    if (modalIdx !== null) {
      document.body.classList.add('overflow-hidden');
      return () => document.body.classList.remove('overflow-hidden');
    }
  }, [modalIdx]);

  return (
    <section id="projects" className="py-16 bg-white/90">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects & Case Studies</h2>
        <div className="mb-6 flex gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full ${active===cat ? 'bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white' : 'bg-slate-200'}`}
              onClick={() => setActive(cat)}
            >{cat}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((proj, idx) => (
            <div
              key={proj.title}
              tabIndex={0}
              aria-label={`${proj.title} details`}
              className="bg-white/70 rounded-lg glass-panel p-5 shadow-lg group relative hover:shadow-2xl focus:ring-2"
              onClick={() => setModalIdx(idx)}
              onKeyDown={e => { if (e.key==='Enter') setModalIdx(idx) }}
              role="button"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded" loading="lazy"/>
              <h3 className="mt-4 text-xl font-bold">{proj.title}</h3>
              <p className="text-sm mb-2">{proj.summary}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tags.map(t => <span key={t} className="bg-blue-100 rounded-full px-2 py-1 text-xs">{t}</span>)}
              </div>
              <div className="flex gap-2">
                <a href={proj.links.live} className="text-blue-600 hover:underline focus:underline">Live<ExternalLink className="inline ml-1" /></a>
                <a href={proj.links.code} className="text-blue-600 hover:underline focus:underline">Code<Github className="inline ml-1" /></a>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        <AnimatePresence>
        {modalIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed z-50 inset-0 flex items-center justify-center bg-black/60"
            onClick={() => setModalIdx(null)}
            tabIndex={0}
            aria-modal="true" role="dialog"
          >
            <motion.div
              initial={{ scale: .8, opacity: .3 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: .8, opacity: .3 }}
              className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative focus:outline-blue-600"
              tabIndex={0}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => { if (e.key === 'Escape') setModalIdx(null); }}
            >
              <button className="absolute top-3 right-3 p-1 bg-slate-100 rounded" onClick={() => setModalIdx(null)} aria-label="Close details">✕</button>
              <h3 className="mb-2 text-xl font-bold">{filtered[modalIdx].title}</h3>
              <img src={filtered[modalIdx].image} alt="" className="w-full max-h-48 object-contain rounded mb-3"/>
              <div className="mb-3 text-sm">{filtered[modalIdx].details}</div>
              <a href={filtered[modalIdx].links.live} className="inline-block text-blue-600 mr-3">Visit Live</a>
              <a href={filtered[modalIdx].links.code} className="inline-block text-blue-600">Source Code</a>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
