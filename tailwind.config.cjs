/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        purple: {
          300: "#8E7ECE",
          400: "#807ECE",
          500: "#975DFA",
          700: "#462878",
          900: "#2D2A37",
        },
        gray: {
          100: "#EBEBEB",
        },
      },
    },
  },
  plugins: [],
};
