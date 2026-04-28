import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nika: {
          bg: '#0D0D0D',
          raised: '#161616',
          white: '#FAFAFA',
          gold: '#FFD700',
          'gold-dim': '#B8980A',
          haki: 'rgba(233,213,255,0.08)',
          'haki-border': 'rgba(233,213,255,0.18)',
          'haki-text': '#E9D5FF',
          green: '#4ADE80',
        },
      },
      borderRadius: {
        card: '32px',
        pill: '999px',
        icon: '20px',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Mono', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        nika: '0 0 40px rgba(255,215,0,0.12), 0 8px 32px rgba(0,0,0,0.6)',
        'nika-lg': '0 0 72px rgba(255,215,0,0.28), 0 16px 48px rgba(0,0,0,0.7)',
        nami: '0 0 32px rgba(255,165,0,0.15), 0 4px 24px rgba(0,0,0,0.5)',
      },
      animation: {
        sunSpin: 'sunSpin 24s linear infinite',
        drumSpin: 'drumSpin 8s linear infinite reverse',
        sonar: 'sonar 2s ease-out infinite',
        nikaFloat: 'nikaFloat 4s ease-in-out infinite',
        robinBloom: 'robinBloom 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
        namiCompass: 'namiCompass 6s ease-in-out infinite',
      },
      keyframes: {
        sunSpin: {
          '100%': { transform: 'rotate(360deg)' },
        },
        drumSpin: {
          '100%': { strokeDashoffset: '-200' },
        },
        sonar: {
          '0%': { boxShadow: '0 0 0 0 rgba(74,222,128,0.4)' },
          '100%': { boxShadow: '0 0 0 16px rgba(74,222,128,0)' },
        },
        nikaFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        robinBloom: {
          '0%': { transform: 'scale(0) rotate(-30deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        namiCompass: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
