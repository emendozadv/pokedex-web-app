/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'red-pokedex': '#DC0A2D',
        'background-pokedex': '#EFEFEF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
