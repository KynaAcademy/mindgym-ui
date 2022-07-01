const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors,
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'mg-primary': '#C4F30C',
        'mg-primary-light': '#E8FA9E',
        'mg-secondary': '#FF0063',
        'mg-secondary-light': '#FFE3EE',
        'mg-onyx': '#060304',
        'mg-slate': '#203141',
        'mg-subtle': '#A4B0CD',
        'mg-accent': '#DCE4EE',
        'mg-light': '#EDF1F6',
        'mg-error': '#FF0202',
      },
      fontFamily: {
        sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif:
          'Literata ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        marker: '"Permanent Marker", serif',
        handwriting: "Caveat, serif",
      },
    },
  },
  variants: {},
  plugins: [],
};
