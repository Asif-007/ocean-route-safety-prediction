/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        card: '#112240',
        accent: '#00d4ff',
        accentSoft: '#2dd4bf',
        danger: '#ef4444',
        success: '#22c55e'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 212, 255, 0.2), 0 18px 40px rgba(10, 22, 40, 0.55)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' }
        }
      },
      animation: {
        rise: 'rise 550ms ease-out both',
        drift: 'drift 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
