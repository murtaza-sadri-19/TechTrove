import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../sections/ThemeProvider';

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border transition-colors">
      <nav className="container-section py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">TechTrove</div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-primary transition-colors" data-testid="nav-about">About</a>
          <a href="#skills" className="hover:text-primary transition-colors" data-testid="nav-skills">Skills</a>
          <a href="#ml-interactive" className="hover:text-primary transition-colors" data-testid="nav-ml-demo">ML Demo</a>
          <a href="#projects" className="hover:text-primary transition-colors" data-testid="nav-projects">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors" data-testid="nav-contact">Contact</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-primary transition-colors" data-testid="nav-resume">Resume</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            data-testid="theme-toggle"
          >
            {mounted ? (isDark ? <Sun size={18}/> : <Moon size={18}/>) : <Moon size={18}/>}
          </button>
        </div>

        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-primary transition-colors" data-testid="mobile-nav-about">About</a>
          <a href="#skills" className="block hover:text-primary transition-colors" data-testid="mobile-nav-skills">Skills</a>
          <a href="#ml-interactive" className="block hover:text-primary transition-colors" data-testid="mobile-nav-ml-demo">ML Demo</a>
          <a href="#projects" className="block hover:text-primary transition-colors" data-testid="mobile-nav-projects">Projects</a>
          <a href="#contact" className="block hover:text-primary transition-colors" data-testid="mobile-nav-contact">Contact</a>
          <a href="/resume.pdf" target="_blank" className="block hover:text-primary transition-colors" data-testid="mobile-nav-resume">Resume</a>
          <button 
            onClick={toggleTheme}
            className="flex items-center space-x-2 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors w-full"
            data-testid="mobile-theme-toggle"
          >
            {mounted ? (isDark ? <Sun size={18}/> : <Moon size={18}/>) : <Moon size={18}/>}
            <span>{mounted ? (isDark ? 'Light Mode' : 'Dark Mode') : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
