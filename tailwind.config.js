/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        clicker: ['"Clicker Script"', 'cursive'],
      },
      fontSize: {
        xl: '1.25rem', // Extra large (20px)
        '10xl': '12.5rem', // 24px
      },
    },
  },
  plugins: [require('daisyui')],
};
