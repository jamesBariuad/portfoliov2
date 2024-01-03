/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        mainText: ["Montserrat"],
        subText:["Merriweather"],
      },
      colors:{
        "primary": '#075a5c',
        "secondary": '#0dadb1'
      }
    },
  },
  plugins: [],

};
