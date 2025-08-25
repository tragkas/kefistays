import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Πολιτική Απορρήτου"
        description="Πολιτική προστασίας προσωπικών δεδομένων της Kefistays σύμφωνα με τον GDPR και την ελληνική νομοθεσία."
        keywords="πολιτική απορρήτου, προστασία δεδομένων, GDPR, kefistays"
        canonical={`${window.location.origin}/privacy`}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Πολιτική Απορρήτου</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Γενικές Πληροφορίες</h2>
                <p>
                  Η Kefistays σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. Η παρούσα πολιτική απορρήτου περιγράφει τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Δεδομένα που Συλλέγουμε</h2>
                <p>
                  Συλλέγουμε τα ακόλουθα είδη προσωπικών δεδομένων:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Στοιχεία επικοινωνίας:</strong> Όνομα, email, τηλέφωνο</li>
                  <li><strong>Επαγγελματικές πληροφορίες:</strong> Στοιχεία καταλύματος, τοποθεσία, υπηρεσίες</li>
                  <li><strong>Τεχνικά δεδομένα:</strong> IP διεύθυνση, browser, συσκευή</li>
                  <li><strong>Δεδομένα χρήσης:</strong> Στατιστικά επισκεψιμότητας, συμπεριφορά στην ιστοσελίδα</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Σκοπός Χρήσης</h2>
                <p>
                  Χρησιμοποιούμε τα προσωπικά σας δεδομένα για:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Παροχή των υπηρεσιών μας</li>
                  <li>Επικοινωνία μαζί σας</li>
                  <li>Δημιουργία και διαχείριση της ιστοσελίδας σας</li>
                  <li>Βελτίωση των υπηρεσιών μας</li>
                  <li>Συμμόρφωση με νομικές υποχρεώσεις</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Νομική Βάση Επεξεργασίας</h2>
                <p>
                  Επεξεργαζόμαστε τα προσωπικά σας δεδομένα βάσει:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Συγκατάθεσης (για marketing επικοινωνία)</li>
                  <li>Εκτέλεσης σύμβασης (για παροχή υπηρεσιών)</li>
                  <li>Νόμιμου συμφέροντος (για βελτίωση υπηρεσιών)</li>
                  <li>Νομικής υποχρέωσης (για φορολογικούς σκοπούς)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Κοινοποίηση σε Τρίτους</h2>
                <p>
                  Δεν πουλάμε, δεν μισθώνουμε ούτε διαμοιράζουμε τα προσωπικά σας δεδομένα με τρίτους, εκτός από:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Παρόχους τεχνικών υπηρεσιών (hosting, analytics)</li>
                  <li>Νομικές υποχρεώσεις</li>
                  <li>Προστασία δικαιωμάτων μας</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Διατήρηση Δεδομένων</h2>
                <p>
                  Διατηρούμε τα προσωπικά σας δεδομένα για όσο διάστημα είναι απαραίτητο για την παροχή των υπηρεσιών μας και τη συμμόρφωση με νομικές υποχρεώσεις (ελάχιστα 5 έτη για φορολογικούς λόγους).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Τα Δικαιώματά σας</h2>
                <p>
                  Σύμφωνα με τον GDPR, έχετε τα ακόλουθα δικαιώματα:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Δικαίωμα πρόσβασης στα δεδομένα σας</li>
                  <li>Δικαίωμα διόρθωσης ανακριβών στοιχείων</li>
                  <li>Δικαίωμα διαγραφής (δικαίωμα στη λήθη)</li>
                  <li>Δικαίωμα περιορισμού επεξεργασίας</li>
                  <li>Δικαίωμα φορητότητας δεδομένων</li>
                  <li>Δικαίωμα εναντίωσης</li>
                  <li>Δικαίωμα ανάκλησης συγκατάθεσης</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Ασφάλεια</h2>
                <p>
                  Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών σας δεδομένων, συμπεριλαμβανομένης της κρυπτογράφησης, ασφαλών διακομιστών και περιορισμένης πρόσβασης.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies</h2>
                <p>
                  Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας χρήσης και για αναλυτικούς σκοπούς. Μπορείτε να διαχειριστείτε τις προτιμήσεις σας για cookies μέσω των ρυθμίσεων του browser σας.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Επικοινωνία</h2>
                <p>
                  Για οποιεσδήποτε ερωτήσεις σχετικά με την πολιτική απορρήτου ή για την άσκηση των δικαιωμάτων σας, μπορείτε να επικοινωνήσετε μαζί μας:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Email: kefistays@gmail.com</li>
                  <li>Διεύθυνση: Αθήνα, Ελλάδα</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Τροποποιήσεις</h2>
                <p>
                  Μπορεί να τροποποιήσουμε την παρούσα πολιτική απορρήτου. Οι αλλαγές θα ανακοινώνονται στην ιστοσελίδα μας και θα ισχύουν από την ημερομηνία δημοσίευσης.
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

export default PrivacyPolicy;