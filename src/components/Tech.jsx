import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[280px] w-full pop-card pop-shadow h-[280px] flex flex-col items-center justify-center"
      >
        {/* Tech Icon Container */}
        <div className="relative w-24 h-24 flex items-center justify-center mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-lg" />
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 object-contain relative z-10 drop-shadow-lg"
          />
        </div>

        {/* Tech Name */}
        <h3 className="text-white font-bold text-[20px] text-center mt-4">
          {name}
        </h3>

        {/* Subtle Border Glow */}
        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            index={index}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
