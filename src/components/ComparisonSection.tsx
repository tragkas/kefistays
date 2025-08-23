import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Γιατί χρειάζεσαι μια ιστοσελίδα;
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Δες τη διαφορά ανάμεσα σε έναν μέσο οικοδεσπότη και έναν οικοδεσπότη με 
            ολοκληρωμένη στρατηγική.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Μέσος Οικοδεσπότης</h3>
            </div>

            <div className="space-y-4">
              {[
                "Σελίδα με βάση την πολιτική της ΑΑΔΕ",
                "Δεν έχει δική του ιστοσελίδα – βασίζεται αποκλειστικά στην Airbnb",
                "Συμμόρφωση με το GDPR, ή Γενικό Κανονισμό για την Προστασία των Δεδομένων",
                "Καμία βελτιστοποίηση για Google – χαμηλή οργανική επισκεψιμότητα",
                "Δεν υπάρχει στρατηγική – απλά περιμένει κρατήσεις",
                "Φωτογραφίες χωρίς στόχευση, γενικά κείμενα",
                "Δεν ξεχωρίζει από τους γείτονες",
                "Καμία εικόνα απόδοσης ή ανάλυσης"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                ΠΡΟΤΕΙΝΟΜΕΝΟ
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Οικοδεσπότης με Στρατηγική</h3>
            </div>

            <div className="space-y-4">
              {[
                "Σελίδα με βάση την πολιτική της ΑΑΔΕ",
                "Δική σου ιστοσελίδα με το brand και τη στρατηγική σου",
                "Συμμόρφωση με το GDPR, ή Γενικό Κανονισμό για την Προστασία των Δεδομένων",
                "On page SEO για να σε βρίσκουν πελάτες ακόμα κι εκτός Airbnb",
                "Ειδικά σχεδιασμένο funnel για περισσότερες κρατήσεις",
                "Επαγγελματικές εικόνες και περιεχόμενο που πουλάει εμπειρία",
                "Ξεχωριστό, με ξεκάθαρη ταυτότητα",
                "Στατιστικά για να ξέρεις τι δουλεύει"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3">
                Επικοινώνησε Μαζί μας →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;