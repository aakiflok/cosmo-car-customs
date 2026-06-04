import type { Variants } from 'framer-motion'

// Spring presets
export const spring = {
  smooth: { type: 'spring', damping: 30, stiffness: 200 },
  snappy: { type: 'spring', damping: 25, stiffness: 300 },
}

// Easing curves
export const ease = {
  out:      [0.16, 1, 0.3, 1] as const,
  inOut:    [0.45, 0, 0.55, 1] as const,
}

// Fade up — standard section reveal
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
}

// Fade in — simple opacity only (safe, no layout shift)
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.out },
  },
}

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

// Card stagger child
export const cardReveal: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: ease.out },
  },
}

// Clip-path section reveal (mask from bottom)
export const clipReveal: Variants = {
  hidden:  { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.9, ease: ease.out },
  },
}

// Page transition wrapper
export const pageTransition: Variants = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 0.3, ease: ease.out } },
  exit:     { opacity: 0, transition: { duration: 0.2, ease: ease.inOut } },
}

// Consultation step transitions (forward progress feel)
export const stepForward: Variants = {
  initial:  { opacity: 0, x: 20 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.35, ease: ease.out } },
  exit:     { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

export const stepBack: Variants = {
  initial:  { opacity: 0, x: -20 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.35, ease: ease.out } },
  exit:     { opacity: 0, x: 20, transition: { duration: 0.2 } },
}
