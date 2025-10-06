'use client';

import { useState, useEffect } from 'react';

interface CalculatorOption {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

export default function ProjectCalculator() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(45000); // Base price
  const [isVisible, setIsVisible] = useState(false);

  const baseOptions: CalculatorOption[] = [
    { id: 'responsive', name: 'Mobile Responsive Design', price: 0, description: 'Works perfectly on all devices', icon: 'ri-smartphone-line' },
    { id: 'cms', name: 'Content Management System', price: 15000, description: 'Easy content updates', icon: 'ri-edit-box-line' },
    { id: 'ecommerce', name: 'E-commerce Functionality', price: 35000, description: 'Online store with M-Pesa', icon: 'ri-shopping-cart-line' },
    { id: 'seo', name: 'Advanced SEO Optimization', price: 12000, description: 'Rank higher on Google', icon: 'ri-search-eye-line' },
    { id: 'analytics', name: 'Analytics & Tracking', price: 8000, description: 'Monitor your website performance', icon: 'ri-bar-chart-line' },
    { id: 'booking', name: 'Online Booking System', price: 20000, description: 'Let customers book appointments', icon: 'ri-calendar-check-line' },
    { id: 'multilingual', name: 'Multi-language Support', price: 18000, description: 'Reach more customers', icon: 'ri-global-line' },
    { id: 'chat', name: 'Live Chat Integration', price: 10000, description: 'Real-time customer support', icon: 'ri-chat-3-line' },
  ];

  useEffect(() => {
    const baseCost = 45000;
    const additionalCost = selectedOptions.reduce((total, optionId) => {
      const option = baseOptions.find(opt => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    setTotalCost(baseCost + additionalCost);
  }, [selectedOptions]);

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-calculator-line"></i>
            Interactive Cost Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate Your Project Cost
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your website project. Select the features you need and see the cost update in real-time.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Options Selection */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <i className="ri-settings-3-line text-cyan-400"></i>
                  Choose Your Features
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {baseOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedOptions.includes(option.id)
                          ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                          : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          selectedOptions.includes(option.id) 
                            ? 'bg-cyan-500 text-white' 
                            : 'bg-slate-700 text-gray-300'
                        }`}>
                          <i className={`${option.icon} text-lg`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <span className="text-cyan-400 font-bold">
                              {option.price === 0 ? 'FREE' : `+${formatPrice(option.price)}`}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 sticky top-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <i className="ri-money-dollar-circle-line text-green-400"></i>
                  Project Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-gray-300">Base Website</span>
                    <span className="text-white font-semibold">{formatPrice(45000)}</span>
                  </div>
                  
                  {selectedOptions.map(optionId => {
                    const option = baseOptions.find(opt => opt.id === optionId);
                    if (!option || option.price === 0) return null;
                    return (
                      <div key={optionId} className="flex justify-between items-center py-2 border-b border-slate-700/50">
                        <span className="text-gray-300">{option.name}</span>
                        <span className="text-cyan-400 font-semibold">+{formatPrice(option.price)}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total Cost:</span>
                    <span className="text-3xl font-bold text-cyan-400">{formatPrice(totalCost)}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Includes hosting setup & 30-day support
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/254104613770?text=Hi! I'm interested in a website project. Based on the calculator, my estimated cost is ${formatPrice(totalCost)}. Can we discuss the details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    Get Quote on WhatsApp
                  </a>
                  
                  <button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-slate-600">
                    <i className="ri-mail-line text-xl"></i>
                    Email Detailed Quote
                  </button>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-xl">
                  <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-2">
                    <i className="ri-time-line"></i>
                    Limited Time Offer
                  </div>
                  <p className="text-gray-300 text-sm">
                    Book this month and get <strong className="text-yellow-400">10% discount</strong> + free SSL certificate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
