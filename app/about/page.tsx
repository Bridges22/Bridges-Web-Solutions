import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bridges Web Solutions',
  description: 'Learn about Bridges Web Solutions, Kenya\'s premier tech partner building custom digital systems, websites, and business automation software.',
};
import Navigation from '../../components/Navigation';
import Benefits from '../../components/Benefits';
import ClientLogos from '../../components/ClientLogos';
import Testimonials from '../../components/Testimonials';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  About{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Bridges Web Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We're passionate about helping businesses succeed online. With years of experience and a commitment to excellence, we transform ideas into powerful digital experiences that drive real results.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">2019</div>
                    <div className="text-gray-300 text-sm">Founded</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="text-2xl font-bold text-green-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Happy Clients</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/+254104613770?text=Hi! I'd like to learn more about your web development services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  Let's Talk
                </a>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src="/images/team/WhatsApp Image 2025-10-06 at 14.14.30_fc5741c0.jpg"
                        alt="Bridges Mwashighadi - Founder & Lead Developer"
                        className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-cyan-500 to-blue-500 shadow-xl"
                      />
                      <div 
                        className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center absolute top-0 left-0 shadow-xl hidden"
                      >
                        <i className="ri-user-line text-4xl text-white"></i>
                      </div>
                      {/* Professional badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 border-2 border-slate-800">
                        <i className="ri-verified-badge-line text-white text-sm"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Bridges Mwashighadi</h3>
                    <p className="text-cyan-400 font-semibold">Founder & Lead Developer</p>
                  </div>
                  <p className="text-gray-300 text-center leading-relaxed">
                    "I believe every business deserves a professional online presence. My mission is to help entrepreneurs and businesses succeed through powerful, user-friendly websites that convert visitors into customers."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-target-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses of all sizes with professional, high-converting websites that drive growth, increase revenue, and establish strong online presence. We believe every business deserves access to world-class web development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-eye-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading web development partner for businesses across Kenya and beyond, known for delivering exceptional results, outstanding customer service, and innovative solutions that transform businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and ensure we deliver exceptional results for every client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-award-line',
                  title: 'Excellence',
                  description: 'We strive for perfection in every project, delivering websites that exceed expectations and drive real business results.',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'Reliability',
                  description: 'You can count on us to deliver on time, stay within budget, and provide ongoing support when you need it.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Innovation',
                  description: 'We use cutting-edge technologies and creative solutions to keep your business ahead of the competition.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: 'ri-heart-line',
                  title: 'Passion',
                  description: 'We love what we do and it shows in every website we create. Your success is our greatest achievement.',
                  color: 'from-red-500 to-pink-500'
                },
                {
                  icon: 'ri-team-line',
                  title: 'Partnership',
                  description: 'We work closely with you as a trusted partner, not just a service provider. Your goals become our goals.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: 'ri-growth-line',
                  title: 'Growth',
                  description: 'We focus on solutions that scale with your business and adapt to your changing needs over time.',
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${value.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Component */}
        <Benefits />

        {/* Client Logos */}
        <ClientLogos />

        {/* Testimonials */}
        <Testimonials />

        <CallToAction />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
