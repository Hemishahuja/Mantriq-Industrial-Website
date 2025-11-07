import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const cncGif = "https://media1.giphy.com/media/YUeNYlkCFrDTZnrZtg/giphy.gif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/19791092/19791092-uhd_2560_1440_60fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Brand overlay per palette spec */}
      <div className="absolute inset-0" style={{ background: "rgba(26,27,65,0.45)" }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Highlight Tag (Ocean Steel) */}
          <div className="inline-block px-6 py-2.5 rounded-lg mb-6 animate-slide-in-left t-lift ease-lift hover-glow" style={{ backgroundColor: "var(--oceansteel)", color: "#FFFFFF" }}>
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              Local Support • Global Fulfillment
            </h2>
          </div>
          
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in stagger-2 t-fade ease-lift">
              Turned & Milled CNC Components. Delivered with Confidence.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/85 max-w-3xl animate-slide-up stagger-3 t-fade ease-lift">
              Expertly machined at scale and delivered on schedule -- with clear landed costs and responsive Canadian support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-4 t-fade ease-lift">
              <Button
                asChild
                size="lg"
                className="px-8 py-4 text-lg hover-lift micro-lift hover-glow ease-lift"
              >
                <Link to="/capabilities">
                  View Our Capabilities
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg hover-lift micro-lift ease-lift"
              >
                <Link to="/quote">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 stagger-5 animate-bounceSubtle t-lift ease-lift">
        <div className="w-1 h-8 rounded-full animate-pulse" style={{ backgroundColor: "var(--oceansteel)" }}></div>
      </div>
    </section>
  );
};

export default Hero;
