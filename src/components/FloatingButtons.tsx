'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expanded,      setExpanded]      = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ── WhatsApp + Call Speed-dial (mobile) ── */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">

        {/* Expanded actions */}
        <AnimatePresence>
          {expanded && (
            <>
              {/* Call */}
              <motion.a
                key="call"
                href="tel:+917754993033"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.05 }}
                className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#D4AF37] text-black font-bold text-sm shadow-lg shadow-[#D4AF37]/30"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">Call Now</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                key="wa"
                href="https://wa.me/917754993033?text=Hello%20Garud%20Corporate%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/30"
              >
                <MessageCircle size={18} />
                <span className="hidden sm:inline">WhatsApp</span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          id="fab-main"
          aria-label="Contact options"
          onClick={() => setExpanded(!expanded)}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A88B20] flex items-center justify-center shadow-xl shadow-[#D4AF37]/30 hover:scale-110 transition-transform"
        >
          {expanded
            ? <X className="text-black" size={22} />
            : <MessageCircle className="text-black" size={22} />
          }
        </motion.button>

        {/* Pulse ring */}
        {!expanded && (
          <motion.div
            className="absolute bottom-0 right-0 w-14 h-14 rounded-full border-2 border-[#D4AF37]/60 pointer-events-none"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
      </div>

      {/* ── Scroll to Top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            whileHover={{ y: -4 }}
            className="fixed bottom-6 left-4 z-50 w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-black/80 backdrop-blur flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Permanent desktop WhatsApp side strip is in Hero.tsx ── */}
    </>
  );
}
