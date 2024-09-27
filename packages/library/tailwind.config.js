/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.svg',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        book: {
          base: 'var(--color-base)',
          'base-muted': 'var(--color-base-muted)',
          primary: {
            DEFAULT: 'var(--color-primary-500)',
            50: 'var(--color-primary-50)',
            100: 'var(--color-primary-100)',
            200: 'var(--color-primary-200)',
            300: 'var(--color-primary-300)',
            400: 'var(--color-primary-400)',
            500: 'var(--color-primary-500)',
            600: 'var(--color-primary-600)',
            700: 'var(--color-primary-700)',
            800: 'var(--color-primary-800)',
            900: 'var(--color-primary-900)',
          },
          secondary: {
            DEFAULT: 'var(--color-secondary-500)',
            50: 'var(--color-secondary-50)',
            100: 'var(--color-secondary-100)',
            200: 'var(--color-secondary-200)',
            300: 'var(--color-secondary-300)',
            400: 'var(--color-secondary-400)',
            500: 'var(--color-secondary-500)',
            600: 'var(--color-secondary-600)',
            700: 'var(--color-secondary-700)',
            800: 'var(--color-secondary-800)',
            900: 'var(--color-secondary-900)',
          },
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          danger: 'var(--color-danger)',
          info: 'var(--color-info)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',

  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  }
}