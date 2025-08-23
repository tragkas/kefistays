export interface BlogPost {
  // Basic Information
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  
  // SEO Optimization
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonical: string;
    focusKeyword?: string;
  };

  // Article Information
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  
  // Featured Image
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };

  // Tags & Categories
  tags: string[];
  category: string;

  // Schema Markup Data
  schema: {
    "@context": string;
    "@type": string;
    headline: string;
    description: string;
    image: string;
    author: {
      "@type": string;
      name: string;
      url: string;
    };
    publisher: {
      "@type": string;
      name: string;
      logo: {
        "@type": string;
        url: string;
      };
      url: string;
    };
    datePublished: string;
    dateModified: string;
    mainEntityOfPage: {
      "@type": string;
      "@id": string;
    };
    articleSection: string;
    keywords: string;
  };

  // Internal Branding
  branding: {
    brandMentions: string[];
    ctaText: string;
    ctaUrl: string;
  };
}

export interface BlogPostModule {
  post: BlogPost;
}