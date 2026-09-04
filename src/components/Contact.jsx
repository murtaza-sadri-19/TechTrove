import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { contactLinks, myEmail, myPhone } from "../constants";

/* ─────────────────────────────────────────
   CONTACT LINK CARD
   ───────────────────────────────────────── */
const ContactLinkCard = ({ link }) => {
  const colorHex = link.color || "#6b9eb8";

  return (
    <a
      href={link.url}
      target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-3.5 rounded-2xl overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.08)`,
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${colorHex}15`;
        e.currentTarget.style.borderColor = `${colorHex}45`;
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3), 0 0 20px ${colorHex}30`;
        e.currentTarget.style.transform = "translateX(4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateX(0)";
      }}
      aria-label={`${link.name}: ${link.username}`}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center p-2"
        style={{
          background: `${colorHex}18`,
          border: `1px solid ${colorHex}30`,
        }}
      >
        <img
          src={link.icon}
          alt=""
          className="w-5 h-5 object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white-100 font-semibold text-xs sm:text-sm" style={{ color: colorHex }}>
          {link.name}
        </p>
        <p className="text-secondary text-xs font-mono truncate mt-0.5">{link.username}</p>
      </div>

      {/* Arrow */}
      <svg
        className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
        style={{ color: colorHex }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
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
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleEmailClick = async (e) => {
    // Try copying email to clipboard; fall through to mailto on failure
    try {
      await navigator.clipboard.writeText(myEmail);
      showToast(`📋 Email copied — ${myEmail}`, 'success');
    } catch {
      // clipboard denied — mailto will still open
    }
  };

  const handlePhoneClick = () => {
    showToast('📞 Opening phone dialer…', 'info');
  };

  return (
    <section className="xl:mt-12 flex flex-col xl:flex-row gap-8 overflow-hidden relative" aria-label="Contact Section">

      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-5 py-3 rounded-xl text-sm font-mono font-semibold shadow-2xl transition-all duration-300 pointer-events-none"
          style={{
            background: toast.type === 'success'
              ? 'rgba(79,163,122,0.92)'
              : 'rgba(108,134,181,0.92)',
            color: '#fff',
            backdropFilter: 'blur(12px)',
            border: toast.type === 'success'
              ? '1px solid rgba(79,163,122,0.4)'
              : '1px solid rgba(108,134,181,0.4)',
            boxShadow: toast.type === 'success'
              ? '0 0 24px rgba(79,163,122,0.35)'
              : '0 0 24px rgba(108,134,181,0.35)',
          }}
        >
          {toast.message}
        </div>
      )}

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
          className="relative p-6 sm:p-8 rounded-[24px] h-full overflow-hidden"
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
            <h3 className={styles.sectionHeadText}>Contact Info.</h3>
          </div>

          <p className="relative z-10 text-secondary text-xs sm:text-sm leading-relaxed mt-3 max-w-sm">
            Open to full-time software engineering roles, AI/ML engineering, and technical collaborations.
          </p>

          {/* Gold divider */}
          <div className="relative z-10 mt-5 gold-divider" />

          {/* Primary Action Buttons */}
          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${myEmail}`}
              onClick={handleEmailClick}
              className="relative group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              style={{
                background: "linear-gradient(135deg, #d9c24d, #f59e0b)",
                color: "#0b0d12",
                boxShadow: "0 0 24px rgba(217,194,77,0.35)",
              }}
              aria-label="Send Email to Murtaza Sadriwala"
            >
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="relative z-10">Email Me</span>
            </a>

            <a
              href={`tel:${myPhone.replace(/\s+/g, '')}`}
              onClick={handlePhoneClick}
              className="relative group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm border border-emerald-500/30 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Call Murtaza Sadriwala"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.07-5.121-3.364-6.191-6.191l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>{myPhone}</span>
            </a>
          </div>

          {/* Contact Links Grid */}
          <div className="relative z-10 mt-8 space-y-2.5">
            <p className="text-secondary text-[10px] font-mono uppercase tracking-widest mb-3">Connect Platforms</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {contactLinks.map((link, index) => (
                <ContactLinkCard key={index} link={link} />
              ))}
            </div>
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
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
