'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedGradientBg from './AnimatedGradientBg';
import ParticleNetwork from './ParticleNetwork';
import { ParallaxProvider, MouseTilt, ParallaxLayer } from './ParallaxProvider';

// Dynamic import for 3D orb to avoid SSR issues
const FloatingOrb = dynamic(() => import('./FloatingOrb'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

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
  const [isMobile, setIsMobile] = useState(true);
  const projectsCounter = useAnimatedCounter(50, 2000, 0);
  const satisfactionCounter = useAnimatedCounter(100, 2000, 200);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ParallaxProvider>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative flex items-center justify-center text-white overflow-hidden py-24 sm:py-28 md:py-32 w-full">
        {/* 3D Floating Orb - Render only on Desktop for performance & crash prevention */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <FloatingOrb className="opacity-40 sm:opacity-60" />
          </div>
        )}

        {/* Enhanced Animated Background Layers */}
        <ParallaxLayer speed={0.2} className="absolute inset-0">
          <AnimatedGradientBg variant="waves" opacity={0.4} />
        </ParallaxLayer>

        <ParallaxLayer speed={0.4} className="absolute inset-0">
          <ParticleNetwork
            particleCount={50}
            particleColor="rgba(147, 51, 234, 0.8)"
            lineColor="rgba(59, 130, 246, 0.3)"
            speed={0.5}
            minDistance={200}
          />
        </ParallaxLayer>

        {/* Enhanced Visual Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Larger glowing orbs - adjusted for mobile to not block text */}
          <div className="absolute top-20 left-4 sm:left-20 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60 sm:opacity-80 shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute top-40 right-4 sm:right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
          <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-purple-400 rounded-full animate-ping animation-delay-1000 opacity-50 sm:opacity-70 shadow-lg shadow-purple-400/50"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-pulse animation-delay-2000 shadow-lg shadow-indigo-400/50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-pink-400 rounded-full animate-ping animation-delay-3000 opacity-40 sm:opacity-60 shadow-lg shadow-pink-400/50"></div>
          <div className="absolute top-1/2 left-10 w-3 h-3 bg-emerald-400 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-emerald-400/50"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10 sm:opacity-20"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.2) 2px, transparent 2px)
            `,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Additional Glow Effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-10 sm:opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl opacity-10 sm:opacity-20 animate-pulse-slower"></div>
        </div>

        <MouseTilt maxTilt={2} className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center max-w-5xl w-full">
          {/* Main Hero Content */}
          <motion.div
            className="mb-10 sm:mb-12 md:mb-16 mt-8 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight px-0 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Scale Your Operations with{' '}
              <span className="block mt-2 sm:inline sm:mt-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Custom Digital Systems
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build intelligent web platforms, portals, and software infrastructure to automate your daily operations and scale your impact in Kenya.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="#portfolio"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-500/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <i className="ri-eye-line text-xl"></i>
                View Our Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>

            <a
              href="https://wa.me/254104613770?text=Hi! I'm interested in a professional website for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-emerald-500/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <i className="ri-whatsapp-line text-xl"></i>
                Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </motion.div>

          {/* Stats Section - Adjusted Grid for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-4">
            {/* Projects Counter */}
            <div
              ref={projectsCounter.ref}
              className="col-span-1 group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
              style={{
                animation: mounted ? `slideUp 0.8s ease-out 0ms both` : 'none'
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-code-s-slash-line text-lg sm:text-xl md:text-2xl text-white"></i>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {projectsCounter.count}+
                </div>

                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div
              className="col-span-1 group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
              style={{
                animation: mounted ? `slideUp 0.8s ease-out 200ms both` : 'none'
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-customer-service-line text-lg sm:text-xl md:text-2xl text-white"></i>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  24/7
                </div>

                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base">
                  Support Available
                </div>
              </div>
            </div>

            {/* Satisfaction Counter - Full Width on Mobile for Balance */}
            <div
              ref={satisfactionCounter.ref}
              className="col-span-2 md:col-span-1 group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/30 hover:border-indigo-400/30 transition-all duration-500 hover:bg-slate-800/60 hover:scale-105"
              style={{
                animation: mounted ? `slideUp 0.8s ease-out 400ms both` : 'none'
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-heart-line text-lg sm:text-xl md:text-2xl text-white"></i>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {satisfactionCounter.count}%
                </div>

                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </MouseTilt>

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
    </ParallaxProvider>
  );
}
