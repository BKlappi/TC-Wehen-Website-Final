/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tcwehen-primary': '#96bd42',
        'tcwehen-secondary': '#1a3150',
        'tcwehen-accent': '#7ca813',
        'tennis-green': '#68B030',
        'tennis-ball': '#FFD700',
        'tennis-clay': '#E67E22',
        'tennis-court': '#2E7D32',
      },
    },
  },
  plugins: [],
}