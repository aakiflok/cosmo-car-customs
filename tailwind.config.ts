import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    extend: {
      colors: {
        canvas:   '#0a0a0a',
        elevated: '#1a1a1a',
        hairline: '#1f1f1f',
        rossa:    '#DA291C',
        'rossa-dark': '#b01f15',
        gold:     '#C79A3B',
        ink:      '#ffffff',
        body:     '#8a8a8a',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':  'cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;
