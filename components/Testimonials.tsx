
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      business: 'Rodriguez Family Restaurant',
      location: 'Nairobi, Kenya',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20woman%20business%20owner%2C%20confident%20smile%2C%20restaurant%20background%2C%20warm%20lighting%2C%20business%20casual%20attire%2C%20approachable%20and%20successful%20appearance&width=400&height=400&seq=testimonial-001&orientation=squarish',
      text: 'Our online orders tripled within two months of launching our new website. The mobile ordering system is so easy for our customers to use. Best investment we ever made for the restaurant.',
      rating: 5,
      result: '300% increase in online orders'
    },
    {
      name: 'James Mitchell',
      business: 'FitCore Gym',
      location: 'Denver, CO',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20athletic%20man%20fitness%20business%20owner%2C%20confident%20expression%2C%20gym%20equipment%20in%20background%2C%20sporty%20business%20attire%2C%20strong%20and%20motivational%20presence&width=400&height=400&seq=testimonial-002&orientation=squarish',
      text: 'The booking system completely transformed how we manage classes. Members love being able to book online, and we cut our admin time in half. Our membership has grown 150% since launch.',
      rating: 5,
      result: '150% membership growth'
    },
    {
      name: 'Sarah Chen',
      business: 'Bloom Boutique',
      location: 'Portland, OR',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20woman%20boutique%20owner%2C%20elegant%20style%2C%20retail%20background%2C%20sophisticated%20business%20attire%2C%20friendly%20and%20professional%20demeanor&width=400&height=400&seq=testimonial-003&orientation=squarish',
      text: 'Going from a physical store to online sales seemed impossible until I worked with Bridges. Now 60% of our revenue comes from our website. The e-commerce platform is perfect for our needs.',
      rating: 5,
      result: '200% revenue increase'
    },
    {
      name: 'Michael Thompson',
      business: 'Thompson Legal Services',
      location: 'Miami, FL',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20middle-aged%20man%20lawyer%2C%20confident%20and%20trustworthy%20appearance%2C%20law%20office%20background%2C%20business%20suit%2C%20professional%20and%20authoritative%20presence&width=400&height=400&seq=testimonial-004&orientation=squarish',
      text: 'My old website looked like it was from 2005. The new site attracts higher-quality clients and positions us as the premium law firm we are. Client inquiries increased by 400%.',
      rating: 5,
      result: '400% more client inquiries'
    },
    {
      name: 'Mama Lisa Dental House ',
      business: 'Park Dental Practice',
      location: 'Nairobi, Kenya',
      avatar: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/529010206_1330516251972477_4671462727590817214_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEg8jXuR36GJziDT46fCN2tPXGVpcOrmzc9cZWlw6ubN_jpglVRZ1_BWeeua9R1gChocKGsdqSnSs7nc-WTMGzi&_nc_ohc=r1IhuPk1kY0Q7kNvwFVyp7P&_nc_oc=AdmtqEFgCTeZ3mfXK6APDK1GiAu3YvQ4CM0be5CUWIo1ZzZKCouT7fwWSg_KX-alAao&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=j7Hhnl0O9-vsSIhE0nJvnw&oh=00_AfVfoy5F7pdncrsYmNyofcStu6XN0V9gdnb2iRtDeeI79g&oe=68981FE1',
      text: 'Patients love booking appointments online and the educational content builds trust before they even walk in. Our new patient bookings doubled, and our online reputation improved significantly.',
      rating: 5,
      result: '200% more new patients'
    },
    {
      name: 'Robert Williams',
      business: 'Williams Construction',
      location: 'Phoenix, AZ',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20construction%20business%20owner%2C%20hard%20hat%20nearby%2C%20construction%20site%20background%2C%20work%20shirt%20and%20safety%20vest%2C%20reliable%20and%20experienced%20appearance&width=400&height=400&seq=testimonial-006&orientation=squarish',
      text: 'The project gallery showcases our work perfectly. Potential clients can see our quality before calling. We book 3x more consultations now, and customers come to us already sold on our work.',
      rating: 5,
      result: '300% more consultations'
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
            href="https://wa.me/1234567890?text=Hi! I saw the testimonials and want to discuss building a professional website for my business."
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
