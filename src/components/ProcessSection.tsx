import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Users, Mail, Rocket, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: "step1",
      title: "Βήμα 1: Δες τα Παραδείγματα μας",
      icon: <FileText className="w-6 h-6" />,
      content: "Δείτε παραδείγματα ιστοσελίδων και επιλέξτε το πακέτο που ταιριάζει στις ανάγκες του Airbnb σας."
    },
    {
      id: "step2", 
      title: "Βήμα 2: Συμπλήρωσε τη Φόρμα",
      icon: <Users className="w-6 h-6" />,
      content: "Συμπλήρωσε τη φόρμα επικοινωνίας μας με τις λεπτομέρειες του καταλύματός σου, τις ανάγκες σου και το πακέτο που σε ενδιαφέρει."
    },
    {
      id: "step3",
      title: "Βήμα 3: Λάβε Email Επιβεβαίωσης", 
      icon: <Mail className="w-6 h-6" />,
      content: "Μέσα σε 24 ώρες θα λάβετε ένα email για να κανονίσουμε βιντεοκλήση. Επιλέγετε την ημερομηνία και ώρα που σας εξυπηρετεί. Πραγματοποιούμε μια σύντομη κλήση για να συζητήσουμε τις ανάγκες και το στυλ της ιστοσελίδας. Καταλήγουμε σε συμφωνία για το έργο και την τιμή. Σας αποστέλλουμε τον σύνδεσμο για την πληρωμή της προκαταβολής."
    },
    {
      id: "step4",
      title: "Βήμα 4: Ξεκινάμε το Website",
      icon: <Rocket className="w-6 h-6" />,
      content: "Μετά την επιβεβαίωση και την προκαταβολή, η ομάδα μας ξεκινά τη δημιουργία του website σου. Θα σου παρουσιάσουμε ένα αρχικό σχέδιο μέσα σε 7 ημέρες για να το εγκρίνεις και να μας δώσεις τα σχόλιά σου. Κάνουμε έως και 2 κύκλους αναθεωρήσεων για να διασφαλίσουμε ότι είσαι απόλυτα ικανοποιημένος/η."
    },
    {
      id: "step5",
      title: "Βήμα 5: Παράδοση",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "Σας αποστέλλουμε το link για την πληρωμή του υπολοίπου. Προγραμματίζουμε μια σύντομη κλήση παράδοσης (διάρκειας 1 ώρας). Η ιστοσελίδα σας είναι πλέον online! Αν χρειαστείτε επιπλέον υποστήριξη, εκπαίδευση ή επιπλέον λειτουργίες, προσφέρονται με κόστος 50€/ώρα, κατόπιν συνεννόησης."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Πώς Λειτουργεί
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Μια απλή διαδικασία 5 βημάτων για να αποκτήσεις την ιδανική παρουσία στο διαδίκτυο
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {steps.map((step, index) => (
              <AccordionItem 
                key={step.id} 
                value={step.id}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16 pr-4">
                  <p className="text-gray-600 leading-relaxed">
                    {step.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;