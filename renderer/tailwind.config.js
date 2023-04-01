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
      // fontFamily: {
      //   sans: ['var(--font-vera']
      // }
    },
    colors: {
      ...colors,
      ...customColors
    }
  },
  plugins: [scrollBars({ nocompatible: true })]
}
