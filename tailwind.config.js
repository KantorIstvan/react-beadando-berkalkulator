/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "picton-blue": {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#b9e1fe",
          300: "#7bcafe",
          400: "#3cb2fb",
          500: "#0b95ec",
          600: "#0076ca",
          700: "#015ea3",
          800: "#055087",
          900: "#0b436f",
          950: "#072a4a",
        },
      },
    },
  },
  plugins: [],
};
