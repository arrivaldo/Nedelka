/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '96.5rem',
         // or any value you prefer
      },
      screens: {
        'lg': '1420px',
        'xl': '1450px'
      },

    },
  },
  plugins: [],
}