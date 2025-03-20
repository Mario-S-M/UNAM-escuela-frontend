const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{jsx,tsx}"
  ],
  theme: {},
  darkMode: "class",
  plugins: [heroui()],
};