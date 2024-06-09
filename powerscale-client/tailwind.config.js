/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-light': 200
      },
      colors: {
        'yellow-select': '#F2BF43',
      }
    },
  },
  plugins: [],
}
