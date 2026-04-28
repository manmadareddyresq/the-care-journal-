/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { serif: ['"Merriweather"', 'serif'], sans: ['Inter', 'sans-serif'] },
      colors: {
        primary: { 50: '#eff6ff', 500: '#3b82f6', 600: '#2563eb' },
        health: { 50: '#f0fdf4', 500: '#22c55e', 600: '#16a34a' }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        glow: { '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }, '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' } }
      }
    }
  }
}
