import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';

const TechIcon = ({ index, name, icon, category }) => {
  const getCategoryColor = (cat) => {
    switch(cat) {
      case "Languages":
        return "from-amber-500/20 to-orange-500/20 border-amber-500/30";
      case "ML/AI Frameworks":
        return "from-emerald-500/20 to-green-500/20 border-emerald-500/30";
      case "Web & Backend":
        return "from-sky-500/20 to-blue-500/20 border-sky-500/30";
      case "DevOps & Infrastructure":
        return "from-violet-500/20 to-purple-500/20 border-violet-500/30";
      default:
        return "from-stone-500/20 to-gray-500/20 border-stone-500/30";
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.5)}
      className={`bg-gradient-to-br ${getCategoryColor(category)} backdrop-blur-sm border rounded-xl p-3.5 flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg`}
      tabIndex={0}
      aria-label={`${name} skill tag`}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-md group-hover:blur-lg transition-all" />
        {typeof icon === 'string' ? (
          <img
            src={icon}
            alt={`${name} logo`}
            className="w-9 h-9 object-contain relative z-10 group-hover:drop-shadow-lg transition-all"
          />
        ) : (
          <div className="w-9 h-9 relative z-10 flex items-center justify-center text-white font-bold">
            {name.substring(0, 2)}
          </div>
        )}
      </div>
      <p className="text-white-100 text-xs font-semibold text-center font-mono">{name}</p>
    </motion.div>
  );
};

const CategorySection = ({ category, techs }) => {
  const getCategoryBorder = (cat) => {
    switch(cat) {
      case "Languages":
        return "border-l-4 border-amber-500";
      case "ML/AI Frameworks":
        return "border-l-4 border-emerald-500";
      case "Web & Backend":
        return "border-l-4 border-sky-500";
      case "DevOps & Infrastructure":
        return "border-l-4 border-violet-500";
      default:
        return "border-l-4 border-stone-500";
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.6)}
      className={`${getCategoryBorder(category)} pl-4 sm:pl-6 py-3`}
    >
      <div className="flex items-center gap-3 mb-5">
        <h3 className="text-white-100 font-bold text-lg font-heading tracking-wider">
          {category}
        </h3>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-secondary bg-white/5 border border-white/10">
          {techs.length} skills
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
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
  const languages = technologies.filter(t => t.category === "Languages");
  const mlAi = technologies.filter(t => t.category === "ML/AI Frameworks");
  const webBackend = technologies.filter(t => t.category === "Web & Backend");
  const devops = technologies.filter(t => t.category === "DevOps & Infrastructure");

  return (
    <section className="relative">
      <div>
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills &amp; Technologies.</h2>
      </div>

      <div className="mt-12 w-full space-y-10">
        {languages.length > 0 && <CategorySection category="Languages" techs={languages} />}
        {mlAi.length > 0 && <CategorySection category="ML/AI Frameworks" techs={mlAi} />}
        {webBackend.length > 0 && <CategorySection category="Web & Backend" techs={webBackend} />}
        {devops.length > 0 && <CategorySection category="DevOps & Infrastructure" techs={devops} />}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
