/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./src/**/*.(ts|tsx)"),
    path.join(__dirname, "./src/**/**/*.(ts|tsx)"),
    path.join(__dirname, "./src/**/**/**/*.(ts|tsx)"),
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
