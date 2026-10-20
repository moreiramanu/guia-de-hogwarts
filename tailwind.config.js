/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#eaddc5',
        'title-brown': '#3b2314',
        'body-brown': '#5c4033',
        night: '#0b1530',
        gold: '#d4af37',
        'gold-soft': '#e6c76a',
        mist: '#c7d0e4',
      },
      fontFamily: {
        magic: ['"Cinzel Decorative"', 'serif'],
        body: ['"Crimson Text"', 'serif'],
      }
    },
  },
  plugins: [],
}