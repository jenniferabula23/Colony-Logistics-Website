import { Link } from 'react-router-dom';
import {
  Shirt, Droplets, Wind, Layers, Sparkles, Home,
  ArrowRight, Clock, Leaf, HeartHandshake, ShieldCheck,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { IMAGES } from '@/data/company';

const cleaningServices = [
  {
    icon: Shirt,
    title: 'Laundry',
    desc: 'Professional washing and care for your everyday garments, linens, and fabrics — treated with the right detergents and methods for each material.',
    image: IMAGES.serviceLaundry,
  },
  {
    icon: Droplets,
    title: 'Washing',
    desc: 'Thorough, deep-clean washing that removes dirt, stains, and odours. We handle everything from everyday clothes to delicate items with care.',
    image: IMAGES.serviceWashing,
  },
  {
    icon: Wind,
    title: 'Ironing',
    desc: 'Crisp, perfectly pressed garments ready to wear. Our ironing service leaves your clothes looking sharp, smooth, and professional.',
    image: IMAGES.serviceIroning,
  },
  {
    icon: Layers,
    title: 'Folding',
    desc: 'Neatly folded and organised returns — your laundry comes back fresh, tidy, and ready to put away. Every item treated with care.',
    image: IMAGES.serviceFolding,
  },
  {
    icon: Sparkles,
    title: 'Cleaning',
    desc: 'Home and office cleaning services for spotless, healthy spaces. From carpet care to deep cleans, we leave your environment fresh.',
    image: IMAGES.serviceCleaning,
  },
  {
    icon: Home,
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for offices, shops, restaurants, and facilities. We keep your business premises clean, presentable, and welcoming.',
    image: IMAGES.serviceCommercial,
  },
];

const benefits = [
  { icon: Clock, title: 'Convenient Scheduling', desc: 'Pickup and delivery times that work around your schedule.' },
  { icon: Leaf, title: 'Fresh Results', desc: 'Clean, fresh, and beautifully presented — every single time.' },
  { icon: HeartHandshake, title: 'Care for Your Items', desc: 'We treat your garments and spaces with genuine respect and care.' },
  { icon: ShieldCheck, title: 'Professional Standards', desc: 'Trained staff, quality products, and consistent results you can trust.' },
];

const galleryImages = [
  { src: IMAGES.serviceLaundry, alt: 'Fresh laundry with Colony branding' },
  { src: IMAGES.serviceCleaning, alt: 'Home carpet cleaning' },
  { src: IMAGES.serviceCarCleaning, alt: 'Professional car detailing' },
  { src: IMAGES.serviceCommercial, alt: 'Commercial office cleaning' },
];

export default function CleaningLaundry() {
  useScrollReveal();

  return (
    <>
      <PageHero
        crumb="Cleaning & Laundry"
        title="Cleaning & Laundry"
        subtitle="Clean Spaces. Fresh Starts. Professional laundry and cleaning solutions for homes and businesses — convenience, freshness, and meticulous care."
        image={IMAGES.cleaningHero}
      />

      {/* ===== INTRO ===== */}
      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="text-sm font-bold uppercase tracking-widest text-gold-600">Cleaning & Laundry Division</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Fresh, Clean & Effortless
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed">
                At The Colony, we take the hassle out of laundry and cleaning.
                Whether it's your weekly laundry, a one-off deep clean, or regular
                commercial cleaning, our professional team delivers fresh, spotless
                results with convenience and care.
              </p>
              <p className="mt-4 text-ink-600 leading-relaxed">
                From washing and ironing to folding and full property cleaning —
                we handle every detail so you can focus on what matters most.
              </p>
              <div className="mt-8">
                <Link to="/request-service" className="btn-gold">
                  Request Cleaning Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2 grid grid-cols-2 gap-4" style={{ transitionDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-2xl shadow-glass">
                <img src={IMAGES.serviceLaundry} alt="Fresh Colony laundry" className="h-48 w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.serviceCarCleaning} alt="Car detailing service" className="h-44 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-glass">
                  <img src={IMAGES.serviceCleaning} alt="Home carpet cleaning" className="h-44 w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 to-ink-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">What We Do</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              Our Cleaning & Laundry Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              From laundry to deep cleaning — everything you need for fresh
              spaces and clean clothes.
            </p>
          </div>

          <div className="space-y-6">
            {cleaningServices.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.title}
                  className="reveal glass-card grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={`overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full min-h-[220px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="card-icon card-icon-gold">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">{service.title}</h3>
                    <p className="mt-3 text-ink-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section-texture relative bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">Why Choose Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
              The Colony Difference
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              Convenience, freshness, and professionalism in every service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="reveal glass-card group p-8 text-center"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="card-icon card-icon-lg card-icon-gold mx-auto">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GALLERY STRIP ===== */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">Fresh & Clean</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              The Results Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className="reveal overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-glass"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for Fresh Starts?"
        subtitle="Book your laundry or cleaning service today. We'll handle the rest — fresh, clean, and convenient."
        primaryLabel="Request Cleaning Service"
        primaryLink="/request-service"
      />
    </>
  );
}
