'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedGradientBg from './AnimatedGradientBg';

export default function DigitalSystems() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const systems = [
    {
      icon: 'ri-store-3-line',
      title: 'E-commerce & POS Systems',
      description: 'Integrated inventory, automated M-Pesa checkouts, and multi-store synchronization for modern retailers.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: 'ri-school-line',
      title: 'School Management Portals',
      description: 'Streamline student records, fee tracking, grading, and parent communications all in one platform.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Booking & Scheduling',
      description: 'Automate appointments for clinics, salons, and consultants with SMS reminders and deposit payments.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: 'ri-building-4-line',
      title: 'Real Estate & Property',
      description: 'Manage tenant billing, maintenance requests, and property listings with customized dashboards.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Healthcare & Clinic Systems',
      description: 'Secure patient records, prescription tracking, and appointment management for medical facilities.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: 'ri-database-2-line',
      title: 'Custom Dashboards',
      description: 'Real-time analytics, API integrations, and reporting tailored exactly to your operational needs.',
      gradient: 'from-violet-500 to-fuchsia-600',
    }
  ];

  if (!mounted) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <AnimatedGradientBg variant="mesh" opacity={0.15} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Beyond Web Design
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital Systems for Kenyan Businesses
            </h2>
            <p className="text-xl text-slate-300">
              We build custom software solutions and infrastructure to automate your daily operations, manage data securely, and scale your impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${system.gradient} mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${system.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {system.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {system.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Explore All Solutions</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
