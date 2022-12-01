/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layout/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}
