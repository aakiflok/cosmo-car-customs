import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        /* Surface */
        canvas:   '#181818',
        elevated: '#303030',
        'canvas-light': '#ffffff',
        'surface-soft': '#f7f7f7',
        'surface-strong': '#ebebeb',
        /* Accent */
        rossa:        '#c79a3b',
        'rossa-active':'#a97e2f',
        /* Text */
        ink:   '#ffffff',
        body:  '#969696',
        'body-strong': '#ffffff',
        muted: '#666666',
        'muted-soft': '#8f8f8f',
        'on-primary': '#ffffff',
        'body-light': '#181818',
        /* Hairlines */
        hairline: '#303030',
        'hairline-light': '#d2d2d2',
        'hairline-soft': '#ebebeb',
        /* Semantic */
        'sem-info':    '#4c98b9',
        'sem-success': '#03904a',
        'sem-warn':    '#f13a2c',
      },
      spacing: {
        xxxs: '4px',
        xxs:  '8px',
        xs:   '16px',
        sm:   '24px',
        md:   '32px',
        lg:   '48px',
        xl:   '64px',
        xxl:  '96px',
        super:'128px',
      },
      borderRadius: {
        none: '0px',
        xs:   '2px',
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        full: '9999px',
      },
      fontSize: {
        'display-mega': ['80px', { lineHeight:'1.05', letterSpacing:'-1.6px', fontWeight:'500' }],
        'display-xl':   ['56px', { lineHeight:'1.1',  letterSpacing:'-1.12px',fontWeight:'500' }],
        'display-lg':   ['36px', { lineHeight:'1.2',  letterSpacing:'-0.36px',fontWeight:'500' }],
        'display-md':   ['26px', { lineHeight:'1.5',  letterSpacing:'0.195px',fontWeight:'500' }],
        'title-md':     ['18px', { lineHeight:'1.2',  fontWeight:'700' }],
        'title-sm':     ['16px', { lineHeight:'1.4',  letterSpacing:'0.08px', fontWeight:'500' }],
        'body-md':      ['14px', { lineHeight:'1.5',  fontWeight:'400' }],
        'body-sm':      ['13px', { lineHeight:'1.5',  fontWeight:'400' }],
        caption:        ['12px', { lineHeight:'1.4',  fontWeight:'400' }],
        'caption-uc':   ['11px', { lineHeight:'1.4',  letterSpacing:'1.1px',  fontWeight:'600' }],
        btn:            ['14px', { lineHeight:'1.0',  letterSpacing:'1.4px',  fontWeight:'700' }],
        nav:            ['13px', { lineHeight:'1.4',  letterSpacing:'0.65px', fontWeight:'600' }],
        'num-display':  ['80px', { lineHeight:'1.0',  letterSpacing:'-1.6px', fontWeight:'700' }],
      },
      boxShadow: {
        soft: '0 4px 8px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
