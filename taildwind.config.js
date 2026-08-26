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
      }),

      screens:{
        'xsm':'320px'

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: {
    '@tailwindcss/jit': {},
  },
}
