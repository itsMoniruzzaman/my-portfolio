/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      animation: {
        typewriter: "typewriter 3s ease-in-out 1s infinite normal both",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "11ch" }, // Set to approximate character width
        },
      },
    },
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
