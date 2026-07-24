'use client';

import { useState } from 'react';
import { Lock, CreditCard, Repeat, Check } from 'lucide-react';

const amounts = [25, 50, 100, 250, 500];
const funds = ['Tithe', 'Offering', 'Projects', 'Missions'];

export default function GivingForm() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState('');
  const [fund, setFund] = useState('Tithe');
  const [recurring, setRecurring] = useState(false);

  const value = custom ? custom : amount;

  return (
    <div className="rounded-3xl border border-graphite-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-navy-900 sm:p-8">
      <h3 className="font-display text-2xl font-bold">Make a gift</h3>

      {/* Fund */}
      <label className="mt-6 block text-xs font-semibold uppercase tracking-widest text-graphite-500 dark:text-white/40">Give toward</label>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {funds.map((f) => (
          <button
            key={f}
            onClick={() => setFund(f)}
            className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
              fund === f
                ? 'border-gold bg-gold-soft/40 text-navy-900 dark:bg-gold/10 dark:text-gold-light'
                : 'border-graphite-200 text-graphite-600 hover:border-gold/50 dark:border-white/15 dark:text-white/60'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Amounts */}
      <label className="mt-6 block text-xs font-semibold uppercase tracking-widest text-graphite-500 dark:text-white/40">Amount (USD)</label>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {amounts.map((a) => (
          <button
            key={a}
            onClick={() => { setAmount(a); setCustom(''); }}
            className={`rounded-xl border py-2.5 text-sm font-semibold transition ${
              !custom && amount === a
                ? 'border-gold bg-gold-gradient text-navy-950'
                : 'border-graphite-200 text-graphite-700 hover:border-gold/50 dark:border-white/15 dark:text-white/70'
            }`}
          >
            ${a}
          </button>
        ))}
      </div>

      <div className="relative mt-3">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite-400">$</span>
        <input
          type="number"
          min="1"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Other amount"
          className="w-full rounded-xl border border-graphite-200 bg-white py-3 pl-8 pr-4 text-sm outline-none transition focus:border-gold dark:border-white/15 dark:bg-navy-950 dark:text-white"
        />
      </div>

      {/* Recurring */}
      <button
        onClick={() => setRecurring((r) => !r)}
        className="mt-4 flex w-full items-center justify-between rounded-xl border border-graphite-200 px-4 py-3 text-sm transition hover:border-gold/50 dark:border-white/15"
      >
        <span className="flex items-center gap-2 text-graphite-700 dark:text-white/70">
          <Repeat size={16} className="text-gold-dark dark:text-gold-light" /> Make this monthly
        </span>
        <span className={`grid h-5 w-9 items-center rounded-full px-0.5 transition ${recurring ? 'bg-gold' : 'bg-graphite-200 dark:bg-white/15'}`}>
          <span className={`h-4 w-4 rounded-full bg-white shadow transition ${recurring ? 'translate-x-4' : ''}`} />
        </span>
      </button>

      <button className="btn-gold mt-6 w-full text-base">
        <CreditCard size={18} /> Give ${value || 0}{recurring ? ' / month' : ''}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-graphite-500 dark:text-white/40">
        <Lock size={13} /> Secured with bank-grade encryption
      </p>

      <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-graphite-400 dark:text-white/30">
        {['Card', 'Bank transfer', 'Apple Pay', 'International'].map((m) => (
          <span key={m} className="flex items-center gap-1"><Check size={11} /> {m}</span>
        ))}
      </div>
    </div>
  );
}
