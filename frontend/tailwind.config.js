/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#dee2fa",
          500: "#3c3e7c",
          600: "#4e4dd4"
        },
      },
    },
  },
  plugins: [],
}

