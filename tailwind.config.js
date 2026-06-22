/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Outfit", "sans-serif"],
        titleFont: ["Georgia", "serif"],
      },
      colors: {
        bodyColor: "#090A0C",
        lightText: "#e2e8f0",
        boxBg: "linear-gradient(145deg, #111317, #17191e)",
        designColor: "#be8c6c",
      },
      boxShadow: {
        shadowOne: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
