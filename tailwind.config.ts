// tailwind.config.ts
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF6', // off white
        sage: '#D8E3DC',      // light sage
        text: '#111111',      // black
      },
      fontFamily: {
        aboreto: ["Aboreto", "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};