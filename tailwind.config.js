/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'novel-primary': '#6D4C41',
        'novel-secondary': '#FFD54F',
        'novel-dark': '#3E2723',
        'novel-light': '#FFF8E1',
      },
      fontFamily: {
        'novel': ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 