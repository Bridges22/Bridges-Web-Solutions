'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import ProjectCalculator from '../../components/ProjectCalculator';
import PerformanceShowcase from '../../components/PerformanceShowcase';
import DesignCustomizer from '../../components/DesignCustomizer';
import SpeedTestTool from '../../components/SpeedTestTool';
import SEOHead from '../../components/SEOHead';

export default function ToolsPage() {
  return (
    <>
      <SEOHead
        title="Free Website Tools - Project Calculator, Speed Test & Design Studio | Bridges Web Solutions"
        description="Try our free website tools: Project cost calculator, website speed test, design customizer, and performance showcase. Get instant quotes and see your website potential."
        keywords="website calculator, speed test, design tool, website cost, performance test, Kenya web tools"
        canonicalUrl="https://your-domain.com/tools"
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <i className="ri-tools-line"></i>
                Free Website Tools
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Interactive Website Tools
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of web development with our interactive tools. Calculate costs, test performance, 
                customize designs, and see real-time results - all for free!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm">
                  <i className="ri-calculator-line mr-2"></i>
                  Cost Calculator
                </div>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm">
                  <i className="ri-speed-line mr-2"></i>
                  Speed Test
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <i className="ri-palette-line mr-2"></i>
                  Design Studio
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm">
                  <i className="ri-bar-chart-line mr-2"></i>
                  Performance Showcase
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <i className="ri-rocket-line text-3xl text-cyan-400 mb-3"></i>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
                  <p className="text-gray-400 text-sm">Get immediate feedback and calculations in real-time</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <i className="ri-eye-line text-3xl text-green-400 mb-3"></i>
                  <h3 className="text-lg font-semibold text-white mb-2">Visual Preview</h3>
                  <p className="text-gray-400 text-sm">See exactly how your website will look and perform</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <i className="ri-gift-line text-3xl text-purple-400 mb-3"></i>
                  <h3 className="text-lg font-semibold text-white mb-2">Completely Free</h3>
                  <p className="text-gray-400 text-sm">All tools are free to use with no hidden charges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <ProjectCalculator />
        <SpeedTestTool />
        <DesignCustomizer />
        <PerformanceShowcase />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                You've seen what's possible. Now let's make it happen for your business!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/254104613770?text=Hi! I've tried your interactive tools and I'm impressed. I want to discuss building my website with you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  Start My Project Now
                </a>
                
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="ri-mail-line text-xl"></i>
                  Get Detailed Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
        <LiveChat />
      </main>
    </>
  );
}
