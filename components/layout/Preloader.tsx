'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(false);
      window.dispatchEvent(new CustomEvent('preloaderComplete'));
      return;
    }

    const t1 = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('preloaderComplete'));
    }, 2600);

    const t2 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2600);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      animate={{ clipPath: 'inset(100% 0 0% 0)' }}
      transition={{ duration: 0.7, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-canvas pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-0 h-px w-full bg-rossa origin-left"
      />

      <div className="relative flex flex-col items-center -translate-y-[10%]">
        <div className="flex overflow-hidden pb-2">
          {'COSMO'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (i * 0.08), ease: [0.16, 1, 0.3, 1] }}
              className="font-barlow text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tighter text-ink"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-6 label-uc tracking-[0.3em] text-white/80"
        >
          Car Customs
        </motion.div>
      </div>
    </motion.div>
  );
}
