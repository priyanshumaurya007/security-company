'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Headphones, Sliders, Wallet, Heart } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified & Trained Staff',
    description:
      'Every guard and staff member undergoes thorough police verification, background checks, and professional training before deployment.',
    highlight: '100% Verified',
  },
  {
    icon: Headphones,
    title: '24/7 Support & Supervision',
    description:
      'Our operations are monitored around the clock. Supervisors conduct regular field checks, ensuring consistent performance at every site.',
    highlight: '24/7 Active',
  },
  {
    icon: Sliders,
    title: 'Customized Security Plans',
    description:
      'We don\'t believe in one-size-fits-all. Every client gets a tailored security plan built around their specific risks, layout, and requirements.',
    highlight: 'Tailored Plans',
  },
  {
    icon: Wallet,
    title: 'Affordable & Reliable Services',
    description:
      'Premium-quality security and facility management at competitive pricing — offering real value without compromising on standards.',
    highlight: 'Best Value',
  },
  {
    icon: Heart,
    title: 'Commitment to Safety & Trust',
    description:
      'Our core promise: complete dedication to your safety. We treat every client\'s security as our personal responsibility — always.',
    highlight: 'Our Promise',
  },
];

export default function WhyUs() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="whyus" ref={ref} className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0c0c08 50%, #080808 100%)' }}
    >
      {/* Decorative side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Radial accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle at bottom right, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Advantage
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Why Choose <span className="gold-text">Garud?</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            When it comes to security, experience and trust matter most. Here&apos;s why hundreds of clients
            across Lucknow choose Garud Corporate Solutions.
          </p>
        </motion.div>

        {/* ── Reason Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className={`card-glass rounded-2xl p-8 relative overflow-hidden group ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at top left, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
              />

              {/* Highlight pill */}
              <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 mb-5">
                {highlight}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:from-[#D4AF37]/30 transition-all duration-300">
                <Icon className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Strip ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-6 text-[#D4AF37] font-semibold text-lg italic"
        >
          &ldquo;Your Safety is Our Business. Your Trust is Our Reward.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
