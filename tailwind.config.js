/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      minHeight: {
        '80vh': '80vh'
      }
    },
  },
  plugins: [],
}

