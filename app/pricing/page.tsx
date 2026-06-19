import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Bridges Web Solutions',
  description: 'Transparent pricing for web design, e-commerce, and digital systems in Kenya. No hidden costs. Choose the perfect package for your business needs.',
};
import Navigation from '../../components/Navigation';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, Transparent{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                No hidden costs, no surprises. Choose the perfect package for your business needs and start your digital transformation today.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-xl text-white"></i>
                  </div>
                  <div className="text-white font-semibold mb-2">30-Day Guarantee</div>
                  <div className="text-gray-400 text-sm">Not satisfied? Full refund, no questions asked</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-money-dollar-circle-line text-xl text-white"></i>
                  </div>
                  <div className="text-white font-semibold mb-2">Flexible Payments</div>
                  <div className="text-gray-400 text-sm">One-time or monthly payment options available</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-customer-service-line text-xl text-white"></i>
                  </div>
                  <div className="text-white font-semibold mb-2">Free Support</div>
                  <div className="text-gray-400 text-sm">3-12 months of free support included</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Feature{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Comparison
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See exactly what's included in each package to make the best choice for your business.
              </p>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Starter</th>
                    <th className="text-center p-6 text-white font-semibold">Professional</th>
                    <th className="text-center p-6 text-white font-semibold">E-commerce</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Custom Design', starter: true, professional: true, ecommerce: true },
                    { feature: 'Mobile Responsive', starter: true, professional: true, ecommerce: true },
                    { feature: 'SSL Certificate', starter: true, professional: true, ecommerce: true },
                    { feature: 'Basic SEO', starter: true, professional: true, ecommerce: true },
                    { feature: 'Contact Forms', starter: true, professional: true, ecommerce: true },
                    { feature: 'Pages Included', starter: '5', professional: '10', ecommerce: 'Unlimited' },
                    { feature: 'Advanced SEO', starter: false, professional: true, ecommerce: true },
                    { feature: 'Booking System', starter: false, professional: true, ecommerce: true },
                    { feature: 'Blog Section', starter: false, professional: true, ecommerce: true },
                    { feature: 'E-commerce Store', starter: false, professional: false, ecommerce: true },
                    { feature: 'Payment Processing', starter: false, professional: false, ecommerce: true },
                    { feature: 'Inventory Management', starter: false, professional: false, ecommerce: true },
                    { feature: 'Support Duration', starter: '3 months', professional: '6 months', ecommerce: '12 months' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors duration-300">
                      <td className="p-6 text-gray-300 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <i className="ri-check-line text-green-400 text-xl"></i>
                          ) : (
                            <i className="ri-close-line text-gray-600 text-xl"></i>
                          )
                        ) : (
                          <span className="text-cyan-400 font-semibold">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.professional === 'boolean' ? (
                          row.professional ? (
                            <i className="ri-check-line text-green-400 text-xl"></i>
                          ) : (
                            <i className="ri-close-line text-gray-600 text-xl"></i>
                          )
                        ) : (
                          <span className="text-purple-400 font-semibold">{row.professional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.ecommerce === 'boolean' ? (
                          row.ecommerce ? (
                            <i className="ri-check-line text-green-400 text-xl"></i>
                          ) : (
                            <i className="ri-close-line text-gray-600 text-xl"></i>
                          )
                        ) : (
                          <span className="text-emerald-400 font-semibold">{row.ecommerce}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQ />

        <CallToAction />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
