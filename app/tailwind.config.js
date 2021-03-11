/*eslint-env node */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo'],
    },
    extend: {
      colors: {
        'h-gray': '#eeeeee',
        'h-red': '#b6131a',
        'h-black': '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
