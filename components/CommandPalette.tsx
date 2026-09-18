'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const actions = [
  { label: 'Explore software solutions', href: '/solutions', icon: 'ri-code-s-slash-line' }, { label: 'Plan your security system', href: '/services#security', icon: 'ri-shield-check-line' }, { label: 'View project work', href: '/portfolio', icon: 'ri-layout-grid-line' }, { label: 'Build your solution', href: '/#build-solution', icon: 'ri-sparkling-2-line' }, { label: 'Request a quote', href: '/contact', icon: 'ri-file-list-3-line' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(''); const input = useRef<HTMLInputElement>(null); const router = useRouter();
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value); } if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes((event.target as HTMLElement)?.tagName)) { event.preventDefault(); setOpen(true); } if (event.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, []);
  useEffect(() => { if (open) requestAnimationFrame(() => input.current?.focus()); }, [open]);
  const filtered = actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase()));
  const go = (href: string) => { setOpen(false); router.push(href); };
  if (!open) return null;
  return <div className="fixed inset-0 z-[200] flex items-start justify-center bg-slate-950/65 px-4 pt-[14vh] backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="KWITZEL command centre"><div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"><div className="flex items-center gap-3 border-b border-slate-700 px-4"><i className="ri-command-line text-cyan-300" /><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search KWITZEL Command Center…" className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-500" /><kbd className="rounded border border-slate-600 px-1.5 py-0.5 text-xs text-slate-400">Esc</kbd></div><div className="p-2">{filtered.map((action) => <button key={action.href} onClick={() => go(action.href)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white"><i className={`${action.icon} text-lg text-cyan-300`} />{action.label}</button>)}</div><p className="border-t border-slate-800 px-4 py-3 text-xs text-slate-500">Press <kbd className="rounded border border-slate-700 px-1">Ctrl K</kbd> or <kbd className="rounded border border-slate-700 px-1">/</kbd> anywhere to open.</p></div></div>;
}
