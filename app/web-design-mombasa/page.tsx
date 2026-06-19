import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Company in Mombasa | Bridges Web Solutions',
  description: 'Top-rated web design agency in Mombasa. We build professional, fast, and SEO-optimized websites for tourism, logistics, and coastal businesses in Kenya.',
  keywords: ['web design Mombasa', 'website developers Mombasa', 'coast web designers', 'digital systems Kenya', 'ecommerce websites Mombasa'],
};

export default function WebDesignMombasaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Empowering Coastal Businesses
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Expert Web Design in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mombasa</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Unlock your business potential in the coastal region. We create stunning websites and digital booking systems specifically tailored for Mombasa's dynamic tourism, logistics, and retail sectors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Your Project</span>
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
                src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&auto=format&fit=crop" 
                alt="Mombasa Coast" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 shadow-lg">
                <i className="ri-hotel-bed-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tourism & Hospitality</h3>
              <p className="text-slate-400">Custom booking engines, elegant hotel showcases, and integrated payment systems designed for Mombasa's thriving tourism industry.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-lg">
                <i className="ri-ship-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Logistics Portals</h3>
              <p className="text-slate-400">Secure digital portals for clearing and forwarding agencies, allowing client tracking and document management.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mb-6 shadow-lg">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-slate-400">Multi-language support and international SEO strategies to attract tourists and business partners from around the world.</p>
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
