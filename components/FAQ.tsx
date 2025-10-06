'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'technical';
}

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const faqs: FAQItem[] = [
    // General Questions
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 2-6 weeks, depending on complexity. Simple business websites take 2-3 weeks, while e-commerce or custom applications may take 4-6 weeks. We'll provide you with a detailed timeline during our initial consultation.",
      category: 'general'
    },
    {
      id: 2,
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer 24/7 support and maintenance services. This includes security updates, content updates, technical support, and performance monitoring. We want to ensure your website continues to work perfectly for your business.",
      category: 'general'
    },
    {
      id: 3,
      question: "Will my website work on mobile devices?",
      answer: "Absolutely! All our websites are built with a mobile-first approach. Your site will look and work perfectly on smartphones, tablets, and desktops. We test on multiple devices to ensure the best user experience.",
      category: 'general'
    },
    
    // Pricing Questions
    {
      id: 4,
      question: "What's included in the website cost?",
      answer: "Our packages include custom design, development, mobile optimization, basic SEO setup, contact forms, social media integration, SSL certificate, and 3 months of free support. Additional features like e-commerce or booking systems may have extra costs.",
      category: 'pricing'
    },
    {
      id: 5,
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment options including 50% upfront and 50% on completion, or monthly payment plans for larger projects. We want to make professional websites accessible to all businesses.",
      category: 'pricing'
    },
    {
      id: 6,
      question: "Are there any hidden costs?",
      answer: "No hidden costs! We provide transparent pricing upfront. The only additional costs might be premium plugins, third-party services (like payment processors), or hosting if you choose premium plans. Everything is discussed before we start.",
      category: 'pricing'
    },

    // Process Questions
    {
      id: 7,
      question: "What information do you need to get started?",
      answer: "We'll need your business information, goals for the website, any existing branding materials (logos, colors), content (text, images), and examples of websites you like. Don't worry - we'll guide you through everything step by step.",
      category: 'process'
    },
    {
      id: 8,
      question: "Can I make changes during development?",
      answer: "Yes! We encourage feedback throughout the process. Minor changes are included, and we'll show you progress regularly. Major changes might affect timeline and cost, but we'll discuss this with you first.",
      category: 'process'
    },
    {
      id: 9,
      question: "What happens if I'm not satisfied?",
      answer: "Your satisfaction is our priority! We offer unlimited revisions during development and a 30-day satisfaction guarantee after launch. If you're not happy, we'll work with you until you are, or provide a full refund.",
      category: 'process'
    },

    // Technical Questions
    {
      id: 10,
      question: "Will I be able to update the website myself?",
      answer: "Yes! We build user-friendly websites with content management systems that allow you to easily update text, images, and basic content. We also provide training and documentation to help you manage your site.",
      category: 'technical'
    },
    {
      id: 11,
      question: "Do you help with domain and hosting?",
      answer: "Absolutely! We can help you choose and set up your domain name and hosting. We work with reliable hosting providers and can manage the technical setup for you, or guide you through doing it yourself.",
      category: 'technical'
    },
    {
      id: 12,
      question: "Is my website secure?",
      answer: "Security is a top priority! All our websites include SSL certificates, secure coding practices, regular security updates, and protection against common threats. We also provide guidance on maintaining security best practices.",
      category: 'technical'
    }
  ];

  const categories = [
    { id: 'general', name: 'General', icon: 'ri-question-line' },
    { id: 'pricing', name: 'Pricing', icon: 'ri-money-dollar-circle-line' },
    { id: 'process', name: 'Process', icon: 'ri-settings-line' },
    { id: 'technical', name: 'Technical', icon: 'ri-code-line' }
  ];

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Here are the most common questions our clients ask.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveItem(null); // Reset active item when switching categories
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <i className={category.icon}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
                }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-300 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    activeItem === faq.id ? 'rotate-45' : ''
                  }`}>
                    <i className="ri-add-line text-white text-lg"></i>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg p-6 border-l-4 border-cyan-400">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              We're here to help! Get in touch and we'll answer any questions you have about your website project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254104613770?text=Hi! I have some questions about building a website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Chat on WhatsApp
              </a>
              <a
                href="mailto:bridges.cybersec@gmail.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <i className="ri-mail-line text-lg"></i>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
