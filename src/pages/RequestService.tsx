import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, Sparkles, ArrowRight, CheckCircle2, Send, MessageCircle,
  User, Phone, Mail, MapPin, Calendar, FileText,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import { IMAGES, COMPANY } from '@/data/company';

export default function RequestService() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState<'logistics' | 'cleaning'>('logistics');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        crumb="Request a Service"
        title="Request a Service"
        subtitle="Tell us what you need — whether it's logistics, delivery, laundry, or cleaning — and we'll get back to you with a quote."
        image={IMAGES.heroCleaner}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          {submitted ? (
            <div className="reveal mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl bg-green-50 p-12 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Request Received!</h2>
              <p className="text-ink-500">
                Thank you for your request. Our team will review your details and
                contact you shortly with a quote. For urgent enquiries, please call
                us or reach out on WhatsApp.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="btn-outline"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-600 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              {/* Service type toggle */}
              <div className="reveal mb-10">
                <h2 className="mb-4 text-center font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  What Do You Need?
                </h2>
                <div className="mx-auto flex max-w-md gap-3">
                  <button
                    onClick={() => setServiceType('logistics')}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 px-5 py-4 text-sm font-semibold transition-all ${
                      serviceType === 'logistics'
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-ink-200 bg-white text-ink-500 hover:border-primary-300'
                    }`}
                  >
                    <Truck className="h-5 w-5" />
                    Logistics
                  </button>
                  <button
                    onClick={() => setServiceType('cleaning')}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 px-5 py-4 text-sm font-semibold transition-all ${
                      serviceType === 'cleaning'
                        ? 'border-gold-400 bg-gold-50 text-gold-700'
                        : 'border-ink-200 bg-white text-ink-500 hover:border-gold-300'
                    }`}
                  >
                    <Sparkles className="h-5 w-5" />
                    Cleaning & Laundry
                  </button>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="reveal mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl shadow-ink-100/50 ring-1 ring-ink-100 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                      <User className="mr-1 inline h-4 w-4" />
                      Full Name *
                    </label>
                    <input type="text" required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                      <Phone className="mr-1 inline h-4 w-4" />
                      Phone Number *
                    </label>
                    <input type="tel" required className="input-field" placeholder="0XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                      <Mail className="mr-1 inline h-4 w-4" />
                      Email
                    </label>
                    <input type="email" className="input-field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                      <MapPin className="mr-1 inline h-4 w-4" />
                      Location / Address
                    </label>
                    <input type="text" className="input-field" placeholder="Area, Accra" />
                  </div>
                </div>

                {/* Conditional fields */}
                {serviceType === 'logistics' ? (
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">Service Type</label>
                      <select className="input-field" defaultValue="">
                        <option value="" disabled>Select service</option>
                        <option>Delivery / Courier</option>
                        <option>Warehousing & Storage</option>
                        <option>Freight & Haulage</option>
                        <option>Last-Mile Distribution</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                        <Calendar className="mr-1 inline h-4 w-4" />
                        Preferred Date
                      </label>
                      <input type="date" className="input-field" />
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">Service Type</label>
                      <select className="input-field" defaultValue="">
                        <option value="" disabled>Select service</option>
                        <option>Laundry</option>
                        <option>Washing</option>
                        <option>Ironing</option>
                        <option>Folding</option>
                        <option>Home Cleaning</option>
                        <option>Office / Commercial Cleaning</option>
                        <option>Full Service (Laundry + Cleaning)</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                        <Calendar className="mr-1 inline h-4 w-4" />
                        Preferred Date
                      </label>
                      <input type="date" className="input-field" />
                    </div>
                  </div>
                )}

                <div className="mt-5">
                  <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                    <FileText className="mr-1 inline h-4 w-4" />
                    Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder={
                      serviceType === 'logistics'
                        ? 'Tell us about your delivery — what, where, when, and any special requirements...'
                        : 'Tell us about your cleaning or laundry needs — size of space, number of items, frequency, etc...'
                    }
                  />
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  <Send className="h-4 w-4" />
                  Submit Request
                </button>

                <p className="mt-4 text-center text-xs text-ink-400">
                  We'll respond within 24 hours. For urgent requests, call us or message on WhatsApp.
                </p>
              </form>

              {/* Quick contact alternative */}
              <div className="reveal mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row" style={{ transitionDelay: '0.1s' }}>
                <span className="text-sm text-ink-500">Prefer to talk to us directly?</span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                    >
                      <Phone className="h-4 w-4" />
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
