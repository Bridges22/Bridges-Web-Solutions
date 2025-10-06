
'use client';

import Link from 'next/link';
import { useState } from 'react';
import WhatsAppButton from '../../../components/WhatsAppButton';

interface PortfolioDetailProps {
  projectId: string;
}

export default function PortfolioDetail({ projectId }: PortfolioDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const projects: { [key: string]: any } = {
    '1': {
      title: 'Local Restaurant Chain',
      category: 'Restaurant Website',
      client: 'Thyme Restaurant',
      timeline: '3 weeks',
      budget: 'Ksh 72,000',
      image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
      challenge: 'Thyme Restaurant was a successful local chain with three locations, but they had no online presence. They were losing customers to competitors who offered online ordering and delivery through apps like Glovo, Java House, Uber Eats etc. The Client wanted to maintain control over their customer relationships and reduce commission fees.',
      solution: 'We built a comprehensive restaurant website featuring an integrated online ordering system, table reservation booking, digital menu with high-quality food photography, customer review system, and mobile-first responsive design. The site included payment processing, order management, and customer data collection.',
      results: [
        '300% increase in online orders within 3 months',
        '40% increase in table reservations',
        '25% increase in average order value through upselling features',
        '500+ new customer email signups for marketing',
        '$15,000 monthly increase in revenue',
        '50% reduction in third-party delivery app dependency'
      ],
      technologies: ['React', 'Next.js', 'Stripe Payment', 'MongoDB', 'Node.js', 'Email Integration'],
      features: ['Online Menu', 'Order System', 'Table Reservations', 'Payment Processing', 'Customer Reviews', 'Admin Dashboard'],
      testimonial: {
        text: "Our online orders tripled within two months of launching our new website. The mobile ordering system is so easy for our customers to use. Best investment we ever made for the restaurant.",
        author: "Maria Rodriguez",
        position: "Owner, Rodriguez Family Restaurant"
      },
      images: [
        'https://static.readdy.ai/image/bd2bce9293e8ee434d9736d52b89b7a4/8b6bb33af11a7fab363249c79cc8f50c.png',
        'https://static.readdy.ai/image/bd2bce9293e8ee434d9736d52b89b7a4/9b8e2a610cb7723862bc70c15dcc7135.png',
        'https://static.readdy.ai/image/bd2bce9293e8ee434d9736d52b89b7a4/5b4f76a009ee465e6e3bbc60e506a189.png'
      ]
    },
    '2': {
      title: 'Fitness Studio Network',
      category: 'Service Business',
      client: 'FitCore Gym Network',
      timeline: '4 weeks',
      budget: 'Ksh 94,700',
      image: 'https://www.mom3ntum.com/assets/images/6.webp',
      challenge: 'FitCore operated five fitness studios but relied entirely on phone bookings for classes. This manual system was overwhelming staff, frustrating customers who couldn\'t book outside business hours, and limiting growth. They needed to streamline operations and improve customer experience.',
      solution: 'We developed a comprehensive fitness management platform with online class booking, member portal with workout tracking, automated payment processing, trainer management system, and detailed analytics dashboard. The platform integrated with their existing POS system and included mobile app functionality.',
      results: [
        '150% increase in class bookings within 2 months',
        '40% reduction in administrative staff time',
        '60% increase in membership retention rates',
        '200% growth in new member signups',
        '85% of bookings now made online',
        'Ksh 250,000 monthly increase in membership revenue'
      ],
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar API', 'Mobile PWA'],
      features: ['Class Booking', 'Member Portal', 'Payment System', 'Trainer Profiles', 'Progress Tracking', 'Mobile App'],
      testimonial: {
        text: "The booking system completely transformed how we manage classes. Members love being able to book online, and we cut our admin time in half. Our membership has grown 150% since launch.",
        author: "James Mitchell",
        position: "Owner, FitCore Gym Network"
      },
      images: [
        'https://images.ctfassets.net/473zoc40547p/6mzTzfmPn4V1GuylQDiofY/9629d9280588608b6506ff1205ac35ee/place-where-welcome.webp?fm=avif&w=1024&fit=fill',
        'https://images.ctfassets.net/473zoc40547p/7rsxO8cq7eek5fz5ONsJCb/d18336823a356e16b0975370b9d2f41c/phone.webp?fm=avif&w=1024&fit=fill',
        'https://www.mom3ntum.com/assets/images/4.webp'
      ]
    },
    '3': {
      title: 'E-commerce Boutique',
      category: 'E-commerce Platform',
      client: 'Bloom Boutique',
      timeline: '5 weeks',
      budget: 'Ksh 85,000',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      challenge: 'Bloom Boutique was a successful local fashion retailer with a loyal customer base, but they were limited to foot traffic and local customers. The COVID-19 pandemic highlighted their vulnerability to physical store closures. They needed to expand their reach beyond their physical location while maintaining their personalized customer service and unique brand identity.',
      solution: 'We created a sophisticated e-commerce platform that captured Bloom Boutique\'s premium brand aesthetic. The solution included a custom Shopify store with advanced product filtering, size guides, virtual styling consultations, customer wishlist functionality, loyalty program integration, and seamless payment processing. We also implemented inventory management that synced with their physical store and created automated email marketing campaigns.',
      results: [
        '200% revenue increase within 6 months',
        '60% of total sales now come from online orders',
        '150% increase in customer base reach',
        '40% higher average order value online vs in-store',
        '300+ new customers acquired monthly through digital channels',
        '85% customer retention rate through loyalty program',
        'Expanded market reach to 3 additional cities'
      ],
      technologies: ['Shopify', 'React', 'Payment Gateway', 'Analytics', 'Email Marketing', 'Inventory Management'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Processing', 'Order Management', 'Customer Accounts', 'Wishlist', 'Reviews System', 'Loyalty Program', 'Email Marketing', 'Analytics Dashboard'],
      testimonial: {
        text: "The e-commerce platform completely transformed our business. We went from being a small local boutique to serving customers across the country. Online sales now make up 60% of our revenue, and we've been able to hire 3 additional staff members. The platform is so easy to manage, and our customers love the shopping experience.",
        author: "Sarah Johnson",
        position: "Owner, Bloom Boutique"
      },
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      ],
      processSteps: [
        {
          title: 'Brand & Market Analysis',
          description: 'Conducted comprehensive analysis of Bloom Boutique\'s brand identity, target audience demographics, and competitive landscape in the fashion e-commerce space. Identified key differentiators and opportunities for online growth.'
        },
        {
          title: 'E-commerce Strategy & Planning',
          description: 'Developed detailed e-commerce strategy including product categorization, pricing strategy, shipping logistics, and customer journey mapping. Created technical specifications and project timeline.'
        },
        {
          title: 'Custom Design & Development',
          description: 'Designed and developed a premium e-commerce experience that reflected Bloom Boutique\'s sophisticated brand. Implemented advanced features like virtual styling, size recommendations, and personalized product suggestions.'
        },
        {
          title: 'Integration & Testing',
          description: 'Integrated payment gateways, inventory management systems, and marketing tools. Conducted extensive testing across devices and browsers, including load testing for high-traffic scenarios.'
        },
        {
          title: 'Launch & Optimization',
          description: 'Executed smooth launch with staff training, customer migration, and ongoing performance monitoring. Implemented continuous optimization based on user behavior and sales data.'
        }
      ]
    },
    '4': {
      title: 'Legal Services Firm',
      category: 'Professional Services',
      client: 'Thompson Legal Services',
      timeline: '4 weeks',
      budget: 'Ksh 95,000',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      challenge: 'Thompson Legal Services was an established law firm with 15 years of experience, but their outdated website made them appear unprofessional compared to competitors. They were losing potential high-value clients who judged their credibility based on their online presence. The firm needed to position themselves as industry leaders and attract corporate clients and high-net-worth individuals.',
      solution: 'We created a premium, sophisticated website that reflected the firm\'s expertise and professionalism. The solution included detailed attorney profiles with credentials and specializations, comprehensive case study showcases, client testimonial sections, legal resource library, consultation booking system, and advanced SEO optimization. We also implemented a content management system for easy updates and integrated analytics to track client engagement.',
      results: [
        '400% increase in client inquiries within 3 months',
        '150% increase in consultation bookings',
        '300% increase in average case value',
        'Top 3 Google ranking for target legal keywords',
        '250% increase in website traffic from target demographics',
        '85% of new clients now come through website referrals',
        'Expanded client base to include Fortune 500 companies'
      ],
      technologies: ['Next.js', 'TypeScript', 'CMS', 'Analytics', 'SEO Tools', 'Booking System'],
      features: ['Attorney Profiles', 'Case Studies', 'Client Testimonials', 'Legal Resources', 'Consultation Booking', 'Practice Area Pages', 'News & Updates', 'Contact Forms', 'Document Library', 'SEO Optimization'],
      testimonial: {
        text: "The new website completely transformed our practice. We went from struggling to attract quality clients to having Fortune 500 companies reach out to us directly. The professional design and comprehensive case studies showcase our expertise perfectly. Our consultation bookings increased by 150% and the average case value tripled. This investment paid for itself within the first month.",
        author: "Michael Thompson",
        position: "Senior Partner, Thompson Legal Services"
      },
      images: [
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      ],
      processSteps: [
        {
          title: 'Legal Industry Analysis & Positioning',
          description: 'Conducted comprehensive analysis of the legal services market, competitor positioning, and target client demographics. Identified key differentiators and developed a premium brand positioning strategy to attract high-value clients.'
        },
        {
          title: 'Content Strategy & Legal Expertise Showcase',
          description: 'Developed content strategy highlighting the firm\'s expertise, successful case outcomes, and attorney credentials. Created compelling case studies and testimonials that demonstrate value to potential corporate and high-net-worth clients.'
        },
        {
          title: 'Premium Design & User Experience',
          description: 'Designed a sophisticated, professional website that conveys trust and expertise. Implemented intuitive navigation, clear calls-to-action, and optimized user journeys for different client types (corporate, individual, referral sources).'
        },
        {
          title: 'Technical Implementation & SEO',
          description: 'Built the website using Next.js and TypeScript for optimal performance and SEO. Implemented advanced SEO strategies targeting high-value legal keywords and integrated analytics to track client engagement and conversion paths.'
        },
        {
          title: 'Launch & Performance Optimization',
          description: 'Executed strategic launch with ongoing performance monitoring and optimization. Implemented A/B testing for key conversion elements and provided training for content management and client relationship tracking.'
        }
      ]
    },
    '5': {
      title: 'Medical Practice',
      category: 'Healthcare',
      client: 'Park Dental Practice',
      timeline: '6 weeks',
      budget: 'Ksh 120,000',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      challenge: 'Park Dental Practice was a well-established dental clinic with excellent patient care, but they relied entirely on phone bookings which created bottlenecks during busy periods. Patients were frustrated with busy phone lines and inability to book appointments outside business hours. The practice was also struggling with high no-show rates and had no online presence to attract new patients in an increasingly digital healthcare landscape.',
      solution: 'We developed a comprehensive, HIPAA-compliant healthcare website with an integrated online booking system. The solution included patient portal with appointment history, automated appointment reminders via SMS and email, educational dental content library, insurance information and verification, online patient forms, staff and services showcase, and patient review system. We ensured full HIPAA compliance for all patient data handling and implemented secure communication channels.',
      results: [
        '200% increase in new patient bookings within 4 months',
        '50% reduction in no-shows with automated reminder system',
        '300% increase in positive online reviews',
        '75% of appointments now booked online',
        '40% reduction in front desk administrative time',
        '150% increase in website traffic from local searches',
        'Expanded patient base to include 3 neighboring communities'
      ],
      technologies: ['React', 'Node.js', 'HIPAA Compliance', 'Booking System', 'SMS Integration', 'Email Automation'],
      features: ['Online Booking', 'Patient Portal', 'Automated Reminders', 'Educational Content', 'Insurance Information', 'Online Forms', 'Staff Profiles', 'Review System', 'HIPAA Compliance', 'Mobile Optimization'],
      testimonial: {
        text: "The new website and booking system revolutionized our practice operations. We went from constantly busy phone lines to seamless online scheduling. Our no-show rate dropped dramatically with the automated reminders, and we're attracting patients from neighboring towns who found us online. The patient portal has improved communication significantly, and our staff can focus more on patient care rather than scheduling. This was the best investment we've made for our practice.",
        author: "Dr. Jennifer Park",
        position: "Owner & Lead Dentist, Park Dental Practice"
      },
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      ],
      processSteps: [
        {
          title: 'Healthcare Compliance & Requirements Analysis',
          description: 'Conducted thorough analysis of HIPAA compliance requirements, healthcare industry regulations, and patient privacy needs. Assessed current practice workflows and identified opportunities for digital transformation while maintaining regulatory compliance.'
        },
        {
          title: 'Patient Experience Design & Journey Mapping',
          description: 'Designed patient-centric user experience focusing on ease of booking, clear communication, and educational content. Created patient journey maps from initial website visit through post-appointment follow-up, ensuring seamless experience across all touchpoints.'
        },
        {
          title: 'HIPAA-Compliant Development & Integration',
          description: 'Built secure, HIPAA-compliant website with encrypted patient data handling, secure booking system, and integrated patient portal. Implemented automated reminder systems and secure communication channels while ensuring all patient information remains protected.'
        },
        {
          title: 'Staff Training & Workflow Integration',
          description: 'Provided comprehensive staff training on the new system, integrated booking platform with existing practice management software, and established new workflows for online appointment management and patient communication.'
        },
        {
          title: 'Launch & Performance Monitoring',
          description: 'Executed careful launch with patient migration support, ongoing system monitoring for compliance and performance, and continuous optimization based on patient feedback and booking patterns. Implemented analytics to track patient acquisition and retention.'
        }
      ]
    },
    '6': {
      title: 'Construction Company',
      category: 'Construction',
      client: 'Williams Construction',
      timeline: '3 weeks',
      budget: 'Ksh 75,000',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      challenge: 'Williams Construction was a skilled construction company with 10 years of experience and excellent craftsmanship, but they relied entirely on word-of-mouth referrals and had no way to showcase their work quality to potential clients. Without a professional online presence, they were losing projects to competitors who could demonstrate their expertise through project galleries and testimonials. The company needed to establish credibility and attract higher-value commercial and residential projects.',
      solution: 'We created a comprehensive project showcase website that highlighted Williams Construction\'s expertise and quality craftsmanship. The solution included an extensive before/after project gallery, detailed case studies of major projects, client testimonials and reviews, service pages for different construction types, team profiles showcasing expertise, consultation booking system, and advanced SEO optimization for local construction searches. We also integrated a project management portal for client communication.',
      results: [
        '300% increase in consultation requests within 2 months',
        '200% increase in project inquiries from website',
        '150% increase in average project value',
        '400% improvement in Google search visibility',
        '250% increase in qualified leads from local searches',
        'Secured 3 major commercial contracts through website',
        'Expanded service area to cover 5 additional neighborhoods'
      ],
      technologies: ['JavaScript', 'Next.js', 'MongoDB', 'C#', 'SEO', 'Image Optimization'],
      features: ['Project Gallery', 'Before/After Showcases', 'Service Pages', 'Client Testimonials', 'Team Profiles', 'Consultation Booking', 'Project Case Studies', 'SEO Optimization', 'Mobile Gallery', 'Contact Forms'],
      testimonial: {
        text: "This website completely transformed our business. We went from relying on word-of-mouth to having clients find us online and see exactly what we're capable of. The project gallery showcases our work beautifully, and we're now getting inquiries for much larger, higher-value projects. We've secured three major commercial contracts directly through the website. The consultation requests tripled, and the quality of leads is much better. This investment paid for itself with just one major project.",
        author: "Marcus Williams",
        position: "Owner & General Contractor, Williams Construction"
      },
      images: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      ],
      processSteps: [
        {
          title: 'Construction Portfolio Analysis & Strategy',
          description: 'Analyzed Williams Construction\'s past projects, identified their strongest work examples, and developed a content strategy to showcase their expertise across residential, commercial, and renovation projects. Created a visual hierarchy to highlight their most impressive transformations.'
        },
        {
          title: 'Visual Storytelling & Project Documentation',
          description: 'Organized and optimized project photos, created compelling before/after galleries, and developed detailed case studies that tell the story of each project. Implemented professional photography guidelines for future project documentation.'
        },
        {
          title: 'Technical Development & SEO Implementation',
          description: 'Built a fast, mobile-optimized website using Next.js and JavaScript, integrated MongoDB for project management, and implemented advanced SEO strategies targeting local construction keywords. Optimized image loading for fast gallery performance.'
        },
        {
          title: 'Lead Generation & Conversion Optimization',
          description: 'Implemented consultation booking system, optimized contact forms for different project types, and created clear calls-to-action throughout the site. Set up analytics to track lead sources and conversion rates.'
        },
        {
          title: 'Launch & Performance Tracking',
          description: 'Executed strategic launch with local SEO optimization, ongoing performance monitoring, and continuous optimization based on lead quality and conversion data. Provided training for project documentation and website management.'
        }
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">We're working on it. Stay tuned!</h1>
          <Link href="/portfolio" className="text-blue-600 hover:text-blue-700 cursor-pointer">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'ri-eye-line' },
    { id: 'process', name: 'Process', icon: 'ri-settings-line' },
    { id: 'results', name: 'Results', icon: 'ri-bar-chart-line' },
    { id: 'gallery', name: 'Gallery', icon: 'ri-image-line' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <Link href="/portfolio" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-blue-300 text-sm">{project.timeline}</span>
              </div>

              <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-300">Client</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Timeline</div>
                  <div className="font-semibold">{project.timeline}</div>
                </div>
              </div>

              <a
                href="https://wa.me/254104613770?text=Hi! I saw your case study and want to discuss a similar project for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line"></i>
                Discuss Similar Project
              </a>
            </div>

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <i className={tab.icon}></i>
                {tab.name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {project.solution}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <i className="ri-check-line text-green-600 mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, index: number) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Development Process</h2>

                  <div className="space-y-8">
                    {project.processSteps ? (
                      project.processSteps.map((step: any, index: number) => (
                        <div key={index} className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">1</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Discovery & Planning</h3>
                            <p className="text-gray-600">Conducted thorough analysis of business needs, target audience, and competitors. Created detailed project roadmap and wireframes.</p>
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">2</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Design & Prototyping</h3>
                            <p className="text-gray-600">Created high-fidelity mockups focusing on user experience, brand consistency, and conversion optimization.</p>
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">3</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Development & Integration</h3>
                            <p className="text-gray-600">Built responsive website with custom functionality, payment processing, and third-party integrations.</p>
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">4</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Testing & Launch</h3>
                            <p className="text-gray-600">Comprehensive testing across devices and browsers, staff training, and smooth launch with ongoing support.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Measurable Results</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {project.results.map((result: string, index: number) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-trophy-line text-green-600 mr-3 text-xl"></i>
                          <span className="text-green-800 font-semibold">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
                  <blockquote className="text-lg italic mb-6">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-bold">{project.testimonial.author}</div>
                    <div className="text-gray-300">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>

                  <div className="grid grid-cols-1 gap-8">
                    {project.images?.map((image: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={image}
                          alt={`${project.title} - Screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a website that delivers outstanding results for your business too.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254104613770?text=Hi! I saw your case study and want to discuss building a similar website for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Start Your Project
            </a>

            <Link
              href="/portfolio"
              className="bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
