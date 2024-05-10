/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-gem': {
          '50': '#f3f2ff',
          '100': '#e9e8ff',
          '200': '#d7d4ff',
          '300': '#b8b2ff',
          '400': '#9686ff',
          '500': '#7355fd',
          '600': '#6232f5',
          '700': '#5320e1',
          '800': '#461abd',
          '900': '#391796',
          '950': '#210c69',
        },
        'instagram':'#833AB4'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
