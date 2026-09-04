import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { KnowledgeGraphCanvas } from "./canvas";
import {
  MuktaLabs,
  python,
  postgresql,
  fastapi,
  flask,
  sgsits
} from "../assets";

/* ─────────────────────────────────────────
   DATA — Golden Highlights
   ───────────────────────────────────────── */
const badges = [
  {
    label: "GATE 2026",
    value: "AIR 1765",
    color: "gold",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 003-3V8.25a3 3 0 00-3-3h-9a3 3 0 00-3 3v7.5a3 3 0 003 3m9 0v-1.5a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 17.25v1.5m9 0h-9" />
      </svg>
    )
  },
  {
    label: "ISRO IRoC 2026",
    value: "Team Captain",
    color: "blue",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.98 14.98 0 00-5.84-2.58m0 0a6 6 0 017.38-5.84v4.8" />
      </svg>
    )
  },
  {
    label: "President",
    value: "#include SGSITS",
    color: "green",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
];

const stats = [
  { value: "AIR 1765", label: "GATE CS/IT 2026", color: "#d9c24d" },
  { value: "3 Roles",   label: "Work Internships", color: "#6c86b5" },
  { value: "95%",      label: "Model Precision / Speedup", color: "#4fa37a" },
];

const heroTechIcons = [
  { name: "Python", icon: python },
  { name: "Flask", icon: flask },
  { name: "FastAPI", icon: fastapi },
  { name: "PostgreSQL", icon: postgresql },
];

/* ─────────────────────────────────────────
   BADGE COMPONENT
   ───────────────────────────────────────── */
const GoldenBadge = ({ badge, index }) => {
  const colorMap = {
    gold:  { bg: "rgba(217,194,77,0.08)",  border: "rgba(217,194,77,0.25)",  text: "#d9c24d" },
    blue:  { bg: "rgba(108,134,181,0.08)", border: "rgba(108,134,181,0.25)", text: "#6c86b5" },
    green: { bg: "rgba(79,163,122,0.08)",  border: "rgba(79,163,122,0.25)",  text: "#4fa37a" },
  };
  const c = colorMap[badge.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0,  scale: 1 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.4, type: "spring", stiffness: 180 }}
      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold"
      style={{
        background:  c.bg,
        border:      `1px solid ${c.border}`,
        color:       c.text,
      }}
    >
      <span className="flex-shrink-0">{badge.icon}</span>
      <span className="text-secondary">{badge.label}</span>
      <span className="text-[10px] opacity-40">•</span>
      <span className="font-bold">{badge.value}</span>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   TYPEWRITER HOOK
   ───────────────────────────────────────── */
const roles = [
  "Software Engineer",
  "AI/ML Engineer",
  "Backend Systems Specialist",
  "Knowledge Graph Developer",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => w + 1);
    }
    setDisplay(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─────────────────────────────────────────
   HERO COMPONENT
   ───────────────────────────────────────── */
const Hero = () => {
  const role = useTypewriter(roles);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center" aria-label="Hero section">
      {/* ── Knowledge Graph Canvas ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <KnowledgeGraphCanvas />
      </div>

      {/* ── Directional radial vignette ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 15% 50%, rgba(11,13,18,0.95) 0%, rgba(11,13,18,0.55) 60%, transparent 100%),
            linear-gradient(to right, rgba(11,13,18,0.90) 0%, rgba(11,13,18,0.4) 60%, transparent 100%)
          `,
        }}
      />

      {/* ── Ambient gold spot ── */}
      <div
        className="ambient-gold z-[1]"
        style={{ width: "500px", height: "500px", top: "-50px", left: "-50px", opacity: 0.5 }}
      />

      {/* ══════════════════════════════════════
          HERO LAYOUT
          ══════════════════════════════════════ */}
      <div
        className={`${styles.paddingX} relative z-10 w-full max-w-7xl mx-auto`}
        style={{ paddingTop: "130px", paddingBottom: "80px" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 max-w-xl">

            {/* Available Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#a8b0bf",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#4fa37a", boxShadow: "0 0 6px rgba(79,163,122,0.8)" }}
              />
              Available for Software &amp; AI Engineering Roles
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-white-100"
              style={{ fontSize: "clamp(2.3rem, 5.2vw, 4.2rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              Hi, I'm{" "}
              <span className="gold-text">
                Murtaza Sadriwala
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="text-secondary font-mono text-base sm:text-lg">
                {role}
                <span
                  className="inline-block w-[2px] h-[1.1em] ml-0.5 align-middle rounded"
                  style={{ backgroundColor: "#d9c24d", animation: "glowPulse 1s ease-in-out infinite" }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-4 text-secondary text-base leading-relaxed max-w-md"
            >
              Engineering production <span className="text-white-100 font-medium">AI systems</span>,{" "}
              <span className="text-white-100 font-medium">Knowledge Graphs</span> &amp;{" "}
              <span className="text-white-100 font-medium">scalable backend infrastructure</span>. Information Technology graduate from SGSITS Indore.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                style={{
                  background: "linear-gradient(135deg, #d9c24d 0%, #f59e0b 100%)",
                  color: "#0b0d12",
                  boxShadow: "0 0 20px rgba(217,194,77,0.25)",
                }}
                aria-label="View key projects"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-secondary hover:text-white-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="Contact Murtaza Sadriwala"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 pt-8 border-t border-white/10 flex items-center divide-x divide-white/10 overflow-x-auto scrollbar-none"
            >
              {stats.map((stat, i) => (
                <div key={i} className="px-5 first:pl-0 flex-shrink-0">
                  <p className="font-heading font-bold text-white-100 text-lg sm:text-2xl" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="text-secondary text-xs font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, type: "spring", stiffness: 110 }}
            className="lg:flex-1 w-full max-w-md"
          >
            <div
              className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5)",
              }}
            >
              {/* Profile Top with SGSITS Logo */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center p-1 flex-shrink-0"
                  style={{
                    background: "#1a1d24",
                    border: "1.5px solid rgba(217,194,77,0.35)",
                    boxShadow: "0 0 12px rgba(217,194,77,0.15)",
                  }}
                >
                  <img src={sgsits} alt="SGSITS Indore Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <p className="font-heading text-white-100 font-bold text-base">Murtaza Sadriwala</p>
                  <p className="text-secondary text-xs font-mono">SGSITS Indore — Information Technology</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/5 mb-5" />

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                <p className="text-secondary text-[10px] font-mono uppercase tracking-widest mb-3">Key Achievements</p>
                {badges.map((badge, i) => (
                  <GoldenBadge key={i} badge={badge} index={i} />
                ))}
              </div>

              <div className="h-[1px] bg-white/5 mb-5" />

              {/* Current Role */}
              <div
                className="p-3.5 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 p-1.5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <img src={MuktaLabs} alt="Mukta Labs Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-secondary text-[10px] font-mono uppercase tracking-widest mb-0.5">Current Position</p>
                  <p className="text-white-100 font-semibold text-xs">SWE Intern @ Mukta Labs</p>
                  <p className="text-secondary text-[11px]">Knowledge Graphs &amp; PostgreSQL Pipelines</p>
                </div>
              </div>

              {/* Tech Stack Logos Grid */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-secondary text-[10px] font-mono uppercase tracking-widest mb-2.5">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {heroTechIcons.map(tech => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono text-secondary"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <a href="#about" aria-label="Scroll down to About section">
          <div
            className="w-[24px] h-[40px] rounded-full flex justify-center items-start p-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
