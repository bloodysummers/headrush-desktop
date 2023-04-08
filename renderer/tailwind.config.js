const colors = require('tailwindcss/colors')
const customColors = require('./tokens/colors')
const scrollBars = require('tailwind-scrollbar')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
    colors: {
      ...colors,
      ...customColors
    }
  },
  plugins: [scrollBars({ nocompatible: true })]
}
