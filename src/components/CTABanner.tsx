import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
}

export default function CTABanner({
  title = "Let's Keep You Moving",
  subtitle = "Whether it's a delivery across town or fresh, clean spaces — The Colony is ready when you are.",
  primaryLabel = 'Request a Service',
  primaryLink = '/request-service',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-25" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-400/25 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
        <div className="glass-dark mx-auto max-w-3xl px-8 py-12 sm:px-12">
          <h2 className="reveal font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          <p className="reveal mx-auto mt-5 max-w-2xl text-lg text-white/70" style={{ transitionDelay: '0.1s' }}>
            {subtitle}
          </p>
          <div
            className="reveal mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ transitionDelay: '0.2s' }}
          >
            <Link to={primaryLink} className="btn-gold">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
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
    </section>
  );
}
