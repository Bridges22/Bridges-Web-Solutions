import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import SEOHead from '../../../components/SEOHead';
import Link from 'next/link';
import BlogPostContent from '../../../components/BlogPostContent';

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Return all possible blog post IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
  ];
}

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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);

  // SEO-optimized blog posts data targeting Kenyan market
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Best Web Design Company in Nairobi Kenya - Complete 2024 Guide',
      excerpt: 'Looking for the best web design company in Nairobi? Discover what makes a great web development partner and how to choose the right agency for your business in Kenya.',
      content: `
        <p>Looking for the <strong>best web design company in Nairobi</strong>? You're not alone. With Kenya's digital economy growing rapidly, choosing the right web development partner can make or break your business success online.</p>

        <p>In this comprehensive guide, we'll explore what makes a great web design company in Kenya and how to choose the perfect partner for your business needs.</p>

        <h2>Why Your Business Needs a Professional Website in Kenya</h2>
        <p>Kenya's internet penetration has reached <strong>89.4%</strong> in 2024, with over <strong>47 million</strong> Kenyans online. This presents massive opportunities for businesses to:</p>
        <ul>
          <li><strong>Reach new customers</strong> across Kenya and beyond</li>
          <li><strong>Build credibility</strong> with professional online presence</li>
          <li><strong>Increase sales</strong> through e-commerce and online marketing</li>
          <li><strong>Compete effectively</strong> with established businesses</li>
        </ul>

        <h2>What Makes the Best Web Design Company in Nairobi?</h2>

        <h3>1. Local Market Understanding</h3>
        <p>The best web design companies in Kenya understand:</p>
        <ul>
          <li><strong>Kenyan consumer behavior</strong> and preferences</li>
          <li><strong>Local payment systems</strong> (M-Pesa, Airtel Money, etc.)</li>
          <li><strong>Mobile-first approach</strong> (80% of Kenyans access internet via mobile)</li>
          <li><strong>Local SEO strategies</strong> for Google Kenya</li>
        </ul>

        <h3>2. Comprehensive Services</h3>
        <p>Top web design companies in Nairobi offer:</p>
        <ul>
          <li><strong>Custom website design</strong> and development</li>
          <li><strong>E-commerce solutions</strong> with local payment integration</li>
          <li><strong>Search Engine Optimization (SEO)</strong> for Google Kenya</li>
          <li><strong>Digital marketing</strong> services</li>
          <li><strong>Website maintenance</strong> and support</li>
        </ul>

        <h2>How Much Does Web Design Cost in Kenya?</h2>

        <h3>Basic Business Website</h3>
        <ul>
          <li><strong>Price Range</strong>: KSh 30,000 - KSh 60,000</li>
          <li><strong>Features</strong>: 5-10 pages, contact forms, basic SEO</li>
          <li><strong>Timeline</strong>: 2-3 weeks</li>
        </ul>

        <h3>Professional Business Website</h3>
        <ul>
          <li><strong>Price Range</strong>: KSh 60,000 - KSh 120,000</li>
          <li><strong>Features</strong>: Custom design, CMS, advanced SEO</li>
          <li><strong>Timeline</strong>: 3-4 weeks</li>
        </ul>

        <h3>E-commerce Website</h3>
        <ul>
          <li><strong>Price Range</strong>: KSh 100,000 - KSh 300,000</li>
          <li><strong>Features</strong>: Online store, M-Pesa integration</li>
          <li><strong>Timeline</strong>: 4-8 weeks</li>
        </ul>

        <h2>Why Choose Bridges Web Solutions?</h2>
        <p>As Kenya's leading web development agency, we offer:</p>
        <ul>
          <li><strong>Transparent pricing</strong> starting from KSh 45,000</li>
          <li><strong>Fast delivery</strong> (2-4 weeks typical turnaround)</li>
          <li><strong>Local expertise</strong> with international standards</li>
          <li><strong>SEO-optimized</strong> websites that rank on Google Kenya</li>
          <li><strong>M-Pesa integration</strong> for e-commerce sites</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Choosing the right web design company in Nairobi is crucial for your business success online. The best companies combine technical expertise with local market knowledge to create websites that drive real results.</p>

        <p>Ready to build a professional website for your business? <a href="/contact" class="text-cyan-400 hover:text-cyan-300">Contact Bridges Web Solutions</a> for a free consultation and discover how we can transform your online presence.</p>
      `,
      category: 'Web Development',
      author: 'Bridges Ochieng',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      tags: ['Web Design Nairobi', 'Kenya Web Development', 'Best Web Company']
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
