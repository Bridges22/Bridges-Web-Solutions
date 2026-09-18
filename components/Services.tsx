
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Software Development',
      description: 'Purpose-built applications and portals that simplify workflows and support growth.',
      link: '/services#software-development'
    },
    {
      icon: 'ri-dashboard-3-line',
      title: 'Business Systems',
      description: 'Reliable systems for operations, reporting, payments, bookings and client management.',
      link: '/services#business-systems'
    },
    {
      icon: 'ri-global-line',
      title: 'Web Development',
      description: 'High-performing websites and e-commerce platforms that represent your organisation well.',
      link: '/services#web-development'
    },
    {
      icon: 'ri-camera-lens-line',
      title: 'CCTV & Security',
      description: 'Professional surveillance, access control and smart monitoring solutions.',
      link: '/services#security'
    },
    {
      icon: 'ri-share-line',
      title: 'Digital Marketing',
      description: 'Clear, data-informed digital campaigns that build awareness and generate qualified leads.',
      link: '/social-media-management',
      isNew: true
    },
    {
      icon: 'ri-router-line',
      title: 'IT & Networking',
      description: 'Stable, secure network infrastructure designed for dependable day-to-day operations.',
      link: '/services#networking',
      isNew: true
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Technology Consultancy',
      description: 'Practical guidance to help you prioritise technology investments with confidence.',
      link: '/services#consultancy'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Support & Maintenance',
      description: 'Ongoing support, optimisation and upgrades to keep your technology dependable.',
      link: '/services#support'
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
            Technology Services for
            <span 
              className="text-cyan-400 ml-3"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
              }}
            >
              Real Operations
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Secure, scalable technology services for businesses, schools, organisations and corporate teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              id={service.link.includes('#') ? service.link.split('#')[1] : undefined}
              href={service.link}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2 block"
              style={{
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}
            >
              {/* NEW Badge */}
              {service.isNew && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  NEW
                </div>
              )}
              
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
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/254104613770?text=Hello%20KWITZEL%20DIGITAL%20VENTURES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20technology%20services."
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
              Talk to an Expert
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
