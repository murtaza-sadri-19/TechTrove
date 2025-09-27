'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Scroll spy for active navigation
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 supports-backdrop-blur:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with gradient */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-600 bg-clip-text text-transparent">
            TechTrove
          </div>

          {/* Desktop Navigation with active states */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'nav-active text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-200 border border-border/50"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              )}
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-200 border border-border/50"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-border/50 pt-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}