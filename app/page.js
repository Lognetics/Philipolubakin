import Link from 'next/link';
import Image from 'next/image';
import {
  Play, Radio, ArrowRight, HandHeart, Calendar, BookMarked, Sparkles, Quote,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Countdown from '../components/Countdown';
import SectionHeader from '../components/SectionHeader';
import SermonCard from '../components/SermonCard';
import { stats, beliefs, sermons, conferences, books, site } from '../lib/data';

const featuredConf = conferences[0];

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-screen overflow-hidden bg-navy-radial pt-24 text-white hero-vignette">
        {/* ambient blobs */}
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full bg-navy-800/50 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

        <div className="container-page relative z-10 grid items-center gap-12 pb-20 pt-10 lg:grid-cols-2 lg:pt-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-light backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                Live services every Sunday · {site.location}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="heading-xl mt-6 text-white">
                Raising Believers to Live{' '}
                <span className="text-gold-grad">Beyond the Ordinary.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {site.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/sermons" className="btn-gold">
                  <Play size={16} fill="currentColor" /> Watch Messages
                </Link>
                <Link href="/conferences" className="btn-outline">
                  <Radio size={16} /> Join Livestream
                </Link>
                <Link href="/contact" className="btn-ghost text-white">
                  <HandHeart size={16} /> Request Prayer
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 glass-dark inline-flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold-light">Next gathering</p>
                  <p className="mt-1 font-display text-lg font-bold">{featuredConf.name}</p>
                </div>
                <Countdown target={featuredConf.date} compact />
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.25} className="relative mx-auto w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
                <Image
                  src="/images/pastor/philip-03.jpg"
                  alt="Pastor Oladelemi Philip Olubakin"
                  width={1281}
                  height={997}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-6 pt-16">
                  <p className="font-display text-xl font-bold">Pastor Philip Olubakin</p>
                  <p className="text-sm text-gold-light">Senior Pastor · SLC Global</p>
                </div>
              </div>
              <div className="absolute -right-5 -top-5 hidden animate-float glass-dark rounded-2xl px-5 py-4 sm:block">
                <p className="font-display text-2xl font-bold text-gold-light">40+</p>
                <p className="text-xs text-white/60">Nations reached</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ IMPACT STATS ============================ */}
      <section className="border-y border-graphite-100 bg-graphite-50 py-14 dark:border-white/10 dark:bg-navy-900">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-bold text-gold-grad sm:text-5xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-graphite-600 dark:text-white/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ ABOUT PREVIEW ============================ */}
      <section className="py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-graphite-200 shadow-xl dark:border-white/10">
                <Image
                  src="/images/pastor/philip-02.jpg"
                  alt="Pastor Philip Olubakin ministering"
                  width={2188}
                  height={2394}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl border-2 border-gold/40" />
              <div className="absolute -bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
                <Quote size={20} className="text-gold-light" />
                <p className="mt-2 font-display text-sm italic leading-relaxed">
                  &ldquo;You were never created for the ordinary. In Christ, the supernatural is your normal.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="About Pastor Philip"
              title="A lawyer turned voice for the supernatural"
              subtitle="Pastor Oladelemi Philip Olubakin is a Nigerian pastor, lawyer, author, songwriter, pianist and Bible teacher passionate about helping believers experience the reality of the supernatural through faith in Jesus Christ."
            />
            <Reveal delay={0.15}>
              <p className="mt-5 text-graphite-600 dark:text-white/60">
                He studied Law at Obafemi Awolowo University and the Nigerian Law School, Enugu, before
                answering God&rsquo;s call into full-time ministry. In March 2019 he founded Supernatural Life
                Church in Abuja with seven members — a family that has since grown into a global church.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-ghost">
                  Read his story <ArrowRight size={16} />
                </Link>
                <Link href="/books" className="btn-ghost">
                  <BookMarked size={16} /> His books
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ BELIEFS / MINISTRY ============================ */}
      <section className="bg-navy-radial py-24 text-white">
        <div className="container-page">
          <SectionHeader
            light
            eyebrow="Supernatural Life Church"
            title="What we believe"
            subtitle="A global church with one mandate — helping believers live life beyond the ordinary."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="glass-dark h-full rounded-2xl p-6 transition hover:border-gold/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                    <Sparkles size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/about" className="btn-outline">
              Learn about SLC <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================ FEATURED SERMONS ============================ */}
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              align="left"
              eyebrow="Messages"
              title="Latest teachings"
              subtitle="Sound, Spirit-filled teaching to build your faith and stir your fire."
            />
            <Reveal delay={0.1}>
              <Link href="/sermons" className="btn-ghost">
                Full library <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <SermonCard sermon={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CONFERENCE FEATURE ============================ */}
      <section className="container-page pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 text-white sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow">
                  <Calendar size={14} /> Upcoming Conference
                </span>
                <h2 className="heading-lg mt-4 text-white">{featuredConf.name}</h2>
                <p className="mt-4 max-w-lg text-white/70">{featuredConf.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/conferences" className="btn-gold">Register now</Link>
                  <Link href="/conferences" className="btn-outline">View all events</Link>
                </div>
              </div>
              <div className="lg:justify-self-end">
                <p className="mb-3 text-sm uppercase tracking-widest text-gold-light">Counting down</p>
                <Countdown target={featuredConf.date} />
                <p className="mt-4 text-sm text-white/50">{featuredConf.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================ BOOKS ============================ */}
      <section className="border-t border-graphite-100 bg-graphite-50 py-24 dark:border-white/10 dark:bg-navy-900">
        <div className="container-page">
          <SectionHeader
            eyebrow="Books"
            title="Read & grow"
            subtitle="Resources to equip you for a Spirit-empowered, purposeful life."
          />
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {books.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.1}>
                <Link
                  href={`/books#${b.slug}`}
                  className="card group flex gap-5 p-5"
                >
                  <div className={`grid aspect-[3/4] w-28 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${b.color} p-4 text-center shadow-lg`}>
                    <span className="font-display text-lg font-bold leading-tight text-white">{b.title}</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">{b.title}</h3>
                    <p className="mt-1 text-sm text-gold-dark dark:text-gold-light">{b.subtitle}</p>
                    <p className="mt-3 line-clamp-3 text-sm text-graphite-600 dark:text-white/50">{b.synopsis}</p>
                    <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-navy-900 transition group-hover:gap-2 dark:text-white">
                      Explore <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ GIVE CTA ============================ */}
      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold-soft/40 to-white p-10 text-center dark:from-navy-900 dark:to-navy-950 sm:p-16">
              <span className="grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-navy-950">
                <HandHeart size={26} />
              </span>
              <h2 className="heading-lg mt-6">Partner with the vision</h2>
              <p className="mx-auto mt-4 max-w-xl text-graphite-600 dark:text-white/60">
                Your giving fuels messages, missions and lives transformed across the nations. Give securely,
                give generously.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/give" className="btn-gold">Give now</Link>
                <Link href="/contact" className="btn-ghost">Talk to us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ NEWSLETTER ============================ */}
      <section className="border-t border-graphite-100 bg-navy-950 py-20 text-white dark:border-white/10">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              light
              align="left"
              eyebrow="Newsletter"
              title="Stay connected"
              subtitle="Weekly teachings, prayer points and event updates — straight to your inbox."
            />
          </div>
          <Reveal delay={0.1}>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-gold"
              />
              <button type="submit" className="btn-gold shrink-0">Subscribe</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
