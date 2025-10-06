'use client';

import Navigation from '../../components/Navigation';
import FAQ from '../../components/FAQ';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our web development services, process, pricing, and support. Can't find what you're looking for? We're here to help!
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt;1hr</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Questions Answered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQ />

        {/* Additional Help Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need More{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Help?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to support you every step of the way. Choose the best way to get in touch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-whatsapp-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">WhatsApp Chat</h3>
                <p className="text-gray-400 mb-6">Get instant answers to your questions via WhatsApp. Perfect for quick queries.</p>
                <a
                  href="https://wa.me/254104613770?text=Hi! I have a question about your web development services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <i className="ri-chat-3-line"></i>
                  Start Chat
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-gray-400 mb-6">Send us detailed questions and we'll respond with comprehensive answers.</p>
                <a
                  href="mailto:bridges.cybersec@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <i className="ri-send-plane-line"></i>
                  Send Email
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-calendar-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Free Consultation</h3>
                <p className="text-gray-400 mb-6">Schedule a free consultation to discuss your project in detail.</p>
                <a
                  href="https://wa.me/254104613770?text=Hi! I'd like to schedule a free consultation to discuss my website project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <i className="ri-calendar-check-line"></i>
                  Book Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Helpful{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore these resources to learn more about web development and digital marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Website Planning Guide',
                  description: 'Learn how to plan your website project for maximum success.',
                  icon: 'ri-file-text-line',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'SEO Best Practices',
                  description: 'Discover how to improve your website\'s search engine ranking.',
                  icon: 'ri-search-line',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'E-commerce Setup',
                  description: 'Everything you need to know about starting an online store.',
                  icon: 'ri-shopping-cart-line',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Mobile Optimization',
                  description: 'Why mobile-first design is crucial for your business.',
                  icon: 'ri-smartphone-line',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Website Maintenance',
                  description: 'Keep your website secure, fast, and up-to-date.',
                  icon: 'ri-settings-line',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Digital Marketing',
                  description: 'Drive more traffic and conversions to your website.',
                  icon: 'ri-megaphone-line',
                  color: 'from-pink-500 to-rose-500'
                }
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${resource.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
