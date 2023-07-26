/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      pplight: ["Formula Condensed Light", "sans-serif"],
      ppbold: ["Formula Condensed Bold", "sans-serif"],
      ppmontreal: ["PP Neue Montreal Book", "sans-serif"],
    },
    extend: {
      colors: {
        secondary: "#5BAB77",
        tertiary: "#F1F2EC",
        faded: "rgba(0, 0, 0, 0.40)",
        "faded-100": "rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};

