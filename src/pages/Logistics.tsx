import { Link } from 'react-router-dom';
import {
  Truck, Package, Warehouse, MapPin, ShieldCheck, Boxes,
  ArrowRight, CheckCircle2, Phone, MapPinned, Clock, TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { IMAGES, SERVICES } from '@/data/company';

const iconMap: Record<string, LucideIcon> = {
  Truck, Package, Warehouse, MapPin, ShieldCheck, Boxes,
};

const process = [
  { num: '01', title: 'Booking & Scheduling', desc: 'Contact us to book your delivery or logistics service. We schedule pickups and deliveries at times that work for you.' },
  { num: '02', title: 'Pickup & Loading', desc: 'Our team arrives on time to collect your goods, handling everything with care and proper documentation.' },
  { num: '03', title: 'Transport & Tracking', desc: 'Your goods are transported efficiently with regular updates. We keep you informed every step of the way.' },
  { num: '04', title: 'Delivery & Confirmation', desc: 'Goods are delivered safely to their destination with confirmation and proof of delivery.' },
];

const benefits = [
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect deadlines and keep your operations running on schedule.' },
  { icon: ShieldCheck, title: 'Safe Handling', desc: 'Your goods are handled with care and protected throughout transit.' },
  { icon: TrendingUp, title: 'Efficient Routes', desc: 'Local knowledge means faster, smarter routes across Accra and Ghana.' },
  { icon: Phone, title: 'Real-Time Updates', desc: 'Stay informed with regular communication on your delivery status.' },
  { icon: MapPinned, title: 'Wide Coverage', desc: 'From Accra to regional centres — we go where your business needs us.' },
  { icon: Package, title: 'Flexible Capacity', desc: 'From small parcels to bulk freight, we scale to your needs.' },
];

export default function Logistics() {
  useScrollReveal();

  return (
    <>
      <PageHero
        crumb="Logistics"
        title="Logistics"
        subtitle="Move With Confidence. Professional logistics and delivery services designed to keep your business moving across Accra and Ghana."
        image={IMAGES.logisticsHero}
      />

      {/* ===== INTRO ===== */}
      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Logistics Division</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Professional Logistics You Can Rely On
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed">
                At The Colony, we understand that your deliveries are critical to
                your business. Whether it's a single package across town or bulk
                goods across regions, our logistics services are built around
                reliability, speed, and care.
              </p>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Our team combines local expertise with professional standards to
                ensure your goods reach their destination safely and on time —
                every time.
              </p>
              <div className="mt-8">
                <Link to="/request-service" className="btn-primary">
                  Request Logistics Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-2xl shadow-glass">
                <img src={IMAGES.logisticsVan} alt="Colony branded delivery van" className="h-48 w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.logisticsWarehouse} alt="Colony warehouse" className="h-44 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.logisticsLoading} alt="Loading packages into van" className="h-44 w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 to-ink-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">What We Offer</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Our Logistics Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              A full range of logistics solutions to keep your goods and your
              business moving.
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
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">Our Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How We Move Your Goods
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              A clear, straightforward process from booking to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div
                key={step.num}
                className="reveal glass-neon relative p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="card-icon card-icon-lg font-display text-lg font-bold text-gold-300">
                  {step.num}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Why Our Logistics</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Benefits of Choosing The Colony
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="reveal glass-card group flex gap-4 p-7"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{benefit.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-primary-50/40 py-20 lg:py-24">
        <div className="absolute inset-0 bg-soft-glow" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Our Fleet & Facilities</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Built to Keep You Moving
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: IMAGES.logisticsVan, alt: 'Colony delivery van' },
              { src: IMAGES.logisticsWarehouse, alt: 'Colony warehouse' },
              { src: IMAGES.logisticsLoading, alt: 'Package loading' },
              { src: IMAGES.logisticsStorage, alt: 'Warehouse storage' },
            ].map((img, i) => (
              <div
                key={img.src}
                className="reveal overflow-hidden rounded-2xl shadow-glass ring-1 ring-white/60"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110 lg:h-56"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner
        title="Ready to Move With Confidence?"
        subtitle="Get in touch today for a logistics quote. We'll get your goods where they need to go — safely and on time."
        primaryLabel="Request Logistics Service"
        primaryLink="/request-service"
      />
    </>
  );
}
