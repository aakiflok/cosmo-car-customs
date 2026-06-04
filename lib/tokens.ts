// Cosmo Car Customs — Design Token System
// Adapted from Ferrari editorial design language

export const colors = {
  // Surfaces
  canvas:          '#181818',  // near-black page floor — never pure black
  elevated:        '#303030',  // cards and panels on dark canvas
  lightBand:       '#f7f7f7',  // white editorial alternating band
  lightStrong:     '#ebebeb',  // light-canvas dividers, badges

  // Accent — Cosmo Gold (replaces Rosso Corsa)
  gold:            '#c79a3b',
  goldActive:      '#a97e2f',

  // Text
  ink:             '#ffffff',  // display, body emphasis on dark
  body:            '#a1a1a1',  // default running-text on dark
  muted:           '#666666',  // sub-titles, captions
  onLight:         '#181818',  // default text on light bands

  // Hairlines
  hairline:        '#303030',  // 1px divider on dark
  hairlineOnLight: '#d2d2d2',  // 1px divider on light bands
}

export const spacing = {
  xxxs: '4px',
  xxs:  '8px',
  xs:   '16px',
  sm:   '24px',
  md:   '32px',
  lg:   '48px',
  xl:   '64px',
  xxl:  '96px',
  super:'128px',
}

export const typography = {
  displayMega: { size: 'clamp(2.75rem, 6vw, 5rem)',  weight: 500, lineHeight: 1.05, letterSpacing: '-0.04em' },
  displayXl:   { size: 'clamp(2.25rem, 4.8vw, 3.5rem)', weight: 500, lineHeight: 1.1, letterSpacing: '-0.03em' },
  displayLg:   { size: 'clamp(1.75rem, 3vw, 2.25rem)', weight: 500, lineHeight: 1.2, letterSpacing: '-0.02em' },
  displayMd:   { size: '26px',  weight: 500, lineHeight: 1.5, letterSpacing: '0.195px' },
  titleMd:     { size: '18px',  weight: 700, lineHeight: 1.2, letterSpacing: '0' },
  bodySm:      { size: '13px',  weight: 400, lineHeight: 1.5, letterSpacing: '0' },
  caption:     { size: '12px',  weight: 400, lineHeight: 1.4, letterSpacing: '0' },
  captionUpper:{ size: '11px',  weight: 600, lineHeight: 1.4, letterSpacing: '1.1px', textTransform: 'uppercase' },
  button:      { size: '14px',  weight: 700, lineHeight: 1.0, letterSpacing: '1.4px', textTransform: 'uppercase' },
  navLink:     { size: '13px',  weight: 600, lineHeight: 1.4, letterSpacing: '0.65px', textTransform: 'uppercase' },
}

export const radius = {
  none: '0px',     // every CTA, card, band — dominant
  xs:   '2px',     // tight badges (rare)
  sm:   '4px',     // form inputs
  full: '9999px',  // badge pills only
}

export const shadow = {
  soft:  '0 4px 8px rgba(0,0,0,0.1)',  // hovered cards
}
