/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "dstone": {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 54%, 90%)",
          600: "hsl(30, 54%, 90%)",
          900: "hsl(30, 54%, 90%)",
        },
        "Brown": {
          800: "hsl(14, 45%, 36%)"
        },
        "Rose": {
          800: "hsl(332, 51%, 32%)",
          50: "hsl(330, 100%, 98%)"
        }
      },
      fontFamily: {
        "outfit": ["Outfit", "sans-serif"],
        "young": ["Young Serif", "serif"]
      }
    },
  },
  plugins: [],
}

