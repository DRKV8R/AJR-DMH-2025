/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626'
        }
      },
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
