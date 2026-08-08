import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

/* ─────────────────────────────────────────
   PROJECT CARD (Clean, Uniform Card Architecture)
   ───────────────────────────────────────── */
const ProjectCard = ({
  index,
  name,
  image,
  description,
  source_code_link,
  tags,
  deploymentStatus,
  deploymentLink,
}) => {
  const isDeployed = Boolean(deploymentLink);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="group w-full sm:w-[350px]"
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        scale={1.01}
        transitionSpeed={500}
        className="h-full"
      >
        <div
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(217,194,77,0.30)";
            e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)";
          }}
        >
          {/* ── IMAGE PREVIEW ── */}
          <div className="relative h-[210px] overflow-hidden bg-black/40">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent opacity-80" />

            {/* Status Badge */}
            {deploymentStatus && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md">
                ● {deploymentStatus}
              </div>
            )}

            {/* Index indicator */}
            <div className="absolute top-3 right-3 text-[10px] font-mono font-medium text-accent opacity-60">
              0{index + 1}
            </div>

            {/* Hover Actions */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors"
                  title="Source Code"
                >
                  <img src={github} alt="GitHub" className="w-4 h-4 object-contain" />
                </a>
              )}
            </div>
          </div>

          {/* ── CARD BODY ── */}
          <div className="p-5 flex flex-col justify-between flex-1 gap-4">
            <div>
              <h3 className="font-heading font-bold text-white-100 text-lg mb-2 group-hover:text-accent transition-colors">
                {name}
              </h3>
              <p className="text-secondary text-xs leading-relaxed line-clamp-4">
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className="px-2.5 py-0.5 rounded text-[10px] font-mono text-secondary"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Launch Live Application CTA (for deployed apps) */}
            {isDeployed && deploymentLink && (
              <div className="pt-1">
                <a
                  href={deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider text-[#0b0d12] transition-all duration-300 shadow-[0_0_20px_rgba(79,163,122,0.3)] hover:shadow-[0_0_30px_rgba(79,163,122,0.5)]"
                  style={{
                    background: "linear-gradient(135deg, #4fa37a 0%, #6bc49a 100%)",
                  }}
                >
                  <img src={demo} alt="Demo" className="w-4 h-4 object-contain filter invert brightness-0" />
                  <span>Launch Live Application</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   WORKS SECTION
   ───────────────────────────────────────── */
const Works = () => {
  return (
    <div className="relative">
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-base leading-relaxed max-w-3xl"
      >
        Selected engineering projects demonstrating backend architecture, AI pipelines, and full-stack execution.
      </motion.p>

      {/* Projects Grid */}
      <div className="mt-12 flex flex-wrap gap-6 justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
