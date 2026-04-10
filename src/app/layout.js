import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'Elite Mobile Auto Repair LLC - Mobile Mechanic Morris County NJ',
    template: '%s | Elite Mobile Auto Repair'
  },
  description: 'Professional mobile auto repair services in Morris County NJ. We come to your location for brake service, oil changes, diagnostics, and emergency repairs. 5.0-star rated mobile mechanics.',
  keywords: [
    'mobile auto repair',
    'mobile mechanic',
    'Morris County auto repair',
    'mobile brake service',
    'mobile oil change',
    'car repair at home',
    'roadside auto repair',
    'New Jersey mobile mechanic',
    'emergency auto repair',
    'mobile car service'
  ],
  authors: [{ name: 'Elite Mobile Auto Repair LLC' }],
  creator: 'Elite Mobile Auto Repair LLC',
  publisher: 'Elite Mobile Auto Repair LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.elitemobileautorepair.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.elitemobileautorepair.online',
    siteName: 'Elite Mobile Auto Repair LLC',
    title: 'Elite Mobile Auto Repair - Professional Mobile Mechanics in Morris County NJ',
    description: 'Expert mobile auto repair services at your location. Brake service, oil changes, diagnostics, and emergency repairs throughout Morris County and Northern NJ.',
    images: [
      {
        url: '/mobile-mechanic-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Mobile Auto Repair - Professional mobile mechanic at work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Mobile Auto Repair - Mobile Mechanic Morris County NJ',
    description: 'Professional mobile auto repair services at your location. 5.0-star rated mobile mechanics serving Morris County and Northern New Jersey.',
    images: ['/mobile-mechanic-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Auto Repair Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Elite Mobile Auto Repair LLC",
              "description": "Professional mobile auto repair services in Morris County NJ. We come to your location for brake service, oil changes, diagnostics, and emergency repairs.",
              "url": "https://www.elitemobileautorepair.online",
              "telephone": "(973) 352-7913",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Morris County",
                "addressRegion": "NJ",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7956,
                "longitude": -74.4814
              },
              "openingHours": [
                "Mo-Su 08:00-18:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "32",
                "bestRating": "5"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "New Jersey"
                },
                {
                  "@type": "City", 
                  "name": "Morristown"
                },
                {
                  "@type": "City",
                  "name": "Parsippany"
                },
                {
                  "@type": "City",
                  "name": "Randolph"
                }
              ],
              "serviceType": [
                "Mobile Auto Repair",
                "Brake Service", 
                "Oil Change",
                "Engine Diagnostics",
                "Battery Service",
                "Emergency Auto Repair"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile Auto Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Brake Service"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Oil Change"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Engine Diagnostics"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}