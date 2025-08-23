import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Star } from "lucide-react";
import heroImage from "@/assets/hero-airbnb.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional Airbnb Management"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-white/90" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Αυξησε τις Κρατήσεις<br />
          <span className="text-primary">σου στο Airbnb.........</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Ξεκίνησε από τον ανταγωνισμό με στοχευμένο website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Αυξηση Κρατήσεων</h3>
            <p className="text-gray-600 text-sm text-center">
              Αυξησε τα κέρδη σου με 
              στρατηγική προσέγγιση
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Επαγγελματικό Website</h3>
            <p className="text-gray-600 text-sm text-center">
              Κάνεις την διαφορά με μόδα online 
              παρουσία
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ξεχώρισε στην Αγορά</h3>
            <p className="text-gray-600 text-sm text-center">
              Οπως και επαγγελματικό brand που 
              θα σε κάνει να ξεχωρίσεις
            </p>
          </div>
        </div>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
        >
          Δες το Πακέτο μας <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
