/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0B0D',
          surface: '#13151A',
          raised: '#1A1D24',
          border: '#22262F',
        },
        emerald: {
          glow: '#34D399',
          core: '#10B981',
          deep: '#059669',
        },
        ink: {
          DEFAULT: '#F4F4F5',
          dim: '#A1A1AA',
          mute: '#71717A',
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'emerald-radial': 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.18), transparent 60%)',
        'card-gradient': 'linear-gradient(155deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(16,185,129,0.35)',
        'glow-lg': '0 0 80px -20px rgba(16,185,129,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px -10px rgba(0,0,0,0.6)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        dialSweep: {
          '0%': { strokeDashoffset: 'var(--dial-circumference)' },
          '100%': { strokeDashoffset: 'var(--dial-offset)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 0.5s ease forwards',
        slideInRight: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideInLeft: 'slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        dialSweep: 'dialSweep 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
