// const colors = require('tailwindcss/colors')

// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     colors: {
//       primary: import.meta.env.VITE_PRIMARY_COLOR,
//       secondary: import.meta.env.VITE_SECONDARY_COLOR,
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
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      }
    },
  },
  plugins: [],
}