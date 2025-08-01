import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Quality", href: "#quality" },
    { label: "Materials", href: "#materials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-slide-up transition-all duration-300 hover-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover-scale animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-lg">MI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MANTRIQ</h1>
              <p className="text-xs text-muted-foreground">INDUSTRIAL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in stagger-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.label}
              </a>
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
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