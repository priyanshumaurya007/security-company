'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone, Mail, MapPin, MessageCircle,
  Send, User, FileText, CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('phone', form.phone);
      formData.append('email', form.email);
      formData.append('service', form.service);
      formData.append('message', form.message);

      await fetch('https://script.google.com/macros/s/AKfycbxe42xzK6N7kM9eSxH4lsdOfwHTatqGoOYcZffTx4WuEaxAsuIlD48SEzHV4toEawTm/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Scripts requires no-cors from frontend
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or contact us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const info = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7754993033',
      href: 'tel:+917754993033',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 7754993033',
      href: 'https://wa.me/917754993033?text=Hello%20Garud%20Corporate%20Solutions',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Sundram Garden, Agra Expressway Ring Road, Near Kisan Path, Bada Gaon, Lucknow, UP',
      href: 'https://www.google.com/maps?cid=2419467853002501773&hl=en&gl=IN',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@garudcorporatesolutions.com',
      href: 'mailto:info@garudcorporatesolutions.com',
    },
  ];

  const services = [
    'Trained Security Personnel', 'CCTV Surveillance', 'Access Control Systems',
    'Event Security', 'Facility Management', 'Crowd Management',
    'Emergency Response', 'Housekeeping Services', 'Manpower Supply', 'Security Consulting',
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />
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
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Contact <span className="gold-text">Us</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to secure your premises? Reach out for a free consultation and customized quote.
            We respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left: Info + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact Info Cards */}
            {info.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === 'Address' || label === 'WhatsApp' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-glass rounded-xl p-5 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A88B20] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-black" size={18} />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917754993033?text=Hello%20Garud%20Corporate%20Solutions%2C%20I%20want%20a%20free%20security%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-xl border-2 border-[#25D366] text-[#25D366] font-bold text-sm hover:bg-[#25D366] hover:text-black transition-all duration-300"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp Now
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 h-52 mt-2">
              <iframe
                title="Garud Corporate Solutions Location – Lucknow"
                src="https://maps.google.com/maps?cid=2419467853002501773&hl=en&gl=IN&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.4)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-2xl p-8 h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16 gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <CheckCircle className="text-[#D4AF37]" size={40} />
                  </div>
                  <h3 className="text-2xl font-black">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will contact you within 2 hours with a
                    personalized consultation.
                  </p>
                  <a href="tel:+917754993033" className="btn-gold px-8 py-3 rounded-full text-sm font-bold">
                    Call Us Now
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold mb-6">Get a Free Consultation</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email Address (optional)"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <FileText size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 focus:border-[#D4AF37]/60 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Service Required</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#111] text-white">{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your security requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  />

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message & Get Free Quote
                      </>
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    We respond within 2 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
