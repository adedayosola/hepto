module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-pan': "url('/images/food-bg.png')",
        'food1': "url('/images/food1.png')",
      },
      colors: {
        "primary-500": "#43703F"
      }
    },
  },
  plugins: [],
}