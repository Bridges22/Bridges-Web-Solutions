import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';

export const metadata = {
  title: 'Our Tech Stack | Bridges Web Solutions',
  description: 'Explore the modern, scalable, and secure technologies we use to build digital systems for Kenyan businesses.',
};

export default function TechStackPage() {
  const stackCategories = [
    {
      title: 'Frontend Development',
      description: 'We build fast, interactive, and mobile-first user interfaces.',
      technologies: [
        { name: 'React', icon: 'ri-reactjs-line', color: 'text-cyan-400' },
        { name: 'Next.js', icon: 'ri-rocket-line', color: 'text-white' },
        { name: 'Tailwind CSS', icon: 'ri-paint-brush-line', color: 'text-teal-400' },
        { name: 'TypeScript', icon: 'ri-code-s-slash-line', color: 'text-blue-500' },
      ],
    },
    {
      title: 'Backend & APIs',
      description: 'Robust server-side logic and secure data processing.',
      technologies: [
        { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-500' },
        { name: 'Python', icon: 'ri-code-box-line', color: 'text-yellow-400' },
        { name: 'REST APIs', icon: 'ri-plug-line', color: 'text-indigo-400' },
        { name: 'GraphQL', icon: 'ri-share-forward-line', color: 'text-pink-500' },
      ],
    },
    {
      title: 'Database & Storage',
      description: 'Secure, scalable, and compliant data management.',
      technologies: [
        { name: 'PostgreSQL', icon: 'ri-database-2-line', color: 'text-blue-400' },
        { name: 'MongoDB', icon: 'ri-leaf-line', color: 'text-green-600' },
        { name: 'Redis', icon: 'ri-speed-mini-fill', color: 'text-red-500' },
        { name: 'Cloud Storage', icon: 'ri-cloud-line', color: 'text-blue-300' },
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      description: 'Reliable hosting and automated deployment pipelines.',
      technologies: [
        { name: 'AWS / GCP', icon: 'ri-server-line', color: 'text-orange-400' },
        { name: 'Vercel', icon: 'ri-triangle-line', color: 'text-white' },
        { name: 'Docker', icon: 'ri-ship-line', color: 'text-blue-500' },
        { name: 'CI/CD', icon: 'ri-refresh-line', color: 'text-emerald-400' },
      ],
    },
    {
      title: 'Integrations & Payments',
      description: 'Connecting your systems to essential local and global services.',
      technologies: [
        { name: 'M-Pesa API', icon: 'ri-smartphone-line', color: 'text-green-500' },
        { name: 'Stripe', icon: 'ri-bank-card-line', color: 'text-indigo-500' },
        { name: 'Twilio (SMS)', icon: 'ri-message-3-line', color: 'text-red-400' },
        { name: 'Google Maps', icon: 'ri-map-pin-line', color: 'text-green-400' },
      ],
    },
    {
      title: 'Security',
      description: 'Protecting your data and your users.',
      technologies: [
        { name: 'SSL / TLS', icon: 'ri-lock-line', color: 'text-yellow-500' },
        { name: 'OAuth 2.0', icon: 'ri-shield-keyhole-line', color: 'text-blue-400' },
        { name: 'Data Encryption', icon: 'ri-file-lock-line', color: 'text-purple-400' },
        { name: 'WAF', icon: 'ri-shield-check-line', color: 'text-green-400' },
      ],
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern Tech Stack
            </h1>
            <p className="text-xl text-slate-300">
              We leverage modern, enterprise-grade technologies to build secure, scalable, and lightning-fast digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stackCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-400 mb-8 h-12">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, tIndex) => (
                    <div key={tIndex} className="flex flex-col items-center justify-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                      <i className={`${tech.icon} ${tech.color} text-3xl mb-2`}></i>
                      <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </>
  );
}
