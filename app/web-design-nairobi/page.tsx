import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Web Design Company in Nairobi | Bridges Web Solutions',
  description: 'Top-rated web design and digital systems agency in Nairobi, Kenya. We build professional, SEO-optimized websites and custom software for local businesses.',
  keywords: ['web design Nairobi', 'website developers in Nairobi', 'Nairobi web designers', 'digital systems Kenya', 'ecommerce websites Nairobi'],
};

export default function WebDesignNairobiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Local Expertise, Global Standards
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Web Design in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Nairobi</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                As Nairobi's leading technology partner, we build high-performance websites, e-commerce stores, and custom digital systems designed to help your business dominate the local market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Get a Free Quote</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <a
                  href="https://wa.me/254104613770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-green-400 text-xl"></i>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?w=800&auto=format&fit=crop" 
                alt="Nairobi Cityscape" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 shadow-lg">
                <i className="ri-search-eye-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local SEO Optimized</h3>
              <p className="text-slate-400">We optimize your site to rank for searches like "best [your service] in Nairobi", driving qualified local traffic directly to you.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-lg">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">M-Pesa Ready</h3>
              <p className="text-slate-400">Native integration with M-Pesa APIs so your Nairobi customers can pay easily via Lipa na M-Pesa STK push.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mb-6 shadow-lg">
                <i className="ri-speed-up-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-slate-400">Optimized for Kenyan mobile networks, ensuring your website loads quickly even on 3G connections.</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Nairobi Businesses Choose Us</h2>
            <p className="text-lg text-slate-300 mb-8">
              From Westlands to Kilimani, CBD to Karen, we've helped hundreds of Nairobi businesses establish a commanding online presence. We don't just build websites; we build scalable digital systems that automate your operations and grow your revenue.
            </p>
            <div className="flex justify-center gap-8 text-left">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-slate-400">Local Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-slate-400">Support Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </>
  );
}
