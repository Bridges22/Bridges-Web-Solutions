'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CCTVSecuritySystems() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: 'ri-camera-line',
      title: 'CCTV Camera Installation',
      description: 'Professional installation of high-definition indoor and outdoor surveillance cameras with night vision capabilities.',
      features: ['4K Resolution', 'Night Vision', 'Weather Resistant'],
    },
    {
      icon: 'ri-wifi-line',
      title: 'Smart Wi-Fi Monitoring',
      description: 'Cloud-based monitoring systems accessible from anywhere through mobile apps and web platforms.',
      features: ['Remote Access', 'Cloud Storage', 'Real-time Alerts'],
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Access Control Systems',
      description: 'Advanced biometric and card-based access control for enhanced security and employee management.',
      features: ['Biometric Scanners', 'RFID Cards', 'Time Attendance'],
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Integration',
      description: 'Seamless integration with iOS and Android apps for complete control at your fingertips.',
      features: ['Live Viewing', 'Playback', 'Push Notifications'],
    },
    {
      icon: 'ri-tools-line',
      title: 'Maintenance & Support',
      description: 'Regular maintenance, updates, and 24/7 technical support to ensure system reliability.',
      features: ['Regular Checkups', 'Software Updates', 'Quick Response'],
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Alarm Systems',
      description: 'State-of-the-art alarm systems with motion sensors and immediate alert mechanisms.',
      features: ['Motion Sensors', 'Smart Alerts', '24/7 Monitoring'],
    },
  ];

  const packages = [
    {
      name: 'Home Security',
      price: '75,000',
      cameras: '4 HD Cameras',
      features: [
        '4 HD Cameras (2MP)',
        '500GB Storage',
        'Mobile App Access',
        'Motion Detection',
        'Night Vision',
        'Professional Installation',
        '1 Year Warranty',
      ],
      popular: false,
    },
    {
      name: 'Business Pro',
      price: '150,000',
      cameras: '8 Full HD Cameras',
      features: [
        '8 Full HD Cameras (4MP)',
        '2TB Storage',
        'Cloud Backup',
        'Advanced Analytics',
        'Facial Recognition',
        'Access Control System',
        'Remote Monitoring',
        '2 Year Warranty',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '350,000',
      cameras: '16+ 4K Cameras',
      features: [
        '16+ 4K Cameras',
        '8TB+ Storage',
        'AI-Powered Analytics',
        'License Plate Recognition',
        'Thermal Imaging',
        'Integration Support',
        'Dedicated Team',
        '3 Year Warranty',
      ],
      popular: false,
    },
  ];

  const stats = [
    { number: '500+', label: 'Installations' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '5 Years', label: 'Experience' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 pt-24 pb-2">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white">CCTV & Security Systems</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white pb-20 pt-10 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 ${mounted ? 'animate-fade-in-up' : ''}`}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Advanced Security Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Smart Security <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span> You Can Rely On
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  We install modern CCTV and security systems designed for safety, reliability, and easy monitoring. Protect what matters most with cutting-edge surveillance technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center flex items-center justify-center gap-2"
                  >
                    <i className="ri-file-list-3-line"></i>
                    Get a Quote
                  </Link>
                  <a
                    href="https://wa.me/254104613770?text=Hi! I need a CCTV security system for my property."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line"></i>
                    Free Site Assessment
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <i className="ri-verified-badge-line text-2xl text-green-400"></i>
                    <div>
                      <div className="font-semibold">Licensed & Certified</div>
                      <div className="text-sm text-gray-400">Government approved</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-time-line text-2xl text-blue-400"></i>
                    <div>
                      <div className="font-semibold">Quick Installation</div>
                      <div className="text-sm text-gray-400">Same week service</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative ${mounted ? 'animate-fade-in-up delay-200' : ''}`}>
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-2xl p-4 shadow-2xl w-64 h-48 border-4 border-gray-800">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg h-full flex items-center justify-center relative overflow-hidden">
                      <div className="grid grid-cols-2 gap-2 p-2">
                        <div className="bg-white/10 backdrop-blur rounded h-16 animate-pulse"></div>
                        <div className="bg-white/10 backdrop-blur rounded h-16 animate-pulse delay-200"></div>
                        <div className="bg-white/10 backdrop-blur rounded h-16 animate-pulse delay-500"></div>
                        <div className="bg-white/10 backdrop-blur rounded h-16 animate-pulse delay-700"></div>
                      </div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 text-xs text-white/80">LIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Complete Security <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From installation to monitoring, we provide end-to-end security solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Security <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-xl text-gray-600">Comprehensive security solutions for every budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-indigo-600 transform scale-105' : ''
                } hover:shadow-2xl transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-1 rounded-bl-xl text-sm font-semibold">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">Ksh {pkg.price}</span>
                    </div>
                    <div className="text-lg font-semibold text-indigo-600 mb-6">{pkg.cameras}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-check-line text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Keep Your Home or Business Secure
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Get a free site assessment and discover how our security solutions can protect what matters most to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <i className="ri-file-list-3-line"></i>
                Get a Quote
              </Link>
              <a
                href="https://wa.me/254104613770?text=Hi! I need a security system for my property. Can we schedule a free site assessment?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line"></i>
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />

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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </>
  );
}
