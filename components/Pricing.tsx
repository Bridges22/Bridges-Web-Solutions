'use client';

import { useState } from 'react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  timeline: string;
  ideal: string;
  color: string;
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Business Starter',
      price: billingCycle === 'project' ? 'Ksh 45,000' : 'Ksh 8,000',
      originalPrice: billingCycle === 'project' ? 'Ksh 60,000' : undefined,
      description: 'Perfect for small businesses and startups getting online',
      timeline: '2-3 weeks',
      ideal: 'Small businesses, consultants, local services',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Professional 5-page website',
        'Mobile-responsive design',
        'Contact forms & social media',
        'Basic SEO optimization',
        'SSL certificate included',
        '3 months free support',
        'Google Analytics setup',
        'Fast loading optimization'
      ]
    },
    {
      id: 'professional',
      name: 'Business Professional',
      price: billingCycle === 'project' ? 'Ksh 85,000' : 'Ksh 15,000',
      originalPrice: billingCycle === 'project' ? 'Ksh 120,000' : undefined,
      description: 'Comprehensive solution for growing businesses',
      timeline: '3-4 weeks',
      ideal: 'Growing businesses, restaurants, fitness studios',
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Everything in Business Starter',
        'Up to 10 custom pages',
        'Advanced SEO optimization',
        'Booking/reservation system',
        'Customer review integration',
        'Blog/news section',
        '6 months free support',
        'Social media integration',
        'Email marketing setup',
        'Performance analytics'
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Pro',
      price: billingCycle === 'project' ? 'Ksh 150,000' : 'Ksh 25,000',
      originalPrice: billingCycle === 'project' ? 'Ksh 200,000' : undefined,
      description: 'Complete online store with advanced features',
      timeline: '4-6 weeks',
      ideal: 'Retail businesses, boutiques, product sellers',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Everything in Business Professional',
        'Full e-commerce functionality',
        'Product catalog management',
        'Secure payment processing',
        'Inventory management',
        'Order tracking system',
        'Customer accounts & wishlists',
        'Discount & coupon system',
        '12 months free support',
        'Advanced analytics & reporting',
        'Multi-payment gateway support',
        'Automated email notifications'
      ]
    }
  ];

  const addOns = [
    { name: 'Additional Pages', price: 'Ksh 5,000', description: 'Per extra page beyond package limit' },
    { name: 'Logo Design', price: 'Ksh 15,000', description: 'Professional logo design with 3 concepts' },
    { name: 'Content Writing', price: 'Ksh 8,000', description: 'Professional copywriting per page' },
    { name: 'Advanced SEO', price: 'Ksh 25,000', description: 'Comprehensive SEO audit and optimization' },
    { name: 'Live Chat Integration', price: 'Ksh 10,000', description: 'Real-time customer support chat' },
    { name: 'Multi-language Support', price: 'Ksh 30,000', description: 'Website in multiple languages' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            No hidden costs, no surprises. Choose the perfect package for your business needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-slate-800/60 rounded-full p-1 border border-slate-700/50">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${billingCycle === 'project'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              One-time Project
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Monthly Payments
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
                }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {billingCycle === 'project' ? 'One-time payment' : 'Per month for 6 months'}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <i className="ri-time-line text-cyan-400"></i>
                      {plan.timeline}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <i className="ri-check-line text-white text-xs"></i>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <div className="text-sm text-gray-400 mb-1">Ideal for:</div>
                  <div className="text-white font-medium">{plan.ideal}</div>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/254104613770?text=Hi! I'm interested in the ${plan.name} package for my business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Optional Add-ons
            </h3>
            <p className="text-gray-300">
              Enhance your website with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{addon.name}</h4>
                  <span className="text-cyan-400 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-8 py-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-white text-xl"></i>
            </div>
            <div className="text-left">
              <div className="font-bold text-white">30-Day Money Back Guarantee</div>
              <div className="text-green-300 text-sm">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
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
