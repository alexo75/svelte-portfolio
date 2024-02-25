const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const addVariablesForColors = ({ addUtilities, e, theme, variants }) => {
  // Your custom code here
};

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    addVariablesForColors,
  ],
};
