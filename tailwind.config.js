/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        blue : '#4682A9',
        dark : '#334155'
      },
    },
    fontFamily: {
      myFont: 'Ubuntu'
    }
  },
  plugins: [],
}

