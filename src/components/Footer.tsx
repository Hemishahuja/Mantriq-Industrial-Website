const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "News", href: "#news" }
    ],
    services: [
      { label: "CNC Turning", href: "#capabilities" },
      { label: "CNC Milling", href: "#capabilities" },
      { label: "Quality Control", href: "#quality" },
      { label: "Materials", href: "#materials" }
    ],
    industries: [
      { label: "Automotive", href: "#industries" },
      { label: "Aerospace", href: "#industries" },
      { label: "Oil & Gas", href: "#industries" },
      { label: "Medical", href: "#industries" }
    ]
  };

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">MI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MANTRIQ</h3>
                <p className="text-sm text-gray-300">INDUSTRIAL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading Canadian supplier of high-quality precision CNC machined components 
              for diverse industries across Canada.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 info@mantriqindustrial.ca</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Ontario, Canada</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Mantriq Industrial. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-300 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;