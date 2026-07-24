// Central content source for the SLC / Pastor Philip Olubakin site.
// Content is drawn from publicly available biographical information.

export const site = {
  name: 'Supernatural Life Church',
  shortName: 'SLC Global',
  pastor: 'Pastor Oladelemi Philip Olubakin',
  tagline: 'Raising Believers to Live Beyond the Ordinary.',
  subtitle:
    'Helping believers walk in the reality of the supernatural through faith, sound teaching, and the power of the Holy Spirit.',
  location: 'Abuja, Nigeria',
  email: 'hello@supernaturallifechurch.org',
  socials: {
    instagram: 'https://www.instagram.com/philipolubakin/',
    facebook: 'https://www.facebook.com/eaglephilip/',
    spotify: 'https://open.spotify.com/show/47H6htbSY6KRShoegNWTQg',
    church: 'https://www.instagram.com/slchurchng/',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Conferences', href: '/conferences' },
  { label: 'Books', href: '/books' },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: 7, suffix: '', label: 'Founding members in 2019' },
  { value: 40, suffix: '+', label: 'Nations reached' },
  { value: 500, suffix: '+', label: 'Messages published' },
  { value: 2, suffix: '', label: 'Books released' },
];

export const beliefs = [
  {
    title: 'The Supernatural Life',
    body: 'Every believer is called to live beyond the ordinary — walking daily in the reality of the Spirit.',
  },
  {
    title: 'Sound Teaching',
    body: 'The unadulterated Word of God, taught with clarity, depth, and power for transformation.',
  },
  {
    title: 'The Holy Spirit',
    body: 'We honour the person, presence, and power of the Holy Spirit in worship, prayer, and daily living.',
  },
  {
    title: 'Faith in Christ',
    body: 'Jesus is Lord. Through faith in Him we access grace, healing, and a life of purpose.',
  },
];

export const timeline = [
  { year: 'Early life', title: 'A Baptist foundation', body: 'Pastor Philip grows up in a Baptist background where his early Christian foundation is formed.' },
  { year: 'University', title: 'Law at Obafemi Awolowo University', body: 'Studies Law at OAU, Ile-Ife, developing the discipline and mind that would later serve ministry.' },
  { year: 'Law School', title: 'Nigerian Law School, Enugu', body: 'Completes professional legal training at the Nigerian Law School, Enugu Campus.' },
  { year: 'The Call', title: 'Answering the call to ministry', body: 'Following divine leading, he steps away from a legal career into full-time ministry.' },
  { year: '2019', title: 'Supernatural Life Church is born', body: 'In March 2019 he founds SLC in Abuja with seven founding members — a church to live beyond the ordinary.' },
  { year: 'Ongoing', title: 'Wind of the Spirit', body: 'Convenes transformational gatherings centred on Scripture, worship, prayer and the Holy Spirit.' },
  { year: 'Ongoing', title: '28 Days with the Holy Spirit', body: 'A season of deep encounter, teaching believers intimacy with the Spirit of God.' },
  { year: 'Author', title: 'Launch & Maintaining Your Fire', body: 'Publishes books to equip believers for a Spirit-empowered, purposeful life.' },
  { year: 'Today', title: 'A global ministry', body: 'SLC grows into a global church, reaching believers across nations.' },
];

export const sermonSeries = [
  'All', 'Faith', 'Holy Spirit', 'Prayer', 'Kingdom', 'Leadership', 'Marriage', 'Healing', 'Supernatural',
];

