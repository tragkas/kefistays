import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    tags: string[];
  };
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "/og-default.png",
  article 
}: SEOHeadProps) => {
  const fullTitle = `${title} | Kefistays - Διαχείριση Airbnb`;
  
  useEffect(() => {
    // Normalize canonical URL and fix domain consistency
    const baseUrl = 'https://kefistays.gr';
    const normalizedCanonical = canonical ? canonical.replace('https://kefistays.com', baseUrl) : canonical;
    const currentUrl = normalizedCanonical || `${baseUrl}${window.location.pathname}`;
    
    // Set document title
    document.title = fullTitle;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Set language and locale meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('language', 'el');
    
    // Set hreflang
    let hreflangLink = document.querySelector('link[rel="alternate"][hreflang="el"]');
    if (!hreflangLink) {
      hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', 'el');
      document.head.appendChild(hreflangLink);
    }
    hreflangLink.setAttribute('href', currentUrl);

    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // Normalize ogImage URL
    const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    // Open Graph meta tags - enhanced with URL and locale
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: article ? 'article' : 'website' },
      { property: 'og:url', content: currentUrl },
      { property: 'og:locale', content: 'el_GR' },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: fullTitle },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Kefistays' }
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Twitter Card meta tags - enhanced with URL
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: currentUrl },
      { name: 'twitter:image', content: imageUrl }
    ];

    twitterTags.forEach(({ name, content }) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Article specific meta tags - clear existing article tags first
    const existingArticleTags = document.querySelectorAll('meta[property^="article:"]');
    existingArticleTags.forEach(tag => tag.remove());
    
    if (article) {
      const articleTags = [
        { property: 'article:published_time', content: article.publishedTime },
        { property: 'article:author', content: article.author }
      ];

      if (article.modifiedTime) {
        articleTags.push({ property: 'article:modified_time', content: article.modifiedTime });
      }

      article.tags.forEach(tag => {
        articleTags.push({ property: 'article:tag', content: tag });
      });

      articleTags.forEach(({ property, content }) => {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      });
    }

    // JSON-LD structured data - fixed URLs and enhanced schema
    const structuredData = {
      "@context": "https://schema.org",
      "@type": article ? "Article" : "LocalBusiness",
      "name": fullTitle,
      "description": description,
      "url": currentUrl,
      "image": imageUrl,
      "inLanguage": "el",
      "publisher": {
        "@type": "Organization",
        "name": "Kefistays",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/opengraph-image-kefistays.png`
        }
      }
    };

    // Add LocalBusiness specific data if not an article
    if (!article) {
      Object.assign(structuredData, {
        "@type": "LocalBusiness",
        "priceRange": "€799-€1299",
        "telephone": "+30-XXX-XXXXXXX",
        "email": "kefistays@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Αθήνα",
          "addressCountry": "GR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "37.9838",
          "longitude": "23.7275"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "serviceArea": {
          "@type": "Country",
          "name": "Ελλάδα"
        },
        "areaServed": "Ελλάδα",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Airbnb Management Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Βασικό Πακέτο Ιστοσελίδας",
                "description": "Επαγγελματική σελίδα για Airbnb με SEO και GDPR συμμόρφωση"
              },
              "price": "799",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Πλήρες Πακέτο Ιστοσελίδας",
                "description": "Ολοκληρωμένη λύση με 5 σελίδες, SEO, και στρατηγική marketing"
              },
              "price": "1299",
              "priceCurrency": "EUR"
            }
          ]
        }
      });
    }

    if (article) {
      Object.assign(structuredData, {
        "headline": title,
        "datePublished": article.publishedTime,
        "dateModified": article.modifiedTime || article.publishedTime,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "keywords": article.tags.join(", ")
      });
    }

    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.setAttribute('id', 'structured-data');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, canonical, ogImage, article, fullTitle]);

  return null;
};

export default SEOHead;