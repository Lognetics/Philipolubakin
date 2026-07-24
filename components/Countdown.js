'use client';

import { useEffect, useState } from 'react';

function diff(target) {
  const total = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown({ target, compact = false }) {
  const [t, setT] = useState(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = t
    ? [
        { label: 'Days', value: t.days },
        { label: 'Hrs', value: t.hours },
        { label: 'Min', value: t.minutes },
        { label: 'Sec', value: t.seconds },
      ]
    : [
        { label: 'Days', value: 0 },
        { label: 'Hrs', value: 0 },
        { label: 'Min', value: 0 },
        { label: 'Sec', value: 0 },
      ];

  return (
    <div className={`flex ${compact ? 'gap-2' : 'gap-3 sm:gap-4'}`}>
      {units.map((u) => (
        <div
          key={u.label}
          className={`glass-dark rounded-xl text-center ${
            compact ? 'min-w-[3rem] px-2 py-1.5' : 'min-w-[4.5rem] px-3 py-3'
          }`}
        >
          <div className={`font-display font-bold text-gold-light ${compact ? 'text-lg' : 'text-2xl sm:text-3xl'}`}>
            {String(u.value).padStart(2, '0')}
          </div>
          <div className={`uppercase tracking-widest text-white/50 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
