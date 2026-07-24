import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="eyebrow justify-center">
          <Sparkles size={14} /> {eyebrow}
        </span>
      )}
      <h2 className={`heading-lg mt-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/60' : 'text-graphite-600 dark:text-white/60'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
