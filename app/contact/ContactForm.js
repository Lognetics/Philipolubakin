'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const reasons = ['Prayer Request', 'Counselling', 'Emergency Prayer', 'General Enquiry'];

export default function ContactForm() {
  const [reason, setReason] = useState('Prayer Request');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/30 bg-gold-soft/20 p-10 text-center dark:bg-white/5">
        <CheckCircle2 size={44} className="mx-auto text-gold-dark dark:text-gold-light" />
        <h3 className="mt-4 font-display text-2xl font-bold">We&rsquo;ve received you</h3>
        <p className="mt-3 text-graphite-600 dark:text-white/60">
          Thank you for reaching out. Our prayer team will stand with you, and someone will respond soon.
          You are covered.
        </p>
        <button onClick={() => setSent(false)} className="btn-ghost mt-6">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-graphite-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-navy-900 sm:p-8">
      <h3 className="font-display text-2xl font-bold">How can we pray with you?</h3>

      <label className="mt-6 block text-xs font-semibold uppercase tracking-widest text-graphite-500 dark:text-white/40">Reason</label>
      <div className="mt-3 flex flex-wrap gap-2">
        {reasons.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setReason(r)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              reason === r
                ? 'bg-gold-gradient text-navy-950'
                : 'border border-graphite-200 text-graphite-600 hover:border-gold/50 dark:border-white/15 dark:text-white/60'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="mt-4">
        <Field label="Phone / WhatsApp (optional)" name="phone" placeholder="+234…" />
      </div>

      <label className="mt-4 block text-sm font-medium text-graphite-700 dark:text-white/70">Your message</label>
      <textarea
        required
        rows={5}
        placeholder="Share your prayer request or message…"
        className="mt-2 w-full rounded-xl border border-graphite-200 bg-white p-4 text-sm outline-none transition focus:border-gold dark:border-white/15 dark:bg-navy-950 dark:text-white"
      />

      <label className="mt-4 flex items-center gap-2 text-sm text-graphite-600 dark:text-white/60">
        <input type="checkbox" className="h-4 w-4 accent-[#C9A227]" />
        Keep this request confidential
      </label>

      <button type="submit" className="btn-gold mt-6 w-full text-base">
        <Send size={17} /> Send request
      </button>
    </form>
  );
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite-700 dark:text-white/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold dark:border-white/15 dark:bg-navy-950 dark:text-white"
      />
    </div>
  );
}
