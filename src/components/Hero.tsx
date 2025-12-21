import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/19791092/19791092-uhd_2560_1440_60fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-spacecadet/95 via-spacecadet/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-spacecadet via-transparent to-transparent opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              High-Volume CNC Production
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-slide-up opacity-0 [animation-fill-mode:forwards] tracking-tighter">
            Precision at Scale<span className="text-accent">.</span>
            <br />
            <span className="text-white/90">Delivered With Confidence.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Bulk CNC turned and milled components with predictable landed costs, Repeatable quality, and responsive Canadian technical support.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            <Button
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 px-8 h-14 rounded-full text-base font-bold shadow-xl shadow-accent/20 transition-all hover:scale-105"
            >
              <Link to="/quote">
                Get Your Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-full text-base font-bold backdrop-blur-sm"
            >
              <Link to="/capabilities">
                Explore Capabilities
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <div>
              <p className="text-3xl font-extrabold text-white">7-8</p>
              <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Week Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Traceability</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">High</p>
              <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Volume MOQ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none hidden lg:block">
        <div className="h-full w-full bg-gradient-to-l from-accent/5 to-transparent backdrop-blur-[2px]" />
      </div>
    </section>
  );
};

export default Hero;
