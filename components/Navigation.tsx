'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { brand, whatsappLink } from '../lib/brand';

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
];

const moreLinks = [
  { name: 'Technology', href: '/tech-stack' },
  { name: 'Insights', href: '/blog' },
  { name: 'Resources', href: '/tools' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => { setOpen(false); setMoreOpen(false); };

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled || open ? 'border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl' : 'border-b border-white/10 bg-slate-950/35 backdrop-blur-md'}`}>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform group-hover:scale-[1.03]">
            <Image src={brand.logo} alt={`${brand.name} logo`} fill sizes="44px" className="object-contain p-0.5" priority />
          </span>
          <span className="min-w-0 leading-tight">
            <span className={`block truncate text-[11px] font-extrabold tracking-[0.12em] sm:text-xs ${scrolled || open ? 'text-slate-950' : 'text-white'}`}>{brand.name}</span>
            <span className={`hidden text-[10px] font-medium tracking-wide sm:block ${scrolled || open ? 'text-slate-500' : 'text-slate-300'}`}>{brand.tagline}</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => <Link key={link.href} href={link.href} className={`text-sm font-semibold transition-colors hover:text-cyan-600 ${scrolled ? 'text-slate-700' : 'text-slate-100'}`}>{link.name}</Link>)}
          <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button onClick={() => setMoreOpen((value) => !value)} className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-cyan-600 ${scrolled ? 'text-slate-700' : 'text-slate-100'}`} aria-expanded={moreOpen}>More <i className={`ri-arrow-down-s-line text-base transition-transform ${moreOpen ? 'rotate-180' : ''}`} /></button>
            {moreOpen && <div className="absolute right-0 top-8 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">{moreLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700">{link.name}</Link>)}</div>}
          </div>
          <Link href="/contact" className="rounded-lg bg-cyan-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800">Talk to an Expert</Link>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${scrolled || open ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}><i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} /></button>
      </nav>
      {open && <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden"><div className="mx-auto grid max-w-7xl gap-1">{[...primaryLinks, ...moreLinks, { name: 'Contact', href: '/contact' }].map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-cyan-700">{link.name}</Link>)}<a href={whatsappLink('Hello KWITZEL DIGITAL VENTURES, I would like to discuss a technology project.')} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-4 py-3 font-bold text-white hover:bg-cyan-800"><i className="ri-whatsapp-line text-lg" />WhatsApp Us</a></div></div>}
    </header>
  );
}
