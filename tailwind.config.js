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
        "main-yellow": "#b25600",
        "text-black": "#222222",
        "text-gray": "#898989",
        "bg-purple": "#EFEEFF",
        "bg-yellow": "#FFFB9B",
        "bg-blue": "#1B18A3",
        "bg-tab": "#DBDBDB"
      },
      padding: {
        c: "16px 24px",
      },
      width: {
        '65': '65px',
      }
    },
  },
  plugins: [],
};
