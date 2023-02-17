/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins:
    [require("daisyui"),
    require('flowbite/plugin')],
}
