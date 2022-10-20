/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-dark': '#4D4D4D',
        'main-orange': '#EEAC59',
      },
    },
  },
  plugins: [],
}
