/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "#424549",
        200: "#36393e",
        300: "#282b30",
        400: "#1e2124",
      },
      transparent: colors.transparent,
      white: colors.white,
      gray: colors.gray,
      violet: colors.violet,
      indigo: colors.indigo,
    },
  },
  plugins: [],
};
