import Image from 'next/image';
import { brand } from '../lib/brand';

export default function BrandSignal() {
  return <section className="bg-white px-4 py-12 sm:px-6 lg:py-16"><div className="mx-auto max-w-7xl"><div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan-700">One technology partner</p><h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">Built to secure, connect and grow.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">A clearer view of the capabilities that work together behind every KWITZEL engagement.</p></div><div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl"><Image src={brand.banner} alt={`${brand.name}: Software, Security and Digital Solutions`} width={2056} height={765} sizes="(min-width: 1280px) 1280px, 100vw" className="h-auto w-full" /></div></div></section>;
}
