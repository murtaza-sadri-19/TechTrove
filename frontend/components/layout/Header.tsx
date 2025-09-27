'use client';
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeToggle } from '../../hooks/useThemeToggle';

export function Header() {
  const { isDark, toggleTheme, mounted } = useThemeToggle();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm z-50 border-b border-secondary-200 dark:border-secondary-700 transition-colors">
      <nav className="container-section py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gradient">TechTrove</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-primary-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-primary-600 transition-colors">Resume</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md bg-secondary-100 dark:bg-secondary-800 hover:scale-105 transition"
          >
            {mounted ? (isDark ? <Sun size={18}/> : <Moon size={18}/>) : <Moon size={18}/>}
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-primary-600 transition-colors">About</a>
          <a href="#skills" className="block hover:text-primary-600 transition-colors">Skills</a>
          <a href="#projects" className="block hover:text-primary-600 transition-colors">Projects</a>
          <a href="#contact" className="block hover:text-primary-600 transition-colors">Contact</a>
          <a href="/resume.pdf" target="_blank" className="block hover:text-primary-600 transition-colors">Resume</a>
          <button 
            onClick={toggleTheme}
            className="flex items-center space-x-2 p-2 rounded-md bg-secondary-100 dark:bg-secondary-800 hover:scale-105 transition w-full"
          >
            {mounted ? (isDark ? <Sun size={18}/> : <Moon size={18}/>) : <Moon size={18}/>}
            <span>{mounted ? (isDark ? 'Light Mode' : 'Dark Mode') : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </header>
  );
}