import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Star, Camera, Users } from "lucide-react";

const ExperienceHosts = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        title="Websites for Airbnb Experience Hosts - Stand Out & Boost Bookings"
        description="Create a professional website for your Airbnb Experience. Control your brand, boost bookings, and attract guests beyond Airbnb with SEO-ready websites."
        keywords="airbnb experience website, experience host website, airbnb experience marketing, experience host branding"
        canonical={`${window.location.origin}/experience-hosts`}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Your Airbnb Experience Deserves Its Own Website
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Stand out, attract more guests, and build your brand beyond Airbnb.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Launch My Experience Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Why You Need a Website */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                  Why You Need a Website as an Experience Host
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Control Your Brand</h3>
                    <p className="text-muted-foreground">
                      Showcase your unique experience with your own design, photos, and story.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Boost Bookings</h3>
                    <p className="text-muted-foreground">
                      Rank on Google and capture guests outside of Airbnb.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Direct Communication</h3>
                    <p className="text-muted-foreground">
                      Collect emails, take direct bookings, and nurture repeat customers.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Build Trust</h3>
                    <p className="text-muted-foreground">
                      Professional websites make your experience look more reliable and premium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Features of Your Dedicated Website
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Mobile-Friendly & Fast</h3>
                    <p className="text-muted-foreground">SEO-ready websites that load quickly on all devices.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Beautiful Galleries</h3>
                    <p className="text-muted-foreground">Showcase your experience with stunning photo galleries and host profiles.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Custom Domain</h3>
                    <p className="text-muted-foreground">Establish credibility with your own professional domain name.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Contact Us</h3>
                    <p className="text-muted-foreground">
                      Reach out to us through our contact form below.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Share Your Details</h3>
                    <p className="text-muted-foreground">
                      Share your photos, description, and pricing information.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Go Live in 7 Days</h3>
                    <p className="text-muted-foreground">
                      Get your website live in as little as 7 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to grow beyond Airbnb?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get your dedicated Experience Host website today.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start My Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ExperienceHosts;