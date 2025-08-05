
'use client';

import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Local Restaurant Chain',
      category: 'Restaurant Website',
      description: 'Increased online orders by 300% with mobile-first design and integrated ordering system.',
      image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
      challenge: 'Client had no online presence and was losing customers to competitors',
      solution: 'Built responsive site with online menu, ordering system, and reservation booking',
      result: '300% increase in online orders within 3 months',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB']
    },
    {
      id: 2,
      title: 'Fitness Studio Network',
      category: 'Service Business',
      description: 'Streamlined class bookings and memberships with custom booking system and member portal.',
      image: 'https://www.mom3ntum.com/assets/images/6.webp',
      challenge: 'Manual booking system was limiting growth and frustrating customers',
      solution: 'Custom booking platform with member portal and automated scheduling',
      result: '150% increase in class bookings and 40% reduction in admin time',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      id: 3,
      title: 'E-commerce Boutique',
      category: 'Online Store',
      description: 'Transformed local boutique into thriving online business with custom e-commerce platform.',
      image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/528745276_1330473711976731_84290242776151643_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVLE1ffVNaslIXHFCk4VzvjKVr1cKf9AmMpWvVwp_0CZUOyLGkmG5pyBH0eAKGyjIJu3Mw80ay2xyIrZFIOjAf&_nc_ohc=7wsSlUSy_voQ7kNvwGBktXa&_nc_oc=AdnUbXGq42C8TjjbzunNTV7j3LKlnRis5lM3vB3LmpORjKkSqjQzdFXbQilVH3Fc4I4&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=Huun1SaOUYSd666zVERwMQ&oh=00_AfUlRTuNMrEJ2z5v4h608Id1h_Xeg-AgRea98cqHUT4vBQ&oe=6897FF17',
      challenge: 'Physical store only, missing out on online sales opportunities',
      solution: 'Full e-commerce platform with inventory management and payment processing',
      result: '200% revenue increase with 60% of sales now coming from online',
      technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            Real Results for{' '}
            <span 
              className="text-cyan-400"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
              }}
            >
              Real Businesses
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            See how professional websites transformed these businesses. Your success story could be next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: '0 10px 40px rgba(15, 23, 42, 0.6), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.2), 0 0 50px rgba(34, 211, 238, 0.1)'
                }}
              ></div>

              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Demo Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
                    }}
                  >
                    <i className="ri-eye-line mr-2"></i>
                    View Demo
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                    style={{
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)'
                    }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                      style={{
                        boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
                      }}
                    ></div>
                    <span className="text-sm font-semibold text-green-400">Live</span>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        boxShadow: '0 0 8px rgba(239, 68, 68, 0.3)'
                      }}
                    >
                      <i className="ri-error-warning-line text-red-400 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-400 text-sm">Challenge:</div>
                      <div className="text-gray-400 text-sm">{project.challenge}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        boxShadow: '0 0 8px rgba(234, 179, 8, 0.3)'
                      }}
                    >
                      <i className="ri-lightbulb-line text-yellow-400 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-sm">Solution:</div>
                      <div className="text-gray-400 text-sm">{project.solution}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        boxShadow: '0 0 8px rgba(34, 197, 94, 0.3)'
                      }}
                    >
                      <i className="ri-trophy-line text-green-400 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-green-400 text-sm">Result:</div>
                      <div 
                        className="text-green-400 text-sm font-semibold"
                        style={{
                          textShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
                        }}
                      >
                        {project.result}
                      </div>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/portfolio/${project.id}`}
                  className="group/btn w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)'
                  }}
                >
                  <span className="relative z-10">View Case Study</span>
                  <i className="ri-arrow-right-line relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/portfolio"
            className="group relative bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer transform hover:-translate-y-1 border border-slate-600/50 hover:border-cyan-400/50"
            style={{
              boxShadow: '0 0 30px rgba(15, 23, 42, 0.6), 0 0 60px rgba(71, 85, 105, 0.2)',
              filter: 'drop-shadow(0 4px 20px rgba(71, 85, 105, 0.4))'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
