import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook, Music2, Clock } from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import ContactForm from './ContactForm';
import { site } from '../../lib/data';

export const metadata = {
  title: 'Contact & Prayer',
  description:
    'Reach Supernatural Life Church - request prayer, ask for counselling, or connect with the ministry of Pastor Philip Olubakin.',
};

const channels = [
  { icon: MapPin, label: 'Location', value: site.location, href: null },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Prayer line', value: '+234 800 000 0000', href: 'tel:+2348000000000' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/2348000000000' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: site.socials.instagram },
  { icon: Facebook, label: 'Facebook', href: site.socials.facebook },
  { icon: Music2, label: 'Podcast', href: site.socials.spotify },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="We&rsquo;d love to hear from you"
        subtitle="Whatever you&rsquo;re facing, you don&rsquo;t have to face it alone. Request prayer, reach out for counselling, or simply say hello."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Info */}
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href || undefined}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card flex h-full items-start gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft/50 text-gold-dark dark:bg-white/5 dark:text-gold-light">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-graphite-500 dark:text-white/40">{c.label}</p>
                    <p className="mt-1 font-medium text-navy-900 dark:text-white">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-graphite-200 bg-graphite-50 p-5 text-sm text-graphite-600 dark:border-white/10 dark:bg-navy-900 dark:text-white/60">
              <Clock size={18} className="text-gold-dark dark:text-gold-light" />
              Sunday services · midweek gatherings · online prayer rooms
            </div>
          </Reveal>

          {/* Map placeholder */}
          <Reveal delay={0.25}>
            <div className="mt-6 grid h-56 place-items-center overflow-hidden rounded-2xl border border-graphite-200 bg-gradient-to-br from-navy-800 to-navy-950 text-white dark:border-white/10">
              <div className="text-center">
                <MapPin size={28} className="mx-auto text-gold-light" />
                <p className="mt-2 font-display text-lg font-bold">Supernatural Life Church</p>
                <p className="text-sm text-white/60">{site.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-graphite-200 text-graphite-600 transition hover:border-gold hover:text-gold-dark dark:border-white/15 dark:text-white/60 dark:hover:text-gold-light"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
