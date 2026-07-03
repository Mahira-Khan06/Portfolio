/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050203",
        ember: "#ff2b43",
        ember2: "#ff7a1a",
        card: "#140307",
        cardLine: "#2a0b10",
        ink: "#f3e9d8",
        muted: "#9a8b80",
        gold: "#d4af37",
      },
      fontFamily: {
        display: ["'Cormorant SC'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 24px rgba(255,43,67,0.35)",
        emberStrong: "0 0 44px rgba(255,43,67,0.6)",
        gold: "0 0 18px rgba(212,175,55,0.3)",
      },
    },
  },
  plugins: [],
};