export const sermons = [
  { id: 1, title: 'Anointing of the Spirit', series: 'Holy Spirit', speaker: 'Pastor Philip Olubakin', duration: '52 min', year: 2024, scripture: 'Acts 10:38', featured: true },
  { id: 2, title: 'Living Beyond the Ordinary', series: 'Supernatural', speaker: 'Pastor Philip Olubakin', duration: '48 min', year: 2024, scripture: 'Ephesians 3:20' },
  { id: 3, title: 'The Fire That Never Dies', series: 'Holy Spirit', speaker: 'Pastor Philip Olubakin', duration: '61 min', year: 2023, scripture: 'Leviticus 6:13' },
  { id: 4, title: 'Faith That Moves Heaven', series: 'Faith', speaker: 'Pastor Philip Olubakin', duration: '45 min', year: 2024, scripture: 'Hebrews 11:6' },
  { id: 5, title: 'The School of Prayer', series: 'Prayer', speaker: 'Pastor Philip Olubakin', duration: '55 min', year: 2023, scripture: 'Luke 11:1' },
  { id: 6, title: 'Kingdom Culture', series: 'Kingdom', speaker: 'Pastor Philip Olubakin', duration: '50 min', year: 2024, scripture: 'Matthew 6:33' },
  { id: 7, title: 'Building a Marriage That Lasts', series: 'Marriage', speaker: 'Pastors Philip & Funmi', duration: '58 min', year: 2023, scripture: 'Ephesians 5:25' },
  { id: 8, title: 'The Healer Still Heals', series: 'Healing', speaker: 'Pastor Philip Olubakin', duration: '47 min', year: 2024, scripture: 'Isaiah 53:5' },
  { id: 9, title: 'Called to Lead', series: 'Leadership', speaker: 'Pastor Philip Olubakin', duration: '53 min', year: 2023, scripture: 'Nehemiah 2:18' },
  { id: 10, title: 'Rivers of Living Water', series: 'Holy Spirit', speaker: 'Pastor Philip Olubakin', duration: '49 min', year: 2024, scripture: 'John 7:38' },
  { id: 11, title: 'Unshakeable', series: 'Faith', speaker: 'Pastor Philip Olubakin', duration: '44 min', year: 2022, scripture: 'Hebrews 12:28' },
  { id: 12, title: 'The Supernatural Church', series: 'Supernatural', speaker: 'Pastor Philip Olubakin', duration: '56 min', year: 2024, scripture: 'Acts 2:42' },
];

export const conferences = [
  {
    slug: 'wind-of-the-spirit',
    name: 'Wind of the Spirit',
    tagline: 'A divine encounter with the person of the Holy Spirit.',
    description:
      'Wind of the Spirit is a transformational gathering convened by Pastor Philip Olubakin — days of Scripture, worship, prayer and the ministry of the Holy Spirit, where believers are stirred to live beyond the ordinary.',
    date: '2026-11-12',
    location: 'Abuja, Nigeria + Online',
    accent: 'from-navy-800 to-navy-950',
  },
  {
    slug: '28-days-with-the-holy-spirit',
    name: '28 Days with the Holy Spirit',
    tagline: 'A season of intimacy, encounter, and empowerment.',
    description:
      'A 28-day journey of daily teaching, prayer and worship designed to deepen your fellowship with the Holy Spirit and set your life ablaze for God.',
    date: '2026-09-01',
    location: 'Global — Online',
    accent: 'from-gold-dark to-navy-900',
  },
  {
    slug: 'leaders-retreat',
    name: 'Leaders Retreat',
    tagline: 'Equipping the next generation of Kingdom leaders.',
    description:
      'A focused gathering for ministers, workers and marketplace leaders — refreshing, equipping and commissioning them for greater impact.',
    date: '2027-01-20',
    location: 'Abuja, Nigeria',
    accent: 'from-graphite-800 to-navy-950',
  },
];

export const books = [
  {
    slug: 'launch',
    title: 'Launch',
    subtitle: 'Step boldly into your God-given assignment.',
    synopsis:
      'Launch is a clarion call to step out of hesitation and into destiny. Pastor Philip Olubakin equips believers with the faith, courage and understanding to begin — to launch into the deep and pursue the purpose God has placed within them.',
    formats: ['Paperback', 'Ebook'],
    color: 'from-navy-800 to-navy-950',
    year: 2021,
  },
  {
    slug: 'maintaining-your-fire',
    title: 'Maintaining Your Fire',
    subtitle: 'Keep the flame of the Spirit burning.',
    synopsis:
      'Fire is easy to catch and easy to lose. In Maintaining Your Fire, Pastor Philip Olubakin teaches the disciplines and posture of heart required to keep your spiritual fire burning bright — season after season.',
    formats: ['Paperback', 'Ebook'],
    color: 'from-gold-dark to-navy-900',
    year: 2022,
  },
];

export const givingOptions = [
  { title: 'Tithes', body: 'Honour God with the tithe and partner with the local church.' },
  { title: 'Offerings', body: 'Sow generously into the ongoing work of the ministry.' },
  { title: 'Projects', body: 'Support building, media and infrastructure projects.' },
  { title: 'Missions', body: 'Fund outreaches, church planting and humanitarian work.' },
];
