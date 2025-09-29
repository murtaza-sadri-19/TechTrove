'use client';
import React from 'react';
import { Code, Award, Briefcase, Sparkles, Brain, Rocket, Zap, Target, Coffee, GitBranch, Database, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'Kotlin', 'OpenCV', 'GANs', 'Node.js', 'MongoDB'];
  
  const floatingIcons = [
    { icon: Brain, delay: 0, x: "10%", y: "20%", duration: 4 },
    { icon: Rocket, delay: 1, x: "85%", y: "15%", duration: 5 },
    { icon: Zap, delay: 2, x: "15%", y: "70%", duration: 3.5 },
    { icon: Target, delay: 0.5, x: "90%", y: "80%", duration: 4.5 },
    { icon: Coffee, delay: 1.5, x: "5%", y: "45%", duration: 6 },
    { icon: GitBranch, delay: 2.5, x: "95%", y: "50%", duration: 3.8 },
    { icon: Database, delay: 3, x: "8%", y: "85%", duration: 5.2 },
    { icon: Monitor, delay: 0.8, x: "92%", y: "25%", duration: 4.2 }
  ];
  
  const codeSnippets = [
    "const passion = 'AI & ML';",
    "function innovate() {",
    "  return creativity + code;",
    "}",
    "// Building the future"
  ];
  
  const achievements = [
    { year: "2024", event: "Patent Filed", color: "primary" },
    { year: "2024", event: "Research Project", color: "accent" },
    { year: "2024", event: "Skillathon Winner", color: "primary" },
    { year: "2025", event: "Research Internship", color: "accent" }
  ];
  
  // Static particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: "15%", top: "25%", duration: 4.2, delay: 0.5 },
    { left: "85%", top: "35%", duration: 5.8, delay: 1.2 },
    { left: "25%", top: "65%", duration: 4.8, delay: 0.8 },
    { left: "75%", top: "15%", duration: 5.2, delay: 1.8 },
    { left: "35%", top: "80%", duration: 4.5, delay: 0.3 },
    { left: "65%", top: "45%", duration: 5.5, delay: 1.5 },
    { left: "45%", top: "30%", duration: 4.3, delay: 0.9 },
    { left: "55%", top: "70%", duration: 5.1, delay: 1.1 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-br from-background via-background/95 to-secondary/5 dark:from-background dark:via-background/98 dark:to-secondary/10 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/3 rounded-full blur-2xl pointer-events-none" />
      
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none z-0"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <IconComponent 
              size={24} 
              className="text-primary/20 dark:text-accent/20" 
            />
          </motion.div>
        );
      })}
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            {/* Story Card */}
            <motion.div 
              className="lg:col-span-7"
              variants={itemVariants}
            >
              <motion.div 
                className="glass-panel p-8 sm:p-10 rounded-3xl shadow-2xl bg-background/70 dark:bg-background/50 border border-border/40 dark:border-border/20 backdrop-blur-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-xl" />
                
                {/* Floating Code Snippet */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-10 dark:opacity-20 font-mono text-xs pointer-events-none"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {codeSnippets.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 0.3, x: 0 }}
                      transition={{ delay: i * 0.5, duration: 0.5 }}
                      className="text-primary dark:text-accent"
                    >
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">My Journey</h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-foreground/85 dark:text-foreground/90 leading-relaxed text-base sm:text-lg mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Hi, I'm <strong>Murtaza Sadriwala</strong>, a B.Tech Information Technology student at <strong>Shri G.S. Institute of Technology and Sciences, Indore</strong>. 
                    I am a self-driven software engineer with hands-on experience in <strong>machine learning, computer vision, and full-stack application development</strong>. 
                    I am passionate about leveraging technology to solve real-world problems and building innovative, data-driven solutions that make an impact. 
                    I have participated in <strong>hackathons like Skillathon</strong>, contributed to <strong>research projects on deep learning for 6D pose estimation of space objects</strong>, 
                    and interned on <strong>handwritten image-to-text translation projects</strong>. I continuously explore emerging technologies and enjoy turning complex ideas into practical applications.
                  </motion.p>
                  
                  {/* Skills Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <h4 className="text-lg font-semibold text-foreground/90 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Tech Stack & Skills
                    </h4>
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {skills.map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          variants={skillVariants}
                          custom={index}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 500, 
                            damping: 15,
                            delay: index * 0.05
                          }}
                          className="px-4 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 dark:from-primary/25 dark:to-accent/25 text-primary dark:text-accent rounded-2xl text-sm font-semibold border border-primary/30 dark:border-accent/40 hover:border-primary/50 dark:hover:border-accent/60 transition-all duration-300 cursor-pointer select-none backdrop-blur-sm shadow-lg hover:shadow-xl"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats Cards */}
            <motion.div 
              className="lg:col-span-3 flex flex-col gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="glass-panel p-4 rounded-2xl shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/30 hover:shadow-2xl transition-all duration-500 group"
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-center">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mx-auto w-fit mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-primary dark:text-accent" size={24} />
                  </div>
                  <motion.div 
                    className="font-bold text-2xl text-primary dark:text-accent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    10+
                  </motion.div>
                  <div className="text-xs text-muted-foreground font-medium">Projects</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-panel p-4 rounded-2xl shadow-xl bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 border border-accent/20 dark:border-primary/30 hover:shadow-2xl transition-all duration-500 group"
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-center">
                  <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl mx-auto w-fit mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-accent dark:text-primary" size={24} />
                  </div>
                  <motion.div 
                    className="font-bold text-2xl text-accent dark:text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
                  >
                    3
                  </motion.div>
                  <div className="text-xs text-muted-foreground font-medium">Internships</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-panel p-4 rounded-2xl shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/30 hover:shadow-2xl transition-all duration-500 group"
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-center">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mx-auto w-fit mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-primary dark:text-accent" size={24} />
                  </div>
                  <motion.div 
                    className="font-bold text-2xl text-primary dark:text-accent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  >
                    1
                  </motion.div>
                  <div className="text-xs text-muted-foreground font-medium">Patent</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Interactive Timeline */}
            <motion.div 
              className="lg:col-span-2 flex flex-col gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="glass-panel p-6 rounded-2xl shadow-xl bg-gradient-to-br from-background/60 to-background/40 dark:from-background/40 dark:to-background/20 border border-border/30 backdrop-blur-xl"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <Rocket className="text-primary dark:text-accent" size={20} />
                  Journey Highlights
                </h4>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${achievement.color === 'primary' ? 'bg-primary' : 'bg-accent'} group-hover:scale-125 transition-transform`} />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground/90">{achievement.event}</div>
                        <div className="text-xs text-muted-foreground">{achievement.year}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Fun Facts Card */}
              <motion.div 
                className="glass-panel p-6 rounded-2xl shadow-xl bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 border border-accent/20 dark:border-primary/30"
                whileHover={{ y: -3, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Coffee className="text-accent dark:text-primary" size={20} />
                  Fun Facts
                </h4>
                
                <div className="space-y-3 text-sm text-foreground/80">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Zap size={14} className="text-primary" />
                    <span>Debugs faster with coffee ☕</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Brain size={14} className="text-accent" />
                    <span>Thinks in algorithms 🧠</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Target size={14} className="text-primary" />
                    <span>Perfects every pixel 🎯</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Particles */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 dark:bg-accent/30 rounded-full pointer-events-none"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}