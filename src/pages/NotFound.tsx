import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="Σελίδα Δεν Βρέθηκε - 404 Error | KefiStays"
        description="Η σελίδα που ψάχνετε δεν υπάρχει. Επιστρέψτε στην αρχική σελίδα για να βρείτε τις υπηρεσίες Airbnb που χρειάζεστε."
        keywords="404 error, page not found, kefistays"
        canonical={`${window.location.origin}/404`}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Αυτή η σελίδα δεν υπάρχει
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Λυπούμαστε, η σελίδα που ψάχνετε δεν μπορεί να βρεθεί. Μπορεί να έχει μετακινηθεί, διαγραφεί ή δεν υπήρχε ποτέ.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Επιστροφή στην Αρχική
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.history.back()}
                  className="cursor-pointer"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Πίσω
                </Button>
              </div>
              
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Ψάχνετε για κάτι συγκεκριμένο;
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link to="/experience-hosts" className="text-primary hover:text-primary/80 font-medium">
                    → Websites για Experience Hosts
                  </Link>
                  <Link to="/service-providers" className="text-primary hover:text-primary/80 font-medium">
                    → Websites για Service Providers
                  </Link>
                  <Link to="/blog" className="text-primary hover:text-primary/80 font-medium">
                    → Blog & Άρθρα
                  </Link>
                  <Link to="/#contact" className="text-primary hover:text-primary/80 font-medium">
                    → Επικοινωνία
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
