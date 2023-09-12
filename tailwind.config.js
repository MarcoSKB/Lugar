/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#1E3240',
      'blue': '#AFD4E2',
      'grey': '#C4C4C4',
      'white': '#FFFFFF'
    },
    screens: {
      'sm' : '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl' : '1440px'
    },
    extend: {
      fontFamily: {
        primary: "Mulish",
      },
    },
  },
  plugins: [],
}

