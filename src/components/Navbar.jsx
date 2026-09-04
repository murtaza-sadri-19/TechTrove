import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, myName } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Detect active section based on scroll position
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);

          for (let section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              const sectionId = section.id;
              const activeLink = navLinks.find(link => link.id === sectionId);
              if (activeLink) {
                setActive(prev => (prev !== activeLink.title ? activeLink.title : prev));
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header role="banner">
      {/* Floating Island Navbar - Desktop */}
      <nav className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 items-center" aria-label="Desktop primary navigation">
        <div className="backdrop-blur-xl bg-[#0b0d12]/85 border border-white/10 rounded-full px-5 py-2 shadow-2xl hover:border-white/20 transition-all duration-300 flex items-center gap-4">
          {/* Desktop Logo Branding */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 pr-3 border-r border-white/10 group"
            aria-label="TechTrove Home"
          >
            <img src={logo} alt="TechTrove Logo" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />
            <span className="text-white-100 font-bold text-xs font-heading">{myName}</span>
          </a>

          <ul className='list-none flex flex-row gap-1'>
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 text-xs uppercase tracking-wider block relative overflow-hidden group ${
                    active === link.title
                      ? "text-white"
                      : "text-secondary hover:text-white"
                  }`}
                  aria-current={active === link.title ? "page" : undefined}
                >
                  {/* Active Background Glow */}
                  {active === link.title && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-accent-secondary/40 blur-md -z-10 animate-pulse" />
                  )}

                  {/* Active Underline */}
                  <span className="relative">
                    {link.title}
                    {active === link.title && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent-secondary mt-0.5"></div>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 w-full z-50 backdrop-blur-xl bg-primary/90 border-b border-white/10" aria-label="Mobile navigation">
        <div className={`${styles.paddingX} w-full flex justify-between items-center py-4`}>
          <Link to="/" className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            aria-label="TechTrove Home"
          >
            <img src={logo} alt='TechTrove Logo' className='w-9 h-9 object-contain'/>
            <p className='text-white text-sm font-bold cursor-pointer hidden xs:block font-heading'>Murtaza Sadriwala</p>
          </Link>
          <div className="flex flex-1 justify-end items-center">
            <button
              type="button"
              className="p-1 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg"
              aria-expanded={toggle}
              aria-label={toggle ? "Close menu" : "Open menu"}
              onClick={() => setToggle(!toggle)}
            >
              <img
                src={toggle ? close : menu}
                alt={toggle ? "Close" : "Menu"}
                className='w-[24px] h-[24px] object-contain'
              />
            </button>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-xl bg-[#0b0d12]/95 border border-white/15 absolute top-16 right-0 mx-4 my-2 min-w-[220px] z-50 rounded-2xl flex-col gap-4 shadow-2xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-3 w-full'>
                {navLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                      className={`block px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                        active === link.title
                          ? "text-white bg-gradient-to-r from-accent/20 to-accent-secondary/20 border border-accent/30"
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                      aria-current={active === link.title ? "page" : undefined}
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
    </header>
  );
};

export default Navbar;
