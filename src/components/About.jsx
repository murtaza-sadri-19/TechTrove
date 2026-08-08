import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { MuktaLabs, CloudRaft, sgsits, Sparobix } from "../assets";

const companyLogos = [
  { name: "Mukta Labs", logo: MuktaLabs },
  { name: "Compu-Rf / SGSITS", logo: sgsits },
  { name: "CloudRaft Technologies", logo: CloudRaft },
  { name: "Sparobix", logo: Sparobix },
];

/* ─────────────────────────────────────────
   SERVICE CONFIG
   ───────────────────────────────────────── */
const serviceDetails = {
  "AI/ML Engineer": {
    description: "Knowledge Graphs, NLP pipelines, RAG systems, Computer Vision, PyTorch & TensorFlow.",
    tags: ["PyTorch", "NLP", "RAG", "GraphRAG"],
  },
  "Full Stack Developer": {
    description: "React frontends, FastAPI & Spring Boot backends, scalable REST APIs and microservices.",
    tags: ["React", "FastAPI", "Spring Boot", "REST"],
  },
  "Backend Engineer": {
    description: "Distributed systems, PostgreSQL, Docker, CI/CD pipelines, Linux server ops & DevOps.",
    tags: ["Docker", "PostgreSQL", "CI/CD", "Linux"],
  },
};

/* ─────────────────────────────────────────
   SERVICE CARD
   ───────────────────────────────────────── */
const ServiceCard = ({ index, title, icon }) => {
  const details = serviceDetails[title] || { description: "", tags: [] };

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
          <span className="font-mono text-xs text-accent opacity-60">
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
            {details.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {details.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-[10px] font-mono text-secondary"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </div>
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
        I'm <span className="text-white-100 font-semibold">Murtaza Sadriwala</span>, a Software Engineer and AI/ML Engineer who loves turning complex problems into working systems. Currently a{" "}
        <span className="text-white-100 font-semibold">Software Engineering Intern at Mukta Labs</span>, building knowledge graphs and NLP pipelines. Previously at Compu-Rf and CloudRaft, shipping computer vision pipelines and RAG systems.
      </motion.p>

      {/* ── Organization / Company Logos Strip ── */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.6)}
        className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-8"
      >
        <p className="text-secondary text-[10px] font-mono uppercase tracking-widest w-full sm:w-auto">
          Worked With
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {companyLogos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain" />
              <span className="text-xs font-mono text-secondary">{item.name}</span>
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
