/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(101.3deg, #0A4B75 18.99%, #1069A7 44.59%, #66A5E1 73.13%, #CCE1F5 99.01%)',
      },
      colors: {
        primary: {
          '100': '#CCE1F5',
          '200': '#bfe0f8',
          '300': '#66A5E1',
          '400': '#3387D7',
          '500': '#1273BA',
          '600': '#1069a7',
          '700': '#0f5c95',
          '800': '#0A4B75',
          '900': '#083C5C',
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-mountain': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        },
      });
      
    },
  ],
}

