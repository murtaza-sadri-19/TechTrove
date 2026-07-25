/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d0b0e",
        secondary: "#b8a99a",
        tertiary: "#1e1914",
        "black-100": "#1a1512",
        "black-200": "#120f0c",
        "white-100": "#f0ebe5",
        accent: "#c47d5a",
        "accent-secondary": "#7d9b76",
        "accent-warm": "#d4956b",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1a1210",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/sections/herobg.jpg')",
      },
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
        heading: ['"Clash Display"', 'display'],
      },
    },
  },
  plugins: [],
};