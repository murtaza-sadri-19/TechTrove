import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { contactLinks } from "../constants";

/* ─────────────────────────────────────────
   CONTACT LINK CARD
   ───────────────────────────────────────── */
const ContactLinkCard = ({ link }) => {
  const colorMap = {
    "#D9C24D": { glow: "rgba(217,194,77,0.20)", hover: "rgba(217,194,77,0.10)" },
    "#4FA37A": { glow: "rgba(79,163,122,0.20)",  hover: "rgba(79,163,122,0.10)"  },
    "#6b9eb8": { glow: "rgba(108,134,181,0.20)", hover: "rgba(108,134,181,0.10)" },
  };
  const c = colorMap[link.color] || colorMap["#6b9eb8"];

  return (
    <a
      href={link.url}
      target={link.name !== "Email" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-4 rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.08)`,
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = c.hover;
        e.currentTarget.style.borderColor = link.color + "45";
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3), 0 0 20px ${c.glow}`;
        e.currentTarget.style.transform = "translateX(4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{
          background: `${link.color}18`,
          border: `1px solid ${link.color}30`,
        }}
      >
        <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" style={{ filter: "brightness(1.1)" }} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white-100 font-semibold text-sm" style={{ color: link.color }}>
          {link.name}
        </p>
        <p className="text-secondary text-xs font-mono truncate mt-0.5">{link.username}</p>
      </div>

      {/* Arrow */}
      <svg
        className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
        style={{ color: link.color }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  );
};

/* ─────────────────────────────────────────
   CONTACT SECTION
   ───────────────────────────────────────── */
const Contact = () => {
  return (
    <div className="xl:mt-12 flex flex-col xl:flex-row gap-8 overflow-hidden relative">

      {/* Ambient lights */}
      <div
        className="ambient-gold"
        style={{ width: "500px", height: "400px", bottom: "-100px", left: "-100px", zIndex: 0 }}
      />

      {/* ══ LEFT — Morphic Glass Card ══ */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.85] relative z-10"
      >
        <div
          className="relative p-8 rounded-[24px] h-full overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.6)",
          }}
        >
          {/* Card inner glow */}
          <div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217,194,77,0.07) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Section header */}
          <div className="relative z-10">
            <p className={styles.sectionSubText}>Let's Connect</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </div>

          <p className="relative z-10 text-secondary text-sm leading-relaxed mt-3 max-w-sm">
            Open to discussing new opportunities, engineering collaborations, or technology.
          </p>

          {/* Gold divider */}
          <div className="relative z-10 mt-6 gold-divider" />

          {/* Primary CTA */}
          <div className="relative z-10 mt-6">
            <a
              href="mailto:murtazasadriwala09@gmail.com"
              className="relative group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-base overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #d9c24d, #f59e0b)",
                color: "#0b0d12",
                boxShadow: "0 0 24px rgba(217,194,77,0.35), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="relative z-10">Get In Touch</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Contact Links */}
          <div className="relative z-10 mt-8 space-y-3">
            <p className="text-secondary text-[11px] font-mono uppercase tracking-widest mb-4">Find me on</p>
            {contactLinks.map((link, index) => (
              <ContactLinkCard key={index} link={link} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══ RIGHT — Earth 3D Canvas ══ */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative z-10 xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div
          className="w-full h-full rounded-[24px] overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
