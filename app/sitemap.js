import { nav } from '../lib/data';

export default function sitemap() {
  const base = 'https://supernaturallifechurch.org';
  return nav.map((item) => ({
    url: `${base}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
