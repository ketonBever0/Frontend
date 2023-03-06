/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateArrow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },

        openDrawer: {
          '0%': { opactiy: '0' },
          '100%': { opacity: '1' },
        }

      },

      animation: {
        'rotate-arrow': 'rotateArrow',

        'open-drawer': 'openDrawer'

      }

    },
  },
  plugins: [require("daisyui")],
}
