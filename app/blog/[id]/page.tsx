import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import SEOHead from '../../../components/SEOHead';
import Link from 'next/link';
import BlogPostContent from '../../../components/BlogPostContent';

import { blogPosts } from '../../../lib/blogData';

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Return all possible blog post IDs dynamically
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);

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
      <SEOHead
        title={post ? post.title : "Blog Post Not Found"}
        description={post ? post.excerpt : "Blog post not found"}
        keywords={post ? post.tags.join(', ') : ""}
        canonicalUrl={`https://your-domain.com/blog/${postId}`}
        ogImage={post ? post.image : ""}
        ogType="article"
        publishedTime={post ? new Date(post.date).toISOString() : ""}
        author={post ? post.author : ""}
        category={post ? post.category : ""}
        tags={post ? post.tags : []}
      />
      <Navigation />
      <main className="min-h-screen">
        <BlogPostContent post={post} relatedPosts={relatedPosts} />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
