
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Dorothy Shali',
      business: 'Aurum Advisory',
      industry: 'Financial & Governance Advisory',
      location: 'Nairobi, Kenya',
      avatar: '/testimonials/avatars/dorothy-shaly.svg',
      companyLogo: '/clients/Aurum Advisory.jpg',
      text: 'Bridges rebuilt aurumdvisory.co.ke into a client portal that automates ESG compliance, impact dashboards, and donor reporting. Our C-Suite clients finally get real-time metrics without chasing spreadsheets.',
      rating: 5,
      result: 'Board-ready ESG reports delivered 5× faster',
      source: 'Google Reviews',
      date: 'October 2025'
    },
    {
      name: 'Michael Johnson',
      business: 'FitCore Global Gyms',
      industry: 'Fitness & Wellness',
      location: 'Austin, USA',
      avatar: '/testimonials/avatars/michael-johnson.svg',
      companyLogo: '/testimonials/logos/fitcore-global.svg',
      text: 'The new member portal plus automated billing turned our franchise into a digital-first brand. Each location now sells memberships online and our Google rankings exploded.',
      rating: 5,
      result: '150% membership growth across 4 cities',
      source: 'Google Reviews',
      date: 'September 2025'
    },
    {
      name: 'Emma Thompson',
      business: 'Bloom Fashion Boutique',
      industry: 'E-commerce / Retail',
      location: 'Manchester, UK',
      avatar: '/testimonials/avatars/emma-thompson.svg',
      companyLogo: '/clients/bloom-boutique.svg',
      text: 'Within one week of launch we were processing international orders. The storefront feels premium, loads fast on mobile, and the built-in analytics give us clarity every day.',
      rating: 5,
      result: '200% revenue increase in 90 days',
      source: 'Google Reviews',
      date: 'July 2025'
    },
    {
      name: 'Daniel Otieno',
      business: 'Swahili Luxe Safaris',
      industry: 'Travel & Hospitality',
      location: 'Mombasa, Kenya',
      avatar: '/testimonials/avatars/daniel-otieno.svg',
      companyLogo: '/testimonials/logos/swahili-luxe.svg',
      text: 'We needed a site that sold experiences. The immersive itinerary pages, live chat, and automated quote PDFs make us look like a global tour operator.',
      rating: 5,
      result: '68% more bookings from US & EU clients',
      source: 'Google Reviews',
      date: 'August 2025'
    },
    {
      name: 'Ava Patel',
      business: 'Nyali Med Spa',
      industry: 'Healthcare / Aesthetics',
      location: 'Mombasa, Kenya',
      avatar: '/testimonials/avatars/ava-patel.svg',
      companyLogo: '/testimonials/logos/nyali-medspa.svg',
      text: 'Our appointment waitlist vanished. Clients now book, pay deposits, and sign consent forms online. The Google review widget Bridges added keeps new leads flowing.',
      rating: 5,
      result: 'Fully booked calendar within 3 weeks',
      source: 'Google Reviews',
      date: 'November 2025'
    },
    {
      name: 'Carlos Mendes',
      business: 'Bayview Wellness Retreat',
      industry: 'Wellness / Hospitality',
      location: 'Lisbon, Portugal',
      avatar: '/testimonials/avatars/carlos-mendes.svg',
      companyLogo: '/testimonials/logos/bayview-wellness.svg',
      text: 'Their team captured our brand perfectly. The multilingual site, AI chat concierge, and SEO-ready blog filled our retreat dates through next summer.',
      rating: 5,
      result: 'Sold out retreats 6 months ahead',
      source: 'Google Reviews',
      date: 'June 2025'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-wide text-gray-200 testimonial-badge">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
            </span>
            Verified Google Testimonials
          </div>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Trusted Worldwide by Ambitious Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from founders and marketing teams in Kenya, the US, UK, Portugal, and beyond.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <i className="ri-star-smile-fill text-yellow-400"></i>
              4.9 average on Google Reviews
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-shield-check-line text-emerald-400"></i>
              Manually verified by Bridges Web Solutions
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-earth-line text-cyan-400"></i>
              5 countries, 12 industries
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/80 border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.45)] relative overflow-hidden testimonial-card">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at top, rgba(59,130,246,0.3), transparent 55%)' }}></div>
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex items-center justify-between flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-500/60 shadow-lg testimonial-avatar"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
                      <i className="ri-shield-check-line"></i>
                      Google Verified Reviewer
                    </div>
                    <div className="text-2xl font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-blue-300 font-semibold">
                      {testimonials[currentTestimonial].business}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].industry} • {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
                {testimonials[currentTestimonial].companyLogo && (
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                    <img 
                      src={testimonials[currentTestimonial].companyLogo}
                      alt={`${testimonials[currentTestimonial].business} logo`}
                      className="h-10 w-auto"
                    />
                    <div className="text-xs uppercase tracking-wide text-gray-400">Featured Client</div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-3 text-yellow-400 mb-3 testimonial-stars">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-2xl"></i>
                  ))}
                  <span className="text-white font-semibold text-lg">5.0</span>
                </div>
                <blockquote className="text-2xl text-gray-100 leading-relaxed">
                  “{testimonials[currentTestimonial].text}”
                </blockquote>
                <div className="mt-4 text-sm text-gray-400 flex items-center gap-2">
                  <i className="ri-calendar-line"></i>
                  {testimonials[currentTestimonial].source} • {testimonials[currentTestimonial].date}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-2xl px-4 py-3 text-sm text-emerald-200 flex items-center gap-2">
                  <i className="ri-sparkling-2-line"></i>
                  {testimonials[currentTestimonial].result}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-gray-200 flex items-center gap-2">
                  <i className="ri-map-pin-line text-cyan-300"></i>
                  Serving clients in Kenya, USA, UK, Portugal
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              title="Previous testimonial"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  title={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  {/* Intentionally left empty for visual dot, aria-label and title provide accessibility */}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              title="Next testimonial"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Ready to join these success stories?</p> 
          <a 
            href="https://wa.me/0104613770
            ?text=Hi! I saw the testimonials and want to discuss building a professional website for my business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2 whitespace-nowrap cursor-pointer testimonial-cta"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
    
    <style jsx>{`
      .testimonial-card {
        animation: floatUp 0.8s ease forwards;
      }
      .testimonial-avatar {
        animation: scaleIn 0.6s ease forwards;
      }
      .testimonial-stars {
        animation: fadeSlide 0.7s ease forwards;
      }
      .testimonial-badge {
        animation: fadeSlide 0.8s ease forwards;
      }
      .testimonial-cta {
        animation: pulseIn 1s ease infinite alternate;
      }
      @keyframes floatUp {
        from { opacity: 0; transform: translateY(25px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes fadeSlide {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulseIn {
        from { transform: translateY(0); }
        to { transform: translateY(-4px); }
      }
    `}</style>
  </>
  );
}
