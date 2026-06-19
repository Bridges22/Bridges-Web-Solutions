import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M-Pesa API Integration Services in Kenya | Bridges Web Solutions',
  description: 'Expert M-Pesa API developers in Kenya. We integrate Lipa na M-Pesa STK push, B2C, and B2B APIs seamlessly into your website, app, or digital system.',
  keywords: ['Mpesa integration Kenya', 'Lipa na Mpesa website', 'Mpesa API developers', 'STK push integration', 'Safaricom Daraja API'],
};

export default function MPesaIntegrationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-green-400 font-semibold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
                <i className="ri-smartphone-line"></i> Safaricom Daraja API Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Seamless <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">M-Pesa</span> API Integration
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Connect your website or custom software directly to Safaricom's M-Pesa network. Automate payment collections, verify transactions instantly, and disburse funds securely.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Get Integration Quote</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white">Checkout</h3>
                  <span className="text-green-400 font-bold">KSh 1,500</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 mb-4 border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Enter M-Pesa Number</p>
                  <div className="flex items-center text-white font-medium">
                    <span className="text-slate-500 mr-2">+254</span>
                    712 345 678
                  </div>
                </div>
                <button className="w-full bg-green-500 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 cursor-default">
                  <i className="ri-lock-line"></i> Pay securely with M-Pesa
                </button>
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500">Wait for the STK prompt on your phone</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our M-Pesa Integration Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <i className="ri-import-line text-2xl text-green-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lipa na M-Pesa Online (STK Push)</h3>
                <p className="text-slate-400">Initiate transactions directly from your website. Customers simply enter their PIN on their phone to complete the payment. Ideal for e-commerce.</p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <i className="ri-check-double-line text-2xl text-blue-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">C2B (Customer to Business)</h3>
                <p className="text-slate-400">Receive instant notifications when customers pay via your Paybill or Till number. Perfect for automated receipting and account updates.</p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <i className="ri-send-plane-line text-2xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">B2C (Business to Customer)</h3>
                <p className="text-slate-400">Automate disbursements. Send money directly to your employees' or customers' M-Pesa accounts for payroll, refunds, or rewards.</p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <i className="ri-building-line text-2xl text-orange-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">B2B (Business to Business)</h3>
                <p className="text-slate-400">Transfer funds seamlessly between different business Paybills and Tills. Ideal for supply chain payments and vendor management.</p>
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
