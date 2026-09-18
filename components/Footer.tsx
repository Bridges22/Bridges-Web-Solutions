import Image from 'next/image';
import Link from 'next/link';
import { brand, whatsappLink } from '../lib/brand';

const solutionLinks = [
  ['Software Development', '/services#software-development'], ['Business Systems', '/solutions'], ['CCTV & Security', '/services#security'], ['IT & Networking', '/services#networking'], ['Digital Marketing', '/social-media-management'],
];
const companyLinks = [['About Us', '/about'], ['Our Portfolio', '/portfolio'], ['Technology', '/tech-stack'], ['Insights', '/blog'], ['Contact', '/contact']];

export default function Footer() {
  return <footer className="bg-slate-950 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.25fr_.8fr_.8fr] lg:px-8">
      <div><Link href="/" className="flex items-center gap-3"><span className="relative h-12 w-12 overflow-hidden rounded-xl bg-white"><Image src={brand.logo} alt={`${brand.name} logo`} fill sizes="48px" className="object-contain" /></span><span><span className="block text-sm font-extrabold tracking-[.11em] text-white">{brand.name}</span><span className="block text-xs text-cyan-300">{brand.tagline}</span></span></Link><p className="mt-5 max-w-md text-sm leading-6 text-slate-400">We help organisations build dependable technology foundations, secure their environments and improve how they work, serve and grow.</p><div className="mt-6 flex flex-wrap gap-3"><a href={whatsappLink('Hello KWITZEL DIGITAL VENTURES, I would like to discuss a technology project.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-cyan-500"><i className="ri-whatsapp-line" />WhatsApp us</a><a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-bold text-white hover:border-cyan-500"><i className="ri-mail-line" />Email us</a></div></div>
      <div><h2 className="text-sm font-bold uppercase tracking-[.16em] text-white">Solutions</h2><ul className="mt-5 space-y-3">{solutionLinks.map(([name, href]) => <li key={name}><Link href={href} className="text-sm transition hover:text-cyan-300">{name}</Link></li>)}</ul></div>
      <div><h2 className="text-sm font-bold uppercase tracking-[.16em] text-white">Company</h2><ul className="mt-5 space-y-3">{companyLinks.map(([name, href]) => <li key={name}><Link href={href} className="text-sm transition hover:text-cyan-300">{name}</Link></li>)}</ul><div className="mt-7 space-y-2 text-sm"><p><i className="ri-phone-line mr-2 text-cyan-300" />{brand.phone}</p><p className="break-all"><i className="ri-mail-line mr-2 text-cyan-300" />{brand.email}</p></div></div>
    </div>
    <div className="border-t border-slate-800"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p><div className="flex gap-4"><Link href="/privacy-policy" className="hover:text-slate-300">Privacy</Link><Link href="/terms-and-conditions" className="hover:text-slate-300">Terms</Link></div></div></div>
  </footer>;
}
