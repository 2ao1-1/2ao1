/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mainHead: "Old-English ,Playfair",
      subhead: "Playfair",
      headline: "BebasNeue , Arial ,sans-serif",
      content: "Arial ,sans-serif",
      handWrite: "sacramento",
    },
    extend: {
      height: { screen: "100dvh" },
      colors: {
        primary: "#222222",
        secondary: "#7b7b7b",
        tertiory: "#f8f8f8",
        white: "#ffffff",
      },

      animation: {
        textloop: "loopTextLeft 60s linear infinite",
        loop: "loopTextLeft 4s linear infinite",
      },
      keyframes: {
        loopTextLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
