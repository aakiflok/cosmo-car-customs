'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen">

        {/* Wipe panel — canvas colour with a rossa right-edge accent */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '-100%' }}
          exit={{ x: '0%' }}
          transition={{ duration: 0.5, ease: EXPO }}
          className="fixed inset-0 z-[9998] pointer-events-none"
          style={{ background: '#0a0a0a' }}
        >
          {/* 3px red leading edge */}
          <span className="absolute right-0 top-0 h-full w-[3px] bg-rossa" aria-hidden="true" />
        </motion.div>

        {/* Reveal wipe — sweeps the panel off to the right */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '100%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: EXPO, delay: 0.05 }}
          className="fixed inset-0 z-[9998] pointer-events-none"
          style={{ background: '#0a0a0a' }}
        >
          <span className="absolute right-0 top-0 h-full w-[3px] bg-rossa" aria-hidden="true" />
        </motion.div>

        {/* Page content fades in after wipe clears */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EXPO, delay: 0.25 }}
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
