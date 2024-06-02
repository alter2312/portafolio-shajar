/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", 
  ],
  
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
      height: {
        'vh':{
          '10':'10vh',
          '15':'15vh',
          '20':'20vh',
          '25':'25vh',
          '30':'30vh',
          '35':'35vh',
          '40':'40vh',
          '45':'45vh',
          '50':'50vh',
          '55':'55vh',
          '60':'60vh',
          '65':'65vh',
          '70':'70vh',
          '75':'75vh',
          '80':'80vh',
          '85':'85vh',
          '90':'90vh',
          '95':'95vh',
        },
        maxHeight:{
          'max':{
            ' vh-10':'10vh',
            ' vh-15':'15vh',
            ' vh-20':'20vh',
            ' vh-25':'25vh',
            ' vh-30':'30vh',
            ' vh-35':'35vh',
            ' vh-40':'40vh',
            ' vh-45':'45vh',
            ' vh-50':'50vh',
            ' vh-55':'55vh',
            ' vh-60':'60vh',
            ' vh-65':'65vh',
            ' vh-70':'70vh',
            ' vh-75':'75vh',
            ' vh-80':'80vh',
            ' vh-85':'85vh',
            ' vh-90':'90vh',
            ' vh-95':'95vh',
          }
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
