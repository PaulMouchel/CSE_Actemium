module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Raleway', 'Poppins', 'Arial', 'sans-serif'],
     },
    extend: {
      backgroundImage: theme => ({
        'beach': "url('/src/images/beach.jpg')",
       })
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}