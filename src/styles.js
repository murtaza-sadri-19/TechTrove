/* ─────────────────────────────────────────
   SHARED STYLE TOKENS
   Golden Ratio Typographic Scale
   Base: 14px × 1.618  →  14 / 22.6 / 36.6 / 59.2 / 95.7
   ───────────────────────────────────────── */

const styles = {
  /* Padding system */
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding:  "sm:px-16 px-6 sm:py-16 py-10",

  /* Hero typography — Golden Ratio XL */
  heroHeadText:
    "font-heading font-black text-white-100 lg:text-[5rem] sm:text-[3.8rem] xs:text-[3rem] text-[2.5rem] lg:leading-[1.05] tracking-[-0.03em]",

  heroSubText:
    "text-secondary font-body lg:text-[1.25rem] sm:text-[1.1rem] xs:text-[1rem] text-[0.875rem] leading-relaxed",

  /* Section header typography — Golden Ratio LG */
  sectionHeadText:
    "font-heading font-black text-white-100 md:text-[3.75rem] sm:text-[3rem] xs:text-[2.5rem] text-[2rem] tracking-[-0.02em] leading-[1.05]",

  sectionSubText:
    "font-mono text-[11px] text-secondary uppercase tracking-[0.18em] mb-2",
};

export function classes(...cls) {
  return cls.filter(Boolean).join(" ");
}

export { styles };