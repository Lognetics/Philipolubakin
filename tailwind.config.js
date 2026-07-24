/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: Gold + White + Deep Navy + Soft Grey
        navy: {
          DEFAULT: '#0A1F44',
          50: '#E7EBF3',
          100: '#C3CEE0',
          200: '#8B9DC3',
          800: '#0D2350',
          900: '#081733',
          950: '#050F22',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C566',
          soft: '#F3E7BE',
          dark: '#9E7E15',
        },
        graphite: {
          DEFAULT: '#3A3F4A',
          50: '#F6F7F9',
          100: '#EDEFF2',
          200: '#D9DDE3',
          400: '#9AA1AD',
          600: '#5A6472',
          800: '#2A2F38',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E3C566 0%, #C9A227 50%, #9E7E15 100%)',
        'navy-radial': 'radial-gradient(ellipse at top, #0D2350 0%, #050F22 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
