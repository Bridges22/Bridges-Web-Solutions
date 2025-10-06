import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Bridges Web Solutions',
  description: 'Learn how Bridges Web Solutions collects, uses, and protects your personal information in accordance with our privacy policy.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: October 6, 2025</p>
          
          <p className="mb-6 text-gray-700">
            At Bridges Web Solutions, accessible from <Link href="https://bridgeswebsolutions.top" className="text-blue-600 hover:underline">https://bridgeswebsolutions.top</Link>, your privacy is one of our top priorities. This Privacy Policy document explains what information we collect, how we use it, and how we keep it secure.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email, phone number, or any details users provide when they contact us.</li>
              <li><strong>Usage Data:</strong> Information such as pages visited, time spent, and browser type.</li>
              <li><strong>Cookies:</strong> Used to improve user experience and analyze website traffic.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the data to respond to inquiries, improve our website, personalize user experience, and show relevant ads through Google AdSense.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Google AdSense</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We use Google AdSense to display ads.</li>
              <li>Google uses cookies (like the DART cookie) to serve ads based on users' interests.</li>
              <li>
                Users can opt out of personalized ads: 
                <Link 
                  href="https://adssettings.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  https://adssettings.google.com/
                </Link>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Protection</h2>
            <p className="text-gray-700">
              We take reasonable security steps to prevent unauthorized access or misuse of data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700">
              We are not responsible for privacy practices on other websites linked from ours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
            <p className="text-gray-700">
              You can request access, corrections, or deletion of your data, or disable cookies in your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Updates</h2>
            <p className="text-gray-700">
              We may update this page and will post changes with a new date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
            <address className="not-italic text-gray-700">
              <p className="font-medium">Bridges Web Solutions</p>
              <p>
                Email: 
                <Link 
                  href="mailto:bridges.cybersec@gmail.com" 
                  className="text-blue-600 hover:underline"
                >
                  bridges.cybersec@gmail.com
                </Link>
              </p>
              <p>
                Website: 
                <Link 
                  href="https://bridgeswebsolutions.top" 
                  className="text-blue-600 hover:underline"
                >
                  https://bridgeswebsolutions.top
                </Link>
              </p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
