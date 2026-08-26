module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
