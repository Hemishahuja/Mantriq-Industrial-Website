import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cnc-machining.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-industrial-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="bg-primary text-primary-foreground inline-block px-6 py-3 rounded-lg mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Leading Canadian Suppliers of High Quality Precision CNC Components
            </h2>
          </div>
          
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Precision CNC Machining for Canada's Industries
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl">
              Since our founding, Mantriq Industrial has been providing high-quality precision engineering services to industries across Canada, delivering components that perform in the most demanding environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                View Our Capabilities
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-industrial-dark px-8 py-4 text-lg"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;