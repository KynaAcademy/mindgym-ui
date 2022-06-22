const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors,
    extend: {
      colors: {
        pink: {
          DEFAULT: "#FF0063",
          200: "#EFA8B8",
          600: "#FF0063",
        },
        lime: {
          DEFAULT: "#C4F30C",
          200: "#E8FA9E",
          600: "#C4F30C",
        },
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
