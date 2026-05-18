import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ResumeCTA = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleDownloadResume = () => {
    // Create a simple resume link or trigger download
    // For now, this opens in a new tab - replace with actual resume URL
    window.open(
      "https://drive.google.com/file/d/1UOb_LGwKmu51tPLpbW8Txp-Zf-IoyYb2/view",
      "_blank",
    );
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Gradient backdrop blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-transparent backdrop-blur-sm h-32" />

      {/* Content */}
      <div className="relative h-32 flex items-center justify-center px-6">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl"
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-secondary font-bold text-lg sm:text-xl">
              Ready to explore my work?
            </h3>
            <p className="text-black-100 text-sm sm:text-base mt-1">
              Download my resume to see the complete picture of my skills and experience.
            </p>
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              isHovering
                ? 'bg-gradient-to-r from-tertiary to-black-100 shadow-lg shadow-black-100/50'
                : 'bg-gradient-to-r from-tertiary to-black-100'
            }`}
          >
            <span>📄</span>
            <span>Download Resume</span>
            <motion.span
              animate={{ x: isHovering ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResumeCTA;
