'use client';
import React, { useState, useEffect } from 'react'
import { Folder, ExternalLink, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackProjectView, trackExternalLink } from '../../lib/analytics'

const demoProjects = [
  {
    title: 'OCR Research (CRNN + CTC)',
    category: 'ML',
    summary: 'Deep learning-based OCR pipeline for French and multilingual handwritten text recognition with 96.2% accuracy.',
    image: 'images/LexiconVakhya.png',
    tags: ['TensorFlow', 'CRNN', 'CTC', 'Python', 'Computer Vision'],
    links: {
      live: '#',
      code: 'https://github.com/murtaza-sadri-19/OCR-CRNN' 
    },
    showLive: false,
    showCode: false,
    details: 'Challenge: Recognizing handwritten French text with high accuracy. Approach: CRNN architecture with CTC loss for sequence learning. Results: 96.2% accuracy, 15ms inference time. Used data augmentation and transfer learning for optimal performance.',
  },
  {
    title: 'Depth Estimation',
    category: 'ML',
    summary: 'Research project on deep learning-based Depth Estimation for depth tracking in real time drone flights using computer vision.',
    image: 'images/Depth_Estimation.jpg',
    tags: ['PyTorch', 'Computer Vision', '3D Geometry', 'Research'],
    links: { 
      live: '#', 
      code: '#' 
    },
    showLive: false,
    showCode: false,
    details: 'Challenge: Accurate depth estimation of terrestial objects. Approach: MiDas architecture with Raspberry Cam 3 wide. Results: high precision in depth, low latency depth maps.',
  },
  {
    title: 'TLC Image Processing',
    category: 'ML',
    summary: 'Automated plate, strip, and spot detection system using YOLO and OpenCV for laboratory automation.',
    image: 'images/CompuRf.jpg',
    tags: ['YOLO', 'OpenCV', 'Python', 'Object Detection'],
    links: { 
      live: '#', 
      code: '#' 
    },
    showLive: false,
    showCode: false,
    details: 'Challenge: Automated detection of laboratory samples. Approach: YOLO v8 for object detection with custom dataset. Results: 88.9% detection rate, 31ms processing speed. Integrated with lab workflow systems.',
  },
  {
    title: 'CoderKabila DSA Tracker',
    category: 'Web',
    summary: 'Community-driven DSA practice tracker app with real-time backend serving 1.2k+ active users.',
    image: 'images/CoderKabila.png',
    tags: ['Flutter', 'Node.js', 'DSA', 'Real-time DB'],
    links: { 
      live: 'https://coderkabila.app', 
      code: '#' 
    },
    showLive: false,
    showCode: false,
    details: 'Challenge: Building engaging DSA practice platform. Approach: Flutter app with Node.js real-time backend. Results: 1.2k+ users, 99.9% uptime. Features include progress tracking, leaderboards, and collaborative problem solving.',
  },
  {
    title: 'Health Survey App',
    category: 'Web',
    summary: 'Download from sgsits.ac.in Health Survey App',
    image: 'images/HealthApp.png',
    tags: ['Kotlin', 'Firebase', 'Google Sheets API', 'Analytics'],
    links: { 
      live: 'https://www.sgsits.ac.in/downloads', 
      code: 'https://github.com/murtaza-sadri-19/HealthSurveyAppAndroid' 
    },
    showLive: false,
    showCode: true,
    details: 'Challenge: Large-scale data collection for policy making. Approach: Android app with REST API backend and Google Sheets integration. Results: 5k+ surveys, real-time analytics dashboard. Offline-first architecture for rural areas.',
  }
  // ,
  // {
  //   title: 'SmartShop E-commerce',
  //   category: 'E-commerce',
  //   summary: 'Full-stack e-commerce platform with ML-powered recommendations and seamless checkout experience.',
  //   image: 'https://via.placeholder.com/400x200/6366F1/FFFFFF?text=SmartShop+ML',
  //   tags: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Stripe'],
  //   links: { 
  //     live: 'https://smartshop-demo.vercel.app', 
  //     code: 'https://github.com/murtaza-sadri-19/smartshop' 
  //   },
  //   showLive: true,
  //   showCode: true,
  //   details: 'Challenge: Building scalable e-commerce with personalization. Approach: MERN stack with TensorFlow.js recommendations. Results: 35% conversion increase, sub-100ms API response. Features include real-time inventory, payment processing, and ML recommendations.',
  // }
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
    <section id="projects" className="py-20 lg:py-28 bg-gradient-to-br from-background via-background/95 to-secondary/5 dark:from-background dark:via-background/98 dark:to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects & Case Studies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 dark:text-foreground/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A showcase of innovative solutions spanning AI/ML, web development, and research projects.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>
        
        <motion.div 
          className="mb-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                active===cat 
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 dark:shadow-primary/40' 
                  : 'glass-panel bg-background/60 dark:bg-background/40 text-foreground/80 dark:text-foreground/90 border border-border/30 dark:border-border/20 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-xl'
              }`}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj, idx) => (
            <motion.div
              key={proj.title}
              tabIndex={0}
              aria-label={`${proj.title} details`}
              className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl group relative cursor-pointer transition-all duration-300 focus:ring-2 focus:ring-primary/30 dark:focus:ring-accent/30 overflow-hidden"
              onClick={() => {
                setModalIdx(idx);
                trackProjectView(proj.title);
              }}
              onKeyDown={e => { 
                if (e.key==='Enter') {
                  setModalIdx(idx);
                  trackProjectView(proj.title);
                }
              }}
              role="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-60 object-cover rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-[1.02]" 
                  loading="lazy"
                />
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground dark:text-foreground transition-colors duration-200">
                  {proj.title}
                </h3>
                <p className="text-sm lg:text-base mb-6 text-foreground/70 dark:text-foreground/80 leading-relaxed transition-colors duration-200">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map(t => (
                    <span 
                      key={t} 
                      className="bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent rounded-2xl px-3 py-1.5 text-xs lg:text-sm font-medium border border-primary/20 dark:border-accent/30 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {proj.showLive && (
                  <a 
                    href={proj.links.live} 
                    className="text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:underline focus:underline transition-colors duration-200 inline-flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackExternalLink(proj.links.live, 'live', proj.title);
                    }}
                  >
                    Live<ExternalLink className="inline ml-1" size={14} />
                  </a>
                )}
                {proj.showCode && (
                  <a 
                    href={proj.links.code} 
                    className="text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 hover:underline focus:underline transition-colors duration-200 inline-flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackExternalLink(proj.links.code, 'code', proj.title);
                    }}
                  >
                    Code<Github className="inline ml-1" size={14} />
                  </a>
                )}
                {!proj.showLive && !proj.showCode && (
                  <span className="text-muted-foreground dark:text-muted-foreground text-sm italic">
                    Project details available on request
                  </span>
                )}
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
              className="glass-panel bg-background/90 dark:bg-background/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 max-w-2xl w-full mx-4 relative focus:outline-primary border border-border/40 dark:border-border/20"
              tabIndex={0}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => { if (e.key === 'Escape') setModalIdx(null); }}
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-background/80 dark:bg-background/60 hover:bg-background/90 dark:hover:bg-background/80 rounded-full transition-colors duration-200 border border-border/30" 
                onClick={() => setModalIdx(null)} 
                aria-label="Close details"
              >
                <span className="text-foreground/70 dark:text-foreground/80">✕</span>
              </button>
              <h3 className="mb-6 text-2xl lg:text-3xl font-bold text-foreground dark:text-foreground">
                {filtered[modalIdx].title}
              </h3>
              <img 
                src={filtered[modalIdx].image} 
                alt="" 
                className="w-full max-h-64 object-cover rounded-2xl mb-6"
              />
              <div className="mb-6 text-foreground/80 dark:text-foreground/90 leading-relaxed text-lg">
                {filtered[modalIdx].details}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {filtered[modalIdx].tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent rounded-2xl px-4 py-2 text-sm font-medium border border-primary/20 dark:border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                {filtered[modalIdx].showLive && (
                  <a 
                    href={filtered[modalIdx].links.live} 
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Visit Live
                  </a>
                )}
                {filtered[modalIdx].showCode && (
                  <a 
                    href={filtered[modalIdx].links.code} 
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
                {!filtered[modalIdx].showLive && !filtered[modalIdx].showCode && (
                  <div className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <p className="text-muted-foreground dark:text-muted-foreground mb-2">
                      This project is currently under development or contains confidential code.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Please contact me for more details or a private demo.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
