/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // scan all .ejs files in views folder
    "./public/**/*.{js,css,html}", // scan other relevant files
  ],
  theme: {
    extend: {
      colors: {
        "clean-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        "fresh-green": {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        aqua: {
          50: "#effdfd",
          100: "#d2f7f9",
          200: "#aaf0f4",
          300: "#76e4ec",
          400: "#39d0dd",
          500: "#14b4c6",
          600: "#0892a2",
          700: "#097684",
          800: "#0b5e6b",
          900: "#0d4f5a",
        },
      },
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Quicksand", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        bubble: "0 8px 16px -4px rgba(14, 165, 233, 0.15), 0 2px 8px -2px rgba(14, 165, 233, 0.1)",
      },
      borderRadius: {
        bubble: "1.5rem",
      },
    },
  },
  plugins: [],
};
