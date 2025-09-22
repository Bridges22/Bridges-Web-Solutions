
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative flex items-center justify-center text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-1000 opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-5xl">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="relative bg-slate-800 rounded-full p-1">
              <img
                src="/portfolio/WhatsApp Image 2025-08-25 at 10.29.10_0768cfba.jpg"
                alt="Bridges Web Solutions"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-center"
                style={{
                  backgroundColor: 'transparent',
                  objectPosition: 'center center'
                }}
              />
            </div>
            <h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 ml-2 sm:ml-4"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                textShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
                filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))'
              }}
            >
              Bridges Web Solutions
            </h1>
          </div>
        </div>

        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
          }}
        >
          Your Business Deserves More Than a{' '}
          <span 
            className="text-cyan-400"
            style={{
              textShadow: '0 0 30px rgba(34, 211, 238, 0.8)',
            }}
          >
            Digital Presence
          </span>
        </h2>

        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
          }}
        >
          Professional websites that work 24/7 to grow your business. Fast-loading, mobile-first, and designed to convert visitors into customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16">
          <Link 
            href="#portfolio" 
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-1 w-full sm:w-auto"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(34, 211, 238, 0.3)',
              filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.4))'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="ri-eye-line text-lg sm:text-xl"></i>
              See My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </Link>
          
          <a 
            href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-1 w-full sm:w-auto"
            style={{
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)',
              filter: 'drop-shadow(0 4px 20px rgba(34, 197, 94, 0.4))'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
              Chat on WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Stats Dashboard Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
          {[
            { number: "50+", label: "Websites Built", icon: "ri-code-s-slash-line", delay: "0ms" },
            { number: "24/7", label: "Business Visibility", icon: "ri-time-line", delay: "200ms" },
            { number: "100%", label: "Mobile Ready", icon: "ri-smartphone-line", delay: "400ms" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500"
              style={{
                boxShadow: '0 0 20px rgba(15, 23, 42, 0.5), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                animation: mounted ? `slideUp 0.6s ease-out ${stat.delay} both` : 'none'
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(34, 211, 238, 0.2)'
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)'
                    }}
                  >
                    <i className={`${stat.icon} text-lg sm:text-xl md:text-2xl text-white`}></i>
                  </div>
                </div>
                
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform duration-300"
                  style={{
                    textShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
                  }}
                >
                  {stat.number}
                </div>
                
                <div 
                  className="text-gray-300 font-medium"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="animate-bounce cursor-pointer"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))'
          }}
        >
          <i className="ri-arrow-down-line text-2xl sm:text-3xl text-cyan-400"></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
