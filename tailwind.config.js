/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stf: ["var(--font-inter)", ...fontFamily.sans],
        dsf: ["var(--font-stint-ultra)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
