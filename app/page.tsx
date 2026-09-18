
'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import DigitalSystems from '../components/DigitalSystems';
import NewServices from '../components/NewServices';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import SolutionConfigurator from '../components/SolutionConfigurator';
import CommandPalette from '../components/CommandPalette';
import BrandSignal from '../components/BrandSignal';
import CursorGlow from '../components/CursorGlow';

export default function Home() {
  return (
    <>
      <Navigation />
      <CursorGlow />
      <main className="min-h-screen overflow-x-hidden w-full">
        <Hero />
        <BrandSignal />
        <ClientLogos />
        <DigitalSystems />
        <NewServices />
        <SolutionConfigurator />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
        <Footer />
        <LiveChat />
        <CommandPalette />
      </main>
    </>
  );
}
