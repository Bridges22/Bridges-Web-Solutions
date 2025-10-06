'use client';

import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  excerpt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);

  // Sample blog posts data (in a real app, this would come from a CMS or API)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Essential Features Every Business Website Needs in 2024',
      excerpt: 'Discover the must-have features that will make your business website stand out and convert more visitors into customers.',
      content: `
        <p>In today's digital landscape, having a website isn't enough – you need a website that works for your business. After building websites for over 50 businesses across Kenya, I've identified the essential features that separate successful business websites from the rest.</p>

        <h2>1. Mobile-First Responsive Design</h2>
        <p>With over 60% of web traffic coming from mobile devices in Kenya, your website must work perfectly on smartphones and tablets. A mobile-first approach ensures your site loads quickly and looks great on any device.</p>

        <h2>2. Fast Loading Speed</h2>
        <p>Studies show that 40% of visitors will leave a website that takes more than 3 seconds to load. We optimize every website for speed using:</p>
        <ul>
          <li>Image compression and optimization</li>
          <li>Efficient code structure</li>
          <li>Content delivery networks (CDN)</li>
          <li>Browser caching</li>
        </ul>

        <h2>3. Clear Call-to-Action Buttons</h2>
        <p>Your website should guide visitors toward taking action. Whether it's "Contact Us," "Get a Quote," or "Shop Now," your CTAs should be prominent and compelling.</p>

        <h2>4. Contact Information and Forms</h2>
        <p>Make it easy for customers to reach you with:</p>
        <ul>
          <li>Prominent phone number and WhatsApp integration</li>
          <li>Contact forms that actually work</li>
          <li>Physical address and Google Maps integration</li>
          <li>Business hours clearly displayed</li>
        </ul>

        <h2>5. Professional Photography and Visuals</h2>
        <p>High-quality images build trust and showcase your products or services effectively. Avoid generic stock photos – use real images of your business, team, and work.</p>

        <h2>6. Customer Testimonials and Reviews</h2>
        <p>Social proof is crucial for building trust. Display genuine customer testimonials, reviews, and case studies prominently on your website.</p>

        <h2>7. Search Engine Optimization (SEO)</h2>
        <p>Your website needs to be found on Google. Essential SEO elements include:</p>
        <ul>
          <li>Optimized page titles and descriptions</li>
          <li>Local SEO for Kenyan businesses</li>
          <li>Fast loading speeds</li>
          <li>Mobile-friendly design</li>
        </ul>

        <h2>8. Security Features</h2>
        <p>Protect your business and customers with:</p>
        <ul>
          <li>SSL certificates (https://)</li>
          <li>Regular security updates</li>
          <li>Secure hosting</li>
          <li>Data protection compliance</li>
        </ul>

        <h2>9. Analytics and Tracking</h2>
        <p>Understand your website's performance with Google Analytics integration to track:</p>
        <ul>
          <li>Visitor behavior and demographics</li>
          <li>Popular pages and content</li>
          <li>Conversion rates</li>
          <li>Traffic sources</li>
        </ul>

        <h2>10. Easy Content Management</h2>
        <p>You should be able to update your website content easily. We provide user-friendly content management systems and training so you can:</p>
        <ul>
          <li>Update text and images</li>
          <li>Add new products or services</li>
          <li>Post news and updates</li>
          <li>Manage customer inquiries</li>
        </ul>

        <h2>Conclusion</h2>
        <p>A successful business website combines all these elements to create a powerful tool for growth. If your current website is missing any of these features, it might be time for an upgrade.</p>

        <p>Ready to build a website that drives real results for your business? <a href="/contact" class="text-cyan-400 hover:text-cyan-300">Contact us today</a> for a free consultation and quote.</p>
      `,
      category: 'Web Development',
      author: 'Bridges Ochieng',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      tags: ['Website Features', 'Business', 'Conversion']
    },
    {
      id: 2,
      title: 'How to Improve Your Website\'s SEO: A Complete Guide for Kenyan Businesses',
      excerpt: 'Learn proven SEO strategies that will help your business rank higher on Google and attract more local customers.',
      content: `
        <p>Search Engine Optimization (SEO) is crucial for Kenyan businesses looking to attract more customers online. This comprehensive guide will help you understand and implement effective SEO strategies.</p>

        <h2>Understanding SEO for Kenyan Businesses</h2>
        <p>SEO helps your website appear higher in Google search results when potential customers search for your products or services. For Kenyan businesses, local SEO is particularly important.</p>

        <h2>1. Keyword Research for Local Markets</h2>
        <p>Start by identifying what your customers are searching for:</p>
        <ul>
          <li>Use tools like Google Keyword Planner</li>
          <li>Focus on location-based keywords (e.g., "web design Nairobi")</li>
          <li>Include Swahili terms where relevant</li>
          <li>Research competitor keywords</li>
        </ul>

        <h2>2. Optimize Your Google My Business Profile</h2>
        <p>This is crucial for local SEO in Kenya:</p>
        <ul>
          <li>Claim and verify your Google My Business listing</li>
          <li>Add accurate business information</li>
          <li>Upload high-quality photos</li>
          <li>Encourage customer reviews</li>
          <li>Post regular updates</li>
        </ul>

        <h2>3. Create Location-Specific Content</h2>
        <p>Develop content that resonates with Kenyan audiences:</p>
        <ul>
          <li>Write about local events and news</li>
          <li>Create city-specific landing pages</li>
          <li>Use local case studies and examples</li>
          <li>Include Kenyan cultural references</li>
        </ul>

        <h2>4. Technical SEO Essentials</h2>
        <p>Ensure your website meets technical requirements:</p>
        <ul>
          <li>Fast loading speeds (crucial for mobile users)</li>
          <li>Mobile-friendly design</li>
          <li>SSL certificate (https://)</li>
          <li>XML sitemap</li>
          <li>Proper URL structure</li>
        </ul>

        <h2>5. Content Marketing Strategy</h2>
        <p>Regular, valuable content helps improve rankings:</p>
        <ul>
          <li>Start a business blog</li>
          <li>Answer common customer questions</li>
          <li>Share industry insights</li>
          <li>Create how-to guides</li>
        </ul>

        <h2>Measuring SEO Success</h2>
        <p>Track your progress with:</p>
        <ul>
          <li>Google Analytics</li>
          <li>Google Search Console</li>
          <li>Local ranking tracking</li>
          <li>Website traffic growth</li>
        </ul>

        <p>Need help implementing these SEO strategies? <a href="/contact" class="text-cyan-400 hover:text-cyan-300">Contact us</a> for professional SEO services tailored to Kenyan businesses.</p>
      `,
      category: 'SEO Tips',
      author: 'Bridges Ochieng',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      tags: ['SEO', 'Local Business', 'Google Rankings']
    }
  ];

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post.category).slice(0, 2);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">{post.author}</div>
                    <div className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: '#e2e8f0',
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-slate-700/50">
                <span className="text-gray-400 font-semibold">Tags:</span>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mt-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Found this helpful?</h3>
                  <p className="text-gray-300 mb-6">Share this article with others who might benefit from it.</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={`https://wa.me/?text=Check out this helpful article: ${post.title} - ${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <i className="ri-whatsapp-line"></i>
                      Share on WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <i className="ri-chat-3-line"></i>
                      Get Help
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                  Related Articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                            {relatedPost.category}
                          </span>
                          <span className="text-gray-400 text-xs">{relatedPost.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {relatedPost.excerpt}
                        </p>

                        <Link
                          href={`/blog/${relatedPost.id}`}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300 flex items-center gap-1"
                        >
                          Read More
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/blog"
                    className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                  >
                    View All Articles
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
        <WhatsAppButton />
      </main>

      <style jsx global>{`
        .prose h2 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .prose ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose a {
          color: #22d3ee;
          text-decoration: none;
        }
        .prose a:hover {
          color: #67e8f9;
        }
      `}</style>
    </>
  );
}
