import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 – Page Not Found | TechTrove';
    return () => {
      document.title = 'Murtaza Sadriwala | Software Engineer & AI/ML Engineer | Portfolio';
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center relative overflow-hidden"
      style={{ background: '#0b0d12' }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-60%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,194,77,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          right: '5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,134,181,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 404 Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
      >
        <p
          className="font-heading font-black select-none"
          style={{
            fontSize: 'clamp(6rem, 20vw, 14rem)',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #d9c24d 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.9,
          }}
          aria-hidden="true"
        >
          404
        </p>
      </motion.div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 110 }}
        className="relative max-w-md w-full mt-4 p-8 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5)',
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: 'rgba(217,194,77,0.08)',
              border: '1px solid rgba(217,194,77,0.25)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#d9c24d"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h1 className="font-heading font-bold text-white text-2xl mb-2">
          Page Not Found
        </h1>

        <p className="text-secondary text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(217,194,77,0.3), transparent)' }}
        />

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            style={{
              background: 'linear-gradient(135deg, #d9c24d 0%, #f59e0b 100%)',
              color: '#0b0d12',
              boxShadow: '0 0 20px rgba(217,194,77,0.25)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>

          <a
            href="mailto:murtazasadriwala09@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-secondary hover:text-white-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Subtle hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-secondary text-xs font-mono"
      >
        Error 404 · TechTrove Portfolio
      </motion.p>
    </div>
  );
};

export default NotFound;