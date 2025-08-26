
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowDown01, FileCheck, MailOpen, Rocket, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Πώς Λειτουργεί</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Μια απλή διαδικασία 5 βημάτων για να αποκτήσεις την ιδανική παρουσία στο διαδίκτυο
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ArrowDown01 className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 1: Δες τα Παραδείγματα μας</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                Δείτε παραδείγματα ιστοσελίδων και επιλέξτε το πακέτο που ταιριάζει στις ανάγκες του Airbnb σας.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FileCheck className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 2: Συμπλήρωσε τη Φόρμα</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Συμπλήρωσε τη φόρμα επικοινωνίας μας με τις λεπτομέρειες του καταλύματός σου, τις ανάγκες σου και το πακέτο που σε ενδιαφέρει.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MailOpen className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 3: Λάβε Email Επιβεβαίωσης</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
              <div className="pl-10">
                <ol className="list-decimal space-y-2">
                  <li>Μέσα σε 24 ώρες θα λάβετε ένα email για να κανονίσουμε βιντεοκλήση.</li>
                  <li>Επιλέγετε την ημερομηνία και ώρα που σας εξυπηρετεί.</li>
                  <li>Πραγματοποιούμε μια σύντομη κλήση για να συζητήσουμε τις ανάγκες και το στυλ της ιστοσελίδας.</li>
                  <li>Καταλήγουμε σε συμφωνία για το έργο και την τιμή.</li>
                  <li>Σας αποστέλλουμε τον σύνδεσμο για την πληρωμή της προκαταβολής.</li>
                </ol>
              </div>
            </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Rocket className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 4: Ξεκινάμε το Website</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Μετά την επιβεβαίωση και την προκαταβολή, η ομάδα μας ξεκινά τη δημιουργία του website σου. Θα σου παρουσιάσουμε ένα αρχικό σχέδιο μέσα σε 7 ημέρες για να το εγκρίνεις και να μας δώσεις τα σχόλιά σου. Κάνουμε έως και 2 κύκλους αναθεωρήσεων για να διασφαλίσουμε ότι είσαι απόλυτα ικανοποιημένος/η.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 5: Παράδοση</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
              <div className="pl-10">
                <ol className="list-decimal space-y-2">
                  <li>Σας αποστέλλουμε το link για την πληρωμή του υπολοίπου.</li>
                  <li>Προγραμματίζουμε μια σύντομη κλήση παράδοσης (διάρκειας 1 ώρας).</li>
                  <li>Η ιστοσελίδα σας είναι πλέον online!</li>
                  <li>Αν χρειαστείτε επιπλέον υποστήριξη, εκπαίδευση ή επιπλέον λειτουργίες, προσφέρονται με κόστος 50€/ώρα, κατόπιν συνεννόησης.</li>
                </ol>
              </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
