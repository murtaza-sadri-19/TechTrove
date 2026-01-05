import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TechIcon = ({ index, name, icon, category }) => {
  const getCategoryColor = (cat) => {
    switch(cat) {
      case "Core Stack":
        return "from-cyan-500/20 to-blue-500/20 border-cyan-500/30";
      case "Tools":
        return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Design":
        return "from-orange-500/20 to-red-500/20 border-orange-500/30";
      default:
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className={`bg-gradient-to-br ${getCategoryColor(category)} backdrop-blur-sm border rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer group`}
    >
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-md group-hover:blur-lg transition-all" />
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 object-contain relative z-10 group-hover:drop-shadow-lg transition-all"
        />
      </div>
      <p className="text-white text-sm font-semibold text-center">{name}</p>
    </motion.div>
  );
};

const CategorySection = ({ category, techs }) => {
  const getCategoryBorder = (cat) => {
    switch(cat) {
      case "Core Stack":
        return "border-l-4 border-cyan-500";
      case "Tools":
        return "border-l-4 border-purple-500";
      case "Design":
        return "border-l-4 border-orange-500";
      default:
        return "border-l-4 border-blue-500";
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.6)}
      className={`${getCategoryBorder(category)} pl-6 py-4`}
    >
      <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
        {category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techs.map((tech, index) => (
          <TechIcon
            key={tech.name}
            index={index}
            name={tech.name}
            icon={tech.icon}
            category={tech.category}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  // Group technologies by category
  const coreStack = technologies.filter(t => t.category === "Core Stack");
  const tools = technologies.filter(t => t.category === "Tools");
  const design = technologies.filter(t => t.category === "Design");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20 w-full space-y-12">
        {coreStack.length > 0 && <CategorySection category="Core Stack" techs={coreStack} />}
        {tools.length > 0 && <CategorySection category="Tools" techs={tools} />}
        {design.length > 0 && <CategorySection category="Design" techs={design} />}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
