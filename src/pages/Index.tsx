import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Αυξήστε τις Κρατήσεις στο Airbnb"
        description="Επαγγελματική διαχείριση και στρατηγική για το Airbnb σας. Αυξήστε τις κρατήσεις με εξειδικευμένες υπηρεσίες και ολοκληρωμένες λύσεις."
        keywords="airbnb διαχείριση, αύξηση κρατήσεων airbnb, βραχυχρόνια μίσθωση, airbnb στρατηγική"
        canonical={window.location.origin}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ComparisonSection />
          <ProcessSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
