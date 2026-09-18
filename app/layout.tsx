import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { brand } from '../lib/brand';

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: { default: `${brand.name} | Software, Security & Digital Solutions`, template: `%s | ${brand.name}` },
  description: brand.description,
  keywords: ["software development Kenya", "business systems", "CCTV security solutions", "IT networking", "web development Nairobi", "digital marketing", "technology consultancy"],
  authors: [{ name: brand.name }],
  openGraph: {
    title: `${brand.name} | Software, Security & Digital Solutions`,
    description: brand.description,
    url: brand.siteUrl,
    siteName: brand.name,
    locale: "en_KE",
    type: "website",
    images: [{ url: brand.banner, width: 2056, height: 765, alt: `${brand.name} — ${brand.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Software, Security & Digital Solutions`,
    description: brand.description,
    images: [brand.banner],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '-eFwouyGKX0L3DanhNe2VcAI97Skv-mO7Jld-P2p82c', // Add your Google Search Console verification code here
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE', // Optional: Add Yandex verification code if needed
  },
  alternates: {
    canonical: brand.siteUrl,
  },
};

// JSON-LD Schema for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": brand.name,
  "url": brand.siteUrl,
  "logo": `${brand.siteUrl}${brand.logo}`,
  "description": brand.description,
  "knowsAbout": ["Software Development", "Business Systems", "CCTV & Security Solutions", "IT & Networking", "Digital Marketing", "Technology Consultancy"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254104613770",
    "contactType": "customer service",
    "email": brand.email,
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [`https://wa.me/${brand.whatsapp}`]
};

// Add this type definition for JSON-LD
interface JsonLdProps {
  data: any;
}

// JSON-LD Component
function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDFTH2H9');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
          data-ad-client="ca-pub-7752239683582941"
          crossOrigin="anonymous"
          async
        />
        
        <JsonLd data={jsonLd} />
        <link rel="canonical" href={brand.siteUrl} />
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />
        <meta name="google-adsense-account" content="ca-pub-7752239683582941" />
        
        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)));}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D4VVHHRC77U5H3D99GJG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDFTH2H9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
