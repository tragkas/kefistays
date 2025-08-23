const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kefistays</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Βοηθάμε τους ιδιοκτήτες του Airbnb να αυξήσουν 
              τα κέρδη τους μέσω επαγγελματικής διαχείρισης, 
              στρατηγικής marketing και καινοτόμων λύσεων.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Αθήνα, Ελλάδα</p>
              <p>kefistays@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Kefistays. Όλα τα δικαιώματα προστατεύονται.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;