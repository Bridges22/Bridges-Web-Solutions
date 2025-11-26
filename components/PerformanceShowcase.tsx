'use client';

import { useState, useEffect } from 'react';

interface PerformanceMetric {
  id: string;
  website: string;
  domain: string;
  loadTime: number;
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  industry: string;
  location: string;
}

export default function PerformanceShowcase() {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulated real-time performance data
  const performanceData: PerformanceMetric[] = [
    {
      id: '1',
      website: 'Kombani Joint Restaurant',
      domain: 'kombanijoint.co.ke',
      loadTime: 1.2,
      performanceScore: 98,
      seoScore: 95,
      accessibilityScore: 100,
      bestPracticesScore: 92,
      industry: 'Restaurant',
      location: 'Kombani, Waa, Matuga, Kwale, Coast, Kenya'
    },
    {
      id: '2',
      website: 'MOM3NTUM Gym',
      domain: 'www.mom3ntum.com',
      loadTime: 0.9,
      performanceScore: 96,
      seoScore: 98,
      accessibilityScore: 94,
      bestPracticesScore: 100,
      industry: 'Fitness',
      location: 'Nairobi, Kenya'
    },
    {
      id: '3',
      website: 'Shamiz Designers Boutique',
      domain: 'www.shamizdesigner.co.ke',
      loadTime: 1.1,
      performanceScore: 94,
      seoScore: 96,
      accessibilityScore: 98,
      bestPracticesScore: 95,
      industry: 'Fashion',
      location: 'Bamburi and Diani, Kenya'
    }
  ];

  // Auto-rotate through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedMetric((prev) => (prev + 1) % performanceData.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentMetric = performanceData[selectedMetric];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'from-green-500/20 to-emerald-500/20 border-green-400/30';
    if (score >= 70) return 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30';
    return 'from-red-500/20 to-pink-500/20 border-red-400/30';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-speed-line animate-spin"></i>
            Live Performance Metrics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-Time Website Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our websites perform in the real world. These are live metrics from actual client websites.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Website Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {performanceData.map((metric, index) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedMetric === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 border border-slate-600/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  {metric.website}
                </div>
              </button>
            ))}
          </div>

          {/* Performance Dashboard */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentMetric.website}</h3>
                  <div className="flex items-center gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <i className="ri-global-line"></i>
                      {currentMetric.domain}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      {currentMetric.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="ri-building-line"></i>
                      {currentMetric.industry}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live Data
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Load Time */}
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-timer-line text-2xl text-blue-400"></i>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Load Time</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{currentMetric.loadTime}s</div>
                  <div className="text-green-400 text-sm font-semibold">Excellent</div>
                </div>

                {/* Performance Score */}
                <div className={`bg-gradient-to-r ${getScoreBg(currentMetric.performanceScore)} rounded-xl p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-speed-line text-2xl text-green-400"></i>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Performance</span>
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${getScoreColor(currentMetric.performanceScore)}`}>
                    {currentMetric.performanceScore}
                  </div>
                  <div className="text-green-400 text-sm font-semibold">Outstanding</div>
                </div>

                {/* SEO Score */}
                <div className={`bg-gradient-to-r ${getScoreBg(currentMetric.seoScore)} rounded-xl p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-search-eye-line text-2xl text-green-400"></i>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">SEO</span>
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${getScoreColor(currentMetric.seoScore)}`}>
                    {currentMetric.seoScore}
                  </div>
                  <div className="text-green-400 text-sm font-semibold">Optimized</div>
                </div>

                {/* Accessibility */}
                <div className={`bg-gradient-to-r ${getScoreBg(currentMetric.accessibilityScore)} rounded-xl p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-wheelchair-line text-2xl text-green-400"></i>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Accessibility</span>
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${getScoreColor(currentMetric.accessibilityScore)}`}>
                    {currentMetric.accessibilityScore}
                  </div>
                  <div className="text-green-400 text-sm font-semibold">Perfect</div>
                </div>
              </div>

              {/* Performance Comparison */}
              <div className="bg-slate-800/40 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <i className="ri-bar-chart-line text-cyan-400"></i>
                  Industry Comparison
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">3x</div>
                    <div className="text-gray-300 text-sm">Faster than average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
                    <div className="text-gray-300 text-sm">Better performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">Top 5%</div>
                    <div className="text-gray-300 text-sm">Global ranking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Want your website to perform like this?</p>
            <a
              href="https://wa.me/254104613770?text=Hi! I saw the performance showcase and I'm impressed. I want my website to perform like that too!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Get High-Performance Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
