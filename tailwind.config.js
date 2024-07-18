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
        },
        secondary: {
          '50': '#fff8ed',
          '100': '#fff0d4',
          '200': '#ffdda9',
          '300': '#ffbf66',
          '400': '#fea039',
          '500': '#fc8213',
          '600': '#ed6709',
          '700': '#c54d09',
          '800': '#9c3d10',
          '900': '#7e3410',
          '950': '#441806',
        },

      },
      borderRadius:{
        'img-radius':'0px 300px 100px 100px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-mountain': {
          'clip-path': 'polygon(0 0, 100% 0,100% 95%, 0 100%)',
          borderRadius: '0% 0% 90% 10% / 0% 0% 20% 2%',
        },
      });

    },
  ],
}

