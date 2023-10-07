/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#2eb6c7",
      },
      padding: {
        c: "16px 24px",
      },
    },
  },
  plugins: [],
};
