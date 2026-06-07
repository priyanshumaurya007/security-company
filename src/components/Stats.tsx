'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Clock, ShieldCheck, Zap, Star } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  numericValue?: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: StatItem[] = [
  {
    icon: Clock,
    value: '24/7',
    label: 'Operational Support',
    suffix: '',
    sub: 'Always on guard, always available',
  },
  {
    icon: ShieldCheck,
    value: '100',
    numericValue: 100,
    suffix: '%',
    label: 'Verified Staff',
    sub: 'Police verified, background checked',
  },
  {
    icon: Zap,
    value: '30',
    numericValue: 30,
    suffix: 'min',
    label: 'Emergency Response',
    sub: 'Rapid deployment in emergencies',
  },
  {
    icon: Star,
    value: '500',
    numericValue: 500,
    suffix: '+',
    label: 'Trained Personnel',
    sub: 'Skilled, disciplined, and ready',
  },
];

function AnimatedCounter({
  numericValue,
  suffix,
  staticValue,
  inView,
}: {
  numericValue?: number;
  suffix: string;
  staticValue: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || !numericValue || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, numericValue, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest).toString()),
    });
    return controls.stop;
  }, [inView, numericValue]);

  if (!numericValue) {
    return <span>{staticValue}</span>;
  }

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0800 0%, #111000 50%, #0a0800 100%)',
      }}
    >
      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Large gold BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black opacity-[0.025] text-[#D4AF37] leading-none">
          GARUD
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            By The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-black">
            Our <span className="gold-text">Commitment</span> in Figures
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, numericValue, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative group text-center p-8 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] hover:bg-[#D4AF37]/[0.08] hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A88B20] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/20">
                <Icon className="text-black" size={24} />
              </div>

              {/* Counter */}
              <div className="text-4xl sm:text-5xl font-black gold-text mb-1 tabular-nums">
                <AnimatedCounter
                  numericValue={numericValue}
                  suffix={suffix}
                  staticValue={value}
                  inView={inView}
                />
              </div>

              <div className="text-white font-bold text-sm mb-1">{label}</div>
              <div className="text-gray-500 text-xs">{sub}</div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(212,175,55,0.06)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
