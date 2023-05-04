/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cd: {
          gray: "#E1E1E1",
          dark: "#171717",
        },
      },
      fontFamily: {
        stf: ["var(--font-inter)", ...fontFamily.sans],
        dsf: ["var(--font-stint-ultra)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
