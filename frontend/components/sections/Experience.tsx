'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Calendar, MapPin } from 'lucide-react';

const jobs = [
  {
    company: 'Startup Inc.',
    role: 'Lead ML Engineer',
    period: '2023–2025',
    location: 'San Francisco, CA',
    type: 'Full-time',
    color: 'from-blue-500 to-purple-600',
    bullets: [
      'Headed ML commerce engine development with 40% performance improvement',
      'Built GANs for image generation reducing processing time by 60%',
      'Mentored 3 engineers and established ML best practices',
      'Implemented distributed training pipelines reducing model training time by 70%'
    ],
  },
  {
    company: 'Tech Corp',
    role: 'Senior Software Engineer',
    period: '2021–2023',
    location: 'New York, NY',
    type: 'Full-time',
    color: 'from-green-500 to-teal-600',
    bullets: [
      'Developed scalable e-commerce platform serving 100K+ users',
      'Implemented microservices architecture with 99.9% uptime',
      'Led migration to cloud-native solutions',
      'Reduced system latency by 45% through optimization and caching strategies'
    ],
  },
  {
    company: 'Innovation Labs',
    role: 'Full Stack Developer',
    period: '2019–2021',
    location: 'Austin, TX',
    type: 'Contract',
    color: 'from-orange-500 to-red-600',
    bullets: [
      'Built responsive web applications using React and Node.js',
      'Integrated machine learning models into production systems',
      'Collaborated with cross-functional teams on product features',
      'Achieved 98% code coverage through comprehensive testing strategies'
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeTimelineItem, setActiveTimelineItem] = useState<number>(0);

  const toggleExpand = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Progressive reveal animation
    const timer = setTimeout(() => {
      setVisibleItems([0, 1, 2]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate through timeline items
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-16 lg:py-20 bg-gradient-to-br from-white/90 to-blue-50/50 dark:from-gray-900/90 dark:to-purple-900/30 transition-colors duration-300">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-600 bg-clip-text text-transparent">
            Experience & Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            My journey through the tech industry, building impactful solutions and leading innovative projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline line with animation */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 via-accent/40 to-primary/30 rounded-full hidden sm:block overflow-hidden"
            style={{ height: '100%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Animated pulse effect */}
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent opacity-60"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ height: '50%' }}
            />
          </motion.div>
          
          <div className="space-y-16">
            {jobs.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Enhanced Timeline dot with hover effects and active state */}
                               
                {/* Year badge */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-10 hidden sm:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  <div className={`bg-gradient-to-r ${job.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                    {job.period.split('–')[0]}
                  </div>
                </motion.div>
                
                {/* Content card - alternating sides with enhanced styling */}
                <div className={`flex items-start ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Spacer for desktop */}
                  <div className="hidden sm:block flex-1 max-w-sm"></div>
                  
                  {/* Content */}
                  <div className="flex-1 sm:max-w-lg">
                    <motion.div 
                      className={`glass-panel bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        index % 2 === 0 ? 'sm:ml-12' : 'sm:mr-12'
                      }`}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => toggleExpand(index)}
                        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl"
                        aria-expanded={openIndex === index}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                                {job.role}
                              </h3>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${job.color} text-white`}>
                                {job.type}
                              </span>
                            </div>
                            <p className="text-primary dark:text-primary-400 font-semibold mb-2">
                              {job.company}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{job.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                          <motion.div 
                            className="ml-4 text-gray-500 dark:text-gray-400 mt-1"
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
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
                            <div className="px-6 pb-6 border-t border-gray-200/50 dark:border-gray-700/30 pt-4">
                              <ul className="space-y-4">
                                {job.bullets.map((bullet, bulletIndex) => (
                                  <motion.li
                                    key={bulletIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: bulletIndex * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <div className={`w-2 h-2 bg-gradient-to-r ${job.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{bullet}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden sm:block flex-1"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}