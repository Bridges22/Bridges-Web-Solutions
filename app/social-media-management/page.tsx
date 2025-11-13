'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SocialMediaManagement() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const platforms = [
    { name: 'Facebook', icon: 'ri-facebook-fill', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: 'ri-instagram-fill', color: 'from-pink-500 to-purple-600' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', color: 'from-blue-700 to-blue-800' },
    { name: 'X (Twitter)', icon: 'ri-twitter-x-fill', color: 'from-gray-700 to-black' },
    { name: 'TikTok', icon: 'ri-tiktok-fill', color: 'from-gray-900 to-black' },
    { name: 'YouTube', icon: 'ri-youtube-fill', color: 'from-red-600 to-red-700' },
  ];

  const processes = [
    {
      number: '01',
      title: 'Strategy & Planning',
      description: 'We analyze your brand, audience, and goals to create a tailored social media strategy that drives real results.',
      icon: 'ri-lightbulb-line',
    },
    {
      number: '02',
      title: 'Content Design & Creation',
      description: 'Our creative team produces stunning visuals, engaging videos, and compelling copy that resonates with your audience.',
      icon: 'ri-brush-line',
    },
    {
      number: '03',
      title: 'Consistent Posting & Engagement',
      description: 'We maintain your social presence with scheduled posts, real-time engagement, and community management.',
      icon: 'ri-calendar-line',
    },
    {
      number: '04',
      title: 'Ad Campaigns & Growth',
      description: 'Strategic paid campaigns to reach new audiences, generate leads, and maximize your ROI across all platforms.',
      icon: 'ri-megaphone-line',
    },
    {
      number: '05',
      title: 'Analytics & Reporting',
      description: 'Monthly performance reports with insights on growth, engagement, reach, and actionable recommendations.',
      icon: 'ri-bar-chart-line',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '25,000',
      features: [
        '2 Social Media Platforms',
        '12 Posts per Month',
        'Basic Graphics Design',
        'Community Management',
        'Monthly Reports',
      ],
      popular: false,
    },
    {
      name: 'Business',
      price: '45,000',
      features: [
        '4 Social Media Platforms',
        '20 Posts per Month',
        'Professional Graphics & Videos',
        'Paid Ads Management (Budget Extra)',
        'Weekly Analytics Reports',
        'Dedicated Account Manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '85,000',
      features: [
        'All Social Media Platforms',
        'Daily Posting',
        'Premium Content Creation',
        'Full Ad Campaign Management',
        'Real-time Analytics Dashboard',
        'Influencer Partnerships',
        '24/7 Support',
      ],
      popular: false,
    },
  ];

  const results = [
    { metric: '350%', label: 'Average Engagement Increase' },
    { metric: '2.5x', label: 'Follower Growth Rate' },
    { metric: '400%', label: 'Lead Generation Boost' },
    { metric: '24/7', label: 'Active Management' },
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
              <span className="text-white">Social Media Management</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white pb-20 pt-10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 ${mounted ? 'animate-fade-in-up' : ''}`}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Trusted by 200+ Brands</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Build Your Brand <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Presence</span> on Every Platform
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  We help businesses grow online through strategic content creation, consistent engagement, and data-driven social media management that converts followers into customers.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center flex items-center justify-center gap-2"
                  >
                    <i className="ri-message-3-line"></i>
                    Request a Quote
                  </Link>
                  <a
                    href="https://wa.me/254104613770?text=Hi! I'm interested in your Social Media Management services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line"></i>
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <i className="ri-shield-check-line text-2xl text-green-400"></i>
                    <div>
                      <div className="font-semibold">100% Authentic Growth</div>
                      <div className="text-sm text-gray-400">No bots, real engagement</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-timer-line text-2xl text-blue-400"></i>
                    <div>
                      <div className="font-semibold">Fast Results</div>
                      <div className="text-sm text-gray-400">See growth in 30 days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className={`relative ${mounted ? 'animate-fade-in-up delay-200' : ''}`}>
                <div className="relative w-full h-[500px]">
                  {/* Floating Social Media Cards */}
                  <div className="absolute inset-0">
                    {/* Instagram Card */}
                    <div className="absolute top-0 right-10 bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                      <i className="ri-instagram-fill text-4xl text-white"></i>
                      <div className="mt-2 text-white font-bold">10K+</div>
                      <div className="text-xs text-white/80">Followers</div>
                    </div>
                    
                    {/* Facebook Card */}
                    <div className="absolute top-20 left-10 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                      <i className="ri-facebook-fill text-4xl text-white"></i>
                      <div className="mt-2 text-white font-bold">98%</div>
                      <div className="text-xs text-white/80">Engagement</div>
                    </div>
                    
                    {/* LinkedIn Card */}
                    <div className="absolute bottom-20 right-20 bg-gradient-to-br from-blue-700 to-blue-800 p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                      <i className="ri-linkedin-fill text-4xl text-white"></i>
                      <div className="mt-2 text-white font-bold">500+</div>
                      <div className="text-xs text-white/80">Leads/Month</div>
                    </div>
                    
                    {/* Central Stats Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex flex-col items-center justify-center border-2 border-white/20">
                      <div className="text-4xl font-bold text-white">350%</div>
                      <div className="text-sm text-white/80">Growth Rate</div>
                      <div className="mt-2 flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div 
                  key={index} 
                  className="text-center"
                  style={{ animation: mounted ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {result.metric}
                  </div>
                  <div className="mt-2 text-gray-600">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms We Manage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Platforms We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Master</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create tailored strategies for each platform, ensuring your brand message resonates perfectly with each unique audience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  style={{ animation: mounted ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${platform.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-800">{platform.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our Proven <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategy to execution, we handle every aspect of your social media presence with precision and creativity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processes.map((process, index) => (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  style={{ animation: mounted ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {process.number}
                  </div>
                  
                  <div className="mb-4">
                    <i className={`${process.icon} text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Transparent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600">Choose the perfect plan for your social media needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl p-8 ${pkg.popular ? 'ring-2 ring-indigo-600 transform scale-105' : ''} hover:shadow-2xl transition-all duration-300`}
                  style={{ animation: mounted ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Ksh {pkg.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Brands Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <i className="ri-team-line text-4xl text-cyan-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">Creative designers, skilled copywriters, and strategic marketers working together for your success.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <i className="ri-line-chart-line text-4xl text-green-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-gray-300">Track record of 350% average engagement increase and 2.5x follower growth for our clients.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <i className="ri-customer-service-2-line text-4xl text-purple-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-300">Your brand never sleeps, and neither do we. Round-the-clock monitoring and engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Handle Your Social Media While You Focus on Your Business
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Join 200+ businesses that trust us with their social media presence. Start seeing real growth in just 30 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <i className="ri-message-3-line"></i>
                Request a Quote
              </Link>
              <a
                href="https://wa.me/254104613770?text=Hi! I want to grow my business with social media management."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line"></i>
                WhatsApp Us Now
              </a>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <i className="ri-shield-check-line text-2xl"></i>
              <span className="font-medium">30-Day Money Back Guarantee</span>
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

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  );
}
