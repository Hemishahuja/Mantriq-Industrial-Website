import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Materials from "@/components/Materials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Cog, Search, Layers, Zap } from "lucide-react";
import { machineUnits } from "@/data/capabilities";
import UnitCard from "@/components/capabilities/UnitCard";


const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Capabilities & Materials | Mantriq Industrial"
        description="15+ years of precision engineering. High-volume CNC turning, milling, and comprehensive technical material specifications across 3 specialized units."
      />
      <Header />

      <main className="pt-32 pb-24">
        {/* Technical Header */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 leading-none">Technical Infrastructure</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Technical Infrastructure & Materials<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed">
              We operate three specialized manufacturing cells in India, optimized for high-volume repeatability and diverse component geometries.
            </p>
          </div>
        </section>

        {/* Machine Units Grid */}
        <section className="container mx-auto px-4 space-y-20">
          {machineUnits.map((unit, idx) => (
            <UnitCard key={idx} unit={unit} index={idx} />
          ))}
        </section>


        {/* Technical Materials Integration */}
        <section className="mt-32">
          <div className="container mx-auto px-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Material Science</h2>
            <h3 className="text-4xl font-extrabold text-spacecadet mb-8 tracking-tighter">Approved Material Grades.</h3>
            <p className="text-lg text-slate-text mb-12 leading-relaxed opacity-80 max-w-3xl">
              Our high-volume production framework is optimized for a diverse range of metals and engineering plastics, ensuring optimal chip control and surface integrity for every grade.
            </p>
          </div>
          <Materials />
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 mt-40 text-center">
          <div className="bg-primary rounded-[60px] py-16 px-10 relative overflow-hidden text-white shadow-2xl shadow-primary/20">
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-lg text-white/80 mb-12">Submit your technical drawings today for a firm landed-cost quotation.</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-12 h-16 rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 border-none shadow-xl">
                <Link to="/quote">Open Technical RFQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
