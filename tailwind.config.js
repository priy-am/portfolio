/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#7d0bfbd1",
        footer: "#7d0bfb73",
        hoverSecondary: "#7d0bfba1",
        primary: {
          light: "white",
          dark: "#020810",
        },
      },
      keyframes: {
        borderShpeChanging: {
          "0%": {
            "border-radius": "30% 70% 70% 30% / 30% 30% 70% 70% ",
          },
          "25%": {
            "border-radius": "28% 72% 57% 43% / 40% 21% 79% 60% ",
          },
          "50%": {
            "border-radius": "37% 63% 14% 86% / 73% 13% 87% 27% ",
          },
          "75%": {
            "border-radius": "23% 77% 18% 82% / 66% 20% 80% 34% ",
          },
          "100%": {
            "border-radius": "16% 84% 14% 86% / 65% 26% 74% 35% ",
          },
        },
      },
      animation: {
        borderShpeChanging:
          "borderShpeChanging 10s ease-in-out infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
