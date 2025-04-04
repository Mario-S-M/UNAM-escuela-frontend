const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "unam-light-theme": {
          extend: "light",
          colors: {
            background: "#ffffff",
            default: {
              50: "#fceff2",
              100: "#ddd8d9",
              200: "#bfbfc1",
              300: "#a5a5a6",
              400: "#8c8c8c",
              500: "#727272",
              600: "#59595a",
              700: "#3f3f41",
              800: "#292526",
              900: "#16090d",
              DEFAULT: "#5e5e5f",
              foreground: "#ffffff",
            },
            primary: {
              50: "#e6f3ff",
              100: "#c5d8ee",
              200: "#a2bedc",
              300: "#7fa4cd",
              400: "#5c8abe",
              500: "#4271a4",
              600: "#325880",
              700: "#223f5d",
              800: "#10263a",
              900: "#000e19",
              DEFAULT: "#2c4d71",
              foreground: "#ffffff",
            },
            warning: {
              50: "#fff5dd",
              100: "#f9e2b4",
              200: "#f3cf89",
              300: "#edbc5e",
              400: "#e8a931",
              500: "#ce9017",
              600: "#a0700f",
              700: "#745009",
              800: "#463001",
              900: "#1b0f00",
              DEFAULT: "#e9ae3c",
              foreground: "#ffffff",
            },
            focus: "#2c4d71",
          },
        },
        "unam-dark-theme": {
          extend: "dark",
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            default: {
              50:  "#fceff2",
              100: "#ddd8d9",
              200: "#bfbfc1",
              300: "#a5a5a6",
              400: "#8c8c8c",
              500: "#727272",
              600: "#59595a",
              700: "#3f3f41",
              800: "#292526",
              900: "#16090d",
              DEFAULT: "#5e5e5f",
              foreground: "#ffffff",
            },
            primary: {
              50: "#e6f3ff",
              100: "#c5d8ee",
              200: "#a2bedc",
              300: "#7fa4cd",
              400: "#5c8abe",
              500: "#4271a4",
              600: "#325880",
              700: "#223f5d",
              800: "#10263a",
              900: "#000e19",
              DEFAULT: "#2c4d71",
              foreground: "#ffffff",
            },
            warning: {
              50: "#fff5dd",
              100: "#f9e2b4",
              200: "#f3cf89",
              300: "#edbc5e",
              400: "#e8a931",
              500: "#ce9017",
              600: "#a0700f",
              700: "#745009",
              800: "#463001",
              900: "#1b0f00",
              DEFAULT: "#e9ae3c",
              foreground: "#ffffff",
            },
            focus: "#ffffff",
          },
        },
      },
    }),
  ],
};
