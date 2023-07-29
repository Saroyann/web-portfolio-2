/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors : {
        blue : '#4682A9',
        dark : '#334155'
      },
      screens: {
        '2xl': '1320px',
      }
    },
    fontFamily: {
      myFont: 'Ubuntu'
    },
  },
  plugins: [],
}

