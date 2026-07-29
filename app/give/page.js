import { Heart, Globe, Repeat, ShieldCheck } from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import GivingForm from './GivingForm';
import { givingOptions } from '../../lib/data';

export const metadata = {
  title: 'Give',
  description:
    'Partner with Supernatural Life Church through secure giving - tithes, offerings, projects and missions. Give once or set up recurring giving.',
};

const assurances = [
  { icon: ShieldCheck, title: 'Secure & encrypted', body: 'Every gift is protected with bank-grade security.' },
  { icon: Repeat, title: 'Recurring giving', body: 'Set up automatic monthly partnership in seconds.' },
  { icon: Globe, title: 'International ready', body: 'Give from anywhere in the world, in your currency.' },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Partner with the vision"
        subtitle="Your generosity fuels messages, missions and lives transformed across the nations. Thank you for sowing into the work of God."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <span className="eyebrow"><Heart size={14} /> Why we give</span>
            <h2 className="heading-lg mt-4">Generosity moves the Kingdom</h2>
            <p className="mt-4 text-graphite-600 dark:text-white/60">
              At Supernatural Life Church, giving is worship. It is how we honour God and extend His work -
              from teaching and media to missions and community impact across the nations.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {givingOptions.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.06}>
                <div className="card h-full p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">{o.title}</h3>
                  <p className="mt-2 text-sm text-graphite-600 dark:text-white/60">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {assurances.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft/50 text-gold-dark dark:bg-white/5 dark:text-gold-light">
                    <a.icon size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">{a.title}</p>
                    <p className="text-sm text-graphite-600 dark:text-white/60">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <GivingForm />
        </Reveal>
      </section>
    </>
  );
}
