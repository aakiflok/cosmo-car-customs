import type { Variants } from 'framer-motion';

export const EASING = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASING } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASING } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0 0 0 0)', opacity: 1, transition: { duration: 0.9, ease: EASING } },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.96, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: EASING } },
};

export const slideRight: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: EASING } },
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: EASING } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
