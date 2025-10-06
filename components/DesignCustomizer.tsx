'use client';

import { useState, useEffect } from 'react';

interface DesignTheme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  industry: string;
}

interface LayoutStyle {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export default function DesignCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [selectedLayout, setSelectedLayout] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const themes: DesignTheme[] = [
    {
      id: 'professional',
      name: 'Professional Blue',
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      backgroundColor: '#F8FAFC',
      textColor: '#1F2937',
      accentColor: '#10B981',
      industry: 'Corporate'
    },
    {
      id: 'creative',
      name: 'Creative Purple',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      backgroundColor: '#FAFAFA',
      textColor: '#374151',
      accentColor: '#F59E0B',
      industry: 'Creative'
    },
    {
      id: 'restaurant',
      name: 'Restaurant Warm',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      backgroundColor: '#FFFBEB',
      textColor: '#92400E',
      accentColor: '#059669',
      industry: 'Food & Beverage'
    },
    {
      id: 'health',
      name: 'Health Green',
      primaryColor: '#059669',
      secondaryColor: '#047857',
      backgroundColor: '#F0FDF4',
      textColor: '#1F2937',
      accentColor: '#3B82F6',
      industry: 'Healthcare'
    },
    {
      id: 'fashion',
      name: 'Fashion Pink',
      primaryColor: '#EC4899',
      secondaryColor: '#DB2777',
      backgroundColor: '#FDF2F8',
      textColor: '#831843',
      accentColor: '#8B5CF6',
      industry: 'Fashion'
    }
  ];

  const layouts: LayoutStyle[] = [
    {
      id: 'modern',
      name: 'Modern Minimal',
      description: 'Clean lines, lots of white space',
      icon: 'ri-layout-line'
    },
    {
      id: 'classic',
      name: 'Classic Business',
      description: 'Traditional, professional layout',
      icon: 'ri-layout-2-line'
    },
    {
      id: 'creative',
      name: 'Creative Bold',
      description: 'Unique, eye-catching design',
      icon: 'ri-layout-3-line'
    },
    {
      id: 'magazine',
      name: 'Magazine Style',
      description: 'Content-rich, editorial layout',
      icon: 'ri-layout-4-line'
    }
  ];

  const currentTheme = themes[selectedTheme];
  const currentLayout = layouts[selectedLayout];

  const handleThemeChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTheme(index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-palette-line"></i>
            Interactive Design Studio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customize Your Website Design
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See your website come to life! Choose colors, layouts, and styles to match your brand perfectly.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customization Controls */}
            <div className="lg:col-span-1 space-y-6">
              {/* Theme Selection */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-palette-line text-purple-400"></i>
                  Color Themes
                </h3>
                <div className="space-y-3">
                  {themes.map((theme, index) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(index)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedTheme === index
                          ? 'border-purple-400 bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                          : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.primaryColor }}
                          ></div>
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.secondaryColor }}
                          ></div>
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.accentColor }}
                          ></div>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">{theme.name}</div>
                          <div className="text-sm text-gray-400">{theme.industry}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Selection */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-layout-line text-blue-400"></i>
                  Layout Styles
                </h3>
                <div className="space-y-3">
                  {layouts.map((layout, index) => (
                    <button
                      key={layout.id}
                      onClick={() => setSelectedLayout(index)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedLayout === index
                          ? 'border-blue-400 bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                          : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <i className={`${layout.icon} text-xl ${selectedLayout === index ? 'text-blue-400' : 'text-gray-400'}`}></i>
                        <div>
                          <div className="font-semibold text-white">{layout.name}</div>
                          <div className="text-sm text-gray-400">{layout.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/254104613770?text=Hi! I love the ${currentTheme.name} theme with ${currentLayout.name} layout. Can we discuss building my website with this design?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  I Love This Design!
                </a>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <i className="ri-download-line text-xl"></i>
                  Download Design Mockup
                </button>
              </div>
            </div>

            {/* Live Preview */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <i className="ri-eye-line text-green-400"></i>
                    Live Preview
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Real-time updates
                  </div>
                </div>

                {/* Website Preview */}
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                    {/* Browser Bar */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                        yourbusiness.co.ke
                      </div>
                    </div>

                    {/* Website Content */}
                    <div style={{ backgroundColor: currentTheme.backgroundColor }}>
                      {/* Header */}
                      <div 
                        className="px-8 py-6"
                        style={{ backgroundColor: currentTheme.primaryColor }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-white font-bold text-xl">Your Business</div>
                          <div className="flex gap-4 text-white text-sm">
                            <span>Home</span>
                            <span>About</span>
                            <span>Services</span>
                            <span>Contact</span>
                          </div>
                        </div>
                      </div>

                      {/* Hero Section */}
                      <div className="px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div>
                            <h1 
                              className="text-3xl font-bold mb-4"
                              style={{ color: currentTheme.textColor }}
                            >
                              Welcome to Your Business
                            </h1>
                            <p 
                              className="mb-6 opacity-80"
                              style={{ color: currentTheme.textColor }}
                            >
                              Professional services that help your business grow and succeed in the digital world.
                            </p>
                            <button 
                              className="px-6 py-3 rounded-lg text-white font-semibold"
                              style={{ backgroundColor: currentTheme.accentColor }}
                            >
                              Get Started
                            </button>
                          </div>
                          <div 
                            className="h-48 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: currentTheme.secondaryColor + '20' }}
                          >
                            <i 
                              className="ri-image-line text-4xl"
                              style={{ color: currentTheme.secondaryColor }}
                            ></i>
                          </div>
                        </div>
                      </div>

                      {/* Features Section */}
                      <div className="px-8 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[1, 2, 3].map((item) => (
                            <div 
                              key={item}
                              className="p-6 rounded-lg"
                              style={{ backgroundColor: currentTheme.primaryColor + '10' }}
                            >
                              <div 
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{ backgroundColor: currentTheme.accentColor }}
                              >
                                <i className="ri-star-line text-white text-xl"></i>
                              </div>
                              <h3 
                                className="font-semibold mb-2"
                                style={{ color: currentTheme.textColor }}
                              >
                                Feature {item}
                              </h3>
                              <p 
                                className="text-sm opacity-80"
                                style={{ color: currentTheme.textColor }}
                              >
                                Description of this amazing feature that helps your business.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design Info */}
                <div className="mt-6 p-4 bg-slate-800/40 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{currentTheme.name}</div>
                      <div className="text-gray-400 text-sm">{currentLayout.name} Layout</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-400 text-sm">Perfect for:</div>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {currentTheme.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
