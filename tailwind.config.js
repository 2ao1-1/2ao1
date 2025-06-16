/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
  ],

  theme: {
    fontFamily: {
      mainHead: ["Anton", "serif"],
      subhead: ["Aeonik", "Bebas Neue"],
      headline: ["Bebas Neue", "Arial", "sans-serif"],
      content: ["Inter", "Arial", "sans-serif"],
      handWrite: ["Sacramento", "cursive"],
      mono: ["JetBrains Mono", "Consolas", "monospace"],
    },

    extend: {
      height: {
        screen: "100dvh",
        "screen-safe":
          "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
      },

      colors: {
        primary: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#2c3333",
          900: "#212529",
          // 900: "#222222",
          // # //main
        },

        secondary: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e3e6ea",
          300: "#d3d7db",
          400: "#b8bcc2",
          500: "#7b7b7b", //second
          600: "#6c6c6c",
          700: "#5d5d5d",
          800: "#4e4e4e",
          900: "#3f3f3f",
        },

        tertiary: "#f8f8f8", // third
      },

      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        128: "32rem", // 512px
      },

      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
  },
};
