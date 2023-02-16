/** @type {import('tailwindcss').Config} */

const path = require("path");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    path.join(__dirname, "./src/**/*.(ts|tsx)"),
    path.join(__dirname, "./src/**/**/*.(ts|tsx)"),
    path.join(__dirname, "./src/**/**/**/*.(ts|tsx)"),
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      primary: "#3E816D",
      secondary: "#263D54",
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {},
  },

  plugins: [],
};
