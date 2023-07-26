/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      pplight: ["Formula Condensed Light", "sans-serif"],
      ppbold: ["Formula Condensed Bold", "sans-serif"],
      ppmontreal: ["PP Neue Montreal Book", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#D8DEDC",
        secondary: "#E1D5CB",
        tertiary: "#F1F2EC",
        green: "#5BAB77",
        orange: "#EE6357",
        yellow: "#EEB931",
        faded: "rgba(0, 0, 0, 0.40)",
        "faded-100": "rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};

