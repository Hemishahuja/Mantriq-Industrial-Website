import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, Scale, Truck } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="High-Volume CNC Machined Components | Mantriq Industrial"
        description="Reliable CNC turned and milled components for OEMs. Predictable landed costs, Canadian support, and high-scale fulfillment."
      />

      <Header />

      <main>
        <Hero />

        {/* Value Proposition Strip */}
        <section className="bg-spacecadet py-16 border-y border-white/10 mt-[-1px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Process Focus</h4>
                <p className="text-white font-display text-lg font-semibold tracking-tight">Milling & Turning</p>
              </div>
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Local Presence</h4>
                <p className="text-white font-display text-lg font-semibold tracking-tight">Toronto Technical Office</p>
              </div>
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Scale Capacity</h4>
                <p className="text-white font-display text-lg font-semibold tracking-tight">1M+ Parts / Month</p>
              </div>
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Client Focus</h4>
                <p className="text-white font-display text-lg font-semibold tracking-tight">OEM & Distributor Bulk</p>
              </div>
            </div>
          </div>
        </section>

        <TrustSection />

        {/* Core Services Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Precision Manufacturing</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight">
                  High-Output CNC Solutions<span className="text-accent">.</span>
                </h3>
              </div>
              <Button asChild variant="link" className="text-primary font-bold group p-0 text-sm">
                <Link to="/capabilities" className="flex items-center">
                  View Technical Capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative overflow-hidden rounded-[32px] bg-polarice p-12 hover:bg-primary transition-colors duration-500">
                <div className="relative z-10 text-spacecadet group-hover:text-white transition-colors duration-500">
                  <Factory className="w-12 h-12 mb-8 opacity-90" />
                  <h4 className="text-3xl font-extrabold mb-4 tracking-tight">CNC Turning</h4>
                  <p className="opacity-75 mb-10 max-w-sm leading-relaxed text-sm">
                    Automated Swiss-type and multi-axis turning specialized for high-volume production of complex cylindrical components.
                  </p>
                  <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-accent" /> Automated Production</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-accent" /> Precision Tolerances</li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[32px] bg-polarice p-12 hover:bg-primary transition-colors duration-500">
                <div className="relative z-10 text-spacecadet group-hover:text-white transition-colors duration-500">
                  <Scale className="w-12 h-12 mb-8 opacity-90" />
                  <h4 className="text-3xl font-extrabold mb-4 tracking-tight">CNC Milling</h4>
                  <p className="opacity-75 mb-10 max-w-sm leading-relaxed text-sm">
                    Versatile 3, 4, and 5-axis vertical and horizontal milling centers for diverse prismatic component geometries and batch runs.
                  </p>
                  <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-accent" /> High-Speed Machining</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-accent" /> Advanced Workholding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Banner */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-spacecadet rounded-[48px] p-12 md:p-24 relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-8">
                    <Truck className="text-accent w-6 h-6" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Logistics & Compliance</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]">
                    Worldwide Fulfillment. <br />
                    Delivered DDP Toronto.
                  </h3>
                  <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-2xl">
                    We manage the entire international supply chain. From technical coordination at the plant to customs clearance and final delivery to your facility in Ontario or the USA.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center">
                      <span className="font-bold text-white text-sm">Landed Cost Clarity</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center">
                      <span className="font-bold text-white text-sm">Traceable Quality</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-1/3 aspect-square border-[20px] border-white/5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Global Support / Address Section */}
        <section className="py-24 bg-polarice/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Technical Presence</h2>
                <h3 className="text-4xl font-extrabold text-spacecadet mb-8 tracking-tight">Our Toronto Headquarters.</h3>
                <p className="text-slate-text mb-10 leading-relaxed text-lg">
                  Located in the heart of Toronto, our technical team provides responsive account management and technical review for clients across North America.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-spacecadet">18 King Street East, Suite 1400</p>
                      <p className="text-sm text-slate-text">Toronto, Ontario M5C 1C4 Canada</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-spacecadet/5 rounded-[40px] border border-border flex items-center justify-center p-20 grayscale opacity-50">
                <Truck className="w-20 h-20 text-spacecadet/20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-extrabold text-spacecadet mb-10 tracking-tighter">
              The Standard for <br /> Bulk CNC Parts.
            </h2>
            <Button asChild size="lg" className="bg-accent text-white px-12 h-16 rounded-full font-black uppercase tracking-widest shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
              <Link to="/quote">Request Technical Proposal</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
