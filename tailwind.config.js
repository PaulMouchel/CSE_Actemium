// const colors = require('tailwindcss/colors')
import * as colors from 'tailwindcss/colors'
// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     colors: {
//       primary: import.meta.env.VITE_PRIMARY_COLOR,
//       secondary: import.meta.env.VITE_SECONDARY_COLOR,
//       gray: colors.gray,
//       blue: colors.blue,
//       green: colors.green,
//       white: colors.white,
//       black: colors.black,
//       red: colors.red,
//       yellow: colors.yellow
//     },
//   },
//   variants: {
//     extend: {
//       translate: ['group-hover'],
//       scale: ['group-hover'],
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#F89B4B',
      secondary: '#81D287',
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow
    },
    extend: {},
  },
  plugins: [],
}