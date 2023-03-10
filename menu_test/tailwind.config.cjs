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

        hiddenToVisible: {
          '0%': { opactiy: '0' },
          '100%': { opacity: '0.3' },
        }

      },

      animation: {
        'rotate-arrow': 'rotateArrow',

        'open-drawer': 'hiddenToVisible',

        'display-mobile-submenu': 'hiddenToVisible',

      }

    },
  },
  plugins: [require("daisyui")],
}
