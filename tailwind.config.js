/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'gym-green': '#10B981',
        'gym-green-light': '#34D399',
        'gym-green-dark': '#059669',
        'gym-mint': '#6EE7B7',
        'gym-dark': '#1A1A1A',
        'gym-gray': '#2D2D2D',
        'gym-light': '#F0FDF4'
      }
    },
  },
  plugins: [],
}

