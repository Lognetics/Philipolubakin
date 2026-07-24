import Link from 'next/link';
import { Sparkles, Instagram, Facebook, Music2, MapPin, Mail } from 'lucide-react';
import { nav, site } from '../lib/data';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Media Kit', href: '#' },
  { label: 'Volunteer', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'FAQs', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-navy-950">
              <Sparkles size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold">Supernatural Life Church</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            {site.subtitle}
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold-light">
              <Instagram size={18} />
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold-light">
              <Facebook size={18} />
            </a>
            <a href={site.socials.spotify} target="_blank" rel="noreferrer" aria-label="Spotify Podcast"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold-light">
              <Music2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-light">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-light">Connect</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> {site.location}</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-gold" /> {site.email}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/40">
            {footerLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="transition hover:text-white/70">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Supernatural Life Church. All rights reserved.</p>
          <p>Raising believers to live beyond the ordinary.</p>
        </div>
      </div>
    </footer>
  );
}
