import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact , Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'; 
import Intro from './Pages/Intro/Intro'
import { initializeGoogleAnalytics } from './utils/analytics';

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics - Replace 'G-XXXXXXXXXX' with your GA4 ID
    // Get your GA4 ID from: https://analytics.google.com/
    const GA4_ID = import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX';
    if (GA4_ID !== 'G-XXXXXXXXXX') {
      initializeGoogleAnalytics(GA4_ID);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/intro" element={<Intro />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
