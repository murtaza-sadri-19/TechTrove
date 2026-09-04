import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

/* ─────────────────────────────────────────
   PROJECT CARD
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
      variants={fadeIn("up", "spring", (index % 6) * 0.1, 0.5)}
      className="group w-full sm:w-[350px]"
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        scale={1.01}
        transitionSpeed={500}
        className="h-full"
      >
        <article
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
              alt={`${name} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent opacity-80" />

            {/* Status Badge */}
            {deploymentStatus && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-md">
                ● {deploymentStatus}
              </div>
            )}

            {/* Index indicator */}
            <div className="absolute top-3 right-3 text-[10px] font-mono font-medium text-accent opacity-60">
              0{index + 1}
            </div>

            {/* Source Code Link */}
            {source_code_link && (
              <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label={`View source code for ${name} on GitHub`}
                >
                  <img src={github} alt="GitHub" className="w-4 h-4 object-contain" />
                </a>
              </div>
            )}
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
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5" aria-label={`Technologies used in ${name}`}>
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

            {/* Launch Application CTA */}
            {isDeployed && deploymentLink && (
              <div className="pt-1">
                <a
                  href={deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider text-[#0b0d12] transition-all duration-300 shadow-[0_0_20px_rgba(79,163,122,0.3)] hover:shadow-[0_0_30px_rgba(79,163,122,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  style={{
                    background: "linear-gradient(135deg, #4fa37a 0%, #6bc49a 100%)",
                  }}
                  aria-label={`Launch live application for ${name}`}
                >
                  <img src={demo} alt="" className="w-4 h-4 object-contain filter invert brightness-0" aria-hidden="true" />
                  <span>Launch Live Application</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   WORKS SECTION
   ───────────────────────────────────────── */
const Works = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "ML/AI Frameworks", "Web & Backend", "DevOps & Infrastructure", "Languages"];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="relative">
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects Showcase.</h2>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-base leading-relaxed max-w-3xl"
      >
        Selected engineering projects demonstrating production server deployment, knowledge graphs, computer vision pipelines, and full-stack software development.
      </motion.p>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project Categories">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeTab === cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
              activeTab === cat
                ? "bg-accent text-[#0b0d12] font-bold shadow-[0_0_16px_rgba(217,194,77,0.4)]"
                : "bg-white/5 text-secondary hover:text-white border border-white/10 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 flex flex-wrap gap-6 justify-start">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${project.name}-${index}`} index={index} {...project} />
          ))
        ) : (
          <div
            className="w-full flex flex-col items-center justify-center py-16 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            role="status"
            aria-live="polite"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(217,194,77,0.06)', border: '1px solid rgba(217,194,77,0.18)' }}
            >
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="#d9c24d" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <p className="font-heading font-bold text-white-100 text-lg mb-1">No projects here yet</p>
            <p className="text-secondary text-sm font-mono">
              No projects in the <span className="text-accent font-semibold">"{activeTab}"</span> category.
            </p>
            <button
              onClick={() => setActiveTab('All')}
              className="mt-5 px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 bg-accent text-[#0b0d12] font-bold shadow-[0_0_16px_rgba(217,194,77,0.4)] hover:shadow-[0_0_24px_rgba(217,194,77,0.6)]"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
