'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SermonCard from '../../components/SermonCard';
import { sermons, sermonSeries } from '../../lib/data';

export default function SermonsExplorer() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return sermons.filter((s) => {
      const matchSeries = active === 'All' || s.series === active;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        (s.scripture || '').toLowerCase().includes(q) ||
        s.series.toLowerCase().includes(q);
      return matchSeries && matchQuery;
    });
  }, [active, query]);

  return (
    <div className="container-page py-16">
      {/* Controls */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {sermonSeries.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === s
                  ? 'bg-gold-gradient text-navy-950 shadow'
                  : 'border border-graphite-200 text-graphite-600 hover:border-gold hover:text-gold-dark dark:border-white/15 dark:text-white/60 dark:hover:text-gold-light'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, scripture, topic…"
            className="w-full rounded-full border border-graphite-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gold dark:border-white/15 dark:bg-navy-900 dark:text-white"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-graphite-500 dark:text-white/40">
        {filtered.length} message{filtered.length === 1 ? '' : 's'}
        {active !== 'All' && <> in <span className="text-gold-dark dark:text-gold-light">{active}</span></>}
      </p>

      {/* Grid */}
      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((s) => (
            <motion.div
              key={s.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <SermonCard sermon={s} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-graphite-500 dark:text-white/40">
          No messages match your search. Try another topic.
        </p>
      )}
    </div>
  );
}
