'use client';
import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackContactFormSubmit, trackSocialMediaClick } from '../../lib/analytics';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [copyMsg, setCopyMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Validate form fields
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      alert('All fields required');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Track successful form submission
    trackContactFormSubmit();
    
    setSent(true);
    setIsLoading(false);
    form.reset();
    
    setTimeout(() => setSent(false), 3000);
  }

  function copyEmail() {
    navigator.clipboard.writeText('murtazasadriwala09@gmail.com');
    setCopyMsg('Copied!');
    setTimeout(() => setCopyMsg(''), 2000);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-to-br from-background/50 via-background/30 to-secondary/10 dark:from-background/80 dark:via-background/60 dark:to-secondary/20 transition-colors duration-500">
      <div className="container max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          
          <motion.form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 rounded-2xl shadow-xl border border-border/50 dark:border-border/30 bg-background/60 dark:bg-background/40 backdrop-blur-xl transition-all duration-500"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 dark:text-foreground/90 mb-1 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input w-full px-4 py-3 rounded-lg border border-border dark:border-border/60 bg-background/50 dark:bg-background/30 text-foreground placeholder-muted-foreground backdrop-blur-sm transition-all duration-300 focus:border-primary dark:focus:border-accent focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 hover:border-primary/60 dark:hover:border-accent/60"
                  placeholder="Your Name"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 dark:text-foreground/90 mb-1 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input w-full px-4 py-3 rounded-lg border border-border dark:border-border/60 bg-background/50 dark:bg-background/30 text-foreground placeholder-muted-foreground backdrop-blur-sm transition-all duration-300 focus:border-primary dark:focus:border-accent focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 hover:border-primary/60 dark:hover:border-accent/60"
                  placeholder="your.email@example.com"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 dark:text-foreground/90 mb-1 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="form-input w-full px-4 py-3 rounded-lg border border-border dark:border-border/60 bg-background/50 dark:bg-background/30 text-foreground placeholder-muted-foreground backdrop-blur-sm transition-all duration-300 focus:border-primary dark:focus:border-accent focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 hover:border-primary/60 dark:hover:border-accent/60 resize-none"
                  placeholder="Your message..."
                  suppressHydrationWarning
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary dark:from-primary dark:to-accent dark:hover:from-primary/90 dark:hover:to-accent/90 text-primary-foreground dark:text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl"
                whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -1 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <Send size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
          
          <motion.div 
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-muted-foreground mb-4 transition-colors duration-300">Or reach out directly</p>
            
            <div className="flex justify-center space-x-4">
              <motion.a
                href="mailto:murtazasadriwala09@gmail.com"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-full hover:from-primary/20 hover:to-accent/20 dark:hover:from-primary/30 dark:hover:to-accent/30 transition-all duration-300 border border-primary/20 dark:border-accent/30 hover:border-primary/40 dark:hover:border-accent/50 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                title="Email"
                onClick={() => trackSocialMediaClick('email')}
              >
                <Mail size={20} className="text-primary dark:text-accent transition-colors duration-300" />
              </motion.a>
              
              <motion.a
                href="https://github.com/murtaza-sadri-19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-full hover:from-primary/20 hover:to-accent/20 dark:hover:from-primary/30 dark:hover:to-accent/30 transition-all duration-300 border border-primary/20 dark:border-accent/30 hover:border-primary/40 dark:hover:border-accent/50 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                title="GitHub"
                onClick={() => trackSocialMediaClick('github')}
              >
                <Github size={20} className="text-primary dark:text-accent transition-colors duration-300" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/murtazasadriwala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-full hover:from-primary/20 hover:to-accent/20 dark:hover:from-primary/30 dark:hover:to-accent/30 transition-all duration-300 border border-primary/20 dark:border-accent/30 hover:border-primary/40 dark:hover:border-accent/50 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                title="LinkedIn"
                onClick={() => trackSocialMediaClick('linkedin')}
              >
                <Linkedin size={20} className="text-primary dark:text-accent transition-colors duration-300" />
              </motion.a>
            </div>
            
            <motion.div className="mt-4">
              <button
                onClick={copyEmail}
                className="text-sm text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors duration-300 hover:underline"
              >
                murtazasadriwala09@gmail.com
                {copyMsg && <span className="ml-2 text-green-600 dark:text-green-400 font-medium">{copyMsg}</span>}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}