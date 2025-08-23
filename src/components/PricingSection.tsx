import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Επίλεξε το Ιδανικό Πακέτο
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ξεκίνα να αυξάνεις τις κρατήσεις σου με επαγγελματική υποστήριξη και στρατηγική
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Βασικό Πακέτο Ιστοσελίδας</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">€799</div>
              <div className="text-gray-500">εφάπαξ</div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Επαγγελματική Σελίδα (1 Page)",
                "Ακολουθηθεί την πολιτική της ΑΑΔΕ",
                "Συμμόρφωση με το GDPR",
                "Τοπική ρύθμιση SEO",
                "Αναλυτικά στοιχεία",
                "Δημιουργία οδηγού PDF"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full py-3 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Δες Παραδείγματα →
            </Button>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                ΠΡΟΤΕΙΝΟΜΕΝΟ
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Πλήρες Πακέτο Ιστοσελίδας</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">€1,299</div>
              <div className="text-gray-500">εφάπαξ</div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Επαγγελματική Σελίδα (5 Pages)",
                "Ακολουθηθεί την πολιτική της ΑΑΔΕ",
                "Συμμόρφωση με το GDPR",
                "Τοπική ρύθμιση SEO",
                "Αναλυτικά στοιχεία",
                "Δημιουργία οδηγού PDF"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3">
              Επικοινώνησε Μαζί μας →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;