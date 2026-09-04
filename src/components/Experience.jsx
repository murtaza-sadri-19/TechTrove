import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { styles } from "../styles";
import { experiences, leadership } from "../constants";
import { SectionWrapper } from "../hoc";

/* ─────────────────────────────────────────
   TECH TAG MAP
   ───────────────────────────────────────── */
const expTechMap = {
  "Mukta Labs": ["Knowledge Graphs", "spaCy", "Relation Extraction", "PostgreSQL", "Python"],
  "Compu-Rf": ["YOLO", "OpenCV", "ONNX Runtime", "Computer Vision", "Python"],
  "CloudRaft Technologies": ["GraphRAG", "Neo4j", "FAISS", "Sentence Transformers", "Python"],
};

/* ─────────────────────────────────────────
   GRAPE / ORB NODE
   ───────────────────────────────────────── */
const GrapeOrbNode = ({ icon, isGold = true, altText = "node" }) => {
  const primaryColor = isGold ? "#d9c24d" : "#6c86b5";
  const glowRgb = isGold ? "217,194,77" : "108,134,181";

  return (
    <div className="relative flex items-center justify-center w-14 h-14 my-2 group z-20 flex-shrink-0">
      <div
        className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500"
        style={{ boxShadow: `0 0 20px rgba(${glowRgb}, 0.3)` }}
      />
      <span
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{ background: primaryColor, boxShadow: `0 0 8px ${primaryColor}` }}
      />
      <span
        className="absolute -bottom-1 -right-0.5 w-1.5 h-1.5 rounded-full"
        style={{ background: primaryColor, boxShadow: `0 0 6px ${primaryColor}` }}
      />

      <div
        className="w-11 h-11 rounded-full p-1.5 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-105"
        style={{
          background: "#151821",
          border: `1.5px solid rgba(${glowRgb}, 0.4)`,
          boxShadow: `inset 0 1px 1px rgba(255,255,255,0.1), 0 0 16px rgba(${glowRgb}, 0.3)`,
        }}
      >
        {icon ? (
          <img src={icon} alt={altText} className="w-full h-full object-contain rounded-full" />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: primaryColor }} />
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   WORK TIMELINE CARD
   ───────────────────────────────────────── */
const TimelineCard = ({ data, index, isLeft }) => {
  const techStack = data.tech || expTechMap[data.company_name] || [];

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full my-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, x: isLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
        className="w-full md:w-[calc(50%-40px)] z-10"
      >
        <article
          className="relative p-6 rounded-2xl overflow-hidden group transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(217,194,77,0.30)";
            e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(217,194,77,0.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)";
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-secondary text-[11px] font-mono tracking-wider block mb-1">
                {data.date} {data.location && `• ${data.location}`}
              </span>
              <h3 className="font-heading font-bold text-white-100 text-lg leading-tight">
                {data.title}
              </h3>
              <p className="font-mono text-xs font-semibold text-accent mt-0.5">
                {data.company_name}
              </p>
            </div>
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-accent"
              style={{ background: "rgba(217,194,77,0.08)", border: "1px solid rgba(217,194,77,0.2)" }}
            >
              Internship
            </span>
          </div>

          <div className="h-[1px] bg-white/5 my-3" />

          <ul className="space-y-2" aria-label={`Responsibilities at ${data.company_name}`}>
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed group-hover:text-white-100/90 transition-colors">
                <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {techStack.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {techStack.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-secondary"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </article>
      </motion.div>

      <div className="hidden md:flex items-center justify-center w-20 flex-shrink-0">
        <GrapeOrbNode icon={data.icon} isGold={true} altText={data.company_name} />
      </div>

      <div className="hidden md:block w-[calc(50%-40px)]" />
    </div>
  );
};

/* ─────────────────────────────────────────
   LEADERSHIP TIMELINE CARD
   ───────────────────────────────────────── */
const LeadershipTimelineCard = ({ data, index, isLeft }) => {
  const isLeadershipTag = data.tag === "Leadership";

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full my-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, x: isLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
        className="w-full md:w-[calc(50%-40px)] z-10"
      >
        <article
          className="relative p-6 rounded-2xl overflow-hidden group transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = isLeadershipTag ? "rgba(217,194,77,0.30)" : "rgba(108,134,181,0.30)";
            e.currentTarget.style.boxShadow = isLeadershipTag
              ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(217,194,77,0.08)"
              : "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(108,134,181,0.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)";
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-secondary text-[11px] font-mono tracking-wider block mb-1">
                {data.date}
              </span>
              <h3 className="font-heading font-bold text-white-100 text-lg leading-tight">
                {data.title}
              </h3>
              <p className="font-mono text-xs font-semibold mt-0.5" style={{ color: isLeadershipTag ? "#d9c24d" : "#6c86b5" }}>
                {data.organization}
              </p>
            </div>

            {/* Leadership & Achievement Tags */}
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider flex-shrink-0"
              style={{
                background: isLeadershipTag ? "rgba(217,194,77,0.10)" : "rgba(108,134,181,0.10)",
                border: isLeadershipTag ? "1px solid rgba(217,194,77,0.25)" : "1px solid rgba(108,134,181,0.25)",
                color: isLeadershipTag ? "#d9c24d" : "#6c86b5",
              }}
            >
              {data.tag || "Achievement"}
            </span>
          </div>

          <div className="h-[1px] bg-white/5 my-3" />

          <ul className="space-y-2">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed group-hover:text-white-100/90 transition-colors">
                <span className="mt-0.5 flex-shrink-0" style={{ color: isLeadershipTag ? "#d9c24d" : "#6c86b5" }} aria-hidden="true">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </motion.div>

      <div className="hidden md:flex items-center justify-center w-20 flex-shrink-0">
        <GrapeOrbNode icon={data.icon} isGold={isLeadershipTag} altText={data.title} />
      </div>

      <div className="hidden md:block w-[calc(50%-40px)]" />
    </div>
  );
};

/* ─────────────────────────────────────────
   EXPERIENCE SECTION
   ───────────────────────────────────────── */
const Experience = () => {
  const workRef = useRef(null);

  const { scrollYProgress: workScroll } = useScroll({
    target: workRef,
    offset: ["start 70%", "end 90%"],
  });
  const workScaleY = useSpring(workScroll, { stiffness: 100, damping: 30 });

  return (
    <div className="relative">

      {/* ══ BLOCK 1: WORK EXPERIENCE ══ */}
      <div ref={workRef} className="relative">
        <div>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </div>

        <div className="relative mt-12 pb-4">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-2 w-[2px] bg-white/10 z-0 rounded-full" />

          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-2 w-[3px] z-0 origin-top rounded-full"
            style={{
              scaleY: workScaleY,
              background: "linear-gradient(to bottom, #d9c24d 0%, #f59e0b 100%)",
              boxShadow: "0 0 12px rgba(217,194,77,0.6)",
            }}
          />

          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={`exp-${index}`}
                data={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Experience, "experience");
