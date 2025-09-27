'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BinaryPhoto from './BinaryPhoto';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/40 via-white/50 to-purple-100/40 dark:from-secondary-900 dark:via-secondary-800 dark:to-purple-900/20 pt-20 pb-16">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Building <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-purple-600 text-transparent bg-clip-text animate-gradient">E-commerce</span> & <span className="bg-gradient-to-r from-red-500 to-indigo-500 text-transparent bg-clip-text animate-gradient animation-delay-1000">ML</span> products
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Full-stack software engineer passionate about crafting performant, ML-driven commerce experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 mt-3 flex-wrap justify-center md:justify-start"
          >
            <a className="btn-secondary rounded-md shadow-lg hover:shadow-xl transition-all duration-300" 
               href="#contact">
              Work With Me
            </a>
            <a className="btn-secondary rounded-md shadow-lg hover:shadow-xl transition-all duration-300" 
               href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <BinaryPhoto />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}