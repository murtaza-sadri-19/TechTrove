/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      /* ─────────────────────────────────────────
         COLOR SYSTEM  (60 / 30 / 10 Golden Ratio)
         ───────────────────────────────────────── */
      colors: {
        /* 60% — Deep Space Canvas */
        primary:    "#0b0d12",
        "primary-2":"#0f1115",
        "primary-3":"#13161c",

        /* 30% — Morphic / Glass Surfaces */
        surface:    "#1a1d24",
        "surface-2":"#1e2129",
        "surface-3":"#23262f",
        tertiary:   "#1a1d24",

        /* 10% — Gold Accent + Blue Secondary */
        accent:          "#d9c24d",
        "accent-hover":  "#f59e0b",
        "accent-warm":   "#d9c24d",
        "accent-gold":   "#f59e0b",
        "accent-secondary": "#6c86b5",
        "accent-emerald":   "#4fa37a",
        "accent-cyan":      "#22d3ee",

        /* Semantic */
        secondary:   "#a8b0bf",
        "white-100": "#f5f7fa",
        "black-100": "#1a1d24",
        "black-200": "#0f1115",

        "border-color": "#2b313d",
        "border-gold":  "rgba(217,194,77,0.25)",
        error:    "#e35d6a",
        success:  "#3dbb7a",
      },

      /* ─────────────────────────────────────────
         GOLDEN RATIO TYPOGRAPHY SCALE
         Base: 14px × 1.618
         ───────────────────────────────────────── */
      fontSize: {
        "gr-xs":  ["0.875rem",  { lineHeight: "1.4",  letterSpacing: "0.02em" }],
        "gr-sm":  ["1rem",      { lineHeight: "1.5",  letterSpacing: "0.01em" }],
        "gr-md":  ["1.412rem",  { lineHeight: "1.5" }],
        "gr-lg":  ["2.285rem",  { lineHeight: "1.25" }],
        "gr-xl":  ["3.695rem",  { lineHeight: "1.1" }],
        "gr-2xl": ["5.979rem",  { lineHeight: "1.05" }],
      },

      /* ─────────────────────────────────────────
         GOLDEN RATIO SPACING
         ───────────────────────────────────────── */
      spacing: {
        "gr-1": "0.618rem",
        "gr-2": "1rem",
        "gr-3": "1.618rem",
        "gr-4": "2.618rem",
        "gr-5": "4.236rem",
        "gr-6": "6.854rem",
      },

      /* ─────────────────────────────────────────
         MORPHIC BOX SHADOWS
         ───────────────────────────────────────── */
      boxShadow: {
        "morphic":      "inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        "morphic-lg":   "inset 0 1px 1px rgba(255,255,255,0.10), 0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
        "morphic-hover":"inset 0 1px 1px rgba(255,255,255,0.12), 0 24px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(217,194,77,0.2)",
        "gold-glow":    "0 0 20px rgba(217,194,77,0.35), 0 0 40px rgba(217,194,77,0.15), 0 0 80px rgba(217,194,77,0.05)",
        "gold-glow-sm": "0 0 10px rgba(217,194,77,0.4), 0 0 20px rgba(217,194,77,0.15)",
        "blue-glow":    "0 0 20px rgba(108,134,181,0.4), 0 0 40px rgba(108,134,181,0.15)",
        "emerald-glow": "0 0 20px rgba(79,163,122,0.4), 0 0 40px rgba(79,163,122,0.15)",
        card: "0px 35px 120px -15px #1a1210",
        "timeline-dot": "0 0 0 4px rgba(217,194,77,0.2), 0 0 20px rgba(217,194,77,0.3)",
      },

      backdropBlur: {
        "morphic": "16px",
        "glass":   "24px",
        "heavy":   "40px",
      },

      borderRadius: {
        "morphic": "16px",
        "card":    "20px",
        "hero":    "28px",
      },

      screens: { xs: "450px" },

      backgroundImage: {
        "mesh-gold":
          "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(217,194,77,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(108,134,181,0.08) 0%, transparent 60%)",
        "mesh-blue":
          "radial-gradient(ellipse 60% 50% at 75% 25%, rgba(108,134,181,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 15% 65%, rgba(79,163,122,0.06) 0%, transparent 60%)",
        "gold-gradient":
          "linear-gradient(135deg, #d9c24d 0%, #f59e0b 100%)",
        "gold-gradient-h":
          "linear-gradient(90deg, #d9c24d 0%, #f59e0b 50%, #d9c24d 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
      },

      /* ─────────────────────────────────────────
         PREMIUM TYPOGRAPHY FONTS
         ───────────────────────────────────────── */
      fontFamily: {
        body:    ['"Plus Jakarta Sans"', '"Inter"', "sans-serif"],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', "sans-serif"],
        mono:    ['"JetBrains Mono"', "monospace"],
        grotesk: ['"Space Grotesk"',  "sans-serif"],
      },

      animation: {
        "mesh-flow":    "meshFlow 15s ease-in-out infinite",
        "gold-pulse":   "goldPulse 3s ease-in-out infinite",
        "border-spin":  "borderSpin 4s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
        "fade-in-up":   "fadeInUp 0.6s ease-out forwards",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "scan-line":    "scanLine 3s linear infinite",
      },
      keyframes: {
        meshFlow: {
          "0%, 100%": { opacity: "0.7" },
          "50%":      { opacity: "1" },
        },
        goldPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(217,194,77,0.3)" },
          "50%":      { boxShadow: "0 0 30px rgba(217,194,77,0.6), 0 0 60px rgba(217,194,77,0.2)" },
        },
        borderSpin: {
          "0%":   { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },

      transitionTimingFunction: {
        "morphic": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "glass":   "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".glass-panel": {
          background:     "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border:         "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.5)",
        },
        ".glass-panel-deep": {
          background:     "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border:         "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.10), 0 32px 64px rgba(0,0,0,0.6)",
        },
        ".morphic-card": {
          background:     "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border:         "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          borderRadius:   "20px",
          transition:     "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        },
        ".morphic-card:hover": {
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.12), 0 24px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(217,194,77,0.2), 0 0 30px rgba(217,194,77,0.08)",
          transform:      "translateY(-6px)",
          border:         "1px solid rgba(217,194,77,0.20)",
        },
        ".gold-glow-border": {
          border:         "1px solid rgba(217,194,77,0.3)",
          boxShadow:
            "0 0 10px rgba(217,194,77,0.2), inset 0 0 10px rgba(217,194,77,0.05)",
        },
        ".conic-border": {
          position:   "relative",
          borderRadius: "20px",
          padding:    "1px",
          background: "conic-gradient(from var(--border-angle, 0deg), transparent 25%, rgba(217,194,77,0.6) 50%, transparent 75%)",
          animation:  "borderSpin 4s linear infinite",
        },
        ".ambient-gold": {
          position: "absolute",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,194,77,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        ".shimmer-text": {
          background:        "linear-gradient(90deg, #a8b0bf 0%, #f5f7fa 40%, #d9c24d 50%, #f5f7fa 60%, #a8b0bf 100%)",
          backgroundSize:    "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip:    "text",
          animation:         "shimmer 3s linear infinite",
        },
        ".gold-text": {
          background:           "linear-gradient(135deg, #d9c24d 0%, #f59e0b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor:  "transparent",
          backgroundClip:       "text",
        },
        ".cyan-text": {
          background:           "linear-gradient(135deg, #6c86b5 0%, #22d3ee 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor:  "transparent",
          backgroundClip:       "text",
        },
        ".gold-divider": {
          height:     "1px",
          background: "linear-gradient(90deg, transparent, rgba(217,194,77,0.4), transparent)",
        },
      });
    },
  ],
};