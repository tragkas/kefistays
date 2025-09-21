import React from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts as getAllLegacyBlogPosts } from "@/data/blogPosts";
import { getAllBlogPosts } from "@/utils/blogLoader";
import { BlogPost } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { Calendar, Clock, User, Check } from "lucide-react";

const Blog = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  
  // Reading progress tracking
  const { progress, togglePostRead, isPostRead } = useReadingProgress(posts.length);

  React.useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getAllBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
        // Fallback to legacy posts if needed
        const legacyPosts = getAllLegacyBlogPosts();
        // Convert legacy posts to new format
        const convertedPosts = legacyPosts.map(legacyPost => ({
          ...legacyPost,
          featuredImage: {
            url: legacyPost.featuredImage,
            alt: legacyPost.title,
            width: 1200,
            height: 630
          },
          category: legacyPost.tags[0] || "Γενικά",
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: legacyPost.title,
            description: legacyPost.excerpt,
            image: legacyPost.featuredImage,
            author: {
              "@type": "Organization",
              name: legacyPost.author,
              url: "https://kefistays.gr"
            },
            publisher: {
              "@type": "Organization", 
              name: "Kefistays",
              logo: {
                "@type": "ImageObject",
                url: "https://kefistays.gr/logo.png"
              },
              url: "https://kefistays.gr"
            },
            datePublished: legacyPost.publishedAt,
            dateModified: legacyPost.updatedAt || legacyPost.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://kefistays.gr/blog/${legacyPost.slug}`
            },
            articleSection: legacyPost.tags[0] || "Γενικά",
            keywords: legacyPost.seo.keywords.join(", ")
          },
          branding: {
            brandMentions: ["Η **Kefistays** σας προσφέρει ολοκληρωμένες λύσεις."],
            ctaText: "Ξεκινήστε τη συνεργασία με την Kefistays",
            ctaUrl: "/#pricing"
          },
          seo: {
            ...legacyPost.seo,
            canonical: `https://kefistays.gr/blog/${legacyPost.slug}`,
            focusKeyword: legacyPost.seo.keywords[0]
          }
        } as BlogPost));
        setPosts(convertedPosts);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      <SEOHead 
        title="Blog - Συμβουλές & Στρατηγικές Airbnb"
        description="Ανακαλύψτε τις καλύτερες στρατηγικές και συμβουλές για να αυξήσετε τις κρατήσεις στο Airbnb. Εξειδικευμένα άρθρα από την ομάδα της Kefistays."
        keywords="airbnb blog, airbnb συμβουλές, βραχυχρόνια μίσθωση, airbnb στρατηγικές"
        canonical={`${window.location.origin}/blog`}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Blog & Συμβουλές
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Ανακαλύψτε τις καλύτερες στρατηγικές, συμβουλές και insights για να 
                  αυξήσετε τις κρατήσεις στο Airbnb και να βελτιώσετε την επιχείρησή σας.
                </p>
                
                {/* Reading Progress */}
                {!loading && posts.length > 0 && (
                  <div className="max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Πρόοδος ανάγνωσης
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {Math.round((progress * posts.length) / 100)} από {posts.length} άρθρα
                      </span>
                    </div>
                    <Progress 
                      value={progress} 
                      className="h-2"
                    />
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      {progress}% ολοκληρωμένο
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Loading State */}
              {loading && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-xl overflow-hidden shadow-sm animate-pulse">
                      <div className="aspect-video bg-gray-200"></div>
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Blog Posts Grid */}
              {!loading && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article 
                      key={post.id}
                      className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 relative ${
                        isPostRead(post.slug) ? 'opacity-90' : ''
                      }`}
                    >
                      {/* Read Toggle */}
                      <div className="absolute top-3 right-3 z-10">
                        <div 
                          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-200 ${
                            isPostRead(post.slug) 
                              ? 'bg-primary text-primary-foreground shadow-md' 
                              : 'bg-white/90 text-gray-400 hover:bg-white hover:text-primary border border-gray-200'
                          }`}
                          onClick={() => togglePostRead(post.slug)}
                        >
                          {isPostRead(post.slug) ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <div className="w-4 h-4 border-2 border-current rounded-sm" />
                          )}
                        </div>
                      </div>

                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={post.featuredImage.url} 
                          alt={post.featuredImage.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="400" height="225" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#dbeafe"/>
                                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18" fill="#3b82f6">
                                  ${post.title.substring(0, 50)}...
                                </text>
                              </svg>
                            `)}`;
                          }}
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString('el-GR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} λεπτά</span>
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{post.author}</span>
                          </div>
                          
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                          >
                            Διαβάστε περισσότερα →
                          </Link>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;