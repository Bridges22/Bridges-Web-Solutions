'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FeaturedProjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Local Restaurant Chain',
      category: 'Restaurant',
      description: 'Increased online orders by 300% with mobile-first design and integrated ordering system.',
      url: 'https://about-thyme.com/',
      image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
      challenge: 'Client had no online presence and was losing customers to competitors',
      solution: 'Built responsive site with online menu, ordering system, and reservation booking',
      result: '300% increase in online orders within 3 months',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      featured: true,
      livePreview: true
    },
    {
      id: 2,
      title: 'Fitness Studio Network',
      category: 'Fitness',
      description: 'Streamlined class bookings and memberships with custom booking system and member portal.',
      url: 'https://www.mom3ntum.com/',
      image: 'https://www.mom3ntum.com/assets/images/6.webp',
      challenge: 'Manual booking system was limiting growth and frustrating customers',
      solution: 'Custom booking platform with member portal and automated scheduling',
      result: '150% increase in class bookings and 40% reduction in admin time',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      featured: false,
      livePreview: true
    },
    {
      id: 3,
      title: 'E-commerce Boutique',
      category: 'E-commerce',
      description: 'Transformed local boutique into thriving online business with custom e-commerce platform.',
      url: 'https://boutique.co.ke/',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      challenge: 'Physical store only, missing out on online sales opportunities',
      solution: 'Full e-commerce platform with inventory management and payment processing',
      result: '200% revenue increase with 60% of sales now coming from online',
      technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics'],
      featured: true,
      livePreview: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            Featured{' '}
            <span 
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
              }}
            >
              Projects
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            See how we've transformed businesses with professional websites. Click "View Live Demo" to explore the actual websites we built.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{
                boxShadow: '0 10px 40px rgba(15, 23, 42, 0.6), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                animation: mounted ? `fadeInUp 0.6s ease-out ${index * 200}ms both` : 'none'
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
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <i className="ri-star-fill"></i>
                    Featured
                  </div>
                )}

                {/* Live Preview Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Live
                </div>
                
                {/* Enhanced Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Interactive Demo Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 py-2 rounded-full font-semibold text-sm transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2"
                      style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
                      }}
                    >
                      <i className="ri-eye-line"></i>
                      View Live Demo
                    </a>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-4 py-2 rounded-full font-semibold text-sm transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2"
                      style={{
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                      }}
                    >
                      <i className="ri-file-text-line"></i>
                      Case Study
                    </Link>
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
                </div>

                <h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Challenge, Solution, Result */}
                <div className="space-y-4 mb-6">
                  {/* Challenge */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-error-warning-line text-white text-xs"></i>
                      </div>
                      <div>
                        <div className="text-red-300 font-semibold text-sm mb-1">Challenge:</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{project.challenge}</div>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-lightbulb-line text-white text-xs"></i>
                      </div>
                      <div>
                        <div className="text-blue-300 font-semibold text-sm mb-1">Solution:</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{project.solution}</div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-trophy-line text-white text-xs"></i>
                      </div>
                      <div>
                        <div className="text-green-300 font-semibold text-sm mb-1">Result:</div>
                        <div className="text-gray-400 text-sm leading-relaxed font-medium">{project.result}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.6)'
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

      <style jsx>{`
        @keyframes fadeInUp {
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
