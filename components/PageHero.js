import { Sparkles } from 'lucide-react';

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-radial pt-32 pb-20 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy-800/40 blur-3xl" />
      <div className="container-page relative">
        {eyebrow && (
          <span className="eyebrow">
            <Sparkles size={14} /> {eyebrow}
          </span>
        )}
        <h1 className="heading-xl mt-4 max-w-3xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
