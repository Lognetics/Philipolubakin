# Supernatural Life Church — Pastor Philip Olubakin

A premium, animated multi-page marketing site for **Pastor Oladelemi Philip Olubakin** and **Supernatural Life Church (SLC) Global**, built with Next.js 15 (App Router) + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Cinematic hero, live indicator, event countdown, impact stats, about preview, beliefs, featured sermons, conference feature, books, giving CTA, newsletter |
| `/about` | Full biography, gifts, interactive journey timeline, family (Pastor Funmi) |
| `/sermons` | Netflix-style library with series filters + live search |
| `/conferences` | Wind of the Spirit, 28 Days with the Holy Spirit, Leaders Retreat — each with a live countdown |
| `/books` | *Launch* and *Maintaining Your Fire* with formats + buy CTAs |
| `/give` | Interactive giving form (fund, amount, recurring toggle) |
| `/contact` | Prayer/counselling request form, channels, socials |

## Design system

- **Palette:** Gold `#C9A227` · Deep Navy `#0A1F44`/`#050F22` · White · Soft Grey
- **Type:** Playfair Display (headings) + Inter (body)
- **Effects:** glassmorphism, gold gradients, scroll-reveal (Framer Motion), animated counters & countdowns
- **Dark/Light mode:** toggle in the navbar (persisted to `localStorage`)
- **SEO:** metadata, Open Graph, Person JSON-LD, `sitemap.xml`, `robots.txt`, semantic HTML

## Content & assets

- Copy is drawn from publicly available biographical information (see `lib/data.js` — the single source of truth for all content).
- Photos are in `public/images/pastor/`. **For production, replace these with official, permission-cleared ministry media** — two of the current images carry other sites' watermarks/styling and are placeholders for design only.

## Not yet built (from the full spec)

This is the **marketing frontend**. The larger platform — user accounts, CMS, real sermon/video backend, live streaming, LMS/mentorship, e-commerce store, giving payment integration, AI assistant, PWA — would be subsequent phases requiring a backend (e.g. Supabase) and third-party services.
