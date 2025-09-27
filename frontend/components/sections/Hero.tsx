'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-black">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 blur-3xl"
      />

      <div className="relative z-10 container-section text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 animate-gradient">
            TechTrove
          </span>
        </h1>

        {/* Typing Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl text-secondary-700 dark:text-secondary-300 mb-10 max-w-3xl mx-auto"
        >
          I’m Murtaza — <span className="font-semibold text-primary-600">Data Scientist</span>,{" "}
          <span className="font-semibold text-accent-600">Researcher</span>,{" "}
          <span className="font-semibold text-purple-600">Builder</span>.  
          Crafting AI, Web, and Space-Tech solutions for the future.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <Link href="#projects" className="btn-primary inline-flex items-center gap-2">
            View Projects <ArrowRight size={20} />
          </Link>
          <Link href="#contact" className="btn-secondary">Get In Touch</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FileText size={20} /> Resume
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/murtaza-sadri-19" aria-label="GitHub"><Github size={28} /></a>
          <a href="https://linkedin.com/in/murtaza-sadri" aria-label="LinkedIn"><Linkedin size={28} /></a>
          <a href="mailto:murtazasadriwala09@gmail.com" aria-label="Email"><Mail size={28} /></a>
        </div>
      </div>
    </section>
  );
}