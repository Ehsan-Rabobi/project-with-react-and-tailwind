/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#FF6262',
        secondary:{
          100:'#E2E2D5',
          200:'#888883'
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

