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
        title="Websites για Airbnb Service Providers - Ανακαλυφθείτε & Δεχθείτε Κρατήσεις"
        description="Επαγγελματικά websites για παρόχους υπηρεσιών Airbnb. Από σεφ μέχρι wellness experts - παρουσιάστε τις υπηρεσίες σας, ανακαλυφθείτε στο Google και αναπτύξτε την επιχείρησή σας."
        keywords="airbnb service provider website ελλάδα, chef website greece, wellness website, service provider marketing, airbnb υπηρεσίες"
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
                  Παρουσιάστε την υπηρεσία σας στο Airbnb με ένα επαγγελματικό website
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Από σεφ μέχρι wellness experts—ανακαλυφθείτε, δεχθείτε κρατήσεις, πληρωθείτε.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Δημιουργήστε το δικό μου Service Website
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
                  Γιατί ένα Website είναι Απαραίτητο για Airbnb Service Providers
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Προσεγγίστε Περισσότερους Πελάτες</h3>
                    <p className="text-muted-foreground">
                      Εμφανιστείτε στο Google, όχι μόνο μέσα στην εφαρμογή του Airbnb.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Ξεχωρίστε</h3>
                    <p className="text-muted-foreground">
                      Προβάλετε τις δεξιότητές σας, το portfolio και τις αξιολογήσεις πελατών.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Χτίστε Πιστότητα</h3>
                    <p className="text-muted-foreground">
                      Συλλέξτε emails, δημιουργήστε προσφορές και ενισχύστε τις επαναλαμβανόμενες κρατήσεις.
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
                  Χαρακτηριστικά για Service Provider Websites
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Camera className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Portfolio & Γκαλερί</h3>
                    <p className="text-muted-foreground">Portfolio & γκαλερί φωτογραφιών για να παρουσιάσετε τη δουλειά σας.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Globe className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Online Κρατήσεις</h3>
                    <p className="text-muted-foreground">Ενσωμάτωση online κρατήσεων + πληρωμών.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Star className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">SEO Βελτιστοποίηση</h3>
                    <p className="text-muted-foreground">SEO βελτιστοποίηση για να κατατάσσεστε στο "[υπηρεσία] στην [πόλη]".</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Reviews & Testimonials</h3>
                    <p className="text-muted-foreground">Ενότητες με reviews & testimonials.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Επαγγελματική Επικοινωνία</h3>
                    <p className="text-muted-foreground">Επαγγελματική φόρμα επικοινωνίας & επιλογές chat.</p>
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
                  Περιπτώσεις Χρήσης
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Σεφ</h3>
                    <p className="text-muted-foreground text-sm">Ένας σεφ που προσφέρει private dining</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Δάσκαλος Yoga</h3>
                    <p className="text-muted-foreground text-sm">Ένας δάσκαλος yoga που κάνει μαθήματα</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Φωτογράφος</h3>
                    <p className="text-muted-foreground text-sm">Ένας φωτογράφος που παρέχει photoshoots</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Θεραπευτής Spa</h3>
                    <p className="text-muted-foreground text-sm">Ένας θεραπευτής spa που προσφέρει θεραπείες κατ' οίκον</p>
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
                  Πώς Λειτουργεί
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Επικοινωνήστε μαζί μας</h3>
                    <p className="text-muted-foreground">
                      Επικοινωνήστε μαζί μας μέσω της φόρμας επικοινωνίας παρακάτω.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Δώστε Λεπτομέρειες</h3>
                    <p className="text-muted-foreground">
                      Δώστε μας τα στοιχεία και το υλικό της υπηρεσίας σας.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Λανσάρισμα & Κρατήσεις</h3>
                    <p className="text-muted-foreground">
                      Λανσάρετε το επαγγελματικό σας site—έτοιμο για άμεσες κρατήσεις πελατών.
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
                  Οι υπηρεσίες σας αξίζουν περισσότερα από μια απλή καταχώριση
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Ας χτίσουμε το επαγγελματικό σας Airbnb Service website σήμερα.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Ξεκινήστε το Website μου
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