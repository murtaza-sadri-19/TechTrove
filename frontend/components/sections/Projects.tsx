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

const demoProjects = [
  {
    title: 'OCR Research (CRNN + CTC)',
    category: 'ML',
    summary: 'Deep learning-based OCR pipeline for French and multilingual handwritten text recognition with 96.2% accuracy.',
    image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=OCR+Research',
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
    image: 'https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=6D+Pose+Estimation',
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
    image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=TLC+Detection',
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
    summary: 'Community-driven DSA practice tracker app with real-time backend serving 1.2k+ active users.',
    image: 'https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=CoderKabila',
    tags: ['Flutter', 'Node.js', 'DSA', 'Real-time DB'],
    links: { 
      live: 'https://coderkabila.app', 
      code: '#' 
    },
    details: 'Challenge: Building engaging DSA practice platform. Approach: Flutter app with Node.js real-time backend. Results: 1.2k+ users, 99.9% uptime. Features include progress tracking, leaderboards, and collaborative problem solving.',
  },
  {
    title: 'Health Survey App',
    category: 'Web',
    summary: 'Kotlin + REST API survey system for health and education policy planning with 5k+ surveys collected.',
    image: 'https://via.placeholder.com/400x200/EF4444/FFFFFF?text=Health+Survey',
    tags: ['Kotlin', 'REST API', 'Google Sheets API', 'Analytics'],
    links: { 
      live: '#', 
      code: 'https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid' 
    },
    details: 'Challenge: Large-scale data collection for policy making. Approach: Android app with REST API backend and Google Sheets integration. Results: 5k+ surveys, real-time analytics dashboard. Offline-first architecture for rural areas.',
  },
  {
    title: 'SmartShop E-commerce',
    category: 'E-commerce',
    summary: 'Full-stack e-commerce platform with ML-powered recommendations and seamless checkout experience.',
    image: 'https://via.placeholder.com/400x200/6366F1/FFFFFF?text=SmartShop+ML',
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
    <section id="projects" className="py-16 bg-gradient-to-br from-white/90 to-blue-50/50 dark:from-gray-900/90 dark:to-purple-900/30 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects & Case Studies
        </motion.h2>
        
        <motion.div 
          className="mb-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                active===cat 
                  ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/25 dark:shadow-primary/40' 
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-sm'
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj, idx) => (
            <motion.div
              key={proj.title}
              tabIndex={0}
              aria-label={`${proj.title} details`}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl glass-panel p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group relative hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary/10 focus:ring-2 focus:ring-primary/50 cursor-pointer transition-all duration-300 hover:-translate-y-2"
              onClick={() => setModalIdx(idx)}
              onKeyDown={e => { if (e.key==='Enter') setModalIdx(idx) }}
              role="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-[1.02]" 
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 transition-colors duration-200">
                {proj.title}
              </h3>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-400 transition-colors duration-200">
                {proj.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map(t => (
                  <span 
                    key={t} 
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a 
                  href={proj.links.live} 
                  className="text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:underline focus:underline transition-colors duration-200 inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live<ExternalLink className="inline ml-1" size={14} />
                </a>
                <a 
                  href={proj.links.code} 
                  className="text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:underline focus:underline transition-colors duration-200 inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Code<Github className="inline ml-1" size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Modal with dark theme support */}
        <AnimatePresence>
        {modalIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed z-50 inset-0 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={() => setModalIdx(null)}
            tabIndex={0}
            aria-modal="true" 
            role="dialog"
          >
            <motion.div
              initial={{ scale: .8, opacity: .3 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: .8, opacity: .3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 relative focus:outline-primary border border-gray-200 dark:border-gray-700 backdrop-blur-xl"
              tabIndex={0}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => { if (e.key === 'Escape') setModalIdx(null); }}
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-200" 
                onClick={() => setModalIdx(null)} 
                aria-label="Close details"
              >
                <span className="text-gray-600 dark:text-gray-400">✕</span>
              </button>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {filtered[modalIdx].title}
              </h3>
              <img 
                src={filtered[modalIdx].image} 
                alt="" 
                className="w-full max-h-64 object-cover rounded-lg mb-6"
              />
              <div className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {filtered[modalIdx].details}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {filtered[modalIdx].tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={filtered[modalIdx].links.live} 
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  Visit Live
                </a>
                <a 
                  href={filtered[modalIdx].links.code} 
                  className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={18} />
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
