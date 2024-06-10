/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-light': 200,
        '500': 500
      },
      colors: {
        'yellow-select': '#F2BF43',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
      fontSize: {
        '15px': '15px',
        '24px': '24px',
      },
      boxShadow: {
        'sex-card': '0px 2px 10px 0px rgba(0, 0, 0, 0.25)',
        'weight-input': '0px 2px 10px 0px rgba(0, 0, 0, 0.25)'
      },
      borderRadius: {
        '6px': '6px',
        '10px': '10px'
      }
    },
  },
  plugins: [],
}
