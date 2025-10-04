'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-full p-1.5 border border-slate-700/50">
                  <img
                    src="/portfolio/WhatsApp Image 2025-08-25 at 10.29.10_0768cfba.jpg"
                    alt="Bridges Web Solutions"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  Bridges Web Solutions
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  Professional Web Development
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg border border-emerald-500/30"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              title={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
