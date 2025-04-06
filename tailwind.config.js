/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./views/**/*.ejs", // scan all .ejs files in views folder
    "./public/**/*.{js,css,html}", // scan other relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
