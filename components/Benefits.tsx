
'use client';

export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Build Trust Instantly',
      description: 'Professional design creates credibility. Customers trust businesses with polished websites over amateur social media pages.',
      stat: '94%',
      statDescription: 'of first impressions are design-related'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Get Found on Google',
      description: 'SEO optimization means your business appears when customers search. Facebook pages don\'t rank in Google searches.',
      stat: '75%',
      statDescription: 'of users never scroll past first page of search results'
    },
    {
      icon: 'ri-time-line',
      title: 'Work 24/7 For You',
      description: 'Your website never sleeps. Customers can learn about you, see your work, and contact you even when your business is closed.',
      stat: '67%',
      statDescription: 'of customers research businesses online before visiting'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Generate Leads Automatically',
      description: 'Contact forms, WhatsApp integration, and clear calls-to-action turn website visitors into paying customers.',
      stat: '3x',
      statDescription: 'more leads generated than social media alone'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Reach Mobile Customers',
      description: 'Mobile-first design ensures perfect experience on phones and tablets. Most of your customers browse on mobile.',
      stat: '58%',
      statDescription: 'of all web traffic comes from mobile devices'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Track Your Success',
      description: 'Analytics show exactly how your website performs. See visitor numbers, popular pages, and conversion rates.',
      stat: '100%',
      statDescription: 'visibility into your online performance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            What You Get With a{' '}
            <span 
              className="text-cyan-400"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
              }}
            >
              Professional Website
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Stop losing customers to competitors. Your professional website works around the clock to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: '0 10px 40px rgba(15, 23, 42, 0.6), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.2), 0 0 50px rgba(34, 211, 238, 0.1)'
                }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <div className="text-right">
                    <div 
                      className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        textShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
                      }}
                    >
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {benefit.statDescription}
                    </div>
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}></div>
            </div>
          ))}
        </div>

        <div 
          className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-12 mt-16 border border-slate-700/50 relative overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(15, 23, 42, 0.8), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
          }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          ></div>

          <div className="relative z-10 text-center">
            <h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              Ready to Transform Your Business?
            </h3>
            <p 
              className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
              }}
            >
              Join successful businesses that chose professional websites over social media pages. Your customers are waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/254104613770?text=Hi! I want to discuss building a professional website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)',
                  filter: 'drop-shadow(0 4px 20px rgba(34, 197, 94, 0.4))'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="ri-whatsapp-line text-xl"></i>
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://wa.me/254104613770?text=Hi! Can I schedule a free consultation to discuss my website needs?"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)',
                  filter: 'drop-shadow(0 4px 20px rgba(34, 211, 238, 0.4))'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="ri-calendar-line text-xl"></i>
                  Free Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
