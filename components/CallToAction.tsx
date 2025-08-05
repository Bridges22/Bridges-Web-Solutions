
'use client';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-1000 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            Stop Losing Customers to{' '}
            <span 
              className="text-red-400"
              style={{
                textShadow: '0 0 30px rgba(248, 113, 113, 0.8)'
              }}
            >
              Competitors
            </span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Every day without a professional website is money left on the table. Your competitors are already online - don't let them win by default.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'ri-time-line', title: 'Quick Turnaround', desc: 'Your website will be live and generating leads within 2-3 weeks', delay: '0ms' },
              { icon: 'ri-shield-check-line', title: 'Guaranteed Results', desc: '100% satisfaction guarantee or your money back', delay: '200ms' },
              { icon: 'ri-customer-service-2-line', title: 'Ongoing Support', desc: 'Free maintenance and updates for the first 6 months', delay: '400ms' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500"
                style={{
                  boxShadow: '0 10px 40px rgba(15, 23, 42, 0.6), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                  animation: `slideUp 0.6s ease-out ${item.delay} both`
                }}
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.2)'
                  }}
                ></div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)'
                    }}
                  >
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 
                    className="font-bold text-xl mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-slate-700/50 relative overflow-hidden"
            style={{
              boxShadow: '0 0 60px rgba(15, 23, 42, 0.8), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
            }}
          >
            {/* Special Offer Glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 rounded-3xl"
              style={{
                boxShadow: 'inset 0 0 40px rgba(251, 191, 36, 0.1)'
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm"
                  style={{
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
                  }}
                >
                  🔥 SPECIAL LAUNCH OFFER - LIMITED TIME
                </div>
              </div>

              <h3 
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                }}
              >
                Transform Your Business Today
              </h3>
              
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div 
                    className="text-gray-400 line-through text-xl mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    Regular Price: Ksh 45,750
                  </div>
                  <div 
                    className="text-5xl font-bold text-yellow-400 mb-2"
                    style={{
                      textShadow: '0 0 30px rgba(251, 191, 36, 0.8)'
                    }}
                  >
                    Launch Price: Ksh 19,999
                  </div>
                  <div 
                    className="text-green-400 font-semibold text-lg"
                    style={{
                      textShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                    }}
                  >
                    Save Ksh 25,750 - This Month Only
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-8 max-w-2xl mx-auto">
                Includes: Complete website design, mobile optimization, SEO setup, contact forms, and 6 months free hosting & support
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="https://wa.me/254104613770?text=Hi! I want to claim the launch offer and get started on my professional website."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-2"
              style={{
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.8), 0 0 80px rgba(16, 185, 129, 0.4)',
                filter: 'drop-shadow(0 6px 25px rgba(34, 197, 94, 0.5))'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <i className="ri-whatsapp-line text-2xl"></i>
                Claim Launch Offer
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="https://wa.me/254104613770?text=Hi! Can I schedule a free demo to see what my website could look like?"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border-2 border-cyan-400/50 hover:border-cyan-400/80 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-2"
              style={{
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)',
                filter: 'drop-shadow(0 4px 20px rgba(34, 211, 238, 0.3))'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <i className="ri-play-circle-line text-2xl"></i>
                Request Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <p 
            className="text-yellow-400 text-sm flex items-center justify-center gap-2"
            style={{
              textShadow: '0 0 10px rgba(251, 191, 36, 0.4)'
            }}
          >
            <i className="ri-timer-line animate-pulse"></i>
            Offer expires in 7 days - Don't miss out on this exclusive pricing
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
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
