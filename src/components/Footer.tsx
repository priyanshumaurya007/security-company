'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, MessageCircle, ArrowRight, Globe, Share2, Link2 } from 'lucide-react';

const quickLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About Us', href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#whyus'    },
  { label: 'Contact',  href: '#contact'  },
];

const serviceLinks = [
  'Trained Security Personnel',
  'CCTV Surveillance',
  'Access Control Systems',
  'Event Security',
  'Facility Management',
  'Manpower Supply',
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="relative w-[320px] h-[320px] opacity-[0.035]">
          <Image src="/logo.jpeg" alt="" fill className="object-contain" sizes="320px" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/logo.jpeg"
                  alt="Garud Corporate Solutions"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-black text-sm tracking-wider gold-text">GARUD</div>
                <div className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">Corporate Solutions</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Your trusted partner for security services and facility management in Lucknow, Uttar Pradesh.
              Available 24/7, verified staff, customized solutions.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Globe,  href: '#', label: 'Website'   },
                { Icon: Share2, href: '#', label: 'Share'      },
                { Icon: Link2,  href: '#', label: 'LinkedIn'   },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#D4AF37]/20 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] text-sm transition-colors duration-200 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#D4AF37]" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] text-sm transition-colors duration-200 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#D4AF37]" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a href="tel:+917754993033" className="flex items-start gap-3 group">
                <Phone size={15} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest">Phone</p>
                  <p className="text-gray-400 text-sm group-hover:text-[#D4AF37] transition-colors">+91 7754993033</p>
                </div>
              </a>
              <a
                href="https://wa.me/917754993033"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MessageCircle size={15} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-gray-400 text-sm group-hover:text-[#25D366] transition-colors">+91 7754993033</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest">Address</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sundram Garden, Agra Expressway Ring Road,
                    Near Kisan Path, Bada Gaon,
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest">Email</p>
                  <p className="text-gray-400 text-sm break-all">info@garudcorporatesolutions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Garud Corporate Solutions. All Rights Reserved.
          </p>
          <p className="text-center">
            Security Services &amp; Facility Management in{' '}
            <span className="text-[#D4AF37]">Lucknow, Uttar Pradesh</span>
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
