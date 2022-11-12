/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#171717",
        "main-light": "#f1f5f9",
        "high-light": "#fbbf24",

      }
    },
  },
  plugins: [],
}
