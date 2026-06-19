import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';

export const metadata = {
  title: 'Digital Systems & Solutions | Bridges Web Solutions',
  description: 'Explore our custom digital systems, e-commerce platforms, school portals, and business automation solutions designed for Kenyan enterprises.',
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'E-commerce & POS Systems',
      description: 'Comprehensive digital storefronts with integrated inventory management and automated M-Pesa checkouts for modern Kenyan retailers.',
      features: ['Multi-store synchronization', 'M-Pesa API integration', 'Automated receipt generation', 'Real-time sales dashboard'],
      icon: 'ri-store-3-line',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'School Management Portals',
      description: 'Unified platforms to streamline student records, fee tracking, grading, and parent communications.',
      features: ['Parent & Student portals', 'Fee tracking & reminders', 'Digital report cards', 'Bulk SMS integration'],
      icon: 'ri-school-line',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Booking & Scheduling Software',
      description: 'Automate appointments for clinics, salons, and consultants with integrated calendars and payment collections.',
      features: ['Self-service booking links', 'Automated SMS reminders', 'Deposit collection', 'Staff calendar sync'],
      icon: 'ri-calendar-check-line',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Real Estate & Property Management',
      description: 'Manage tenant billing, maintenance requests, and property listings with customized administrative dashboards.',
      features: ['Automated rent invoicing', 'Maintenance ticket system', 'Tenant portals', 'Financial reporting'],
      icon: 'ri-building-4-line',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Healthcare & Clinic Systems',
      description: 'Secure patient records, prescription tracking, and appointment management for medical facilities.',
      features: ['Electronic Health Records (EHR)', 'Prescription management', 'Billing & insurance', 'Patient queueing'],
      icon: 'ri-heart-pulse-line',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Custom Business Dashboards',
      description: 'Real-time analytics, API integrations, and reporting tailored exactly to your operational needs.',
      features: ['Custom KPI tracking', 'Third-party API integration', 'Data visualization', 'Role-based access control'],
      icon: 'ri-database-2-line',
      gradient: 'from-violet-500 to-fuchsia-600',
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Purpose-Built Digital Systems
            </h1>
            <p className="text-xl text-slate-300">
              We design and develop robust software infrastructure that solves real operational challenges for businesses across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${solution.gradient} mb-6 shadow-lg`}>
                  <i className={`${solution.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-slate-300">
                      <i className="ri-checkbox-circle-fill text-cyan-400 mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block bg-slate-800/80 backdrop-blur-md border border-slate-700 p-8 rounded-2xl max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-slate-300 mb-6">
                Don't see exactly what you're looking for? We specialize in building custom software tailored to unique business processes.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <span>Discuss Your Project</span>
                <i className="ri-arrow-right-line"></i>
              </a>
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
