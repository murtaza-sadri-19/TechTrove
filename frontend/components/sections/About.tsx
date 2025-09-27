'use client';
import React from 'react';
import { Code, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'Kotlin', 'Firebase', 'GANs', 'Node.js', 'MongoDB'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-white/50 dark:bg-secondary-900/50 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="glass-panel p-6 sm:p-8 rounded-2xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <motion.div className="flex-1" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                Self-motivated software engineer with expertise in building scalable e-commerce platforms, 
                machine learning solutions, and cloud-native applications. Passionate about creating 
                innovative solutions that bridge technology and business needs.
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mt-6"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary dark:text-accent-foreground rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.a 
                href="https://drive.google.com/file/d/1IYbUNttwCezWzIOAmMAzOfzKn9KFukT2/view" 
                className="mt-6 inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex flex-col justify-center items-center gap-6"
              variants={itemVariants}
            >
              <div className="flex gap-6 sm:gap-8 text-center">
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-3">
                    <Code className="text-primary dark:text-accent" size={28} />
                  </div>
                  <div className="font-bold text-2xl sm:text-3xl text-primary dark:text-accent">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-3">
                    <Briefcase className="text-primary dark:text-accent" size={28} />
                  </div>
                  <div className="font-bold text-2xl sm:text-3xl text-primary dark:text-accent">6</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Internships</div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-3">
                    <Award className="text-primary dark:text-accent" size={28} />
                  </div>
                  <div className="font-bold text-2xl sm:text-3xl text-primary dark:text-accent">4</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}