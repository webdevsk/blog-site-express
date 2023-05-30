/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./views/**/*.ejs', './public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '6rem',
        lg: '8rem',
      },
    },
  },
  plugins: [],
}

