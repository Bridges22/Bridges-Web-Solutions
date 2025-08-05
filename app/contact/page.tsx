
'use client';

import { useState } from 'react';
import Link from 'next/link';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        website: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with a professional website? Let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/254104613770?text=Hi! I want to discuss building a professional website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Quick Chat on WhatsApp
              </a>
              <a 
                href="tel:+254705784274"
                className="bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
                Call +254 705784274
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-600 mr-3 text-xl"></i>
                      <div>
                        <div className="font-semibold text-green-800">Message Sent Successfully!</div>
                        <div className="text-green-600 text-sm">We'll get back to you within 24 hours.</div>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">Select Project Type</option>
                        <option value="new-website">New Website</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="e-commerce">E-commerce Store</option>
                        <option value="booking-system">Booking System</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="1000-2500">Ksh 10,000 - ksh25,500</option>
                        <option value="2500-5000">Ksh 30,500 - Ksh 45,000</option>
                        <option value="5000-10000">Ksh 55,000 - Ksh 70,000</option>
                        <option value="10000+">Ksh 100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="3-4-weeks">3-4 weeks</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={1500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                      placeholder="Tell us about your business, what you need, and what success looks like to you..."
                    ></textarea>
                    <div className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/1500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] shadow-lg cursor-pointer'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-send-plane-line"></i>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+254 705784274</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">bridges.cybersec@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-whatsapp-line text-green-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <div className="text-gray-600">Quick responses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span className="text-gray-700">Free consultation and project estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span className="text-gray-700">24-48 hour response guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span className="text-gray-700">3 months free maintenance included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Prefer to Chat?</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get instant answers to your questions on WhatsApp. Most responses within 15 minutes during business hours.
                </p>
                <a 
                  href="https://wa.me/254104613770?text=Hi! I have some questions about building a website for my business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors w-full flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line"></i>
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
