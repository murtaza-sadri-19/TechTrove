'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 blur-3xl"
      />

      <div className="relative z-10 container-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 animate-gradient">
              TechTrove
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-2xl text-secondary-700 mb-10 max-w-3xl mx-auto"
          >
            A novel developer portfolio at the intersection of{" "}
            <span className="font-semibold text-primary-600">AI</span>,{" "}
            <span className="font-semibold text-accent-600">Web</span>, and{" "}
            <span className="font-semibold text-purple-600">Innovation</span>.  
            Crafting research-driven solutions and futuristic applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            <Link href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowRight size={20} />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Get In Touch
            </Link>
            <a
              href="<!-- Add Resume Link Here -->"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FileText size={20} /> Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/murtaza-sadri-19"
              className="text-secondary-600 hover:text-primary-600 transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/murtaza-sadri"
              className="text-secondary-600 hover:text-primary-600 transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:murtazasadriwala09@gmail.com"
              className="text-secondary-600 hover:text-primary-600 transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}