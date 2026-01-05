import React, { useEffect , useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo , menu , close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Use requestAnimationFrame for smooth 60fps
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      
      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const sectionId = section.id;
          const activeLink = navLinks.find(link => link.id === sectionId);
          if (activeLink) {
            setActive(activeLink.title);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Island Navbar - Desktop */}
      <nav className="hidden sm:flex fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 shadow-2xl hover:bg-white/15 transition-colors duration-300">
          <ul className='list-none flex flex-row gap-1'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative group"
              >
                <a 
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-wider block relative overflow-hidden group ${
                    active === link.title 
                      ? "text-white" 
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {/* Glow Background for Active State */}
                  {active === link.title && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 blur-md -z-10 animate-pulse" />
                  )}
                  
                  {/* Active Underline */}
                  <span className="relative">
                    {link.title}
                    {active === link.title && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mt-1"></div>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className={`${styles.paddingX} w-full flex justify-between items-center py-5`}>
          <Link to="/" className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-12 h-12 object-contain'/>
            <p className='text-white text-sm font-bold cursor-pointer hidden xs:block'>Murtaza</p>
          </Link>
          <div className="flex flex-1 justify-end items-center">
            <img 
              src={toggle ? close : menu} 
              alt="menu" 
              className='w-[28px] h-[28px] object-contain cursor-pointer' 
              onClick={() => setToggle(!toggle)} 
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-xl bg-white/10 border border-white/20 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl flex-col gap-4`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4 w-full'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="w-full"
                  >
                    <a 
                      href={`#${link.id}`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                      className={`block px-4 py-2 rounded-lg font-medium text-[16px] transition-all duration-300 ${
                        active === link.title 
                          ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" 
                          : "text-secondary hover:text-white"
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar on mobile */}
      <div className="sm:hidden h-16"></div>
    </>
  );
};

export default Navbar; 