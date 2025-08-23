import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Users, Mail, Rocket, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: "step1",
      title: "Βήμα 1: Δες το Παραδείγματα μας",
      icon: <FileText className="w-6 h-6" />,
      content: "Εξερευνήστε τα portfolio μας και δείτε πώς έχουμε βοηθήσει άλλους ιδιοκτήτες να αυξήσουν τις κρατήσεις τους μέσω επαγγελματικών ιστοσελίδων και στρατηγικής."
    },
    {
      id: "step2", 
      title: "Βήμα 2: Συμπλήρωσε την Φόρμα",
      icon: <Users className="w-6 h-6" />,
      content: "Συμπληρώστε τη φόρμα επικοινωνίας με τις βασικές πληροφορίες για το ακίνητό σας και τους στόχους σας. Θα χρειαστούμε περίπου 5 λεπτά από τον χρόνο σας."
    },
    {
      id: "step3",
      title: "Βήμα 3: Λάβε Email Επιβεβαίωσης", 
      icon: <Mail className="w-6 h-6" />,
      content: "Θα λάβετε άμεσα email επιβεβαίωσης με τα επόμενα βήματα και χρονοδιάγραμμα υλοποίησης του έργου σας."
    },
    {
      id: "step4",
      title: "Βήμα 4: Ξεκινάμε το Website",
      icon: <Rocket className="w-6 h-6" />,
      content: "Ξεκινάμε τη δημιουργία της επαγγελματικής σας ιστοσελίδας με βάση τις ανάγκες σας και τη στρατηγική που έχουμε σχεδιάσει."
    },
    {
      id: "step5",
      title: "Βήμα 5: Παράδοση",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "Παραδίδουμε την έτοιμη ιστοσελίδα σας με όλες τις δυνατότητες SEO, analytics και εργαλεία που χρειάζεστε για να αυξήσετε τις κρατήσεις."
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
            Μια απλή διαδικασία 5 βημάτων για να επιτύχετε την ιδανική παρουσία στο διαδίκτυο
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