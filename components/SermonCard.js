'use client';

import Image from 'next/image';
import { Play, Clock, BookOpen, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const seriesColor = {
  'Holy Spirit': 'from-gold-dark to-navy-900',
  Faith: 'from-navy-800 to-navy-950',
  Prayer: 'from-graphite-800 to-navy-900',
  Kingdom: 'from-gold-dark to-graphite-800',
  Leadership: 'from-navy-800 to-graphite-800',
  Marriage: 'from-navy-900 to-gold-dark',
  Healing: 'from-graphite-800 to-navy-950',
  Supernatural: 'from-navy-800 to-navy-950',
};

export default function SermonCard({ sermon }) {
  const grad = seriesColor[sermon.series] || 'from-navy-800 to-navy-950';
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-2xl border border-graphite-200/70 bg-white shadow-sm dark:border-white/10 dark:bg-navy-900/60"
    >
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${grad}`}>
        {sermon.image && (
          <Image
            src={sermon.image}
            alt={sermon.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/30" />
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur">
          {sermon.series}
        </span>
        <button
          aria-label="Play message"
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy-950 shadow-xl transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="ml-1" fill="currentColor" />
          </span>
        </button>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-[11px] text-white backdrop-blur">
          <Clock size={12} /> {sermon.duration}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-navy-900 dark:text-white">
          {sermon.title}
        </h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-graphite-600 dark:text-white/50">
          <span className="flex items-center gap-1"><BookOpen size={13} /> {sermon.scripture}</span>
          <span>·</span>
          <span>{sermon.year}</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-graphite-100 pt-3 dark:border-white/10">
          <span className="text-xs font-medium text-graphite-600 dark:text-white/50">{sermon.speaker}</span>
          <button aria-label="Save" className="text-graphite-400 transition hover:text-gold-dark dark:hover:text-gold-light">
            <Bookmark size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
