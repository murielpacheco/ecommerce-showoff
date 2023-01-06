/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'aside': "url(/section-bg.svg)",
        'women': "url(/womens-bg.svg)"
      }
    },
    screens: {
      'wide': '1537px'
    }
  },
  plugins: [],
}
