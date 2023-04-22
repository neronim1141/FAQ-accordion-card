/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          dark_blue: "hsl(238, 29%, 16%)",
          soft_red: "hsl(14, 88%, 65%)",
          soft_violet: "hsl(273, 75%, 66%)",
          soft_blue: "hsl(240, 73%, 65%)",
        },
        neutral: {
          very_dark_blue: "hsl(237, 12%, 33%)",
          dark_blue: "hsl(240, 6%, 50%)",
          light_blue: "hsl(240, 5%, 91%)",
        },
      },
    },
  },
  plugins: [],
};
