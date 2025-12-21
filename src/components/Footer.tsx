import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spacecadet py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 border-l-4 border-accent pl-6">
            <span className="text-3xl font-extrabold tracking-tighter mb-4 block">
              MANTRIQ<span className="text-accent">.</span>
            </span>
            <p className="opacity-50 text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-xs font-bold">
              Reliable High-Volume CNC Production & Global Fulfillment.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-8 text-accent uppercase tracking-[0.3em] text-[10px]">Solutions</h5>
            <ul className="space-y-4 text-sm font-medium opacity-60">
              <li><Link to="/capabilities" className="hover:text-accent transition-colors">Capabilities & Materials</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-colors">Key Industries Focus</Link></li>
              <li><Link to="/quality" className="hover:text-accent transition-colors">Quality Control Standards</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Our Heritage</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">Technical FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-8 text-accent uppercase tracking-[0.3em] text-[10px]">Headquarters</h5>
            <ul className="space-y-4 text-sm font-medium opacity-60">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-accent shrink-0 mt-0.5" />
                <span>18 King St East, Suite 1400<br />Toronto, ON M5C 1C4 Canada</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-3 text-accent shrink-0" />
                <span>Serving North America</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-8 text-accent uppercase tracking-[0.3em] text-[10px]">Contact Desk</h5>
            <ul className="space-y-4 text-sm font-medium opacity-60">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent shrink-0" />
                <span className="text-white font-bold">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-accent font-bold">
                <Mail className="w-4 h-4 mr-3 text-accent shrink-0" />
                <span>info@mantriqindustrial.ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] uppercase tracking-[0.4em] font-black">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p>© {currentYear} Mantriq Industrial Inc. All Rights Reserved.</p>
            <a
              href="https://omniananetsolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hover:text-white transition-colors block underline underline-offset-2"
            >
              IT Sevices by Omniana net solutions
            </a>
          </div>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
