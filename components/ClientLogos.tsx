'use client';

import { useEffect, useState } from 'react';

export default function ClientLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clients = [
    { name: 'Rodriguez Family Restaurant', logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
    { name: 'FitCore Gym', logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
    { name: 'Bloom Boutique', logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
    { name: 'Thompson Legal', logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
    { name: 'Park Dental', logo: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
    { name: 'Williams Construction', logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' }
  ];

  const certifications = [
    { name: 'Google Partner', icon: 'ri-google-line', color: 'from-blue-500 to-green-500' },
    { name: 'SSL Secured', icon: 'ri-shield-check-line', color: 'from-green-500 to-emerald-500' },
    { name: 'Mobile First', icon: 'ri-smartphone-line', color: 'from-purple-500 to-pink-500' },
    { name: 'SEO Optimized', icon: 'ri-search-line', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join successful companies that chose professional websites to transform their business
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden mb-16">
          <div 
            className="flex animate-scroll"
            style={{
              animation: mounted ? 'scroll 30s linear infinite' : 'none'
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-32 h-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-24 h-10 object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-32 h-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-24 h-10 object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              style={{
                animation: mounted ? `fadeInUp 0.6s ease-out ${index * 100}ms both` : 'none'
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${cert.icon} text-xl text-white`}></i>
                  </div>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {cert.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-full px-8 py-4 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                    <i className="ri-user-line text-white text-xs"></i>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-300 ml-2">50+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 Rating</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
