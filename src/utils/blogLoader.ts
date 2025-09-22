import { BlogPost, BlogPostModule } from '@/types/blog';

// Dynamic import function for blog posts
const importBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const module = await import(`@/content/blog/${slug}.tsx`) as BlogPostModule;
    return module.post;
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
};

// Get all available blog post slugs
const getAvailableSlugs = (): string[] => {
  // In a real implementation, you might read from a manifest file
  // or use a build-time generated list of available posts
  return [
    '10-stratigikes-afxisi-kratiseon-airbnb-2025',
    '7-mystika-gia-na-gineis-superhost-airbnb-2025',
    'pos-na-veltistopoiisete-to-photo-tour-airbnb',
    'airbnb-fotografisi-symvoules-mystika',
    'airbnb-titlos-aggelias-idees-symvoules',
    'airbnb-perigrafi-kalyteres-praktikes',
    'airbnb-amenities-essentials',
    'airbnb-prwtes-5-asterwn-kritikes',
    'airbnb-cleaning-101-teliotita',
    'airbnb-telio-krevati',
    'airbnb-optimize-automate-communication',
    'airbnb-experiences-guide',
    'paradeigmata-titlon-airbnb-ellada',
    'airbnb-fotografies-monois-sas',
    '10-paradeigmata-titlon-airbnb-krathseis'
  ];
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  return await importBlogPost(slug);
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const slugs = getAvailableSlugs();
  const posts: BlogPost[] = [];
  
  for (const slug of slugs) {
    const post = await importBlogPost(slug);
    if (post) {
      posts.push(post);
    }
  }
  
  // Sort by publication date (newest first)
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Sync versions for backwards compatibility
export const getBlogPostSync = (slug: string): BlogPost | undefined => {
  // This is a fallback that returns undefined
  // In practice, you should use the async versions
  console.warn('Using sync blog post loader - consider using async version');
  return undefined;
};

export const getAllBlogPostsSync = (): BlogPost[] => {
  // This is a fallback that returns empty array
  // In practice, you should use the async versions
  console.warn('Using sync blog post loader - consider using async version');
  return [];
};