export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-secondary-200">
      <nav className="container-section py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gradient">TechTrove</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}