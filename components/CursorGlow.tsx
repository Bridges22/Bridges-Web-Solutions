'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(desktop.matches && !reduced.matches);
    update(); desktop.addEventListener('change', update); reduced.addEventListener('change', update);
    const move = (event: MouseEvent) => document.documentElement.style.setProperty('--kwitzel-pointer', `${event.clientX}px ${event.clientY}px`);
    window.addEventListener('pointermove', move, { passive: true });
    return () => { desktop.removeEventListener('change', update); reduced.removeEventListener('change', update); window.removeEventListener('pointermove', move); };
  }, []);
  if (!enabled) return null;
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[45] opacity-70" style={{ background: 'radial-gradient(300px circle at var(--kwitzel-pointer, 50% 50%), rgba(34,211,238,.055), transparent 55%)' }} />;
}
