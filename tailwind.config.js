/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}","./index.html",],
  theme: {
    extend: {
      colors:{
        backg:"#10101a",
        textc:"rgb(136, 146, 176)",
        wrapper:"rgba(42,43,56,.5)",
        greyf:"#c4c4c4",
        borderc:"#2a2b37"
      },
      screens:{
        'xm':'375px'
      }
    },
  },
  plugins: [],
}
