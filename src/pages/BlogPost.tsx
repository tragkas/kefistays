import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';
import { styleBlogHtml } from '@/lib/html-content-styler';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = useMemo(() => {
    return blogPosts.find(post => post.slug === slug);
  }, [slug]);

    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  React.useEffect(() => {
    if (!post && slug) {
      navigate('/blog');
    }
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }
  
  const styledContent = styleBlogHtml(post.content);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} - BetterHost</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={`${post.title} - BetterHost`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://betterhost.gr/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [post.image],
            "datePublished": post.date,
            "dateModified": post.date,
            "description": post.description,
            "author": {
              "@type": "Organization",
              "name": "BetterHost",
              "url": "https://betterhost.gr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BetterHost",
              "logo": {
                "@type": "ImageObject",
                "url": "https://betterhost.gr/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://betterhost.gr/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-muted-foreground mb-6">
              {new Date(post.date).toLocaleDateString('el-GR')}
            </div>
            {post.image && (
              <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
          </div>
          
          <div
            className="prose prose-headings:font-semibold prose-headings:text-[#2D5BFF] prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: styledContent }}
          />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
