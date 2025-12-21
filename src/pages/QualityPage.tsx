import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quality from "@/components/Quality";
import SEO from "@/components/SEO";

import { CheckCircle2, Shield } from "lucide-react";

const inspectionTech = [
  "Mitoya VM2515 2.5D Vision Measurement with Surface Illumination",
  "ALMICRO 300 MM SCREEN PROFILE PROJECTOR WITH GEOMETRIC DRO 10X MAGNIFICATION AND SURFACE ILLUMINATION"
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Quality Assurance & Standards | Mantriq Industrial"
        description="ISO-compliant manufacturing with full part traceability. Advanced inspection systems including CMM and 2.5D vision for 100% reliability."
      />
      <Header />
      <main className="pt-32 pb-24">
        {/* Quality Hero */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Global Standards</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Uncompromising Quality<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed">
              Every component we deliver is backed by rigorous inspection protocols and full material traceability, ensuring your production line operates with zero surprises.
            </p>
          </div>
        </section>

        <Quality />

        {/* Technical Inspection (Migrated from Capabilities) */}
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
              <Shield className="w-16 h-16 text-accent mb-8" />
              <h4 className="text-2xl font-extrabold mb-4">Certified Compliance</h4>
              <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                Full traceability and material certs (MTC) provided for all high-volume industrial shipments.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Visit Callout (Moved from Quality Component) */}
        <section className="container mx-auto px-4 mt-32">
          <div className="bg-primary p-12 md:p-24 rounded-[60px] text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight">Visit the Heart of Our Production.</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-xl">
                We maintain an open-door policy for our OEM partners. Schedule a visit to our Toronto technical office or a virtual tour of our high-volume production cells.
              </p>
              <button className="bg-white text-primary px-10 h-16 rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl text-sm">
                Schedule Consultation
              </button>
            </div>
            <div className="hidden lg:block w-1/3 aspect-square bg-white rounded-full opacity-5 scale-150 -translate-y-1/2" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;