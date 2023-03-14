/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      mycolor: {
        100: "#0D0D0D",
        200: "#262626",
        300: "#9A9A9A",
        400: "#1A1A1A"
        
      },
    },
  },
  plugins: [],
};
