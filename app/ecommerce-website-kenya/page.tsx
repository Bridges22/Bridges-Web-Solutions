import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce Website Development in Kenya | Bridges Web Solutions',
  description: 'Launch your online store with Kenya\'s top e-commerce developers. We build secure, fast online shops with M-Pesa integration and inventory management.',
  keywords: ['ecommerce website Kenya', 'online store developers Nairobi', 'M-Pesa integrated ecommerce', 'sell online in Kenya'],
};

export default function EcommerceKenyaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Sell Anywhere, Anytime
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">E-commerce</span> Websites in Kenya
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Take your retail business online with our high-converting e-commerce platforms. We integrate local payment gateways, manage inventory seamlessly, and ensure your customers enjoy a frictionless shopping experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Build My Online Store</span>
                  <i className="ri-shopping-cart-2-line"></i>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop" 
                alt="E-commerce Dashboard" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Everything You Need to Sell Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex gap-6">
                <i className="ri-smartphone-line text-4xl text-green-400"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lipa na M-Pesa Integration</h3>
                  <p className="text-slate-400">Accept payments instantly through STK Push, ensuring secure, immediate checkout for millions of Kenyan mobile money users.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex gap-6">
                <i className="ri-truck-line text-4xl text-blue-400"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Logistics & Delivery</h3>
                  <p className="text-slate-400">Integrate with local courier services to calculate shipping fees automatically to towns across Kenya.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex gap-6">
                <i className="ri-store-3-line text-4xl text-purple-400"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inventory Management</h3>
                  <p className="text-slate-400">Sync your online store with your physical shop's point-of-sale system to prevent overselling.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex gap-6">
                <i className="ri-bar-chart-box-line text-4xl text-cyan-400"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sales Analytics</h3>
                  <p className="text-slate-400">Track your best-selling products, monitor daily revenue, and understand customer behavior with built-in dashboards.</p>
                </div>
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
