import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Helper function to handle navigation
  const getNavLink = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Kefistays</h2>
            <p className="text-gray-400 mb-6">
              Βοηθάμε τους οικοδεσπότες του Airbnb να αυξήσουν τις κρατήσεις τους μέσω επαγγελματικής παρουσίας στο διαδίκτυο και στρατηγικής branding.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Αρχική</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Άρθρα</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Όροι Χρήσης</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Αθήνα, Ελλάδα</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">kefistays@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kefistays. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;