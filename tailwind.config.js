/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], theme: {
    extend: {
      fontFamily: {
       dg: ['"Darker Grotesque"', 'sans'],
       tw: ['"Titillium Web"', 'sans'],
       mc: ['"MonteCarlo"', 'sans'],
       in: ['"Inter"', 'sans'],
     },
     fontSize:{
       'dg-xs': '14px',
       'dg-sm': '16px',
       'dg-base': '20px',
       'dg-md': '24px',
       'dg-lg': '30px',
       'dg-xl': '40px',
       'dg-2xl': '60px',
       'dg-3xl': '80px',
     },
      colors: {
        primary: { "theme": "#FFCE53" },
        secondary: { "theme": "#1B1725" },
        cream: { "theme": "#FFF9EB" },
        teal: { "theme": "#3AAFA9" },
        gray: {
          "theme": "#5A5A5A",
          "theme2": "#B9B9B9",
          "theme3": "#1B172566",
          "theme4": "rgba(201, 203, 207, 0.2)"
        },
        yellow: {
          "theme" : "#E6BF00"
        },
        theme:{
          "dark-blue": "#1A1A2E",
          "green": "#008080",
          "red": "#AB0A14",
          "gray": "#8992A1",
          "gray-2": "#F0F0F0"
        },
      },
      boxShadow: {
        'customButtonShadow': '-1px 2px 1px 0px #FFF'
      },
      gridTemplateColumns: {
        'custom': '',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-hollow': {
          '-webkit-text-stroke': '0.7px white', /* Adjust the stroke width and color */
          'color': 'transparent',
          'font-weight': 'Black', /* Optional */
        },
        '.bg-fixed': {
      'background-attachment': 'fixed',
    },
      }, ['responsive', 'hover']);
    },
    
  ],
}