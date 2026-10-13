import { Link } from 'react-router-dom';
import {
  ArrowRight, Truck, Sparkles, ShieldCheck, Clock, Users, Phone, Wallet,
  MapPin, Zap, Store, Building2, UtensilsCrossed, Home as HomeIcon, Factory, HeartPulse,
  GraduationCap, Church, Star, Package, Droplets,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IMAGES, SERVICES, WHY_CHOOSE_US, STEPS, INDUSTRIES, COMPANY } from '@/data/company';
import CTABanner from '@/components/CTABanner';

const iconMap: Record<string, LucideIcon> = {
  Truck, Sparkles, ShieldCheck, Clock, Users, Phone, Wallet, MapPin, Zap,
  Store, Building2, UtensilsCrossed, HomeIcon, Home: HomeIcon, Factory, HeartPulse,
  GraduationCap, Church, Package, Droplets,
};

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ===== HERO — Freshify-inspired full-bleed ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroCleaner}
            alt="Professional Colony cleaner at work"
            className="h-full w-full scale-105 object-cover object-[center_20%] animate-scale-in"
            loading="eager"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-primary-950/30" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
              Fresh Spaces.<br />
              <span className="text-gradient">Business Moving.</span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-lg text-white/75"
              style={{ animationDelay: '0.15s' }}
            >
              Professional cleaning, laundry, and logistics across Accra —
              reliable service that keeps your home and business at their best.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row"
              style={{ animationDelay: '0.3s' }}
            >
              <a href={COMPANY.requestTel} className="btn-gold">
                Book a Service
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#divisions" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/60 animate-float" />
          </div>
        </div>
      </section>

      {/* ===== TWO DIVISIONS ===== */}
      <section id="divisions" className="section-texture relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-soft-glow" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Our Divisions</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Two Services. One Standard.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              Whether you need goods moved or spaces cleaned, The Colony delivers
              professional service with the same commitment to reliability and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Link
              to="/logistics"
              className="reveal group relative overflow-hidden rounded-[2rem] shadow-glass-lg"
            >
              <div className="absolute inset-0">
                <img
                  src={IMAGES.logisticsVan}
                  alt="Colony branded delivery van"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/55 to-transparent" />
              </div>
              <div className="relative flex flex-col items-start p-8 pt-72 lg:p-10 lg:pt-80">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-md ring-1 ring-white/25">
                  <Truck className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-white">Logistics</h3>
                <p className="mt-1 font-display text-lg font-semibold text-gold-300">
                  Move With Confidence.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Professional logistics solutions designed to keep deliveries and
                  operations moving — across Accra and throughout Ghana.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                  Explore Logistics
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              to="/cleaning-laundry"
              className="reveal group relative overflow-hidden rounded-[2rem] shadow-glass-lg"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="absolute inset-0">
                <img
                  src={IMAGES.officeCleaner}
                  alt="Colony professional cleaning"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/55 to-transparent" />
              </div>
              <div className="relative flex flex-col items-start p-8 pt-72 lg:p-10 lg:pt-80">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/90 text-ink-900 shadow-lg backdrop-blur-md">
                  <Sparkles className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-white">Cleaning & Laundry</h3>
                <p className="mt-1 font-display text-lg font-semibold text-gold-300">
                  Clean Spaces. Fresh Starts.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Professional laundry and cleaning solutions for homes and businesses —
                  convenience, freshness, and meticulous attention to detail.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                  Explore Cleaning & Laundry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — glass cards ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100/50 via-ink-50 to-primary-50/40 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-300/25 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-300/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Why The Colony</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              We combine local knowledge, professional standards, and genuine care
              to deliver services you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.title}
                  className="reveal glass-card group p-8"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">Simple Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              Getting started is easy. Four simple steps from enquiry to done.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal glass-neon relative p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="card-icon card-icon-lg font-display text-lg font-bold text-gold-300">
                  {step.num}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Who We Serve</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Industries & Customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              From retailers to restaurants, homes to hospitals — we serve businesses
              and individuals across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((industry, i) => {
              const Icon = iconMap[industry.icon];
              return (
                <div
                  key={industry.label}
                  className="reveal glass-card group flex flex-col items-center justify-center gap-4 p-6 text-center"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="card-icon">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                  </div>
                  <span className="text-sm font-semibold text-ink-800">{industry.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-primary-50/50 py-20 lg:py-24">
        <div className="absolute inset-0 bg-soft-glow" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="overflow-hidden rounded-[2rem] shadow-glass-lg ring-1 ring-white/50">
                <img
                  src={IMAGES.logisticsVan}
                  alt="Colony branded delivery van"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="card-quiet mt-6 p-6">
                <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Logistics</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink-900">Professional Delivery & Transport</h3>
                <ul className="mt-4 space-y-2.5">
                  {SERVICES.logistics.slice(0, 3).map((s) => (
                    <li key={s.title} className="text-sm text-ink-600">
                      <span className="font-semibold text-ink-800">{s.title}</span>
                      <span className="block text-ink-500">{s.desc}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/logistics" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800">
                  View All Logistics Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-[2rem] shadow-glass-lg ring-1 ring-white/50">
                <img
                  src={IMAGES.deepClean}
                  alt="Professional deep cleaning"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="card-quiet mt-6 p-6">
                <span className="text-sm font-bold uppercase tracking-wider text-gold-600">Cleaning & Laundry</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink-900">Fresh, Clean & Convenient</h3>
                <ul className="mt-4 space-y-2.5">
                  {SERVICES.cleaning.slice(0, 3).map((s) => (
                    <li key={s.title} className="text-sm text-ink-600">
                      <span className="font-semibold text-ink-800">{s.title}</span>
                      <span className="block text-ink-500">{s.desc}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/cleaning-laundry" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800">
                  View All Cleaning Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-800 to-primary-950" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-15" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal glass-neon mx-auto flex max-w-4xl flex-col items-center gap-6 px-8 py-10 text-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="max-w-3xl font-display text-xl font-medium text-white/95 text-balance sm:text-2xl">
              "Reliable, professional, and always on time. The Colony handles our
              deliveries and office cleaning — we wouldn't trust anyone else."
            </p>
            <p className="text-sm text-white/45">A satisfied client in Accra</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
