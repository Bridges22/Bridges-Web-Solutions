
'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LiveChat from '../components/LiveChat';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden w-full">
        <Hero />
        <ClientLogos />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
        <Footer />
        <WhatsAppButton />
        <LiveChat />
      </main>
    </>
  );
}
