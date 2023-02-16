/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)"),
    path.join(__dirname, "./src/**/**/*.(js|jsx|ts|tsx)"),
    path.join(__dirname, "./src/**/**/**/*.(js|jsx|ts|tsx)"),
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
