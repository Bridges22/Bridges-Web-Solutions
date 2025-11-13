'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #e0e7ff 25%, transparent 25%),
              linear-gradient(-45deg, #e0e7ff 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #e0e7ff 75%),
              linear-gradient(-45deg, transparent 75%, #e0e7ff 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>NEW SERVICES LAUNCHED</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expanding Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've added two powerful new services to help your business grow even further. Complete digital solutions under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              style={{ 
                animation: mounted ? `fadeInUp 0.8s ease-out ${index * 0.2}s both` : 'none'
              }}
            >
              {/* Card Content */}
              <div className="grid md:grid-cols-2 h-full">
                {/* Left Content */}
                <div className="p-8 lg:p-10">
                  {/* NEW Badge */}
                  <div className="absolute top-4 right-4 md:right-auto md:left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    NEW
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <i className="ri-check-double-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stats */}
                  <div className="mb-8">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.stats.metric}
                    </div>
                    <div className="text-sm text-gray-600">{service.stats.label}</div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                  >
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
                
                {/* Right Image */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-full">
                      <div className="text-white text-sm font-medium mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-white">
                        {index === 0 ? 'Ksh 25,000/mo' : 'Ksh 75,000'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Need a custom solution combining multiple services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <i className="ri-apps-line"></i>
              View All Services
            </Link>
            <a
              href="https://wa.me/254104613770?text=Hi! I'm interested in your new services - Social Media Management and CCTV Systems."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="ri-whatsapp-line"></i>
              Get Custom Quote
            </a>
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
