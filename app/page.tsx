
'use client';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
