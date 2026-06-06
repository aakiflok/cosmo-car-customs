'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '-100%' }}
          exit={{ x: '0%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9998] bg-rossa pointer-events-none"
        />
        
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '100%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9998] bg-rossa pointer-events-none"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
