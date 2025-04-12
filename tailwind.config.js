/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          red: '#ff4d4d',
          blue: '#4d79ff', 
          purple: '#b84dff',
          teal: '#4df0ff',
          yellow: '#ffd84d',
          pink: '#ff4d9e',
          orange: '#ff8c4d',
          dark: '#0a0a1a',
          darker: '#050510',
          light: '#f0f0ff',
          neon: {
            pink: '#ff00ff',
            blue: '#00ffff',
            green: '#00ff00',
            purple: '#cc00ff'
          }
        },
        gradient: {
          rainbow: 'linear-gradient(90deg, #ff4d4d, #ff8c4d, #ffd84d, #4df0ff, #b84dff, #ff4d9e)',
          sunset: 'linear-gradient(90deg, #ff8c4d, #ff4d9e, #b84dff)',
          ocean: 'linear-gradient(90deg, #4d79ff, #4df0ff, #4dffb8)'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'rainbow': 'rainbow 8s linear infinite',
        'wave': 'wave 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(255, 255, 255, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(255, 255, 255, 0.6)' }
        },
        rainbow: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'circuit-pattern': 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.05) 0%, transparent 70%)'
      },
      boxShadow: {
        'cyber-glow': '0 0 15px rgba(0, 255, 255, 0.5)',
        'cyber-glow-red': '0 0 15px rgba(255, 0, 0, 0.5)',
        'cyber-glow-purple': '0 0 15px rgba(180, 0, 255, 0.5)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
