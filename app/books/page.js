import { BookOpen, Headphones, Tablet, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import { books } from '../../lib/data';

export const metadata = {
  title: 'Books by Pastor Philip Olubakin',
  description:
    'Explore books by Pastor Philip Olubakin including Launch and Maintaining Your Fire - resources to equip you for a Spirit-empowered, purposeful life.',
};

const formatIcon = { Paperback: BookOpen, Ebook: Tablet, Audiobook: Headphones };

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Books"
        title="Read & grow"
        subtitle="Books that equip believers to launch into purpose and keep their fire burning. Available in paperback and ebook."
      />

      <section className="container-page space-y-16 py-16">
        {books.map((b, i) => (
          <Reveal key={b.slug} delay={0.05}>
            <article
              id={b.slug}
              className="grid items-center gap-10 rounded-3xl border border-graphite-200 bg-white p-8 dark:border-white/10 dark:bg-navy-900 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]"
            >
              {/* Cover */}
              <div className={`relative mx-auto flex aspect-[3/4] w-full max-w-[16rem] items-center justify-center rounded-xl bg-gradient-to-br ${b.color} p-8 text-center shadow-2xl ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/5 [background-image:linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)]" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">{b.title}</p>
                  <div className="mx-auto my-4 h-px w-12 bg-gold-light/60" />
                  <p className="text-xs uppercase tracking-widest text-gold-light">Pastor Philip Olubakin</p>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, s) => <Star key={s} size={15} fill="currentColor" />)}
                  <span className="ml-2 text-sm text-graphite-500 dark:text-white/40">Reader favourite · {b.year}</span>
                </div>
                <h2 className="heading-lg mt-3">{b.title}</h2>
                <p className="mt-2 font-display text-lg italic text-gold-dark dark:text-gold-light">{b.subtitle}</p>
                <p className="mt-4 text-graphite-600 dark:text-white/60">{b.synopsis}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-graphite-500 dark:text-white/40">Available in</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {b.formats.map((f) => {
                      const Icon = formatIcon[f] || BookOpen;
                      return (
                        <span key={f} className="inline-flex items-center gap-2 rounded-full border border-graphite-200 px-4 py-1.5 text-sm text-graphite-700 dark:border-white/15 dark:text-white/70">
                          <Icon size={15} className="text-gold-dark dark:text-gold-light" /> {f}
                        </span>
                      );
                    })}
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-graphite-300 px-4 py-1.5 text-sm text-graphite-400 dark:border-white/15 dark:text-white/30">
                      <Headphones size={15} /> Audiobook (soon)
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="btn-gold"><ShoppingCart size={16} /> Buy now</button>
                  <button className="btn-ghost">Read preview <ArrowRight size={16} /></button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
