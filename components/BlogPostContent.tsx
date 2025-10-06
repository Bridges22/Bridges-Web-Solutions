'use client';

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

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  return (
    <>
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
                    href={`https://wa.me/?text=Check out this helpful article: ${post.title} - ${typeof window !== 'undefined' ? window.location.href : ''}`}
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
