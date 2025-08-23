import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Kefistays
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Αρχική
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;