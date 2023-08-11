/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}", "./about/**/*.{html,js}", "./team/**/*.{html,js}"],
  theme: {
    fontFamily: {
      ppformula: ["PP Formula Condensed", "sans-serif"],
      ppmontreal: ["PP Neue Montreal TT", "sans-serif"],
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
        faded: {
          white: {
            100: "rgba(255, 255, 255, 0.10)",
            800: "rgba(255, 255, 255, 0.80)",
          },
          black: {
            100: "rgba(0, 0, 0, 0.10)",
            400: "rgba(0, 0, 0, 0.40)",
          },
        },
      },
    },
  },
  plugins: [],
};

