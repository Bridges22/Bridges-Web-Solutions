import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Solutions & Services | Bridges Web Solutions',
  description: 'Explore our comprehensive web design, digital systems, and automation solutions. We build technology that powers Kenyan businesses.',
};
import Navigation from '../../components/Navigation';
import Services from '../../components/Services';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section for Services */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Web Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From stunning websites to powerful e-commerce platforms, we deliver comprehensive digital solutions that transform your business and drive real results.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Component */}
        <Services />

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven process to ensure your project is delivered on time, on budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We understand your business, goals, and target audience through detailed consultation.',
                  icon: 'ri-search-line',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Create detailed project roadmap, wireframes, and technical specifications.',
                  icon: 'ri-draft-line',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Build your website using modern technologies with regular progress updates.',
                  icon: 'ri-code-line',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Deploy your website and provide training, support, and ongoing maintenance.',
                  icon: 'ri-rocket-line',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <i className={`${process.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-4xl font-bold text-gray-600 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Master
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to build fast, secure, and scalable websites.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-400' },
                { name: 'Next.js', icon: 'ri-nextjs-line', color: 'text-white' },
                { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-400' },
                { name: 'MongoDB', icon: 'ri-database-line', color: 'text-green-500' },
                { name: 'TypeScript', icon: 'ri-code-s-slash-line', color: 'text-blue-500' },
                { name: 'Tailwind', icon: 'ri-css3-line', color: 'text-cyan-400' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-4`}></i>
                  <div className="text-white font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
