
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Γιατί χρειάζεσαι μια ιστοσελίδα;</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Δες τη διαφορά ανάμεσα σε έναν μέσο οικοδεσπότη και έναν οικοδεσπότη με ολοκληρωμένη στρατηγική.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Regular Host */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center pb-4 border-b border-gray-100">Μέσος Οικοδεσπότης</h3>
            
            <ul className="space-y-4">
                <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Σελίδα με βάση την πολιτική της ΑΑΔΕ.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Δεν έχει δική του ιστοσελίδα – βασίζεται αποκλειστικά στην Airbnb.</span>
              </li>
                  <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Συμμόρφωση με το GDPR, ή Γενικό Κανονισμό για την Προστασία των Δεδομένων.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Καμία βελτιστοποίηση για Google – χαμηλή οργανική επισκεψιμότητα.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Δεν υπάρχει στρατηγική – απλά περιμένει κρατήσεις.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Φωτογραφίες χωρίς στόχευση, γενικά κείμενα.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Δεν ξεχωρίζει από τους γείτονες.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full mr-3 mt-0.5">
                  <X className="text-red-500" size={14} />
                </span>
                <span className="text-gray-700">Καμία εικόνα απόδοσης ή ανάλυσης.</span>
              </li>
            </ul>
          </div>
          
          {/* Strategic Host */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
              Προτεινόμενο
            </div>
            <h3 className="text-xl font-bold mb-6 text-center pb-4 border-b border-gray-100">Οικοδεσπότης με Στρατηγική</h3>
            
            <ul className="space-y-4">
                <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Σελίδα με βάση την πολιτική της ΑΑΔΕ.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Δική σου ιστοσελίδα με το brand και τη στρατηγική σου.</span>
              </li>
                <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Συμμόρφωση με το GDPR, ή Γενικό Κανονισμό για την Προστασία των Δεδομένων.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">On page SEO για να σε βρίσκουν πελάτες ακόμα κι εκτός Airbnb.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Ειδικά σχεδιασμένο funnel για περισσότερες κρατήσεις.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Επαγγελματικές εικόνες και περιεχόμενο που πουλάει εμπειρία.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Ξεχωριστό, με ξεκάθαρη ταυτότητα.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-0.5">
                  <Check className="text-green-500" size={14} />
                </span>
                <span className="text-gray-700">Στατιστικά για να ξέρεις τι δουλεύει.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
