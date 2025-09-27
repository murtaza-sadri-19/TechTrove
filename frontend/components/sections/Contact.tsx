'use client';
import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [copyMsg, setCopyMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    if (!form.name.valueOf || !form.email.value || !form.message.value) {
      alert('All fields required');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
    <section id="contact" className="py-16 lg:py-20 bg-gradient-to-br from-white/50 to-blue-50/30 dark:from-secondary-900/50 dark:to-purple-900/20">
      <div className="container max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          
          <motion.form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
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
            <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach out directly</p>
            
            <div className="flex justify-center space-x-4">
              <motion.a
                href="mailto:murtazasadriwala09@gmail.com"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full hover:from-primary/20 hover:to-accent/20 transition-all duration-200 border border-primary/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail size={20} className="text-primary dark:text-accent" />
              </motion.a>
              
              <motion.a
                href="https://github.com/murtaza09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full hover:from-primary/20 hover:to-accent/20 transition-all duration-200 border border-primary/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github size={20} className="text-primary dark:text-accent" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/murtaza-sadri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full hover:from-primary/20 hover:to-accent/20 transition-all duration-200 border border-primary/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-primary dark:text-accent" />
              </motion.a>
            </div>
            
            <motion.div className="mt-4">
              <button
                onClick={copyEmail}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-200"
              >
                murtazasadriwala09@gmail.com
                {copyMsg && <span className="ml-2 text-green-600">{copyMsg}</span>}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}