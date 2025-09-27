'use client';

import { Header } from '@/components/layout/Header';
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import Experience from '@/components/sections/Experience';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Section reveal animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      el.classList.add('section-reveal');
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <Header />
      <main className="scroll-smooth pt-16 min-h-screen">
        <div ref={addToRefs}><Hero /></div>
        <div ref={addToRefs}><About /></div>
        <div ref={addToRefs}><Experience /></div>
        <div ref={addToRefs}><Skills /></div>
        <div ref={addToRefs}><Projects /></div>
        <div ref={addToRefs}><Contact /></div>
        <Footer />
      </main>
    </>
  );
}