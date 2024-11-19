/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FB6980"
        },
        gray: {
          default: "#202125",
          light: "#A6ADB5",
        }
      },
    },
  },
  plugins: [],
}

