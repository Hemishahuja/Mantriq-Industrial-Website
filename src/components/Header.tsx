import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Industries", href: "/industries" },
    { label: "Equipment", href: "/equipment" },
    { label: "Quality", href: "/quality" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--spacecadet)_92%,transparent)] bg-[var(--spacecadet)]/95 border-b border-[color-mix(in_oklab,var(--page-bg)_15%,transparent)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--page-bg)] text-[var(--deep-navy)] font-extrabold">MI</div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-white tracking-wide">MANTRIQ</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">Industrial</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative group font-medium micro-lift t-hover hover-glow transition-colors ${active ? 'text-white' : 'text-white/85 hover:text-white'}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--oceansteel)] transition-all ease-lift ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--spacecadet)] border-t border-white/15 shadow-lg animate-fade-in z-50">
            <nav className="flex flex-col space-y-3 px-4 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "font-medium py-2 hover-glow micro-lift t-hover",
                    location.pathname === item.href ? 'text-white' : 'text-white/90 hover:text-white'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="mt-4" onClick={() => { setIsMenuOpen(false); window.location.href = "/quote"; }}>
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    {/* Mobile FAB: fixed Get Quote button */}
    <Link to="/quote" className="md:hidden fixed right-4 bottom-4 z-[60]">
      <Button variant="default" className="shadow-lg hover-scale">Get Quote</Button>
    </Link>
    </header>
  );
};

export default Header;
