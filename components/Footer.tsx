
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/bd2bce9293e8ee434d9736d52b89b7a4/f99e4dd6eb213e0cca687f82f939920f.png" 
                  alt="Bridges Web Solutions" 
                  className="w-12 h-12 mr-4"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))'
                  }}
                />
              </div>
              <h3 
                className="text-2xl font-bold font-['Pacifico'] text-cyan-400"
                style={{
                  textShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
                }}
              >
                Bridges Web Solutions
              </h3>
            </div>
            
            <p 
              className="text-gray-300 mb-8 max-w-md leading-relaxed"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
              }}
            >
              Professional websites that work 24/7 to grow your business. We bridge the gap between your vision and online success.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/254104613770"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap cursor-pointer transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
                  filter: 'drop-shadow(0 4px 15px rgba(34, 197, 94, 0.3))'
                }}
              >
                <i className="ri-whatsapp-line group-hover:scale-110 transition-transform duration-300"></i>
                WhatsApp
              </a>
              
              <a 
                href="mailto:bridges.cybersec@gmail.com"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap cursor-pointer transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
                  filter: 'drop-shadow(0 4px 15px rgba(34, 211, 238, 0.3))'
                }}
              >
                <i className="ri-mail-line group-hover:scale-110 transition-transform duration-300"></i>
                Email
              </a>
            </div>
          </div>
          
          <div>
            <h4 
              className="font-bold text-lg mb-6 text-white"
              style={{
                textShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {['Website Design', 'E-commerce', 'SEO Optimization', 'Mobile Development', 'Maintenance'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
                    }}></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 
              className="font-bold text-lg mb-6 text-white"
              style={{
                textShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
              }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { text: 'Portfolio', href: '/portfolio' },
                { text: 'Contact', href: '/contact' },
                { text: 'Testimonials', href: '#testimonials' },
                { text: 'Process', href: 'https://wa.me/254104613770?text=Hi! I\'d like to know more about your process.', external: true }
              ].map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                        boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
                      }}></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <Link 
                      href={item.href}
                      className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                        boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
                      }}></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.text}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div 
              className="text-gray-400 text-sm text-center lg:text-left"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
              }}
            >
              2025 Bridges Web Solutions. All rights reserved. Building bridges to your online success.
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div 
                  className="w-8 h-8 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50"
                  style={{
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)'
                  }}
                >
                  <i className="ri-phone-line text-cyan-400"></i>
                </div>
                <span>+254 104 613770</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div 
                  className="w-8 h-8 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50"
                  style={{
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)'
                  }}
                >
                  <i className="ri-mail-line text-cyan-400"></i>
                </div>
                <span>bridges.cybersec@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p 
              className="text-gray-500 text-sm italic"
              style={{
                textShadow: '0 0 10px rgba(34, 211, 238, 0.2)'
              }}
            >
              "Your business deserves more than a Facebook page. Building Bridges to your Online Succes."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
