'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/80 to-secondary/20 pt-20 pb-16 overflow-hidden">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 relative">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground relative"
          >
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-extrabold relative inline-block">Murtaza Sadriwala</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 -mt-2"
          >
            Data Scientist & Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Crafting <span className="text-primary font-medium">intelligent</span> & <span className="text-accent font-medium">data-driven</span> solutions through OCR, computer vision, and ML pipelines. 
            <br />
            <span className="text-sm sm:text-base mt-2 block">Passionate about turning research into impactful real-world applications.</span>
          </motion.p>         
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start"
          >
            <motion.a 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-500 ease-out font-semibold text-sm sm:text-base" 
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Work With Me
            </motion.a>
            <motion.a 
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-out font-semibold text-sm sm:text-base" 
              href="public/Murtaza_Sadriwala_Resume_Cohere.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 flex items-center justify-center md:justify-start relative"
        >
          <motion.div 
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] md:-ml-8 lg:-ml-16 xl:-ml-20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {!imageError ? (
              <Image
                src="/images/Murtaza_Updated.png"
                alt="Murtaza Sadriwala - Data Scientist & Software Engineer"
                fill
                className="object-contain transition-transform duration-500 ease-out md:object-left-bottom"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border shadow-2xl">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">MS</span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}