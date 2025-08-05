
'use client';

import Link from 'next/link';
import { useState } from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Local Restaurant Chain',
      category: 'Restaurant Website',
      description: 'Increased online orders by 300% with mobile-first design and integrated ordering system.',
      image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      timeline: '3 weeks',
      client: 'Rodriguez Family Restaurant',
      challenge: 'Client had no online presence and was losing customers to competitors with delivery apps',
      solution: 'Built responsive website with online menu, ordering system, reservation booking, and integrated payment processing',
      results: [
        '300% increase in online orders within 3 months',
        '40% increase in table reservations',
        '25% increase in average order value',
        '500+ new customer email signups'
      ],
      features: ['Online Menu', 'Order System', 'Reservations', 'Payment Processing', 'Customer Reviews']
    },
    {
      id: 2,
      title: 'Fitness Studio Network',
      category: 'Service Business',
      description: 'Streamlined class bookings and memberships with custom booking system and member portal.',
      image: 'https://www.mom3ntum.com/assets/images/6.webp',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      timeline: '4 weeks',
      client: 'FitCore Gym Network',
      challenge: 'Manual booking system was limiting growth and frustrating customers with phone-only reservations',
      solution: 'Custom booking platform with member portal, automated scheduling, payment processing, and trainer management',
      results: [
        '150% increase in class bookings',
        '40% reduction in admin time',
        '60% increase in membership retention',
        '200% growth in new member signups'
      ],
      features: ['Class Booking', 'Member Portal', 'Payment System', 'Trainer Profiles', 'Progress Tracking']
    },
    {
      id: 3,
      title: 'E-commerce Boutique',
      category: 'Online Store',
      description: 'Transformed local boutique into thriving online business with custom e-commerce platform.',
            image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/528745276_1330473711976731_84290242776151643_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVLE1ffVNaslIXHFCk4VzvjKVr1cKf9AmMpWvVwp_0CZUOyLGkmG5pyBH0eAKGyjIJu3Mw80ay2xyIrZFIOjAf&_nc_ohc=7wsSlUSy_voQ7kNvwGBktXa&_nc_oc=AdnUbXGq42C8TjjbzunNTV7j3LKlnRis5lM3vB3LmpORjKkSqjQzdFXbQilVH3Fc4I4&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=Huun1SaOUYSd666zVERwMQ&oh=00_AfUlRTuNMrEJ2z5v4h608Id1h_Xeg-AgRea98cqHUT4vBQ&oe=6897FF17',
      technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics'],
      timeline: '5 weeks',
      client: 'Bloom Boutique',
      challenge: 'Physical store only, missing out on online sales opportunities and limited by local foot traffic',
      solution: 'Full e-commerce platform with inventory management, payment processing, customer accounts, and marketing tools',
      results: [
        '200% revenue increase within 6 months',
        '60% of sales now come from online',
        '300+ new customers from outside local area',
        '150% increase in average customer lifetime value'
      ],
      features: ['Product Catalog', 'Shopping Cart', 'Secure Checkout', 'Customer Accounts', 'Inventory Management']
    },
    {
      id: 4,
      title: 'Legal Services Firm',
      category: 'Professional Services',
      description: 'Premium website that positions law firm as industry leader and attracts high-value clients.',
      image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/528724224_1330482551975847_5251724217394480398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFpjcK-fKt_CfilA6aqjpq01CAhtx2PocTUICG3HY-hxDk9ZriIkkDzhHmCCsXNol331Fd49y0-E6TjEZaqN3Y_&_nc_ohc=cVLEpnlt5f8Q7kNvwEHKZub&_nc_oc=Adl4L8-VJ3DJV7yw6asVlO2ZSnI-3IN1GbuG7QarVaDVAjS8Dz-vyFeM26-WHo-5oLg&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=VsZBP9-C0v0_Fv3m_vnZFQ&oh=00_AfX6N3xCUpOXskaK8A7bE4dQxSItWhUGsSnBjWRccpBvhQ&oe=689815AD',
      technologies: ['Next.js', 'TypeScript', 'CMS', 'Analytics'],
      timeline: '4 weeks',
      client: 'Thompson Legal Services',
      challenge: 'Outdated website made firm appear unprofessional compared to competitors, losing potential high-value clients',
      solution: 'Premium website design with case studies, attorney profiles, client testimonials, and consultation booking system',
      results: [
        '400% increase in client inquiries',
        '150% increase in consultation bookings',
        '300% increase in average case value',
        'Top 3 Google ranking for target keywords'
      ],
      features: ['Case Studies', 'Attorney Profiles', 'Consultation Booking', 'Client Testimonials', 'Legal Resources']
    },
    {
      id: 5,
      title: 'Medical Practice',
      category: 'Healthcare',
      description: 'Patient-friendly website with online booking that doubled new patient acquisitions.',
      image: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/528366567_1330492555308180_4406861776730435728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFqzcx81qIubIZvTd8Cyy42-Vzd2IW6in_5XN3YhbqKfyCl1p0B7vyALRJr6a9nOu4uu7LxFoe20f32U7NO_2bR&_nc_ohc=4PvolQMOxK8Q7kNvwG3Hs22&_nc_oc=AdnCSKIv0UkRkBlLBowBmy9VW_Q2O8wzwT1P2vgNWPbTQPNr9V6vt5qOduaN8uekseU&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=XngMn0wqNFyqwzItTRq3AA&oh=00_AfXXJwHqdDxVoI1I4WJjDFPXaqGrX92G_ufRcPzD9j_B6g&oe=68981DBB',
      technologies: ['React', 'Node.js', 'HIPAA Compliance', 'Booking System'],
      timeline: '6 weeks',
      client: 'Park Dental Practice',
      challenge: 'Patients struggled with phone-only booking, no online presence made practice appear outdated',
      solution: 'HIPAA-compliant website with online booking, patient portal, educational content, and review system',
      results: [
        '200% more new patient bookings',
        '50% reduction in no-shows with automated reminders',
        '300% increase in online reviews',
        '75% of appointments now booked online'
      ],
      features: ['Online Booking', 'Patient Portal', 'Educational Content', 'Review System', 'Insurance Information']
    },
    {
      id: 6,
      title: 'Construction Company',
      category: 'Construction',
      description: 'Project showcase website that demonstrates quality and expertise, tripling consultation requests.',
      image: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/528922561_1330497678641001_7229575409264822508_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGso_f9p03qMUr1TqkLC2Jlu8uc5eW3oTy7y5zl5behPDFGpfQy3nKs7Susv3U6ZAcz47x7l5Ml_V6GJEW5qZvB&_nc_ohc=0RZ1snOaMkEQ7kNvwH4GfYp&_nc_oc=AdnBYKE81Ov8jhTg3T0iaNgPnJnvUxGbSwdx7qKIovYaB8OZqqs57BuRApijA10dIgo&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=KNfxHDV0_eTiSOrT6x51Eg&oh=00_AfWfPiJhvbt47yFES8pgmRyPZWfRhq61Qwhichh5T4LReA&oe=68980007',
      technologies: ['Javascript', 'Next.js', 'MongoDB','C#', 'SEO'],
      timeline: '3 weeks',
      client: 'Williams Construction',
      challenge: 'Potential clients couldn\'t see quality of work, relied only on word-of-mouth referrals',
      solution: 'Project showcase website with before/after galleries, client testimonials, service pages, and consultation booking',
      results: [
        '300% more consultation requests',
        '200% increase in project inquiries',
        '150% increase in average project value',
        '400% improvement in Google visibility'
      ],
      features: ['Project Gallery', 'Before/After Photos', 'Service Pages', 'Client Testimonials', 'Consultation Booking']
    }
  ];

  const categories = ['All', 'Restaurant Website', 'Service Business', 'Online Store', 'Professional Services', 'Healthcare', 'Construction'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 cursor-pointer">
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Work Speaks for Itself
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Real projects, real results. See how we\'ve helped businesses like yours succeed online.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="flex flex-col sm:flex-row gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-300">Websites Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">2.5x</div>
                  <div className="text-sm text-gray-300">Average Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm text-gray-300">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="text-sm text-gray-500">{project.timeline}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                      <p className="text-sm text-gray-600">{project.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-green-600 flex items-center">
                          <i className="ri-check-line mr-2"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    View Full Case Study
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a website that delivers results like these for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254104613770?text=Hi! I saw your portfolio and want to discuss building a professional website for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Start Your Project
            </a>
            
            <Link 
              href="/contact"
              className="bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
