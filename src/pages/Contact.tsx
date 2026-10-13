import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import { IMAGES, COMPANY } from '@/data/company';

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in Touch"
        subtitle="Ashaley Botwe — reach us by phone, WhatsApp, or visit our Accra office."
        image={IMAGES.officeCleaner}
      />

      {/* ===== CONTACT CARDS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Get in Touch</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Ashaley Botwe
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-500">
              Visit our Accra office in Ashaley Botwe, or call and WhatsApp us anytime during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

            <div className="reveal glass-card group p-8 text-center" style={{ transitionDelay: '0.08s' }}>
              <div className="card-icon card-icon-lg card-icon-green mx-auto">
                <MessageCircle className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">WhatsApp</h3>
              <p className="mt-2 text-sm text-ink-500">{COMPANY.phones[0]}</p>
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

            <div className="reveal glass-card group p-8 text-center" style={{ transitionDelay: '0.24s' }}>
              <div className="card-icon card-icon-lg mx-auto">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">Visit Us</h3>
              <p className="mt-2 text-sm font-semibold text-primary-700">Ashaley Botwe</p>
              <p className="mt-1 text-sm text-ink-500">{COMPANY.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP + OFFICE ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-primary-50/40 py-20 lg:py-28">
        <div className="absolute inset-0 bg-soft-glow" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-stretch">
            <div className="reveal overflow-hidden rounded-3xl shadow-glass ring-1 ring-white/60 lg:col-span-3">
              <iframe
                title="The Colony Logistics — Ashaley Botwe, Accra"
                src={COMPANY.mapEmbed}
                className="h-[28rem] w-full border-0 lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="reveal glass-neon space-y-5 p-8 lg:col-span-2 lg:p-10" style={{ transitionDelay: '0.1s' }}>
              <p className="text-sm font-bold uppercase tracking-widest text-gold-300">Accra Office</p>
              <h3 className="font-display text-2xl font-bold text-white">
                Visit our Accra office:<br />Ashaley Botwe
              </h3>
              <div className="space-y-4">
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
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-gold-300" />
                  {COMPANY.email}
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-gold-300" />
                  <span className="text-sm text-white/80">Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <a href={COMPANY.requestTel} className="btn-gold">
                  <Phone className="h-4 w-4" />
                  Call to Request Service
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={COMPANY.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
