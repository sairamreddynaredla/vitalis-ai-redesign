/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },

      // ✅ NEW COLOR SYSTEM (LIGHT + BLUE THEME)
      colors: {
        primary:   '#2563eb',   // main blue
        secondary: '#60a5fa',   // light blue
        accent:    '#3b82f6',

        background: '#ffffff',  // main background
        surface:    '#f8fafc',  // section bg / cards

        text:   '#0f172a',      // main text
        muted:  '#64748b',      // secondary text

        border: '#e2e8f0',      // borders
      },

      animation: {
        'fade-slide-up': 'fadeSlideUp 0.7s ease both',
        'float':         'phoneBob 6s ease-in-out infinite',
        'pulse-dot':     'pulseDot 2s infinite',
        'bounce-icon':   'bounceIcon 2.5s ease-in-out infinite',
        'scan-line':     'scanMove 2s ease-in-out infinite',
        'orb-float':     'orbFloat linear infinite',
        'grid-pulse':    'gridPulse 8s ease-in-out infinite',
      },

      keyframes: {
        fadeSlideUp: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        phoneBob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%':     { opacity: 0.5, transform: 'scale(0.8)' },
        },
        bounceIcon: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        scanMove: {
          '0%,100%': { top: '10%' },
          '50%':     { top: '80%' },
        },
        orbFloat: {
          '0%':   { transform: 'translate(0,0)' },
          '33%':  { transform: 'translate(30px,-20px)' },
          '66%':  { transform: 'translate(-20px,15px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        gridPulse: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};