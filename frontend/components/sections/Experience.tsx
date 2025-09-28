'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

const jobs = [
  {
    company: 'CloudRaft Technologies',
    role: 'AI Research Intern',
    period: 'Jul 2024 - Present',
    location: 'Indore, Madhya Pradesh',
    type: 'Internship',
    color: 'from-blue-500 to-purple-600',
    skills: ['AI Research', 'Machine Learning', 'Deep Learning'],
    achievements: ['Research Projects', 'Professional Growth'],
    bullets: [
      'Contributing to AI research initiatives and experimental projects',
      'Engaged in intellectually challenging tasks fostering professional growth in AI'
    ],
  },
  {
    company: 'Sparobix',
    role: 'Research Intern',
    period: 'Mar 2024 - Aug 2024',
    location: 'Indore, Madhya Pradesh',
    type: 'Research Associate',
    color: 'from-green-500 to-teal-600',
    skills: ['Computer Vision', 'HOG Descriptors', 'SVM', 'PSO', 'Neural Networks'],
    achievements: ['Swarm Intelligence', 'Space Imagery Analysis', 'Algorithm Implementation'],
    bullets: [
      'Implemented and analyzed Histogram of Oriented Gradients (HOG) descriptors for terrestrial object identification, researching the integration of HOG with Support Vector Machines (SVM).',
      'Completed literature review and implementation of Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO), and Artificial Bee Colony (ABC) algorithms.',
      'Contributed to Neural Network development for static image classification of space imagery, including design and planning phases for earth-based scene categorization.'
    ],
  },
  {
    company: 'Compu Rf',
    role: 'Computer Vision Intern',
    period: 'Mar 2024 - May 2024',
    location: 'SGSITS, Indore',
    type: 'Student Researcher',
    color: 'from-orange-500 to-red-600',
    skills: ['OpenCV', 'YOLO', 'Image Processing', 'TLC Analysis'],
    achievements: ['Pipeline Development', 'Real-time Automation', 'Detection Accuracy'],
    bullets: [
      'Developed a computer vision-based image processing pipeline for automated Thin Layer Chromatography (TLC) analysis.',
      'Leveraged OpenCV and YOLO models to accurately detect and segment TLC plates, strips, and chemical spots.',
      'Improved detection robustness using adaptive thresholding, image preprocessing, and modular pipeline design for real-time lab automation.'
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Ensure component is mounted before running effects
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleExpand = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpand(index);
    }
  };
  
  // Collect all unique skills
  const allSkills = Array.from(new Set(jobs.flatMap(job => job.skills)));
  
  // Experience stats
  const stats = [
    { label: 'Total Experience', value: '8+ Months' },
    { label: 'Research Projects', value: '10+' },
    { label: 'Technologies', value: allSkills.length.toString() },
    { label: 'Companies', value: jobs.length.toString() }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (!mounted) {
    return (
      <section id="experience" className="py-20 lg:py-28 bg-gradient-to-br from-background via-background/95 to-secondary/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 lg:py-28 bg-gradient-to-br from-background via-background/95 to-secondary/5 dark:from-background dark:via-background/98 dark:to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating Code Elements - Optimized for performance */}
      {mounted && ['AI', 'CV', 'ML', 'HOG', 'SVM'].map((tech, i) => (
        <motion.div
          key={tech}
          className="absolute pointer-events-none text-primary/10 dark:text-accent/10 font-mono text-sm font-bold hidden lg:block"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 60}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          {tech}
        </motion.div>
      ))}
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
          >
            Experience & Timeline
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-foreground/70 dark:text-foreground/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            My journey through the tech industry, building impactful solutions and leading innovative projects.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>
        
        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-panel p-4 rounded-2xl bg-background/60 dark:bg-background/40 border border-border/30 backdrop-blur-xl text-center group"
            >
              <div className="font-bold text-xl text-primary dark:text-accent mb-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skills Overview */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary dark:text-accent rounded-2xl text-sm font-semibold border border-primary/20 dark:border-accent/30 hover:border-primary/40 dark:hover:border-accent/50 cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 via-accent/40 to-primary/30 rounded-full hidden lg:block h-full">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent opacity-60 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {jobs.map((job, index) => (
                <motion.div
                  key={`${job.company}-${index}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                                    
                  {/* Year Badge - Desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-10 hidden lg:block">
                    <div className={`bg-gradient-to-r ${job.color} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg`}>
                      {job.period.split(' - ')[0]}
                    </div>
                  </div>

                  {/* Card Layout */}
                  <div className="grid lg:grid-cols-12 gap-8 items-start relative">
                    {/* Main Content Card - Always on the left */}
                    <div className="lg:col-span-7 lg:col-start-1">
                      <div className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        {/* Card Decoration */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${job.color}/10 rounded-full blur-2xl`} />
                        
                        <div className="relative z-10">
                          <button
                            onClick={() => toggleExpand(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-full p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-3xl transition-colors duration-300"
                            aria-expanded={openIndex === index}
                            aria-label={`${openIndex === index ? 'Collapse' : 'Expand'} details for ${job.role} at ${job.company}`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                {/* Header */}
                                <div className="mb-4">
                                  <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">
                                      {job.role}
                                    </h3>
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${job.color} text-white shadow-lg flex-shrink-0`}>
                                      {job.type}
                                    </span>
                                  </div>
                                  <p className="text-primary dark:text-accent font-bold text-lg mb-3 truncate">
                                    {job.company}
                                  </p>
                                </div>
                                
                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
                                  <div className="flex items-center gap-2 bg-background/40 px-3 py-1.5 rounded-xl">
                                    <Calendar className="w-4 h-4 text-primary dark:text-accent flex-shrink-0" />
                                    <span className="font-medium">{job.period}</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-background/40 px-3 py-1.5 rounded-xl">
                                    <MapPin className="w-4 h-4 text-primary dark:text-accent flex-shrink-0" />
                                    <span className="font-medium">{job.location}</span>
                                  </div>
                                </div>
                                
                                {/* Skills Preview */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {job.skills.slice(0, 3).map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-xs font-medium rounded-lg">
                                      {skill}
                                    </span>
                                  ))}
                                  {job.skills.length > 3 && (
                                    <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs font-medium rounded-lg">
                                      +{job.skills.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <motion.div
                                className="ml-4 p-2 bg-background/40 rounded-xl flex-shrink-0"
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-primary dark:text-accent" />
                              </motion.div>
                            </div>
                          </button>

                          <AnimatePresence>
                            {openIndex === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-border/30 pt-6">
                                  {/* Responsibilities */}
                                  <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-4 flex items-center gap-2">
                                      <div className={`w-2 h-2 bg-gradient-to-r ${job.color} rounded-full animate-pulse`} />
                                      Key Responsibilities
                                    </h4>
                                    <ul className="space-y-4">
                                      {job.bullets.map((bullet, bulletIndex) => (
                                        <motion.li
                                          key={bulletIndex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: bulletIndex * 0.1 }}
                                          className="flex items-start group"
                                        >
                                          <div className={`w-3 h-3 bg-gradient-to-r ${job.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                                          <span className="text-sm leading-relaxed text-foreground/80 dark:text-foreground/90">{bullet}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  {/* All Skills */}
                                  <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">
                                      Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {job.skills.map((skill, skillIndex) => (
                                        <motion.span
                                          key={skill}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: skillIndex * 0.05 }}
                                          className={`px-3 py-1.5 bg-gradient-to-r ${job.color}/10 dark:${job.color}/20 text-primary dark:text-accent rounded-xl text-sm font-medium border border-primary/20 dark:border-accent/30 hover:scale-105 transition-transform cursor-pointer`}
                                        >
                                          {skill}
                                        </motion.span>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Achievements */}
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">
                                      Key Achievements
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {job.achievements.map((achievement, achIndex) => (
                                        <motion.div
                                          key={achievement}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: achIndex * 0.1 }}
                                          className="p-2 bg-background/40 dark:bg-background/30 rounded-xl"
                                        >
                                          <span className="text-sm font-medium text-foreground/80 dark:text-foreground/90">{achievement}</span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    
                    {/* Side Panel - Always on the right */}
                    <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
                      <motion.div 
                        className="sticky top-8 space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Company Info */}
                        <div className="glass-panel p-4 rounded-2xl bg-background/40 dark:bg-background/30 border border-border/20 dark:border-border/30 backdrop-blur-xl">
                          <div className="mb-3">
                            <h4 className="font-semibold text-foreground dark:text-foreground">Company</h4>
                          </div>
                          <p className="text-sm font-bold text-primary dark:text-accent">{job.company}</p>
                          <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">{job.location}</p>
                        </div>
                        
                        {/* Duration */}
                        <div className="glass-panel p-4 rounded-2xl bg-background/40 dark:bg-background/30 border border-border/20 dark:border-border/30 backdrop-blur-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="text-primary dark:text-accent" size={18} />
                            <h4 className="font-semibold text-foreground dark:text-foreground">Duration</h4>
                          </div>
                          <p className="text-sm font-bold text-foreground dark:text-foreground">{job.period}</p>
                          <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">{job.type}</p>
                        </div>
                        
                        {/* Top Skills */}
                        <div className="glass-panel p-4 rounded-2xl bg-background/40 dark:bg-background/30 border border-border/20 dark:border-border/30 backdrop-blur-xl">
                          <div className="mb-3">
                            <h4 className="font-semibold text-foreground dark:text-foreground">Top Skills</h4>
                          </div>
                          <div className="space-y-2">
                            {job.skills.slice(0, 4).map((skill) => (
                              <div key={skill} className="text-xs font-medium text-foreground/80 dark:text-foreground/90 bg-primary/5 dark:bg-accent/10 px-2 py-1 rounded-lg">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}