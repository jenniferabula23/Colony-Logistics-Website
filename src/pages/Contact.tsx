import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import { IMAGES, COMPANY } from '@/data/company';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in Touch"
        subtitle="Have a question or ready to book a service? We're here to help — reach us by phone, WhatsApp, or send us a message."
        image={IMAGES.officeCleaner}
      />

      {/* ===== CONTACT CARDS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="reveal glass-card group p-8 text-center">
              <div className="card-icon card-icon-lg mx-auto">
                <Phone className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Call Us</h3>
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="mt-2 block text-sm text-ink-500 transition-colors hover:text-primary-600"
                >
                  {phone}
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="reveal glass-card group p-8 text-center" style={{ transitionDelay: '0.08s' }}>
              <div className="card-icon card-icon-lg card-icon-green mx-auto">
                <MessageCircle className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">WhatsApp</h3>
              <p className="mt-2 text-sm text-ink-500">Chat with us instantly</p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Start Chat
              </a>
            </div>

            {/* Email */}
            <div className="reveal glass-card group p-8 text-center" style={{ transitionDelay: '0.16s' }}>
              <div className="card-icon card-icon-lg card-icon-gold mx-auto">
                <Mail className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Email Us</h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-2 block break-all text-sm text-ink-500 transition-colors hover:text-gold-600"
              >
                {COMPANY.email}
              </a>
            </div>

            {/* Location */}
            <div className="reveal glass-card group p-8 text-center" style={{ transitionDelay: '0.24s' }}>
              <div className="card-icon card-icon-lg mx-auto">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Visit Us</h3>
              <p className="mt-2 text-sm text-ink-500">{COMPANY.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM + MAP ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-primary-50/40 py-20 lg:py-28">
        <div className="absolute inset-0 bg-soft-glow" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="reveal card-quiet p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-green-50 p-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-green-500" />
                  <h3 className="font-display text-xl font-bold text-ink-900">Message Sent!</h3>
                  <p className="text-sm text-ink-500">
                    Thank you for reaching out. We'll be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">Full Name</label>
                      <input type="text" required className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">Phone Number</label>
                      <input type="tel" required className="input-field" placeholder="0XX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">Email</label>
                    <input type="email" className="input-field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">Subject</label>
                    <select className="input-field" defaultValue="">
                      <option value="" disabled>Select a subject</option>
                      <option value="logistics">Logistics Enquiry</option>
                      <option value="cleaning">Cleaning & Laundry Enquiry</option>
                      <option value="general">General Question</option>
                      <option value="quote">Request a Quote</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">Message</label>
                    <textarea required rows={4} className="input-field resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + info */}
            <div className="reveal space-y-6" style={{ transitionDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-ink-100">
                <iframe
                  title="The Colony Logistics location"
                  src="https://www.google.com/maps?q=Nii+Amasa+Nikoi+Avenue+Accra+Ghana&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-3xl bg-primary-700 p-8 text-white lg:p-10">
                <h3 className="font-display text-xl font-bold">The Colony Logistics Ltd</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                    <span className="text-sm text-white/80">{COMPANY.address}</span>
                  </div>
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-gold-300" />
                      {phone}
                    </a>
                  ))}
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-gold-300" />
                    <span className="text-sm text-white/80">Mon – Sat: 8:00 AM – 6:00 PM</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
