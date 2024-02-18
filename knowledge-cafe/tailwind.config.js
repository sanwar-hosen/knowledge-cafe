/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['Exo', 'sans-serif'],
      },
      margin: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/5': '20%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '3/20': '15%',
        '1/20': '5%',
      },
      padding: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/5': '20%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '3/20': '15%',
        '1/20': '5%',
      },
    },
  },
  plugins: [require("daisyui")],
}