/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.neutral[700],
          DEFAULT: colors.neutral[800],
          dark: colors.neutral[900],
        },
      },
      keyframes: {
        glow: {
          "0%": {
            opacity: "50%",
          },
          "50%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "50%",
          },
        },
      },
      animation: {
        glow: "glow 4s infinite linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
