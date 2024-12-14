/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundColor: ['hover'],

      animation: {
        marquee: 'marquee 10s linear infinite',
      },
  
  
      fontFamily: {
        playball: ['Playball', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        textPrimary:'#d4a762'
      },
      animation: {
        'bounce-once': 'bounce-once 2s ease-out forwards',
      },
      keyframes: {
        'bounce-once': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-75px)',
          },
          '75%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animate-fill-both': {
          'animation-fill-mode': 'both',
        },
      });
    },
  ],}