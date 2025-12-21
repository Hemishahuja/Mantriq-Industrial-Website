import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Cog, Search, Layers, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const machineUnits = [
  {
    title: "Unit 1 – Precision & High-Volume",
    categories: [
      {
        name: "CNC Turning",
        items: ["LMW Machining Master – 6\" & 5\" chucks", "ACE Machining Master – 6\" chuck", "Takang Slant Bed Linear with LNS bar feeders"]
      },
      {
        name: "Semi-Auto Traub",
        items: ["6-tool turning with bar feed", "Through-bore: Ø15 mm to Ø40 mm (8 units)"]
      },
      {
        name: "Conventional",
        items: ["Adda Machines 2-2.5 ft", "10-ton Power Press", "Drill Range Ø3 mm – Ø25 mm"]
      }
    ]
  },
  {
    title: "Unit 2 – Multi-Turret Precision",
    categories: [
      {
        name: "Advanced Turning",
        items: ["Miyano BNC 32/25/42 – turret & sub-turret", "Koyo 42 Turn – turret & sub-turret", "LMW Machining Master"]
      },
      {
        name: "Support",
        items: ["Ø42 mm through-bore Traubs", "4-station Gang Drills"]
      }
    ]
  },
  {
    title: "Unit 3 – Large Component Machining",
    categories: [
      {
        name: "Heavy-Duty",
        items: ["Automatic Bandsaw: Ø5 mm – Ø240 mm", "Doosan CNCs – 8\" chucks", "Phillar & Okamahowa CNCs"]
      }
    ]
  }
];

const inspectionTech = [
  "Mitoya VM2515 2.5D Vision Measurement",
  "Baty 500 mm Profile Projector (10×)",
  "Shadowgraph System (10×)",
  "AImicro 300 mm with Geometric DRO"
];

const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Manufacturing Capabilities | Mantriq Industrial"
        description="15+ years of precision engineering. High-volume CNC turning, milling, and multi-turret machining across 3 specialized units."
      />
      <Header />

      <main className="pt-32 pb-24">
        {/* Technical Header */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 leading-none">Technical Infrastructure</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Multi-Unit Capacity<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed">
              We operate three specialized manufacturing cells in Ludhiana, Punjab, optimized for high-volume repeatability and diverse component geometries.
            </p>
          </div>
        </section>

        {/* Machine Units Grid */}
        <section className="container mx-auto px-4 space-y-20">
          {machineUnits.map((unit, uIdx) => (
            <div key={uIdx} className="bg-polarice/30 rounded-[48px] p-10 md:p-16 border border-border overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-spacecadet mb-10 tracking-tight flex items-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-4 text-sm">{uIdx + 1}</div>
                  {unit.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {unit.categories.map((cat, cIdx) => (
                    <div key={cIdx}>
                      <h4 className="font-bold text-spacecadet text-sm uppercase tracking-widest mb-6 border-l-2 border-accent pl-4">{cat.name}</h4>
                      <ul className="space-y-4">
                        {cat.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start text-sm text-slate-text opacity-80 leading-relaxed font-medium">
                            <ArrowRight className="w-4 h-4 text-primary mr-3 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
          ))}
        </section>

        {/* Technical Inspection */}
        <section className="container mx-auto px-4 mt-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Quality Control</h2>
              <h3 className="text-4xl font-extrabold text-spacecadet mb-8 tracking-tighter">In-House Metrology.</h3>
              <p className="text-lg text-slate-text mb-10 leading-relaxed opacity-80">
                Every batch undergoes rigorous verification using our vision measurement systems and profile projectors, ensuring repeatable high-volume consistency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {inspectionTech.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-bold text-spacecadet">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-spacecadet p-16 rounded-[60px] text-white flex flex-col justify-center items-center text-center">
              <Layers className="w-16 h-16 text-accent mb-8" />
              <h4 className="text-2xl font-extrabold mb-4">Material Diversity</h4>
              <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                From 4 mm bright bars to 240 mm bandsaw capacity. SS, Brass, MS, Aluminum, Copper, and Nylon.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 mt-40 text-center">
          <div className="bg-primary rounded-[60px] py-24 px-10 relative overflow-hidden text-white shadow-2xl shadow-primary/20">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter">7-8 Week Lead Time Guaranteed.</h2>
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
