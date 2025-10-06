'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'SEO Tips', 'Business Growth', 'Design Trends', 'E-commerce'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Essential Features Every Business Website Needs in 2024',
      excerpt: 'Discover the must-have features that will make your business website stand out and convert more visitors into customers.',
      content: 'Full blog content here...',
      category: 'Web Development',
      author: 'Bridges Ochieng',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      tags: ['Website Features', 'Business', 'Conversion'],
      featured: true
    },
    {
      id: 2,
      title: 'How to Improve Your Website\'s SEO: A Complete Guide for Kenyan Businesses',
      excerpt: 'Learn proven SEO strategies that will help your business rank higher on Google and attract more local customers.',
      content: 'Full blog content here...',
      category: 'SEO Tips',
      author: 'Bridges Ochieng',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      tags: ['SEO', 'Local Business', 'Google Rankings'],
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Success: 5 Ways a Professional Website Boosts Online Sales',
      excerpt: 'Discover how investing in a professional e-commerce website can dramatically increase your online revenue and customer satisfaction.',
      content: 'Full blog content here...',
      category: 'E-commerce',
      author: 'Bridges Ochieng',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tags: ['E-commerce', 'Online Sales', 'Revenue Growth'],
      featured: false
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why Your Website Must Work Perfectly on Phones',
      excerpt: 'With over 60% of web traffic coming from mobile devices, learn why mobile-first design is crucial for your business success.',
      content: 'Full blog content here...',
      category: 'Design Trends',
      author: 'Bridges Ochieng',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      tags: ['Mobile Design', 'User Experience', 'Responsive'],
      featured: false
    },
    {
      id: 5,
      title: 'Website Speed Optimization: How Fast Loading Boosts Your Business',
      excerpt: 'Learn why website speed matters for your business and discover practical tips to make your site load faster.',
      content: 'Full blog content here...',
      category: 'Web Development',
      author: 'Bridges Ochieng',
      date: '2023-12-20',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      tags: ['Performance', 'Speed Optimization', 'User Experience'],
      featured: false
    },
    {
      id: 6,
      title: 'Small Business Website Checklist: 15 Things You Can\'t Afford to Miss',
      excerpt: 'Ensure your small business website has everything it needs to succeed with this comprehensive checklist.',
      content: 'Full blog content here...',
      category: 'Business Growth',
      author: 'Bridges Ochieng',
      date: '2023-12-15',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      tags: ['Small Business', 'Website Checklist', 'Business Tips'],
      featured: false
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Web Development{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert tips, industry insights, and practical guides to help your business succeed online. Stay ahead with the latest web development trends and strategies.
              </p>
              
              {/* Blog Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Articles Published</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-gray-300">Monthly Readers</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Weekly</div>
                  <div className="text-gray-300">New Content</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful articles to help grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">B</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{post.author}</div>
                          <div className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString()}</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Browse our complete collection of web development insights and business growth tips.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg border border-cyan-400/50'
                        : 'bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-gray-300 hover:text-white border border-slate-600/50 hover:border-cyan-400/30 hover:bg-slate-700/60'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-xs">
                        {new Date(post.date).toLocaleDateString()}
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300 flex items-center gap-1"
                      >
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
