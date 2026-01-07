'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: 'Dorothy Shali',
      business: 'Aurum Advisory',
      industry: 'Financial & Governance',
      location: 'Nairobi',
      avatar: '/testimonials/avatars/dorothy-shaly.svg',
      companyLogo: '/clients/Aurum Advisory.jpg',
      text: 'Bridges rebuilt aurumdvisory.co.ke into a client portal that automates ESG compliance and donor reporting. Our C-Suite clients finally get real-time metrics.',
      rating: 5,
      result: 'Reports delivered 5× faster',
      source: 'Google Review',
      date: 'Oct 2025'
    },
    {
      name: 'Michael Johnson',
      business: 'FitCore Global Gyms',
      industry: 'Fitness & Wellness',
      location: 'Austin',
      avatar: '/testimonials/avatars/michael-johnson.svg',
      companyLogo: '/testimonials/logos/fitcore-global.svg',
      text: 'The new member portal turned our franchise into a digital-first brand. Each location now sells memberships online and our Google rankings exploded.',
      rating: 5,
      result: '150% membership growth',
      source: 'Google Review',
      date: 'Sep 2025'
    },
    {
      name: 'Emma Thompson',
      business: 'Bloom Fashion',
      industry: 'E-commerce',
      location: 'Manchester',
      avatar: '/testimonials/avatars/emma-thompson.svg',
      companyLogo: '/clients/bloom-boutique.svg',
      text: 'Within one week of launch we were processing international orders. The storefront feels premium and the built-in analytics give us clarity every day.',
      rating: 5,
      result: '200% revenue increase',
      source: 'Google Review',
      date: 'Jul 2025'
    },
    {
      name: 'Daniel Otieno',
      business: 'Swahili Luxe Safaris',
      industry: 'Travel',
      location: 'Mombasa',
      avatar: '/testimonials/avatars/daniel-otieno.svg',
      companyLogo: '/testimonials/logos/swahili-luxe.svg',
      text: 'The immersive itinerary pages and automated quote PDFs make us look like a global tour operator. We are getting more bookings from US & EU clients.',
      rating: 5,
      result: '68% more bookings',
      source: 'Google Review',
      date: 'Aug 2025'
    },
    {
      name: 'Ava Patel',
      business: 'Nyali Med Spa',
      industry: 'Healthcare',
      location: 'Mombasa',
      avatar: '/testimonials/avatars/ava-patel.svg',
      companyLogo: '/testimonials/logos/nyali-medspa.svg',
      text: 'Our appointment waitlist vanished. Clients now book and pay online. The Google review widget Bridges added keeps new leads flowing.',
      rating: 5,
      result: 'Fully booked calendar',
      source: 'Google Review',
      date: 'Nov 2025'
    },
    {
      name: 'Carlos Mendes',
      business: 'Bayview Wellness',
      industry: 'Wellness',
      location: 'Lisbon',
      avatar: '/testimonials/avatars/carlos-mendes.svg',
      companyLogo: '/testimonials/logos/bayview-wellness.svg',
      text: 'Their team captured our brand perfectly. The multilingual site and SEO-ready blog filled our retreat dates through next summer.',
      rating: 5,
      result: 'Sold out 6 months ahead',
      source: 'Google Review',
      date: 'Jun 2025'
    }
  ];

  const ITEMS_PER_PAGE_DESKTOP = 3;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    // Move layout by 1 item at a time
    setCurrentTestimonial((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    // Return 3 items starting from currentTestimonial, looping appropriately
    const visible = [];
    for (let i = 0; i < ITEMS_PER_PAGE_DESKTOP; i++) {
      visible.push(testimonials[(currentTestimonial + i) % testimonials.length]);
    }
    return visible;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-sm uppercase tracking-wide text-gray-200">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
              </span>
              Verified Google Reviews
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6 mb-2">
              Trusted by Ambitious Teams
            </h2>
          </div>

          <div className="max-w-7xl mx-auto relative cursor-pointer">
            <div className={`${isDesktop ? 'grid grid-cols-3 gap-6' : 'max-w-4xl mx-auto relative h-[280px] sm:h-[400px]'}`}>
              {isDesktop ? (
                // Desktop Grid View (3 Cards)
                <AnimatePresence mode="popLayout" initial={false}>
                  {getVisibleTestimonials().map((testimonial, idx) => (
                    <motion.div
                      key={`${testimonial.name}-${currentTestimonial + idx}`}
                      layout
                      initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -50 : 50, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.4 }}
                      className="bg-gray-800/95 border border-white/5 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex flex-col justify-between h-full min-h-[320px] hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/60"
                              />
                            </div>
                            <div>
                              <div className="text-base font-bold text-white leading-tight">
                                {testimonial.name}
                              </div>
                              <div className="text-xs text-blue-300 font-medium">
                                {testimonial.business}
                              </div>
                              <div className="flex text-yellow-500 text-xs mt-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <i key={i} className="ri-star-fill"></i>
                                ))}
                              </div>
                            </div>
                          </div>
                          <i className="ri-google-fill text-2xl text-white opacity-80"></i>
                        </div>
                        <blockquote className="text-sm text-gray-200 leading-relaxed font-medium">
                          “{testimonial.text}”
                        </blockquote>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                        <div className="bg-emerald-500/10 rounded-lg px-2.5 py-1 text-xs text-emerald-300 flex items-center gap-1.5">
                          <i className="ri-sparkling-fill"></i>
                          {testimonial.result}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.date}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                // Mobile Single Card View
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentTestimonial}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) paginate(1);
                      else if (swipe > swipeConfidenceThreshold) paginate(-1);
                    }}
                    className="absolute w-full top-0 left-0"
                  >
                    <div className="bg-gray-800/95 border border-white/5 rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                      <div className="flex flex-col gap-3">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img
                                src={testimonials[currentTestimonial].avatar}
                                alt={testimonials[currentTestimonial].name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/60"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white leading-tight">
                                {testimonials[currentTestimonial].name}
                              </div>
                              <div className="text-[10px] text-blue-300 font-medium">
                                {testimonials[currentTestimonial].business}
                              </div>
                              <div className="flex text-yellow-500 text-[10px] mt-0.5">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                  <i key={i} className="ri-star-fill"></i>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end opacity-80">
                            <i className="ri-google-fill text-xl text-white"></i>
                            <span className="text-[9px] text-gray-400 font-medium">Verified</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <blockquote className="text-sm text-gray-100 leading-snug font-medium line-clamp-4">
                            “{testimonials[currentTestimonial].text}”
                          </blockquote>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <div className="bg-emerald-500/10 rounded-lg px-2 py-1 text-[10px] text-emerald-300 flex items-center gap-1.5">
                            <i className="ri-sparkling-fill"></i>
                            {testimonials[currentTestimonial].result}
                          </div>
                          <div className="text-[9px] text-gray-500">
                            {testimonials[currentTestimonial].date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {!isDesktop && (
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center items-center gap-2">
                <span className="text-[10px] text-gray-500 animate-pulse">Swipe to pass</span>
                <i className="ri-arrow-left-right-line text-gray-500 text-[10px]"></i>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mt-12 gap-3">
            <button onClick={() => paginate(-1)} className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-lg border border-white/5">
              <i className="ri-arrow-left-line text-white"></i>
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-600'
                    }`}
                />
              ))}
            </div>
            <button onClick={() => paginate(1)} className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-blue-500/20">
              <i className="ri-arrow-right-line text-white"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
