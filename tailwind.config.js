/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          '100': '#cce1f5',
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
  plugins: [],
}
