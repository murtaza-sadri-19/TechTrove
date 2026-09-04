import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, education, myName } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { MuktaLabs, CloudRaft, compurf } from "../assets";

const companyLogos = [
  { name: "Mukta Labs", logo: MuktaLabs, role: "SWE Intern" },
  { name: "Compu-Rf", logo: compurf, role: "SWE Intern" },
  { name: "CloudRaft Technologies", logo: CloudRaft, role: "AI Research Intern" },
];

/* ─────────────────────────────────────────
   SERVICE CARD
   ───────────────────────────────────────── */
const ServiceCard = ({ index, title, icon, description, tags }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.15 * index, 0.6)}
      className="group relative xs:w-[320px] w-full"
    >
      <div
        className="relative p-6 rounded-2xl h-full flex flex-col justify-between gap-6 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "rgba(217,194,77,0.30)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)";
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-accent opacity-70">
            0{index + 1}
          </span>

          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-heading font-bold text-white-100 text-lg mb-2">
            {title}
          </h3>
          <p className="text-secondary text-xs leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded text-[10px] font-mono text-secondary"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   ABOUT SECTION
   ───────────────────────────────────────── */
const About = () => {
  return (
    <div className="relative">
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-base leading-relaxed max-w-3xl"
      >
        I'm <span className="text-white-100 font-semibold">{myName}</span>, an Information Technology graduate from <span className="text-white-100 font-semibold">{education.institution}</span>. Specialized in building Knowledge Graphs, NLP Pipelines, GraphRAG Systems, Computer Vision models, and scalable backend server deployments. Currently a <span className="text-white-100 font-semibold">Software Engineering Intern at Mukta Labs</span>.
      </motion.p>

      {/* ── Education Highlight Card ── */}
      <motion.div
        variants={fadeIn("up", "spring", 0.15, 0.6)}
        className="mt-8 p-6 rounded-2xl max-w-3xl"
        style={{
          background: "rgba(217,194,77,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(217,194,77,0.2)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05), 0 12px 28px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
            <img src={education.logo} alt="SGSITS Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-accent bg-amber-500/10 border border-amber-500/20 uppercase tracking-wider">
                Education
              </span>
              <span className="text-secondary text-xs font-mono">{education.period}</span>
            </div>
            <h3 className="text-white-100 font-heading font-bold text-lg mt-1">
              {education.institution}
            </h3>
            <p className="text-accent font-mono text-xs font-semibold">
              {education.degree} — {education.field}
            </p>
            <p className="text-secondary text-xs mt-1 leading-relaxed">
              {education.details}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Worked With Companies ── */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.6)}
        className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-6"
      >
        <p className="text-secondary text-[10px] font-mono uppercase tracking-widest w-full sm:w-auto">
          Work Experience Roles
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {companyLogos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain" />
              <div>
                <span className="text-xs font-mono text-white-100 font-semibold block">{item.name}</span>
                <span className="text-[10px] font-mono text-secondary">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Service Cards */}
      <div className="mt-12 flex flex-wrap gap-6 justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
