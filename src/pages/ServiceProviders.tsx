import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Star, Camera, Users, Utensils, Heart, Dumbbell, Sparkles } from "lucide-react";

const ServiceProviders = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        title="Websites for Airbnb Service Providers - Get Discovered & Booked"
        description="Professional websites for Airbnb service providers. From chefs to wellness experts - showcase your services, get discovered on Google, and grow your business."
        keywords="airbnb service provider website, chef website, wellness website, service provider marketing, airbnb services"
        canonical={`${window.location.origin}/service-providers`}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Showcase Your Airbnb Service with a Professional Website
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  From chefs to wellness experts—get discovered, get booked, get paid.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Create My Service Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Why a Website is Essential */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                  Why a Website is Essential for Airbnb Service Providers
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Reach More Clients</h3>
                    <p className="text-muted-foreground">
                      Appear on Google, not just inside Airbnb's app.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Stand Out</h3>
                    <p className="text-muted-foreground">
                      Highlight your skills, portfolio, and client reviews.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Build Loyalty</h3>
                    <p className="text-muted-foreground">
                      Collect emails, create promotions, and grow repeat business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                  Features for Service Provider Websites
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Camera className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Portfolio & Galleries</h3>
                    <p className="text-muted-foreground">Showcase your work with beautiful photo galleries.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Globe className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Online Booking</h3>
                    <p className="text-muted-foreground">Payment integration for seamless client bookings.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Star className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">SEO Optimization</h3>
                    <p className="text-muted-foreground">Rank for "[service] in [city]" searches on Google.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Reviews & Testimonials</h3>
                    <p className="text-muted-foreground">Display client feedback and build trust.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Professional Contact</h3>
                    <p className="text-muted-foreground">Contact forms and chat options for easy communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                  Use Cases
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Chef</h3>
                    <p className="text-muted-foreground text-sm">Offering private dining experiences</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Yoga Teacher</h3>
                    <p className="text-muted-foreground text-sm">Offering private classes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Photographer</h3>
                    <p className="text-muted-foreground text-sm">Offering professional photoshoots</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Spa Therapist</h3>
                    <p className="text-muted-foreground text-sm">Offering in-home treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-muted/30">
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
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Provide Details</h3>
                    <p className="text-muted-foreground">
                      Provide your service details and media content.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Launch & Book</h3>
                    <p className="text-muted-foreground">
                      Launch your professional site—ready to book clients directly.
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
                  Your services deserve more than a listing
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's build your professional Airbnb Service website today.
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

export default ServiceProviders;