export const brand = {
  name: 'KWITZEL DIGITAL VENTURES',
  tagline: 'Software · Security · Digital Solutions',
  shortDescription:
    'Technology solutions for organisations that need secure, reliable systems and measurable digital growth.',
  description:
    'KWITZEL DIGITAL VENTURES delivers software development, business systems, web platforms, CCTV and security solutions, networking, digital marketing and technology consultancy across Kenya.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kwitzeldigitalventures.co.ke',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@kwitzeldigitalventures.co.ke',
  phone: '+254 705 784 274',
  whatsapp: '254104613770',
  logo: '/Pictures/kwitzel digital ventures logo.png',
  banner: '/Pictures/kwitzel digital ventures banner.png',
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
