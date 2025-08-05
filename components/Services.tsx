
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Websites',
      description: 'Responsive designs that look perfect on every device. Your customers browse on mobile - your site should too.'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Fast Loading',
      description: 'Lightning-fast websites that load in under 3 seconds. Speed equals sales - every second counts.'
    },
    {
      icon: 'ri-global-line',
      title: 'Google Visibility',
      description: 'SEO-optimized to rank higher in search results. Be found when customers are looking for you.'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce Ready',
      description: 'Online stores that convert browsers into buyers. Sell your products 24/7 with secure checkout.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Ongoing maintenance and updates included. Your website stays fresh, secure, and running smoothly.'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Analytics & Insights',
      description: 'Track your success with detailed analytics. Know your customers and grow your business smarter.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            Services That Drive 
            <span 
              className="text-cyan-400 ml-3"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
              }}
            >
              Results
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Everything your business needs to succeed online. Professional, reliable, and designed to grow with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.2), 0 0 40px rgba(34, 211, 238, 0.1)'
                }}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {service.title}
                </h3>

                <p 
                  className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/254104613770?text=Hi! I'd like to know more about your web development services."
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
              Get Started Today
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
