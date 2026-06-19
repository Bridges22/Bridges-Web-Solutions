import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';
import Link from 'next/link';

export const metadata = {
  title: 'Maintenance & Support | Bridges Web Solutions',
  description: 'Reliable, 24/7 maintenance and support for your digital systems, websites, and infrastructure in Kenya.',
};

export default function MaintenancePage() {
  const plans = [
    {
      name: 'Basic Support',
      description: 'Essential maintenance for simple websites and small businesses.',
      price: 'KSh 5,000 / month',
      features: [
        'Monthly backups',
        'Security monitoring',
        'Uptime tracking',
        'Email support',
        'Minor content updates'
      ],
      recommended: false,
    },
    {
      name: 'Business Care',
      description: 'Comprehensive support for active businesses and e-commerce sites.',
      price: 'KSh 15,000 / month',
      features: [
        'Weekly backups',
        'Advanced security & malware scanning',
        'Performance optimization',
        'Priority email & WhatsApp support',
        'Content updates (up to 5 hours)',
        'Monthly analytics report'
      ],
      recommended: true,
    },
    {
      name: 'Enterprise SLA',
      description: 'Dedicated support for complex digital systems and web apps.',
      price: 'Custom Pricing',
      features: [
        'Daily/Real-time backups',
        'Dedicated account manager',
        '24/7 emergency support line',
        'Custom feature development',
        'Server management & scaling',
        'Quarterly strategy review'
      ],
      recommended: false,
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Reliability First
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Maintenance & Support
            </h1>
            <p className="text-xl text-slate-300">
              Your digital systems need to run smoothly 24/7. Our maintenance plans ensure your software stays secure, fast, and up-to-date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-slate-800/80 backdrop-blur-sm border rounded-2xl p-8 flex flex-col ${
                  plan.recommended ? 'border-cyan-500 transform md:-translate-y-4 shadow-xl shadow-cyan-500/20' : 'border-slate-700/50'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6 h-12">{plan.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-8 pb-8 border-b border-slate-700/50">
                  {plan.price}
                </div>
                
                <ul className="space-y-4 flex-grow mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <i className="ri-check-line text-cyan-400 mt-1 mr-3 text-lg"></i>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 text-center ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why ongoing maintenance matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <i className="ri-shield-keyhole-line text-4xl text-cyan-400 mr-4"></i>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Security Patching</h4>
                  <p className="text-slate-400">We continuously monitor for vulnerabilities and apply security patches to keep your data safe from cyber threats.</p>
                </div>
              </div>
              <div className="flex">
                <i className="ri-speed-up-line text-4xl text-cyan-400 mr-4"></i>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Performance Optimization</h4>
                  <p className="text-slate-400">Regular database cleanups and code optimizations ensure your system remains lightning fast as you scale.</p>
                </div>
              </div>
              <div className="flex">
                <i className="ri-refresh-line text-4xl text-cyan-400 mr-4"></i>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Software Updates</h4>
                  <p className="text-slate-400">We keep your underlying frameworks and plugins up-to-date to prevent compatibility issues and bugs.</p>
                </div>
              </div>
              <div className="flex">
                <i className="ri-customer-service-2-line text-4xl text-cyan-400 mr-4"></i>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Technical Support</h4>
                  <p className="text-slate-400">Get access to our engineering team whenever you have questions or need assistance with your digital systems.</p>
                </div>
              </div>
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
