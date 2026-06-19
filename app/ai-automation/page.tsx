import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata = {
  title: 'AI & Automation Solutions | Bridges Web Solutions',
  description: 'Automate your business processes with AI chatbots, intelligent workflows, and data processing solutions in Kenya.',
};

export default function AIAutomationPage() {
  const services = [
    {
      title: 'AI Customer Support Chatbots',
      description: 'Intelligent chatbots that handle customer inquiries 24/7, qualify leads, and integrate with WhatsApp and your website.',
      icon: 'ri-robot-2-line',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Workflow Automation',
      description: 'Connect your favorite apps and automate repetitive tasks. From lead capture to invoicing, we streamline your operations.',
      icon: 'ri-flow-chart-line',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Automated Document Processing',
      description: 'Extract data from invoices, receipts, and forms automatically using Optical Character Recognition (OCR) and AI.',
      icon: 'ri-file-search-line',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage your business data to forecast sales, optimize inventory, and make informed strategic decisions.',
      icon: 'ri-bar-chart-line',
      gradient: 'from-emerald-500 to-teal-600',
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Work Smarter
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI & Business Automation
            </h1>
            <p className="text-xl text-slate-300">
              Reduce manual work, eliminate human error, and scale your operations effortlessly with intelligent automation and AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to automate your business?</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation. We'll analyze your current workflows and identify the best opportunities for AI automation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Get a Free Assessment</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </>
  );
}
