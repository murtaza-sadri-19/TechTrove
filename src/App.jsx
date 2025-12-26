import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact , Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'; 
import Intro from './Pages/Intro/Intro'

const App = () => {
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
