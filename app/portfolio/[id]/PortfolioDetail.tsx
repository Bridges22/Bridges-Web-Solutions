
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
      client: 'Rodriguez Family Restaurant',
      timeline: '3 weeks',
      budget: 'Ksh 72,000',
      image: 'https://about-thyme.com/wp-content/uploads/2021/04/home-slide-1.jpg',
      challenge: 'Rodriguez Family Restaurant was a successful local chain with three locations, but they had no online presence. They were losing customers to competitors who offered online ordering and delivery through apps like DoorDash and Uber Eats. The family wanted to maintain control over their customer relationships and reduce commission fees.',
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
