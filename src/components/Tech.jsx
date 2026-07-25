import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TechIcon = ({ index, name, icon, category }) => {
  const getCategoryColor = (cat) => {
    switch(cat) {
      case "Languages":
        return "from-amber-500/20 to-orange-500/20 border-amber-500/30";
      case "AI/ML":
        return "from-emerald-500/20 to-green-500/20 border-emerald-500/30";
      case "Backend":
        return "from-rose-500/20 to-red-500/20 border-rose-500/30";
      case "Cloud & DevOps":
        return "from-sky-500/20 to-blue-500/20 border-sky-500/30";
      case "Databases":
        return "from-violet-500/20 to-purple-500/20 border-violet-500/30";
      default:
        return "from-stone-500/20 to-gray-500/20 border-stone-500/30";
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
      case "Languages":
        return "border-l-4 border-amber-500";
      case "AI/ML":
        return "border-l-4 border-emerald-500";
      case "Backend":
        return "border-l-4 border-rose-500";
      case "Cloud & DevOps":
        return "border-l-4 border-sky-500";
      case "Databases":
        return "border-l-4 border-violet-500";
      default:
        return "border-l-4 border-stone-500";
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
  const languages = technologies.filter(t => t.category === "Languages");
  const aiml = technologies.filter(t => t.category === "AI/ML");
  const backend = technologies.filter(t => t.category === "Backend");
  const cloud = technologies.filter(t => t.category === "Cloud & DevOps");
  const databases = technologies.filter(t => t.category === "Databases");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20 w-full space-y-12">
        {languages.length > 0 && <CategorySection category="Languages" techs={languages} />}
        {aiml.length > 0 && <CategorySection category="AI/ML" techs={aiml} />}
        {backend.length > 0 && <CategorySection category="Backend" techs={backend} />}
        {cloud.length > 0 && <CategorySection category="Cloud & DevOps" techs={cloud} />}
        {databases.length > 0 && <CategorySection category="Databases" techs={databases} />}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
