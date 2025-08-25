import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Όροι Χρήσης"
        description="Όροι και προϋποθέσεις χρήσης των υπηρεσιών της Kefistays για διαχείριση και βελτίωση Airbnb καταλυμάτων."
        keywords="όροι χρήσης, προϋποθέσεις, airbnb διαχείριση, kefistays"
        canonical={`${window.location.origin}/terms`}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Όροι Χρήσης</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Γενικές Πληροφορίες</h2>
                <p>
                  Οι παρόντες όροι χρήσης διέπουν τη χρήση των υπηρεσιών της Kefistays, που παρέχει υπηρεσίες διαχείρισης και βελτίωσης των Airbnb καταλυμάτων. Η χρήση των υπηρεσιών μας συνεπάγεται την αποδοχή των παρόντων όρων.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Υπηρεσίες</h2>
                <p>
                  Η Kefistays παρέχει υπηρεσίες δημιουργίας ιστοσελίδων, SEO βελτιστοποίησης και στρατηγικής marketing για οικοδεσπότες Airbnb. Οι υπηρεσίες περιλαμβάνουν:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Δημιουργία επαγγελματικών ιστοσελίδων</li>
                  <li>SEO βελτιστοποίηση</li>
                  <li>Συμμόρφωση με GDPR και πολιτικές ΑΑΔΕ</li>
                  <li>Στρατηγική marketing και branding</li>
                  <li>Αναλυτικά στοιχεία και reporting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Υποχρεώσεις Πελάτη</h2>
                <p>
                  Ο πελάτης υποχρεούται να παρέχει ακριβείς και επικαιροποιημένες πληροφορίες για το κατάλυμά του και να συνεργάζεται κατά τη διάρκεια της δημιουργίας της ιστοσελίδας. Επίσης, ο πελάτης είναι υπεύθυνος για τη νομιμότητα του καταλύματός του και τη συμμόρφωση με τους τοπικούς κανονισμούς.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Πληρωμές και Επιστροφές</h2>
                <p>
                  Οι πληρωμές γίνονται σύμφωνα με τους όρους του επιλεγμένου πακέτου. Δεν παρέχονται επιστροφές χρημάτων μετά την έναρξη των εργασιών, εκτός από εξαιρετικές περιπτώσεις που θα αξιολογηθούν ανά περίπτωση.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Πνευματική Ιδιοκτησία</h2>
                <p>
                  Η ιστοσελίδα που δημιουργείται παραδίδεται στον πελάτη με πλήρη δικαιώματα χρήσης. Η Kefistays διατηρεί το δικαίωμα να χρησιμοποιήσει το έργο ως παράδειγμα στο portfolio της.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Περιορισμός Ευθύνης</h2>
                <p>
                  Η Kefistays δεν φέρει ευθύνη για τυχόν ζημίες που μπορεί να προκύψουν από τη χρήση των υπηρεσιών της, πέραν του κόστους των υπηρεσιών που παρασχέθηκαν.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Τροποποιήσεις</h2>
                <p>
                  Η Kefistays διατηρεί το δικαίωμα να τροποποιήσει τους παρόντες όρους χρήσης. Οι τροποποιήσεις θα ανακοινώνονται στην ιστοσελίδα της εταιρείας.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Επικοινωνία</h2>
                <p>
                  Για οποιεσδήποτε ερωτήσεις σχετικά με τους όρους χρήσης, μπορείτε να επικοινωνήσετε μαζί μας στο email: kefistays@gmail.com
                </p>
              </section>

              <section>
                <p className="text-sm text-muted-foreground">
                  Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;