/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        hsTheme: {
          primary: "#693D2D",
          secondary: "#C3A492",
          accent: "#31261D",
          neutral: "#CE975C",
          "base-100": "#2596be",
        },
      }
    ],
  },
  theme: {
    extend: {
      keyframes: {
        rotateArrow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },

        // hide: {
        //   '0%': { opactiy: '1' },
        //   '100%': { opacity: '0' },
        // },

        //  drawer
        drawerOpen: {
          '0%': { width: '0px' },
          '100%': { width: '14rem' },
        },
        drawerClose: {
          '0%': { width: '14rem' },
          '100%': { width: '0px' },
        },

        //  drawer-submenu
        'setHeightAuto': {
          '0%': { height: '0px' },
          '100%': { height: 'auto' }
        },
        'setHeight0': {
          '0%': { height: 'auto' },
          '100%': { height: '0px' }
        }



      },

      animation: {
        'rotate-arrow': 'rotateArrow',

        //  drawer
        'open-drawer': 'drawerOpen 0.3s ease',
        'close-drawer': 'drawerClose 0.3s ease',
        'open-submenu': 'setHeightAuto 0.5s linear',
        'close-submenu': 'setHeight0 0.5s linear'


      }
    },
  },
  plugins: [require("daisyui")],
}
