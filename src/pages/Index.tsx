import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
const Index = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kefistays",
    "description": "Υπηρεσίες διαχείρισης και βελτιστοποίησης καταχωρήσεων Airbnb",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Αθήνα",
      "addressCountry": "GR"
    },
    "priceRange": "€799 - €1,199",
    "telephone": "+30 210 1234567",
    "email": "kefistays@gmail.com",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "799",
      "highPrice": "1199",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link rel="canonical" href="https://kefistays.gr/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col" itemScope itemType="https://schema.org/ProfessionalService">
        <Header />
        <main>
          <article>
            <HeroSection />
            <ComparisonSection />
            <HowItWorksSection />
            <PricingSection />
            <ContactSection />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
