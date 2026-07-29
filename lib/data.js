// Central content source for the Philip Olubakin portfolio site.
// Content is drawn from publicly available biographical information.

export const site = {
  owner: 'Philip Olubakin',
  fullName: 'Oladelemi Philip Olubakin',
  ministry: 'Supernatural Life Church',
  shortName: 'SLC Global',
  role: 'Pastor · Teacher · Author · Songwriter',
  roles: ['Pastor', 'Bible Teacher', 'Lawyer', 'Author', 'Songwriter', 'Pianist'],
  tagline: 'Raising Believers to Live Beyond the Ordinary.',
  subtitle:
    'Pastor, lawyer, author and Bible teacher helping believers walk in the reality of the supernatural - through faith, sound teaching, and the power of the Holy Spirit.',
  location: 'Abuja, Nigeria',
  email: 'slchurchng@gmail.com',
  youtube: 'https://www.youtube.com/c/PhilipOlubakin',
  socials: {
    youtube: 'https://www.youtube.com/c/PhilipOlubakin',
    instagram: 'https://www.instagram.com/philipolubakin/',
    facebook: 'https://www.facebook.com/eaglephilip/',
    x: 'https://x.com/philipolubakin',
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

// Portfolio profile - quick facts for the About page.
export const quickFacts = [
  { label: 'Born', value: 'December 15 · Ogun State, Nigeria' },
  { label: 'Education', value: 'Law, Obafemi Awolowo University · Nigerian Law School, Enugu' },
  { label: 'Founder', value: 'Supernatural Life Church (2019), Abuja' },
  { label: 'Convener', value: 'Wind of the Spirit · 28 Days with the Holy Spirit' },
  { label: 'Family', value: 'Married to Pastor Funmi Olubakin · three daughters' },
  { label: 'Author of', value: 'Launch · Maintaining Your Fire' },
];

// What he does - portfolio "roles" cards.
export const vocations = [
  { title: 'Pastor & Teacher', body: 'Founder and Senior Pastor of Supernatural Life Church, teaching the Word with clarity and depth.' },
  { title: 'Lawyer', body: 'Trained at Obafemi Awolowo University and the Nigerian Law School before full-time ministry.' },
  { title: 'Author', body: 'Writer of faith-building books including Launch and Maintaining Your Fire.' },
  { title: 'Songwriter & Pianist', body: 'A worshipper and creative - expressing devotion through music and the arts.' },
];

export const beliefs = [
  {
    title: 'The Supernatural Life',
    body: 'Every believer is called to live beyond the ordinary - walking daily in the reality of the Spirit.',
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
  { year: '2019', title: 'Supernatural Life Church is born', body: 'In March 2019 he founds SLC in Abuja with seven founding members - a church to live beyond the ordinary.' },
  { year: 'Ongoing', title: 'Wind of the Spirit', body: 'Convenes transformational gatherings centred on Scripture, worship, prayer and the Holy Spirit.' },
  { year: 'Ongoing', title: '28 Days with the Holy Spirit', body: 'A season of deep encounter, teaching believers intimacy with the Spirit of God.' },
  { year: 'Author', title: 'Launch & Maintaining Your Fire', body: 'Publishes books to equip believers for a Spirit-empowered, purposeful life.' },
  { year: 'Today', title: 'A global ministry', body: 'SLC grows into a global church, reaching believers across nations.' },
];

export const sermonSeries = [
  'All', 'Holy Spirit', 'Faith', 'Prayer', 'Grace', 'Healing', 'Supernatural', 'Purpose', 'Marriage',
];

// Build a YouTube thumbnail + watch URL from a video id.
export const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytWatch = (id) => `https://www.youtube.com/watch?v=${id}`;

// Real messages from Pastor Philip Olubakin's YouTube channel.
// videoId powers the thumbnail (i.ytimg.com) and the watch link.
export const sermons = [
  { id: 1, title: 'A Sunday With Pastor Philip Olubakin', series: 'Holy Spirit', videoId: 'MpuEexBnPYU', year: 2026, featured: true },
  { id: 2, title: 'Walking with The Holy Spirit', series: 'Holy Spirit', videoId: 'gEZVpFJI0tc', year: 2024 },
  { id: 3, title: 'The Authority & Intimacy of the Praying Life of Jesus', series: 'Prayer', videoId: '8GhhLkQhkbc', year: 2024 },
  { id: 4, title: 'Praying by the Help of the Spirit', series: 'Prayer', videoId: 'iQ-Wi9hpVbY', year: 2024 },
  { id: 5, title: 'Fundamentals of Faith', series: 'Faith', videoId: 'Jw5ztiDNWkQ', year: 2024, scripture: 'Ephesians 6:10-14' },
  { id: 6, title: 'The Grace of God', series: 'Grace', videoId: 'fGhKxeVbqcI', year: 2024, scripture: 'Ephesians 2:5' },
  { id: 7, title: 'Grace for Supernatural Speed', series: 'Grace', videoId: 'gkm9F21X2_U', year: 2024, scripture: '2 Kings 9' },
  { id: 8, title: 'Understanding Spiritual Warfare', series: 'Supernatural', videoId: '2dQzt7x-gbw', year: 2024 },
  { id: 9, title: 'Light Over Darkness', series: 'Supernatural', videoId: '627rgVYa8zY', year: 2025, scripture: 'John 1:1-5' },
  { id: 10, title: 'Light Has Come', series: 'Faith', videoId: 'boP5JO-EO4Q', year: 2025 },
  { id: 11, title: "Healing Is God's Will (Part 1)", series: 'Healing', videoId: '3R3fFoEL1N8', year: 2025 },
  { id: 12, title: "God's Perfect Plan (Part 1)", series: 'Purpose', videoId: 'O1OqqzMWOc4', year: 2021 },
  { id: 13, title: 'Two Become One', series: 'Marriage', videoId: 'iDe_KhTc8Yw', year: 2024 },
];

// Media gallery - "Life at SLC"
export const gallery = [
  { src: '/images/ministry/congregation-1.jpg', alt: 'A packed auditorium during a Supernatural Life Church gathering', span: 'wide' },
  { src: '/images/ministry/worship-raised.jpg', alt: 'Pastor Philip Olubakin in worship', span: 'tall' },
  { src: '/images/ministry/study.jpg', alt: 'Pastor Philip in study and preparation' },
  { src: '/images/ministry/worship-bw.jpg', alt: 'Ministering among the congregation', span: 'tall' },
  { src: '/images/ministry/experience.jpg', alt: 'The SLC Experience gathering', span: 'wide' },
  { src: '/images/ministry/office-1.jpg', alt: 'Pastor Philip in a leadership session' },
];

export const conferences = [
  {
    slug: 'wind-of-the-spirit',
    name: 'Wind of the Spirit',
    tagline: 'A divine encounter with the person of the Holy Spirit.',
    description:
      'Wind of the Spirit is a transformational gathering convened by Pastor Philip Olubakin - days of Scripture, worship, prayer and the ministry of the Holy Spirit, where believers are stirred to live beyond the ordinary.',
    date: '2026-11-12',
    location: 'Abuja, Nigeria + Online',
    accent: 'from-navy-800 to-navy-950',
    image: '/images/ministry/congregation-2.jpg',
  },
  {
    slug: '28-days-with-the-holy-spirit',
    name: '28 Days with the Holy Spirit',
    tagline: 'A season of intimacy, encounter, and empowerment.',
    description:
      'A 28-day journey of daily teaching, prayer and worship designed to deepen your fellowship with the Holy Spirit and set your life ablaze for God.',
    date: '2026-09-01',
    location: 'Global - Online',
    accent: 'from-gold-dark to-navy-900',
    image: '/images/ministry/prayer-bow.jpg',
  },
  {
    slug: 'leaders-retreat',
    name: 'Leaders Retreat',
    tagline: 'Equipping the next generation of Kingdom leaders.',
    description:
      'A focused gathering for ministers, workers and marketplace leaders - refreshing, equipping and commissioning them for greater impact.',
    date: '2027-01-20',
    location: 'Abuja, Nigeria',
    accent: 'from-graphite-800 to-navy-950',
    image: '/images/ministry/boardroom.jpg',
  },
];

export const books = [
  {
    slug: 'launch',
    title: 'Launch',
    subtitle: 'Step boldly into your God-given assignment.',
    synopsis:
      'Launch is a clarion call to step out of hesitation and into destiny. Pastor Philip Olubakin equips believers with the faith, courage and understanding to begin - to launch into the deep and pursue the purpose God has placed within them.',
    formats: ['Paperback', 'Ebook'],
    color: 'from-navy-800 to-navy-950',
    year: 2021,
  },
  {
    slug: 'maintaining-your-fire',
    title: 'Maintaining Your Fire',
    subtitle: 'Keep the flame of the Spirit burning.',
    synopsis:
      'Fire is easy to catch and easy to lose. In Maintaining Your Fire, Pastor Philip Olubakin teaches the disciplines and posture of heart required to keep your spiritual fire burning bright - season after season.',
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
