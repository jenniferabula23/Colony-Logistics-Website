/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f4fb',
          100: '#ede6f6',
          200: '#d9ccec',
          300: '#bda8dc',
          400: '#9b7ac6',
          500: '#7d55ad',
          600: '#5f3a8f',
          700: '#4b2c74',
          800: '#3f2660',
          900: '#352250',
          950: '#211232',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f5c518',
          500: '#e5a90b',
          600: '#c48407',
          700: '#9a5f0a',
          800: '#7f4b10',
          900: '#6c3e13',
        },
        ink: {
          50: '#f7f6f8',
          100: '#eceaef',
          200: '#d8d4dd',
          300: '#b5afc0',
          400: '#8c8499',
          500: '#6d657a',
          600: '#574f63',
          700: '#474151',
          800: '#3c3744',
          900: '#1a1620',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-18px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(95,58,143,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(95,58,143,0.06) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #5f3a8f 0%, #352250 48%, #211232 100%)',
        'hero-gradient':
          'linear-gradient(105deg, rgba(26,22,32,0.92) 0%, rgba(53,34,80,0.72) 42%, rgba(26,22,32,0.35) 100%)',
        'soft-glow':
          'radial-gradient(ellipse at 20% 0%, rgba(157,122,198,0.18), transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(245,197,24,0.08), transparent 40%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(33, 18, 50, 0.08)',
        'glass-lg': '0 20px 50px rgba(33, 18, 50, 0.12)',
      },
    },
  },
  plugins: [],
};
