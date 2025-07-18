/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#FF6E4E",
        teal: "#265A6A",
      },
    },
  },
  plugins: [],
};
