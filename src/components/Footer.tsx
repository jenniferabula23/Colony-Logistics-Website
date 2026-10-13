import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, IMAGES } from '@/data/company';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 bg-brand-gradient opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row lg:px-8">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Ready to get moving?</h3>
            <p className="mt-1 text-white/60">Let The Colony handle your logistics and cleaning needs.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={COMPANY.requestTel} className="btn-primary">
              Request a Service
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img
                src={IMAGES.logo}
                alt="The Colony Logistics Ltd"
                className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/20 sm:h-20 sm:w-20"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              A Ghanaian logistics and cleaning services company keeping businesses and homes moving with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="mt-4 space-y-3.5">
              {COMPANY.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-gold-400" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Quick Connect</h4>
            <p className="mt-4 text-sm text-white/50">
              Chat with us instantly on WhatsApp for quick enquiries and bookings.
            </p>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/40 md:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
