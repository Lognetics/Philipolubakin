import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { site } from '../lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://supernaturallifechurch.org'),
  title: {
    default: 'Pastor Philip Olubakin | Supernatural Life Church Global',
    template: '%s | Supernatural Life Church',
  },
  description:
    'Official ministry home of Pastor Oladelemi Philip Olubakin, Senior Pastor of Supernatural Life Church (SLC) Global. Watch messages, join Wind of the Spirit, read books, and grow in the supernatural life.',
  keywords: [
    'Pastor Philip Olubakin', 'Oladelemi Philip Olubakin', 'Supernatural Life Church',
    'SLC Global', 'Wind of the Spirit', '28 Days with the Holy Spirit',
    'Holy Spirit sermons', 'Christian teachings Nigeria', 'Kingdom culture',
  ],
  authors: [{ name: 'Supernatural Life Church' }],
  openGraph: {
    type: 'website',
    title: 'Pastor Philip Olubakin | Supernatural Life Church Global',
    description:
      'Raising believers to live beyond the ordinary through faith, sound teaching and the power of the Holy Spirit.',
    siteName: 'Supernatural Life Church',
    images: [{ url: '/images/ministry/hero.jpg', width: 1290, height: 1560 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pastor Philip Olubakin | Supernatural Life Church Global',
    description: 'Raising believers to live beyond the ordinary.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#050F22',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oladelemi Philip Olubakin',
  jobTitle: 'Senior Pastor',
  affiliation: {
    '@type': 'Organization',
    name: 'Supernatural Life Church',
    location: { '@type': 'Place', address: 'Abuja, Nigeria' },
  },
  description:
    'Nigerian pastor, lawyer, author and Bible teacher; founder of Supernatural Life Church and convener of Wind of the Spirit.',
  alumniOf: ['Obafemi Awolowo University', 'Nigerian Law School, Enugu'],
  image: 'https://philipolubakin.vercel.app/images/ministry/hero.jpg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
