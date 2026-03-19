export const siteName = 'Torii';
export const siteTagline = 'Build Production-Ready Agentic AI Solutions';
export const siteDescription =
  'Torii is the platform for building, deploying, and scaling AI-powered applications and agents. From idea to production in minutes.';

export const navLinks = [
  {
    label: 'Products',
    href: '/',
    hasDropdown: true,
    children: [
      { label: 'Developer', href: '/developer', description: 'APIs, SDKs, and extensibility tools' },
      { label: 'Enterprise', href: '/enterprise', description: 'Security, compliance, and scale' },
      { label: 'Education', href: '/education', description: 'Programs for students and institutions' },
    ],
  },
  {
    label: 'Solutions',
    href: '/',
    hasDropdown: true,
    children: [
      { label: 'Startup', href: '/startup', description: 'From idea to impact, fast' },
      { label: 'Partner', href: '/partner', description: 'Join the Torii ecosystem' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Developer', href: '/developer' },
  { label: 'Enterprise', href: '/enterprise' },
];

export const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Developer', href: '/developer' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Startup', href: '/startup' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Education', href: '/education' },
      { label: 'Partner', href: '/partner' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const githubStars = '133.4k';
