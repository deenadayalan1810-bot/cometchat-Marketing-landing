/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  '#6F5BFF',
          violet:  '#8E7EFF',
          dark:    '#040414',
          surface: '#080820',
          card:    '#0D0D2A',
          border:  '#1C1C3A',
          muted:   '#73739A',
          text:    '#F2F2FB',
          subtext: '#A5A5C9',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        '600': '600',
        '700': '700',
        '800': '800',
      },
      backgroundImage: {
        'hero-glow':   'radial-gradient(ellipse 82% 52% at 50% -10%, rgba(111,91,255,0.3) 0%, transparent 62%)',
        'card-glow':   'radial-gradient(ellipse 60% 62% at 50% 0%, rgba(111,91,255,0.14) 0%, transparent 72%)',
        'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(111,91,255,0.22) 0%, transparent 72%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
