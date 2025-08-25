import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Helper function to handle navigation
  const getNavLink = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Kefistays</Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu />
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/blog" className="text-gray-600 hover:text-primary font-medium">Άρθρα</Link>
          <a href={getNavLink('contact')}>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Επικοινωνία
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-primary py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Άρθρα
                </Link>
                <a 
                  href={getNavLink('contact')} 
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Επικοινωνία
                  </Button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;