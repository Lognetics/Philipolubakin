import Image from 'next/image';
import { MapPin, Calendar, Video, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import Countdown from '../../components/Countdown';
import { conferences } from '../../lib/data';

export const metadata = {
  title: 'Conferences & Events',
  description:
    'Join Wind of the Spirit, 28 Days with the Holy Spirit and other gatherings convened by Pastor Philip Olubakin — encounters of Scripture, worship, prayer and the Holy Spirit.',
};

const eventPerks = ['Registration', 'Livestream', 'Schedules', 'Testimonials', 'Gallery', 'FAQs'];

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gatherings"
        title="Conferences & Events"
        subtitle="Transformational gatherings where the power and Word of God are communicated to believers. Come expectant — leave changed."
      />

      <section className="container-page space-y-10 py-16">
        {conferences.map((c, i) => (
          <Reveal key={c.slug} delay={0.05}>
            <article
              id={c.slug}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${c.accent} p-8 text-white sm:p-12`}
            >
              {c.image && (
                <>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-80`} />
                </>
              )}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                  <span className="eyebrow"><Calendar size={14} /> {formatDate(c.date)}</span>
                  <h2 className="heading-lg mt-3 text-white">{c.name}</h2>
                  <p className="mt-2 font-display text-lg italic text-gold-light">{c.tagline}</p>
                  <p className="mt-4 max-w-xl text-white/70">{c.description}</p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                    <span className="flex items-center gap-2"><MapPin size={15} className="text-gold-light" /> {c.location}</span>
                    <span className="flex items-center gap-2"><Video size={15} className="text-gold-light" /> Streamed live</span>
                    <span className="flex items-center gap-2"><Users size={15} className="text-gold-light" /> All welcome</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="btn-gold">Register free</button>
                    <button className="btn-outline">Add to calendar</button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/60">
                    {eventPerks.map((p) => (
                      <span key={p} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-gold-light" /> {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:justify-self-end">
                  <div className="glass-dark rounded-2xl p-6">
                    <p className="mb-4 text-center text-sm uppercase tracking-widest text-gold-light">Starts in</p>
                    <Countdown target={c.date} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-graphite-100 bg-graphite-50 py-20 dark:border-white/10 dark:bg-navy-900">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="heading-lg">Never miss a gathering</h2>
            <p className="mx-auto mt-4 max-w-xl text-graphite-600 dark:text-white/60">
              Subscribe for event dates, registration links and livestream reminders.
            </p>
            <a href="/#" className="btn-gold mt-8 inline-flex">Get event updates <ArrowRight size={16} /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
