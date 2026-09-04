import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Achievements, StarsCanvas } from './components';
import Intro from './Pages/Intro/Intro';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <main id="main-content">
                <About />
                <Experience />
                <Tech />
                <Works />
                <Achievements />
              </main>
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/intro" element={<Intro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
