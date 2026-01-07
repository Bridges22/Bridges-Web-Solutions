'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', href: '/services' },
        { name: 'Web Development', href: '/services#web-development' },
        { name: 'E-commerce Solutions', href: '/services#ecommerce' },
        { name: 'Mobile Apps', href: '/services#mobile-apps' },
        { name: 'Social Media Management', href: '/social-media-management' },
        { name: 'CCTV & Security Systems', href: '/cctv-security-systems' },
        { name: 'SEO Optimization', href: '/services#seo' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Tools', href: '/tools' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || isMenuOpen
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg'
        : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group relative z-[100]">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-full p-1.5 border border-slate-700/50">
                  <img
                    src="/portfolio/WhatsApp Image 2025-08-25 at 10.29.10_0768cfba.jpg"
                    alt="Bridges Web Solutions"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="block">
                <h2 className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent leading-tight">
                  Bridges Web Solutions
                </h2>
                <p className="hidden sm:block text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide">
                  Professional Web Development
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="relative text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm cursor-pointer flex items-center gap-1 py-4"
                    >
                      {item.name}
                      <i className="ri-arrow-drop-down-line text-lg"></i>
                      <div className="absolute bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top z-[100] ${isServicesOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'
                      }`}>
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-200 text-sm border-b border-slate-800/50 last:border-0"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm group cursor-pointer py-2"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border border-emerald-500/30 flex items-center gap-2"
              >
                <span>Get Started</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            {/* Mobile Menu Button - Styled */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[110] p-2 text-slate-100 hover:text-indigo-400 transition-colors duration-300 focus:outline-none touch-manipulation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5 pointer-events-none">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Standard Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-800 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item, idx) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="border-b border-slate-800/50 last:border-0">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-slate-200 hover:text-indigo-400 transition-colors duration-300 font-semibold text-base py-3 px-3 rounded-lg hover:bg-slate-800/50"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                          {item.name}
                        </span>
                        <i className={`ri-arrow-drop-${isServicesOpen ? 'up' : 'down'}-line text-xl transition-transform duration-300`}></i>
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-800/20"
                          >
                            <div className="pl-8 pr-4 py-2 space-y-1">
                              {item.dropdownItems?.map((dropdownItem, index) => (
                                <Link
                                  key={index}
                                  href={dropdownItem.href}
                                  onClick={handleLinkClick}
                                  className="block text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm py-2 px-2 border-b border-slate-700/30 last:border-0"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block text-slate-200 hover:text-indigo-400 transition-colors duration-300 font-semibold text-base py-3 px-3 rounded-lg hover:bg-slate-800/50"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.href === '/contact' ? 'bg-emerald-500' : 'bg-slate-600'}`}></span>
                        {item.name}
                      </span>
                    </Link>
                  )
                ))}

                <div className="pt-4 mt-2 border-t border-slate-800">
                  <a
                    href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-lg"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

