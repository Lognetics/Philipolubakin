import Image from 'next/image';
import Link from 'next/link';
import { Scale, Music, PenTool, Piano, Heart, ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import SectionHeader from '../../components/SectionHeader';
import { timeline } from '../../lib/data';

export const metadata = {
  title: 'About Pastor Philip Olubakin',
  description:
    'The story of Pastor Oladelemi Philip Olubakin - lawyer, author, pianist and founder of Supernatural Life Church - and his wife Pastor Funmi Olubakin.',
};

const gifts = [
  { icon: Scale, label: 'Lawyer' },
  { icon: PenTool, label: 'Author' },
  { icon: Piano, label: 'Pianist' },
  { icon: Music, label: 'Songwriter' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The story of Pastor Philip Olubakin"
        subtitle="A lawyer who traded the courtroom for the call of God - raising believers to live beyond the ordinary."
      />

      {/* Bio */}
      <section className="py-20">
        <div className="container-page grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="prose-content space-y-5 text-graphite-700 dark:text-white/70">
              <span className="eyebrow"><Sparkles size={14} /> Biography</span>
              <p className="text-lg leading-relaxed">
                <strong className="text-navy-900 dark:text-white">Oladelemi Philip Olubakin</strong> is a
                Nigerian pastor, lawyer, author, songwriter, pianist, artist and Bible teacher who is passionate
                about helping believers experience the reality of the supernatural through faith in Jesus Christ.
              </p>
              <p className="leading-relaxed">
                Born on the 15th of December, he was the seventh child and fifth son in a family of fourteen
                children, born to <strong className="text-navy-900 dark:text-white">Chief Oladele Philip Ayinla</strong>,
                the Omotoro of Owu. He attended Igamode Grammar School in Ota, Ogun State, before studying Law at{' '}
                <strong className="text-navy-900 dark:text-white">Obafemi Awolowo University</strong>, Ile-Ife, and
                completing his professional training at the <strong className="text-navy-900 dark:text-white">Nigerian Law
                School, Enugu Campus</strong>.
              </p>
              <p className="leading-relaxed">
                Though trained for the courtroom, Philip answered a deeper call. Grounded in an early Baptist
                foundation and serving faithfully as a choir member, in March 2019 he followed what he describes as
                divine leading and founded <strong className="text-navy-900 dark:text-white">Supernatural Life Church
                (SLC)</strong> in Abuja with just seven members. The ministry has since grown into a global church
                with a mandate to help believers &ldquo;live life beyond the ordinary.&rdquo;
              </p>
              <p className="leading-relaxed">
                Beyond leading SLC, Philip convenes transformational gatherings including{' '}
                <strong className="text-navy-900 dark:text-white">Wind of the Spirit</strong> and{' '}
                <strong className="text-navy-900 dark:text-white">28 Days with the Holy Spirit</strong>, focused on
                teaching Scripture, worship, prayer, and the ministry of the Holy Spirit. He is also the author of
                books including <em>Launch</em> and <em>Maintaining Your Fire</em>, and channels his gifts as a
                songwriter, pianist and artist into worship and creative ministry.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-graphite-200 shadow-xl dark:border-white/10">
                <Image
                  src="/images/ministry/fullbody.jpg"
                  alt="Pastor Philip Olubakin on stage"
                  width={1290}
                  height={1547}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gifts.map((g) => (
                  <div key={g.label} className="card flex flex-col items-center gap-2 p-3 text-center">
                    <g.icon size={20} className="text-gold-dark dark:text-gold-light" />
                    <span className="text-[11px] font-medium text-graphite-600 dark:text-white/60">{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy-radial py-24 text-white">
        <div className="container-page">
          <SectionHeader
            light
            eyebrow="The Journey"
            title="From early life to global ministry"
            subtitle="Key moments in the making of a ministry."
          />
          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <Reveal key={t.title + i} delay={0.04}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 z-10 h-[18px] w-[18px] rounded-full bg-gold-gradient ring-4 ring-navy-950" />
                    <div className="glass-dark rounded-2xl p-5">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold-light">{t.year}</span>
                      <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-graphite-200 bg-graphite-50 p-8 dark:border-white/10 dark:bg-navy-900 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/ministry/family.jpg"
                    alt="Pastor Philip and Pastor Funmi Olubakin"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <Heart size={22} className="text-gold-light" />
                    <p className="mt-2 font-display text-2xl font-bold">Philip &amp; Funmi</p>
                    <p className="mt-1 text-sm text-white/70">Serving together in ministry</p>
                  </div>
                </div>
                <div>
                  <span className="eyebrow"><Heart size={14} /> Family</span>
                  <h2 className="heading-lg mt-4">Pastor Funmi Olubakin</h2>
                  <p className="mt-4 text-graphite-600 dark:text-white/60">
                    Philip is married to <strong className="text-navy-900 dark:text-white">Pastor Funmi
                    Olubakin</strong> - a preacher, author and co-pastor at Supernatural Life Church who also leads{' '}
                    <strong className="text-navy-900 dark:text-white">Bliss Services</strong>. The two first met
                    during choir rehearsals, and were married on 1 September 2012.
                  </p>
                  <p className="mt-4 text-graphite-600 dark:text-white/60">
                    Together they are blessed with three daughters and serve side by side - modelling a marriage and
                    family built on the Word and the Spirit. Their shared leadership reflects the heart of SLC:
                    families and believers rising together to live beyond the ordinary.
                  </p>
                  <Link href="/contact" className="btn-ghost mt-8">
                    Connect with the ministry <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
