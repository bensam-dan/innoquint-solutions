/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1a56db',
          600: '#1447c0',
          700: '#0d3a9e',
          800: '#0a2d7c',
          900: '#07205a',
          950: '#041540',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit 18s linear infinite reverse',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'circuit': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M10 10 L10 90 M90 10 L90 90 M10 50 L90 50 M50 10 L50 90' stroke='%231a56db' stroke-width='0.3' opacity='0.15' fill='none'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%231a56db' opacity='0.15'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%231a56db' opacity='0.15'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%231a56db' opacity='0.15'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%231a56db' opacity='0.15'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%2310b981' opacity='0.15'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%2310b981' opacity='0.15'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%2310b981' opacity='0.15'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%231a56db' opacity='0.15'/%3E%3Ccircle cx='50' cy='90' r='2' fill='%231a56db' opacity='0.15'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
