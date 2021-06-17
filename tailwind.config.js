const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#014185',
      secondary: '#c6d200',
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      black: colors.black,
      red: colors.red
    },
    fontFamily: {
      'poppins': ['Arial', 'Raleway', 'Poppins', 'Arial', 'sans-serif'],
     },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}