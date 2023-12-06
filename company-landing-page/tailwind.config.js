/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"'],
      },
      colors: {
        'primary': '#0c3980',
        'secondary': '#F9A51A'
      },
    },
  },
  plugins: [],
}

