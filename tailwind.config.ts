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
        background: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#161616',
        border: '#1C1C1C',
        accent: '#2DD4BF',
        'accent-dim': '#14B8A6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3',
        'text-tertiary': '#525252',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        widest: '0.25em',
        'wider-2': '0.2em',
        'wider-3': '0.15em',
      },
      transitionTimingFunction: {
        precise: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
