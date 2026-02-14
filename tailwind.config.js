/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "640px",
      md: "500px",
      lg: "760px",
      xl: "1280px",
    },
  },
  plugins: [],
};
