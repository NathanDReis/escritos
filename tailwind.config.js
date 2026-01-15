/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },

      colors: {
        indigo: colors.indigo,
        stone: colors.stone,

        toast: {
          success: colors.indigo,
          info: colors.stone,
          warning: colors.yellow,
          error: colors.red,
        }
      },

      zIndex: {
        toast: '9999',
      },

      keyframes: {
        'slide-in-from-top-2': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-0.5rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'slide-in-from-top-2': 'slide-in-from-top-2 0.2s ease-out',
      },
    },
  },

  plugins: [],
}
