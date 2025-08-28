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
        title="Websites για Airbnb Experience Hosts - Ξεχωρίστε & Αυξήστε τις Κρατήσεις"
        description="Δημιουργήστε ένα επαγγελματικό website για την Airbnb Experience σας. Ελέγξτε το brand σας, αυξήστε τις κρατήσεις και προσελκύστε επισκέπτες πέρα από το Airbnb."
        keywords="airbnb experience website, experience host website greece, airbnb experience marketing ελλάδα, experience host branding"
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
                  Η εμπειρία σας στο Airbnb αξίζει το δικό της website
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Ξεχωρίστε, προσελκύστε περισσότερους επισκέπτες και χτίστε το brand σας πέρα από το Airbnb.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Δημιουργήστε το δικό μου Experience Website
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
                  Γιατί χρειάζεστε Website ως Experience Host
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Έλεγχος του Brand σας</h3>
                    <p className="text-muted-foreground">
                      Παρουσιάστε τη μοναδική σας εμπειρία με το δικό σας design, φωτογραφίες και ιστορία.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Αύξηση Κρατήσεων</h3>
                    <p className="text-muted-foreground">
                      Εμφανιστείτε στο Google και προσελκύστε επισκέπτες εκτός Airbnb.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Άμεση Επικοινωνία</h3>
                    <p className="text-muted-foreground">
                      Συλλέξτε emails, δεχθείτε άμεσες κρατήσεις και καλλιεργήστε επαναλαμβανόμενους πελάτες.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Χτίσιμο Εμπιστοσύνης</h3>
                    <p className="text-muted-foreground">
                      Ένα επαγγελματικό website κάνει την εμπειρία σας να φαίνεται πιο αξιόπιστη και premium.
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
                  Χαρακτηριστικά του Αποκλειστικού σας Website
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Φιλικό προς Κινητά & Γρήγορο</h3>
                    <p className="text-muted-foreground">Φιλικό προς κινητά, γρήγορο και έτοιμο για SEO.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Όμορφες Γκαλερί</h3>
                    <p className="text-muted-foreground">Όμορφες γκαλερί και προφίλ οικοδεσπότη.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Προσωπικό Domain</h3>
                    <p className="text-muted-foreground">Προσωπικό domain για αξιοπιστία.</p>
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
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Μοιραστείτε τα Στοιχεία σας</h3>
                    <p className="text-muted-foreground">
                      Στείλτε μας τις φωτογραφίες, την περιγραφή και τις τιμές σας.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Online σε 7 Ημέρες</h3>
                    <p className="text-muted-foreground">
                      Το website σας ανεβαίνει online σε μόλις 7 ημέρες.
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
                  Έτοιμοι να αναπτυχθείτε πέρα από το Airbnb;
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Αποκτήστε το δικό σας Experience Host website σήμερα.
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

export default ExperienceHosts;