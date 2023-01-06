/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'aside': "url(../public/'section-bg.svg)"
      }
    },
    screens: {
      'wide': '1537px'
    }
  },
  plugins: [],
}
