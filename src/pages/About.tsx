import { Link } from 'react-router-dom';
import {
  ShieldCheck, Clock, HeartHandshake, Sparkles, Target, Eye, ArrowRight,
  CheckCircle2, Users, MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { IMAGES, VALUES } from '@/data/company';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, Clock, HeartHandshake, Sparkles,
};

export default function About() {
  useScrollReveal();

  return (
    <>
      <PageHero
        crumb="About"
        title="About The Colony"
        subtitle="A Ghanaian logistics and cleaning services company built on reliability, professionalism, and trust."
        image={IMAGES.teamOnSite}
      />

      {/* ===== WHO WE ARE ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Who We Are</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                A Ghanaian Company You Can Count On
              </h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  The Colony Logistics Ltd is a Ghanaian-owned company providing
                  professional logistics and cleaning/laundry services to businesses
                  and households across Accra and beyond.
                </p>
                <p>
                  We understand the pace of business in Ghana — the need for timely
                  deliveries, clean environments, and services you can trust. That's
                  why we've built our company around reliability, professionalism,
                  and genuine care for our clients.
                </p>
                <p>
                  From moving goods across the city to keeping your spaces fresh and
                  clean, The Colony is committed to keeping your business and your
                  life moving smoothly.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">Based in Accra</p>
                    <p className="text-xs text-ink-500">Serving all of Ghana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">Two Divisions</p>
                    <p className="text-xs text-ink-500">Logistics & Cleaning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.15s' }}>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.officeCleaner} alt="Colony professional" className="h-56 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.cleaningKit} alt="Branded cleaning kit" className="h-40 w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.freshLaundry} alt="Fresh laundry" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.teamOnSite} alt="Team on site" className="h-56 w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="reveal glass-neon p-8 lg:p-10">
              <div className="card-icon card-icon-lg">
                <Target className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                To provide reliable, professional logistics and cleaning services
                that empower Ghanaian businesses and households to operate smoothly
                and confidently — delivering quality you can trust, every time.
              </p>
            </div>

            {/* Vision */}
            <div className="reveal glass-neon p-8 lg:p-10" style={{ transitionDelay: '0.1s' }}>
              <div className="card-icon card-icon-lg card-icon-gold">
                <Eye className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                To become Ghana's most trusted name in logistics and cleaning services —
                known for professionalism, reliability, and a genuine commitment to
                keeping businesses and communities moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">What Drives Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              These principles guide everything we do — from how we handle your
              deliveries to how we clean your spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={value.title}
                  className="reveal glass-card group p-8 text-center"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon card-icon-lg mx-auto">
                    {Icon && <Icon className="h-7 w-7" strokeWidth={2} />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Our Commitment</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Professionalism in Every Detail
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  'Trained, uniformed staff who represent your brand and ours',
                  'Transparent pricing with no hidden fees or surprises',
                  'Flexible scheduling that works around your business hours',
                  'Direct communication via phone, WhatsApp, or online',
                  'Consistent quality you can rely on, job after job',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/logistics" className="btn-primary">
                  Explore Logistics
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/cleaning-laundry" className="btn-outline">
                  Explore Cleaning
                </Link>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2" style={{ transitionDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-3xl shadow-glass-lg ring-1 ring-white/40">
                <img src={IMAGES.heroCleaner} alt="Colony professional at work" className="h-96 w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get to Know The Colony"
        subtitle="Have questions or ready to start? We're just a call or WhatsApp away."
        primaryLabel="Contact Us"
        primaryLink="/contact"
      />
    </>
  );
}
