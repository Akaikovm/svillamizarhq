/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-accent', 'text-accent', 'border-accent', 'ring-accent', 'shadow-glow',
    'hover:bg-accent-dark', 'hover:text-accent', 'hover:border-accent', 'focus-visible:ring-accent',
    'dark:bg-accent', 'dark:text-accent-light', 'dark:border-accent-light', 'dark:shadow-glow',
    'from-accent', 'to-accent-light',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          800: '#27272a',
          900: '#18181b',
          950: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#b91c1c',
          light: '#dc2626',
          dark: '#991b1b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        'glow': '0 0 24px -4px rgba(185, 28, 28, 0.45)',
        'glow-lg': '0 0 32px -4px rgba(185, 28, 28, 0.5)',
      },
    },
  },
  plugins: [],
}
