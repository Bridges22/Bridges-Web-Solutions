import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Bridges Web Solutions',
  description: 'Read the terms and conditions for using Bridges Web Solutions website and services. Learn about our policies, intellectual property, and user responsibilities.',
};

export default function TermsAndConditions() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600 mb-2">Effective Date: October 7, 2025</p>
          <p className="text-gray-600 mb-8">Website: <Link href="https://www.bridgeswebsolutions.top" className="text-blue-600 hover:underline">www.bridgeswebsolutions.top</Link></p>
          
          <p className="mb-6 text-gray-700">
            Welcome to Bridges Web Solutions. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our website.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using this website, you confirm that you are at least 18 years old and agree to these Terms and Conditions. If you do not agree, please discontinue using the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Services</h2>
            <p className="text-gray-700">
              Bridges Web Solutions provides web development, design, hosting setup, and related digital services. All services are subject to availability and may change at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Payments</h2>
            <p className="text-gray-700">
              Payments for services must be made in full as agreed before project delivery unless otherwise stated in a written contract. Late or incomplete payments may delay project timelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700">
              All website content, including text, graphics, logos, and code, is owned by Bridges Web Solutions or its partners. You may not reproduce, distribute, or use any content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Use the website for unlawful purposes.</li>
              <li>Upload malicious code or attempt to gain unauthorized access.</li>
              <li>Misuse contact forms or automated systems.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Disclaimer</h2>
            <p className="text-gray-700">
              All content and services are provided "as is." Bridges Web Solutions makes no warranties, expressed or implied, regarding accuracy, reliability, or suitability for any purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              Bridges Web Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Advertising & Google AdSense</h2>
            <p className="text-gray-700">
              This website may display ads provided by Google AdSense. Google may collect and use data in accordance with its Privacy Policy. By using this website, you consent to such data collection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms and Conditions at any time. Changes will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-700">If you have any questions about these Terms, please contact us:</p>
            <address className="not-italic mt-2 text-gray-700">
              <p>Email: <Link href="mailto:bridges.cybersec@gmail.com" className="text-blue-600 hover:underline">bridges.cybersec@gmail.com</Link></p>
              <p>Phone: <Link href="tel:+254705784274" className="text-blue-600 hover:underline">+254705784274</Link></p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
