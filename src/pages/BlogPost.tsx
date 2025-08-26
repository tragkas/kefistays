import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getBlogPost as getLegacyBlogPost } from "@/data/blogPosts";
import { getBlogPost } from "@/utils/blogLoader";
import { BlogPost as BlogPostType } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<BlogPostType | null>(null);
  const [loading, setLoading] = React.useState(true);
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  React.useEffect(() => {
    const loadPost = async () => {
      try {
        const blogPost = await getBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          // Fallback to legacy post
          const legacyPost = getLegacyBlogPost(slug);
          if (legacyPost) {
            // Convert legacy post to new format
            setPost({
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
                  url: "https://kefistays.com"
                },
                publisher: {
                  "@type": "Organization", 
                  name: "Kefistays",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://kefistays.com/logo.png"
                  },
                  url: "https://kefistays.com"
                },
                datePublished: legacyPost.publishedAt,
                dateModified: legacyPost.updatedAt || legacyPost.publishedAt,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://kefistays.com/blog/${legacyPost.slug}`
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
                canonical: `https://kefistays.com/blog/${legacyPost.slug}`,
                focusKeyword: legacyPost.seo.keywords[0]
              }
            } as BlogPostType);
          }
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="aspect-video bg-gray-200 rounded-xl"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Convert markdown-like content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-1xl font-bold text-gray-900 mt-6 mb-2">{line.substring(4)}</h3>;
        }
        
        
        // Images
        const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [, altText, imageUrl] = imageMatch;
          return (
            <div key={index} className="my-8">
              <img 
                src={imageUrl}
                alt={altText}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          );
        }
        
        // Bold text
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Lists
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-700 mb-2 ml-6 list-disc">
              <span dangerouslySetInnerHTML={{ __html: boldText.substring(2) }} />
            </li>
          );
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        if (line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('*')) {
          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: boldText }} />
            </p>
          );
        }
        
        return null;
      })
      .filter(Boolean);
  };

  return (
    <>
      <SEOHead 
        title={post.seo.metaTitle}
        description={post.seo.metaDescription}
        keywords={post.seo.keywords.join(", ")}
        canonical={post.seo.canonical}
        ogImage={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage.url}
        article={{
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          author: post.author,
          tags: post.tags
        }}
      />
      
      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Back to Blog */}
          <div className="container mx-auto px-4 py-6">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Επιστροφή στο Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="container mx-auto px-4 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden mb-8">
                <img 
                  src={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage.url}
                  alt={typeof post.featuredImage === 'string' ? post.title : post.featuredImage.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#dbeafe"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="24" fill="#3b82f6">
                          ${post.title}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('el-GR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} λεπτά ανάγνωσης</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Κοινοποίηση
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-xl text-gray-700 mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-primary">
                  {post.excerpt}
                </div>
                
                <div className="space-y-4">
                  {formatContent(post.content)}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Σχετικά με τον συγγραφέα</h3>
                <p className="text-gray-600">
                  Η ομάδα της <strong>Kefistays</strong> αποτελείται από έμπειρους επαγγελματίες 
                  στο χώρο της βραχυχρόνιας μίσθωσης και του ψηφιακού marketing. Με χρόνια εμπειρία 
                  στη διαχείριση ακινήτων Airbnb, μοιραζόμαστε τις καλύτερες πρακτικές και στρατηγικές 
                  για να βοηθήσουμε τους ιδιοκτήτες να αυξήσουν τα έσοδά τους.
                </p>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;