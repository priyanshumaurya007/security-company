'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users, Camera, Lock, CalendarCheck, Building2,
  PersonStanding, Siren, Sparkles, Briefcase, Search,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Trained Security Personnel',
    description:
      'Police-verified, professionally trained guards deployed with discipline, vigilance, and an unwavering commitment to your premises.',
    color: '#D4AF37',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description:
      'State-of-the-art CCTV systems with round-the-clock monitoring, recording, and remote access for complete situational awareness.',
    color: '#F0C040',
  },
  {
    icon: Lock,
    title: 'Access Control Systems',
    description:
      'Smart biometric and card-based access control solutions to restrict unauthorized entry and maintain secure perimeters.',
    color: '#D4AF37',
  },
  {
    icon: CalendarCheck,
    title: 'Event Security',
    description:
      'Comprehensive event security planning and execution — from corporate gatherings to large-scale public events, handled professionally.',
    color: '#F0C040',
  },
  {
    icon: Building2,
    title: 'Facility Management',
    description:
      'End-to-end facility management covering maintenance, operations, housekeeping, and compliance — keeping your facility running at its best.',
    color: '#D4AF37',
  },
  {
    icon: PersonStanding,
    title: 'Crowd Management',
    description:
      'Expert crowd control and management strategies ensuring orderly flow and safety in high-density environments.',
    color: '#F0C040',
  },
  {
    icon: Siren,
    title: 'Emergency Response',
    description:
      'Rapid, trained emergency response teams ready to handle incidents — minimizing risk and ensuring quick resolution.',
    color: '#D4AF37',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping Services',
    description:
      'Professional housekeeping and sanitation services ensuring clean, hygienic, and well-maintained environments for your workspace.',
    color: '#F0C040',
  },
  {
    icon: Briefcase,
    title: 'Manpower Supply',
    description:
      'Flexible and reliable manpower solutions — skilled, semi-skilled, and unskilled labor supply tailored to your operational needs.',
    color: '#D4AF37',
  },
  {
    icon: Search,
    title: 'Security Consulting',
    description:
      'Expert security audits, risk assessments, and strategic consulting to build robust security frameworks for your organization.',
    color: '#F0C040',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Services() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Gold glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete suite of security and facility management solutions designed for businesses,
            institutions, and residential complexes across Lucknow and Uttar Pradesh.
          </p>
        </motion.div>

        {/* ── Service Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map(({ icon: Icon, title, description, color }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="card-glass rounded-2xl p-6 group cursor-default flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: `linear-gradient(135deg, ${color}22, ${color}10)`,
                  border: `1px solid ${color}40`,
                }}
              >
                <Icon size={22} style={{ color }} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {description}
                </p>
              </div>

              {/* Learn more */}
              <div className="flex items-center gap-1 text-[#D4AF37]/60 text-xs font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-6">
            Need a customized security plan for your organization?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold"
          >
            Get a Free Consultation <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
