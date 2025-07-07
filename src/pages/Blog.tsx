import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Άρθρα - BetterHost</title>
        <meta name="description" content="Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost" />
        <meta property="og:title" content="Άρθρα - BetterHost" />
        <meta name="description" content="Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost" />
        <meta property="og:description" content="Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://betterhost.gr/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BetterHost Blog",
            "description": "Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost",
            "url": "https://betterhost.gr/blog"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl text-blue-700 font-bold">Άρθρα</h1>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Input
                type="text"
                placeholder="Αναζήτηση άρθρων..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden transition-all hover:shadow-md animate-fade-in">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{new Date(post.date).toLocaleDateString('el-GR')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-primary hover:underline"
                    >
                      Διάβασε περισσότερα
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
