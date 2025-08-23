import { BlogPost } from '@/types/blog';

// Legacy interface for backwards compatibility
export interface LegacyBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  tags: string[];
  readTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

// Legacy data for backwards compatibility (will be removed once migration is complete)
export const legacyBlogPosts: LegacyBlogPost[] = [
  {
    id: "1",
    title: "10 Στρατηγικές για να Αυξήσεις τις Κρατήσεις στο Airbnb το 2024",
    slug: "10-stratigikes-afxisi-kratiseon-airbnb-2024",
    excerpt: "Ανακάλυψε τις πιο αποτελεσματικές στρατηγικές που χρησιμοποιούν οι επιτυχημένοι hosts για να αυξήσουν τα έσοδά τους στο Airbnb και να ξεχωρίσουν από τον ανταγωνισμό.",
    content: `...`, // Truncated for brevity
    author: "Kefistays Team",
    publishedAt: "2024-08-23T10:00:00.000Z",
    featuredImage: "/blog/airbnb-strategies-2024.jpg",
    tags: ["Airbnb", "Στρατηγική", "Κρατήσεις", "Marketing", "Βραχυχρόνια Μίσθωση"],
    readTime: 8,
    seo: {
      metaTitle: "10 Στρατηγικές για Περισσότερες Κρατήσεις Airbnb 2024",
      metaDescription: "Ανακάλυψε τις κορυφαίες στρατηγικές που χρησιμοποιούν οι επιτυχημένοι Airbnb hosts για να αυξήσουν τις κρατήσεις και τα έσοδά τους το 2024.",
      keywords: ["airbnb στρατηγικές", "αύξηση κρατήσεων airbnb", "airbnb marketing", "βραχυχρόνια μίσθωση", "airbnb host tips"]
    }
  }
];

// Updated functions to use the new blog system
export const getBlogPost = (slug: string): LegacyBlogPost | undefined => {
  return legacyBlogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): LegacyBlogPost[] => {
  return legacyBlogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};