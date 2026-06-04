import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    extend: {
      colors: {
        canvas:   '#0a0a0a',
        elevated: '#1a1a1a',
        'elevated-2': '#242424',
        rossa:        '#DA291C',
        'rossa-dark':  '#b01f15',
        'rossa-light': '#ff3d2e',
        ink:   '#ffffff',
        body:  '#8a8a8a',
        muted: '#555555',
        hairline: '#1f1f1f',
        'hairline-2': '#2a2a2a',
      },
      spacing: {
        xxxs:'4px', xxs:'8px', xs:'16px', sm:'24px',
        md:'32px', lg:'48px', xl:'64px', xxl:'96px', super:'128px',
      },
      borderRadius: { none:'0px', xs:'2px', sm:'4px' },
      fontSize: {
        'display-mega': ['clamp(3rem,8vw,7rem)',   { lineHeight:'0.95', letterSpacing:'-0.04em', fontWeight:'500' }],
        'display-xl':   ['clamp(2rem,5vw,4.5rem)', { lineHeight:'1.0',  letterSpacing:'-0.03em', fontWeight:'500' }],
        'display-lg':   ['clamp(1.5rem,3vw,3rem)', { lineHeight:'1.1',  letterSpacing:'-0.02em', fontWeight:'500' }],
        'display-md':   ['clamp(1.1rem,2vw,1.75rem)',{ lineHeight:'1.3', letterSpacing:'-0.01em', fontWeight:'500' }],
        'num-hero':     ['clamp(4rem,12vw,10rem)', { lineHeight:'1.0',  letterSpacing:'-0.05em', fontWeight:'700' }],
        'label-uc':     ['11px', { lineHeight:'1.4', letterSpacing:'2px', fontWeight:'600' }],
        btn:            ['12px', { lineHeight:'1.0', letterSpacing:'2px', fontWeight:'700' }],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':  'cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;
