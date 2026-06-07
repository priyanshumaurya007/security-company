'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, ArrowDown, Shield, Star, Clock } from 'lucide-react';
import Image from 'next/image';

const badges = [
  { icon: Shield, label: 'Verified Staff'    },
  { icon: Clock,  label: '24/7 Available'    },
  { icon: Star,   label: '100% Trusted'      },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Parallax Background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/hero-bg-v2.png"
          alt="Premium security background – Garud Corporate Solutions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </motion.div>

      {/* ── Animated Gold Orbs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 lg:pt-0"
      >
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Shield size={12} />
          Lucknow&apos;s Premier Security Partner
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          Your Trust,{' '}
          <span className="block gold-shimmer">Our Responsibility</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Professional Security &amp; Facility Management Solutions
          {' '}For A <span className="text-[#D4AF37] font-semibold">Safer Future</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-gold flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold shadow-lg"
          >
            Get Free Consultation
            <ArrowDown size={18} className="animate-bounce" />
          </button>
          <a
            href="tel:+917754993033"
            className="btn-outline-gold flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold"
          >
            <Phone size={18} />
            Call: 7754993033
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
            >
              <Icon size={14} className="text-[#D4AF37]" />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#D4AF37]/60"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
        />
      </motion.div>

      {/* ── WhatsApp Floating Strip ── */}
      <motion.a
        href="https://wa.me/917754993033"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#25D366] text-white text-xs font-bold py-3 px-1.5 rounded-l-lg shadow-xl hidden lg:flex flex-col items-center gap-1 writing-vertical"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <MessageCircle size={16} />
        <span className="tracking-wider">WhatsApp</span>
      </motion.a>
    </section>
  );
}
