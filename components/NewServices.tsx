'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedGradientBg from './AnimatedGradientBg';
import TiltCard from './TiltCard';

export default function NewServices() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: 'ri-share-line',
      title: 'Social Media Management',
      description: 'Grow your brand online with powerful social media management. We handle your presence while you focus on business.',
      link: '/social-media-management',
      gradient: 'from-pink-500 to-purple-600',
      features: [
        'Content Creation & Design',
        'Daily Posting & Engagement',
        'Ad Campaigns',
        'Analytics & Reporting'
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      stats: { metric: '350%', label: 'Avg Engagement Increase' }
    },
    {
      icon: 'ri-camera-lens-line',
      title: 'CCTV & Security Systems',
      description: 'Protect your business with reliable CCTV and smart surveillance systems. Professional installation and support.',
      link: '/cctv-security-systems',
      gradient: 'from-indigo-500 to-blue-600',
      features: [
        'HD Camera Installation',
        'Smart Monitoring',
        'Mobile App Access',
        '24/7 Support'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      stats: { metric: '99.9%', label: 'System Uptime' }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Tech Background */}
      <AnimatedGradientBg variant="mesh" opacity={0.15} />

      {/* Glowing Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Expanding Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful services designed to help your business grow even further. Complete digital solutions under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              maxTilt={8}
              scale={1.02}
              glowColor={index === 0 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(99, 102, 241, 0.4)'}
              className="w-full"
            >
              <motion.div
                className="group relative bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Card Content */}
                <div className="grid md:grid-cols-2 h-full">
                  {/* Left Content */}
                  <div className="p-8 lg:p-10 relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-${service.gradient.split(' ')[1].replace('to-', '')}/50`}>
                      <i className={`${service.icon} text-3xl text-white`}></i>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300 group/item hover:text-white transition-colors duration-200">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                            <i className="ri-check-line text-xs text-white"></i>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="mb-8 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-4 border border-white/5">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                        {service.stats.metric}
                      </div>
                      <div className="text-sm text-gray-400">{service.stats.label}</div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-${service.gradient.split(' ')[1].replace('to-', '')}/50`}
                    >
                      Learn More
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>

                  {/* Right Image */}
                  <div className="relative hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-black/50 z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6 z-20">
                      <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 w-full border border-white/20 shadow-2xl">
                        <div className="text-cyan-400 text-sm font-semibold mb-2 flex items-center gap-2">
                          <i className="ri-price-tag-3-line"></i>
                          Starting from
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {index === 0 ? 'Ksh 25,000/mo' : 'Ksh 75,000'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl`}></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 relative">
          <div className="inline-block bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <p className="text-gray-300 mb-6 text-lg">
              Need a custom solution combining multiple services?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <i className="ri-apps-line"></i>
                View All Services
              </Link>
              <a
                href="https://wa.me/254104613770?text=Hi! I'm interested in your new services - Social Media Management and CCTV Systems."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/30 hover:shadow-green-500/50"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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
