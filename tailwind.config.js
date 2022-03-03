const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: process.env.REACT_APP_PRIMARY_COLOR,
      secondary: process.env.REACT_APP_SECONDARY_COLOR,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      black: colors.black,
      red: colors.red
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