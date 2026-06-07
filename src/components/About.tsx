'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver reliable, professional security and facility management solutions that safeguard our clients\' assets, people, and operations — with integrity and excellence at every step.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted security partner across Uttar Pradesh, recognized for verified professionals, cutting-edge technology, and unwavering commitment to client safety.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Trust, transparency, discipline, and dedication form the foundation of everything we do. We treat every client\'s security as a personal responsibility.',
  },
];

const milestones = [
  { icon: Award,  value: 'ISO',      label: 'Quality Certified'    },
  { icon: Users,  value: '500+',     label: 'Trained Personnel'    },
  { icon: Shield, value: '200+',     label: 'Sites Protected'      },
  { icon: Target, value: 'Pan UP',   label: 'Service Coverage'     },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 80px)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            About <span className="gold-text">Garud</span> Corporate Solutions
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Garud Corporate Solutions is a premier security services and facility management company
            headquartered in <span className="text-[#D4AF37]">Lucknow, Uttar Pradesh</span>. We combine
            trained manpower, modern technology, and a client-first approach to deliver safety you can rely on.
          </p>
        </motion.div>

        {/* ── Mission / Vision / Values ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="card-glass rounded-2xl p-8 text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                <Icon className="text-[#D4AF37]" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-black mb-6">
              Protecting What <span className="gold-text">Matters Most</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded with a vision to redefine security standards in Lucknow, Garud Corporate Solutions
                has grown into one of the region&apos;s most trusted names in integrated security and
                facility management services.
              </p>
              <p>
                Our team of professionally trained security personnel, supervisors, and support staff
                is rigorously screened, certified, and deployed with precision — ensuring zero compromise
                on your safety.
              </p>
              <p>
                From corporate offices and industrial plants to residential societies and events, we
                tailor our services to your unique needs — delivering peace of mind, always.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="mt-8 space-y-3">
              {[
                'Police verified & background-checked personnel',
                'Trained in emergency response and conflict resolution',
                'Advanced CCTV & access control integration',
                'Prompt response — 24 hours, 7 days a week',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Milestone grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-5"
          >
            {milestones.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
                className="card-glass rounded-2xl p-7 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A88B20] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-black" size={20} />
                </div>
                <div className="text-3xl font-black gold-text mb-1">{value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
