'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const jobs = [
  {
    company: 'Startup Inc.',
    role: 'Lead ML Engineer',
    period: '2023–2025',
    bullets: [
      'Headed ML commerce engine development with 40% performance improvement',
      'Built GANs for image generation reducing processing time by 60%',
      'Mentored 3 engineers and established ML best practices'
    ],
  },
  {
    company: 'Tech Corp',
    role: 'Senior Software Engineer',
    period: '2021–2023',
    bullets: [
      'Developed scalable e-commerce platform serving 100K+ users',
      'Implemented microservices architecture with 99.9% uptime',
      'Led migration to cloud-native solutions'
    ],
  },
  {
    company: 'Innovation Labs',
    role: 'Full Stack Developer',
    period: '2019–2021',
    bullets: [
      'Built responsive web applications using React and Node.js',
      'Integrated machine learning models into production systems',
      'Collaborated with cross-functional teams on product features'
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-background to-secondary/10">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Experience & Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - fixed positioning */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '100%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block"
            style={{ left: '32px' }}
          ></motion.div>
          
          <div className="space-y-6 sm:space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-14"
              >
                {/* Timeline dot - perfectly centered on line */}
                <div 
                  className="absolute top-6 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg z-10 hidden sm:block"
                  style={{ left: '29px' }}
                ></div>
                
                {/* Content card */}
                <div className="sm:ml-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {job.role}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {job.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {job.period}
                        </p>
                      </div>
                      <div className="ml-4 text-muted-foreground">
                        {openIndex === index ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </div>
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
                        <div className="px-6 pb-6 border-t border-border/50 pt-4">
                          <ul className="space-y-2">
                            {job.bullets.map((bullet, bulletIndex) => (
                              <motion.li
                                key={bulletIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: bulletIndex * 0.1 }}
                                className="flex items-start text-muted-foreground"
                              >
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed">{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}