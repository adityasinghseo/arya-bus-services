/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#05070B",
          dark: "#0F141C",
          darkcard: "#151B26",
          orange: "#FF7900",
          orangered: "#FF3D18",
          skyblue: "#91BBD9",
          purpleblue: "#8276B5",
          gray: "#8E9AA8",
          lightgray: "#F4F6F9",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-orange-grad': 'linear-gradient(135deg, #FF7900 0%, #FF3D18 100%)',
        'brand-blue-grad': 'linear-gradient(135deg, #8276B5 0%, #91BBD9 100%)',
        'dark-grad': 'linear-gradient(180deg, rgba(15, 20, 28, 0.95) 0%, rgba(5, 7, 11, 0.98) 100%)',
      }
    },
  },
  plugins: [],
}

