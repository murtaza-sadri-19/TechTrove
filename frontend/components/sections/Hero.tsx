'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/80 to-secondary/20 pt-20 pb-16">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground"
          >
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-extrabold">Murtaza Sadriwala</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 -mt-2"
          >
            Data Scientist & Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Crafting <span className="text-primary font-medium">intelligent</span> & <span className="text-accent font-medium">data-driven</span> solutions through OCR, computer vision, and ML pipelines. 
            <br />
            <span className="text-sm sm:text-base mt-2 block">Passionate about turning research into impactful real-world applications.</span>
          </motion.p>         
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start"
          >
            <a 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm sm:text-base" 
              href="#contact"
            >
              Work With Me
            </a>
            <a 
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg shadow-lg hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm sm:text-base" 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
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
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {!imageError ? (
              <Image
                src="/images/Murtaza_Updated.png"
                alt="Murtaza Sadriwala - Data Scientist & Software Engineer"
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
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