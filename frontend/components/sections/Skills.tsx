'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNextdotjs } from "react-icons/si";

export function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-gradient-to-br from-background via-background/95 to-secondary/5 dark:from-background dark:via-background/98 dark:to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
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
            Tech Stack & Skills
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-foreground/70 dark:text-foreground/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            My comprehensive toolkit spanning frontend, backend, AI/ML, and modern development practices.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Frontend */}
          <motion.div 
            className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            data-testid="skills-frontend"
          >
            {/* Card Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl" />
            
            <div className="text-center relative z-10">
              <div className="text-4xl lg:text-5xl mb-6 text-primary dark:text-primary transition-colors duration-300">
                <FaReact className="mx-auto group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-foreground">Frontend</h3>
              <ul className="space-y-3 text-foreground/70 dark:text-foreground/80">
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <SiNextdotjs className="text-primary dark:text-accent" /> 
                  Next.js 14
                </li>
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaReact className="text-primary dark:text-accent" /> 
                  React
                </li>
                <li className="text-sm lg:text-base font-medium">TypeScript</li>
                <li className="text-sm lg:text-base font-medium">Tailwind CSS</li>
                <li className="text-sm lg:text-base font-medium">Framer Motion</li>
              </ul>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            data-testid="skills-backend"
          >
            {/* Card Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-full blur-2xl" />
            
            <div className="text-center relative z-10">
              <div className="text-4xl lg:text-5xl mb-6 text-accent dark:text-accent transition-colors duration-300">
                <FaNodeJs className="mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-foreground">Backend</h3>
              <ul className="space-y-3 text-foreground/70 dark:text-foreground/80">
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaNodeJs className="text-primary dark:text-accent" /> 
                  Node.js
                </li>
                <li className="text-sm lg:text-base font-medium">PostgreSQL & MongoDB</li>
                <li className="text-sm lg:text-base font-medium">Express.js</li>
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaDatabase className="text-primary dark:text-accent" /> 
                  REST APIs, GraphQL
                </li>
              </ul>
            </div>
          </motion.div>

          {/* AI / Data Science */}
          <motion.div 
            className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            data-testid="skills-ai"
          >
            {/* Card Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-2xl" />
            
            <div className="text-center relative z-10">
              <div className="text-4xl lg:text-5xl mb-6 text-primary dark:text-primary transition-colors duration-300">
                <SiTensorflow className="mx-auto group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-foreground">AI / Data Science</h3>
              <ul className="space-y-3 text-foreground/70 dark:text-foreground/80">
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <SiTensorflow className="text-primary dark:text-accent" /> 
                  TensorFlow, 
                  <SiPytorch className="text-primary dark:text-accent" /> 
                  PyTorch
                </li>
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaPython className="text-primary dark:text-accent" /> 
                  Deep Learning (CNN, RNN)
                </li>
                <li className="text-sm lg:text-base font-medium">Computer Vision (OpenCV, YOLO)</li>
                <li className="text-sm lg:text-base font-medium">NLP (Hugging Face, OpenAI)</li>
                <li className="text-sm lg:text-base font-medium">Vector DBs (Pinecone, FAISS)</li>
              </ul>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="glass-panel bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/40 dark:border-border/20 rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            data-testid="skills-tools"
          >
            {/* Card Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-full blur-2xl" />
            
            <div className="text-center relative z-10">
              <div className="text-4xl lg:text-5xl mb-6 text-accent dark:text-accent transition-colors duration-300">
                <FaGithub className="mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-foreground">Tools & Platforms</h3>
              <ul className="space-y-3 text-foreground/70 dark:text-foreground/80">
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaGithub className="text-primary dark:text-accent" /> 
                  Git & GitHub
                </li>
                <li className="flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
                  <FaDocker className="text-primary dark:text-accent" /> 
                  Docker
                </li>
                <li className="text-sm lg:text-base font-medium">CI/CD Pipelines</li>
                <li className="text-sm lg:text-base font-medium">Linux & Shell Scripting</li>
                <li className="text-sm lg:text-base font-medium">Vercel & Netlify</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}