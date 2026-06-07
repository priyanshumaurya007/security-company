'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#whyus'    },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-[0_2px_30px_rgba(212,175,55,0.1)]'
            : 'bg-black/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link
              href="#home"
              onClick={() => handleNav('#home')}
              className="flex items-center group"
            >
              <div className="relative h-12 w-12 lg:h-14 lg:w-14 flex-shrink-0 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.jpeg"
                  alt="Garud Corporate Solutions – Security Services Lucknow"
                  fill
                  priority
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col leading-tight ml-2 hidden sm:flex">
                <span className="font-black text-sm tracking-wider gold-text">GARUD</span>
                <span className="text-[8px] text-gray-400 tracking-[0.2em] uppercase">Corporate Solutions</span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md group ${
                    activeLink === link.href
                      ? 'text-[#D4AF37]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#A88B20] rounded transition-all duration-300 ${
                      activeLink === link.href ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* ── CTA Buttons ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917754993033?text=Hello%20Garud%20Corporate%20Solutions%2C%20I%20am%20interested%20in%20your%20security%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all duration-300"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="tel:+917754993033"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold btn-gold"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              id="mobile-menu-btn"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center justify-between w-full py-4 border-b border-[#D4AF37]/10 text-left text-xl font-semibold text-white hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-[#D4AF37]/50" />
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-4"
            >
              <a
                href="tel:+917754993033"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold btn-gold"
              >
                <Phone size={18} /> Call Now: 7754993033
              </a>
              <a
                href="https://wa.me/917754993033?text=Hello%20Garud%20Corporate%20Solutions%2C%20I%20am%20interested%20in%20your%20security%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </motion.div>

            {/* Decorative bottom */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col items-center gap-3">
              <div className="relative w-14 h-14 opacity-30">
                <Image src="/logo.jpeg" alt="" fill className="object-contain" sizes="56px" />
              </div>
              <p className="text-gray-600 text-xs tracking-widest uppercase">Vigilance · Protection · Trust</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
