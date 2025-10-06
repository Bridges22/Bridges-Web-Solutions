'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://your-domain.com/og-image.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'Bridges Ochieng',
  category,
  tags = []
}: SEOHeadProps) {
  const fullTitle = title.includes('Bridges Web Solutions') ? title : `${title} | Bridges Web Solutions - Kenya's Premier Web Development`;
  const baseUrl = 'https://your-domain.com';
  const fullCanonicalUrl = canonicalUrl || baseUrl;

  // Generate structured data for articles
  const structuredData = ogType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": author,
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bridges Web Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      },
      "url": baseUrl,
      "sameAs": [
        "https://wa.me/254104613770"
      ]
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl
    },
    "articleSection": category,
    "keywords": tags.join(', '),
    "inLanguage": "en-KE",
    "isAccessibleForFree": true
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bridges Web Solutions",
    "description": "Kenya's Premier Web Development Agency - Professional Websites, E-commerce, SEO Services in Nairobi",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://wa.me/254104613770"
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Bridges Web Solutions" />
      <meta property="og:locale" content="en_KE" />
      
      {/* Article specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@BridgesWebKE" />
      <meta name="twitter:site" content="@BridgesWebKE" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Bridges Web Solutions" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-KE" />
      <meta name="language" content="English" />
      <meta name="country" content="Kenya" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional Business Structured Data for Local SEO */}
      {ogType === 'website' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bridges Web Solutions",
              "description": "Professional Web Development Services in Kenya - Custom Websites, E-commerce, SEO",
              "url": baseUrl,
              "telephone": "+254104613770",
              "email": "bridges.cybersec@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.286389,
                "longitude": 36.817223
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Kenya"
                },
                {
                  "@type": "City",
                  "name": "Nairobi"
                }
              ],
              "serviceType": [
                "Web Development",
                "Website Design",
                "E-commerce Development",
                "SEO Services",
                "Digital Marketing"
              ],
              "priceRange": "KSh 45,000 - KSh 150,000",
              "openingHours": "Mo-Fr 08:00-18:00",
              "sameAs": [
                "https://wa.me/254104613770"
              ]
            })
          }}
        />
      )}
    </Head>
  );
}
