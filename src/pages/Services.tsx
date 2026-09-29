import { Link } from 'react-router-dom';
import {
  Truck, Sparkles, ArrowRight, Package, Warehouse, MapPin, ShieldCheck,
  Boxes, Shirt, Droplets, Wind, Layers, Home as HomeIcon, CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { IMAGES, SERVICES, STEPS } from '@/data/company';

const iconMap: Record<string, LucideIcon> = {
  Truck, Sparkles, Package, Warehouse, MapPin, ShieldCheck, Boxes,
  Shirt, Droplets, Wind, Layers, HomeIcon,
};

export default function Services() {
  useScrollReveal();

  return (
    <>
      <PageHero
        crumb="Services"
        title="Our Services"
        subtitle="Two divisions, one standard of excellence — professional logistics and cleaning/laundry services designed for Ghanaian businesses and homes."
        image={IMAGES.cleaningKit}
      />

      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3">
              <div className="card-icon card-icon-lg">
                <Truck className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Division One</span>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Logistics Services</h2>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-ink-500">
              Professional logistics solutions designed to keep deliveries and
              operations moving — from courier services to warehousing and freight.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.logistics.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.title}
                  className="reveal glass-card group p-8"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-8">
            <Link to="/logistics" className="btn-primary">
              Learn More About Logistics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 to-ink-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3">
              <div className="card-icon card-icon-lg card-icon-gold">
                <Sparkles className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-gold-600">Division Two</span>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Cleaning & Laundry Services</h2>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-ink-500">
              Professional laundry and cleaning solutions for homes and businesses —
              from washing and ironing to full commercial cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.cleaning.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.title}
                  className="reveal glass-card group p-8"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon card-icon-gold">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-8">
            <Link to="/cleaning-laundry" className="btn-gold">
              Learn More About Cleaning & Laundry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">Getting Started</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              Whether you need logistics or cleaning services, getting started is simple.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal glass-neon relative p-7"
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

      <section className="bg-ink-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">What You Get With The Colony</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Reliable, on-time service delivery',
              'Professional, trained and uniformed staff',
              'Transparent, competitive pricing',
              'Flexible scheduling for your convenience',
              'Direct WhatsApp and phone communication',
              'A trusted local partner invested in your success',
            ].map((item, i) => (
              <div
                key={item}
                className="reveal card-quiet flex items-center gap-3 p-5"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                <span className="text-sm font-medium text-ink-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
