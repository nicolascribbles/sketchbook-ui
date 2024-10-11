/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.svg',
    './index.html',
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontSize: {
        '2xs': '.6875rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Mono Sans', 'monospace'],
      },
      opacity: {
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  }
}