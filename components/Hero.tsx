'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Custom hook for animated counters
function useAnimatedCounter(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return { count, ref };
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const projectsCounter = useAnimatedCounter(50, 2000, 0);
  const satisfactionCounter = useAnimatedCounter(100, 2000, 200);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative flex items-center justify-center text-white overflow-hidden py-16 sm:py-20 md:py-24">
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

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 text-center max-w-5xl w-full">
        {/* Main Hero Content - Streamlined and Professional */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-1 sm:px-2">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exceptional Websites
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 font-light">
          Professional websites that work 24/7 to grow your business. Fast-loading, mobile-first, and designed to convert visitors into customers.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
          <Link
            href="#portfolio"
            className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto border border-indigo-500/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="ri-eye-line text-lg sm:text-xl"></i>
              View Our Portfolio
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>

          <a
            href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto border border-emerald-500/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
              Start Your Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Enhanced Stats Section with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
          {/* Projects Counter */}
          <div
            ref={projectsCounter.ref}
            className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
            style={{
              animation: mounted ? `slideUp 0.8s ease-out 0ms both` : 'none'
            }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-code-s-slash-line text-xl sm:text-2xl text-white"></i>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {projectsCounter.count}+
              </div>

              <div className="text-slate-300 font-medium text-sm sm:text-base">
                Projects Completed
              </div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div
            className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
            style={{
              animation: mounted ? `slideUp 0.8s ease-out 200ms both` : 'none'
            }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-customer-service-line text-xl sm:text-2xl text-white"></i>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>

              <div className="text-slate-300 font-medium text-sm sm:text-base">
                Support Available
              </div>
            </div>
          </div>

          {/* Satisfaction Counter */}
          <div
            ref={satisfactionCounter.ref}
            className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
            style={{
              animation: mounted ? `slideUp 0.8s ease-out 400ms both` : 'none'
            }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-heart-line text-xl sm:text-2xl text-white"></i>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {satisfactionCounter.count}%
              </div>

              <div className="text-slate-300 font-medium text-sm sm:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
          <i className="ri-arrow-down-line text-xl sm:text-2xl text-slate-400 hover:text-indigo-400 transition-colors duration-300"></i>
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
