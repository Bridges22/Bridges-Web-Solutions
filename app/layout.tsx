import type { Metadata } from "next";
import { Inter, Roboto_Mono, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridges Web Solutions | Professional Web Design & Development in Kenya",
  description: "Kenya's leading web design & development agency. We create fast, beautiful, and results-driven websites that help businesses grow. Get your free quote today!",
  keywords: ["web design Kenya", "website development Nairobi", "affordable websites Kenya", "professional web design", "ecommerce websites"],
  authors: [{ name: "Bridges Web Solutions" }],
  openGraph: {
    title: "Bridges Web Solutions | Professional Web Design & Development",
    description: "Transform your online presence with our custom web design and development services in Kenya. Mobile-friendly, fast, and affordable websites.",
    url: "https://bridgeswebsolutions.top",
    siteName: "Bridges Web Solutions",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridges Web Solutions | Web Design & Development",
    description: "Professional web design and development services in Kenya. Let's build something amazing together!",
    creator: "@BridgesWebKE",
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
    canonical: 'https://bridgeswebsolutions.top',
  },
};

// JSON-LD Schema for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bridges Web Solutions",
  "url": "https://bridgeswebsolutions.top",
  "logo": "https://bridgeswebsolutions.top/logo.png",
  "description": "Professional web design and development services in Kenya, creating beautiful and functional websites for businesses of all sizes.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254XXXXXXXXX",
    "contactType": "customer service",
    "email": "info@bridgeswebsolutions.top",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://facebook.com/bridgeswebsolutions",
    "https://twitter.com/bridgeswebsolutions",
    "https://www.linkedin.com/company/bridgeswebsolutions",
    "https://www.instagram.com/bridgeswebsolutions"
  ]
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
        <link rel="canonical" href="https://bridgeswebsolutions.top" />
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
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
