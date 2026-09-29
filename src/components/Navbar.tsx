import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY, IMAGES } from '@/data/company';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-primary-100/60 bg-white/80 shadow-glass backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={IMAGES.logo}
            alt="The Colony Logistics Ltd"
            className={`rounded-2xl object-cover shadow-md transition-all duration-500 ${
              scrolled
                ? 'h-14 w-14 ring-1 ring-primary-100 sm:h-16 sm:w-16'
                : 'h-16 w-16 ring-2 ring-white/30 sm:h-[4.5rem] sm:w-[4.5rem]'
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'bg-primary-50 text-primary-700'
                      : 'bg-white/15 text-white backdrop-blur-sm'
                    : scrolled
                      ? 'text-ink-600 hover:bg-primary-50 hover:text-primary-700'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled ? 'text-ink-700' : 'text-white'}`}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phones[0]}
          </a>
          <Link to="/request-service" className="btn-primary !px-5 !py-2.5">
            Request a Service
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled ? 'text-ink-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-screen border-t border-primary-100/50' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 bg-white/95 px-5 py-4 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-ink-700 hover:bg-ink-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/request-service" className="btn-primary mt-3 w-full">
            Request a Service
          </Link>
          <div className="mt-3 flex flex-col gap-2 border-t border-ink-100 pt-3">
            {COMPANY.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-ink-700"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
