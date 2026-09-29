import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  crumb?: string;
}

export default function PageHero({ title, subtitle, image, crumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full scale-105 object-cover animate-scale-in" loading="eager" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-primary-950/20" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
        {crumb && (
          <div className="mb-4 flex items-center gap-2 text-sm text-white/60 animate-fade-in">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/90">{crumb}</span>
          </div>
        )}
        <h1 className="max-w-3xl animate-fade-up font-display text-4xl font-bold text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl animate-fade-up text-lg text-white/70" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
