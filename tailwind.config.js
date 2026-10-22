/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* dark: "#0a0a0a",
        dark: "#1d1d1b",
        "dark-light": "#141414",
        "dark-card": "#1a1a1a",
        "dark-border": "#2a2a2a",
        */
        dark: "#1d1d1b",
        "dark-light": "#262624",
        "dark-card": "#2d2d2b",
        "dark-border": "#3d3d3b",
        gold: "#c9a84c",
        "gold-light": "#d4b96a",
        "gold-dark": "#a88a3a",
        cream: "#f5f0e8",
        "cream-dark": "#e0d8cc",
        muted: "#888888",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}