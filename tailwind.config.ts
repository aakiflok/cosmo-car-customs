import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:    '#181818',
        elevated:  '#303030',
        gold:      '#c79a3b',
        goldActive:'#a97e2f',
        ink:       '#ffffff',
        bodyText:  '#a1a1a1',
        muted:     '#666666',
        hairline:  '#303030',
        lightBand: '#f7f7f7',
        onLight:   '#181818',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
      maxWidth: {
        editorial: '1280px',
      },
      borderRadius: {
        none: '0px',
        xs:   '2px',
        sm:   '4px',
        full: '9999px',
      },
      letterSpacing: {
        nav: '0.65px',
        cta: '1.4px',
        badge: '1.1px',
      },
    },
  },
  plugins: [],
} satisfies Config
