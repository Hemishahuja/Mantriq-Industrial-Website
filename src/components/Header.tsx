import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Quality", href: "/quality" },
    { label: "Materials", href: "/materials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full glass border-b border-glass-border z-50 animate-slide-up transition-all duration-300 hover-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 animate-fade-in hover-scale transition-all duration-300">
            <div>
              <h1 className="text-xl font-bold text-foreground">MANTRIQ</h1>
              <p className="text-xs text-muted-foreground">INDUSTRIAL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in stagger-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  location.pathname === item.href ? 'text-primary after:scale-x-100' : ''
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in stagger-6">
            <Button variant="default" className="bg-primary hover:bg-primary/90 hover-scale hover-glow transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-glass-border glass-strong">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="bg-primary hover:bg-primary/90 mt-4">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
