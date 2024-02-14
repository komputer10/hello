module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
