
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
      image: '/portfolio/Screenshot 2025-08-27 135112.png',
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
      image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/539509089_1349509686739800_5125981768819189818_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzqOKHB39giYq5uvFuIFQfSBE5ZGkxFRBIETlkaTEVEB22cIMjSFI4dSRDaxocW30uLVC5joR7OSsSRkZ8mhA7&_nc_ohc=UMDkc-MxD2wQ7kNvwHA8owu&_nc_oc=AdlZDdOQrJVojStF9zPhSz2oQLgujhb61Lv4mjYN8Pxf298juc103kitZTplHUmrHVQ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=GplLRqJZcerdjhYbvnc0Rg&oh=00_AfWSXgODekD6tviy75fjZQaeLLS3223NZ_Uq2D28NPfhDA&oe=68B4B453',
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
      image: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/539451348_1349512896739479_1263053779762278102_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMX7-x0jIkPO_Ie95POmaRyxu5e2M5iv7LG7l7YzmK_m6N_GNg9k_iY8E-E4IlJTAbyk-z1OUVt0xGp0ZCCeqF&_nc_ohc=D-VOXt0SDtEQ7kNvwGMgkfd&_nc_oc=Adm9sD_3kiGyJyUEyFMxjzXeCGssim2Sjqa08Tm8XFqUbNELF9P6YGByQuIqwu4lkkk&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=tEWkVwezv8FlvvemvqqI2w&oh=00_AfWTktUOSFKIked7hwNIY-wnKAs-5hhxkSL8rd82zuPnwQ&oe=68B4BBBC',
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
      image: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/538964485_1349515396739229_2796625378025335606_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLOvhkAOJ9q_XlbNYRITWoWGTdVZKy44xYZN1VkrLjjNMAMYg-BK-oRgTtlAj5kUn3oCNyoG3wLqz0Iaf981M0&_nc_ohc=dHet6GT16AsQ7kNvwGCQmoP&_nc_oc=AdlZHo10G_SRxAvwejTcSXPfwOaYajVL8Nfe8U4nWNBpr6iv2qiYhM0Jy2yYTThhG-U&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=uMQlAHRVJt58U9HbmsU6Wg&oh=00_AfW1rvl9xeIKkFzMeFwC_CUyf7f7cfrjkNxBcHtdGmYOmQ&oe=68B4D5E3',
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
