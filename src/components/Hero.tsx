import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Brand overlay per palette spec */}
        <div className="absolute inset-0" style={{ background: "rgba(26,27,65,0.45)" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Highlight Tag (Ocean Steel) */}
          <div className="inline-block px-6 py-2.5 rounded-lg mb-6 animate-slide-in-left hover-glow" style={{ backgroundColor: "var(--oceansteel)", color: "#FFFFFF" }}>
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              Local Support • Global Fulfillment
            </h2>
          </div>
          
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in stagger-2">
              Turned & Milled CNC Components. Delivered with Confidence.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/85 max-w-3xl animate-slide-up stagger-3">
              Expertly machined at scale and delivered on schedule — with clear landed costs and responsive Canadian support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-4">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg hover-lift hover-glow transition-all duration-300"
                onClick={() => (window.location.href = "/capabilities")}
              >
                View Our Capabilities
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg hover-lift transition-all duration-300"
                onClick={() => (window.location.href = "/quote")}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-1 h-8 rounded-full animate-pulse-glow" style={{ backgroundColor: "var(--oceansteel)" }}></div>
      </div>
    </section>
  );
};

export default Hero;
