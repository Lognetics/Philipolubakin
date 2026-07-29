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
    default: 'Philip Olubakin - Pastor, Teacher & Author',
    template: '%s | Philip Olubakin',
  },
  description:
    'The official portfolio of Pastor Oladelemi Philip Olubakin - pastor, lawyer, author, songwriter and Bible teacher; founder of Supernatural Life Church (SLC) Global. Get to know him, watch his messages on YouTube, read his books, and join Wind of the Spirit.',
  keywords: [
    'Pastor Philip Olubakin', 'Oladelemi Philip Olubakin', 'Supernatural Life Church',
    'SLC Global', 'Wind of the Spirit', '28 Days with the Holy Spirit',
    'Holy Spirit sermons', 'Christian teachings Nigeria', 'Kingdom culture',
  ],
  authors: [{ name: 'Supernatural Life Church' }],
  openGraph: {
    type: 'profile',
    title: 'Philip Olubakin - Pastor, Teacher & Author',
    description:
      'Pastor, lawyer, author and Bible teacher; founder of Supernatural Life Church. Raising believers to live beyond the ordinary.',
    siteName: 'Philip Olubakin',
    images: [{ url: '/images/ministry/hero.jpg', width: 1290, height: 1560 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philip Olubakin - Pastor, Teacher & Author',
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
  url: 'https://philipolubakin.vercel.app',
  knowsAbout: ['Christianity', 'The Holy Spirit', 'Faith', 'Prayer', 'Christian Leadership'],
  sameAs: [
    'https://www.youtube.com/c/PhilipOlubakin',
    'https://www.instagram.com/philipolubakin/',
    'https://www.facebook.com/eaglephilip/',
    'https://x.com/philipolubakin',
  ],
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
