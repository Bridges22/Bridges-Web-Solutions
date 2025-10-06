
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      business: 'Mitchell Family Restaurant',
      location: 'Nairobi, Kenya',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      text: 'Our online orders tripled within two months of launching our new website. The mobile ordering system is so easy for our customers to use. Best investment we ever made for the restaurant.',
      rating: 5,
      result: '300% increase in online orders'
    },
    {
      name: 'Michael Johnson',
      business: 'FitCore Gym Nairobi',
      location: 'Westlands, Nairobi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      text: 'The booking system completely transformed how we manage classes. Members love being able to book online, and we cut our admin time in half. Our membership has grown 150% since launch.',
      rating: 5,
      result: '150% membership growth'
    },
    {
      name: 'Emma Thompson',
      business: 'Bloom Fashion Boutique',
      location: 'Karen, Nairobi',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      text: 'Going from a physical store to online sales seemed impossible until I worked with Bridges. Now 60% of our revenue comes from our website. The e-commerce platform is perfect for our needs.',
      rating: 5,
      result: '200% revenue increase'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real businesses, real results. See how professional websites transformed these companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80';
                  }}
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="mb-4">
                  <div className="font-bold text-xl text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-400 font-semibold">
                    {testimonials[currentTestimonial].business}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
                
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 inline-block">
                  <div className="text-green-400 font-semibold text-sm">
                    <i className="ri-trophy-line mr-2"></i>
                    {testimonials[currentTestimonial].result}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
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
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
