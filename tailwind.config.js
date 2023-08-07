/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.{html,js}",
    "./about/**/*.{html,js}",
    "./team/**/*.{html,js}",
    "./error/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      dharma: ["Dharma Gothic E", "sans-serif"],
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
        blue: "#3171EE",
        faded: "rgba(0, 0, 0, 0.40)",
        "faded-100": "rgba(0, 0, 0, 0.10)",
        "faded-white": "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};

