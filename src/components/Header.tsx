import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Capabilities & Materials", href: "/capabilities" },
    { label: "Industries", href: "/industries" },
    { label: "Quality", href: "/quality" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Trust Bar / Top Bar */}
      <div className={cn(
        "bg-primary text-primary-foreground py-2 text-[11px] sm:text-xs font-medium transition-all duration-300 overflow-hidden",
        scrolled ? "h-0 opacity-0 py-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-1.5 opacity-90">
              <Mail className="w-3.5 h-3.5" />
              <span>info@mantriqindustrial.ca</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Serving Canada & USA</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn(
        "transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-border shadow-sm"
          : "bg-transparent py-6 border-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Lockup */}
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className={cn(
                  "text-2xl font-extrabold tracking-tighter transition-colors leading-none font-display",
                  scrolled || location.pathname !== "/" ? "text-primary" : "text-white"
                )}>
                  MANTRIQ<span className="text-accent">.</span>
                </span>
                <span className={cn(
                  "text-[10px] items-center flex uppercase tracking-[0.3em] font-semibold opacity-80 leading-none mt-1",
                  scrolled || location.pathname !== "/" ? "text-foreground" : "text-white"
                )}>
                  Industrial
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const active = location.pathname === item.href;
                const isHomePage = location.pathname === "/";
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "text-sm font-semibold tracking-wide transition-all relative py-1",
                      scrolled || !isHomePage
                        ? (active ? "text-primary" : "text-foreground/80 hover:text-primary")
                        : (active ? "text-white" : "text-white/80 hover:text-white")
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent animate-in fade-in slide-in-from-left-1 duration-300" />
                    )}
                  </Link>
                );
              })}
              <Link to="/quote">
                <button className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  scrolled || location.pathname !== "/"
                    ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
                )}>
                  Get in Touch
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled || location.pathname !== "/" ? "text-foreground hover:bg-accent/10" : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold text-primary tracking-tighter">MANTRIQ.</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X />
              </button>
            </div>
            <nav className="flex-1 flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-2xl font-bold text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="bg-primary text-white p-4 rounded-xl text-center font-bold text-lg mt-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
