/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accents: "#179957",
        accentsdark: "#184D47",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
