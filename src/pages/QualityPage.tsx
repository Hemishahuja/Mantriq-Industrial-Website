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
        {/* Technical Inspection Showcase */}
        <section className="container mx-auto px-4 mt-32">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Quality Infrastructure</h2>
            <h3 className="text-4xl font-extrabold text-spacecadet tracking-tighter">In-House Metrology Lab.</h3>
          </div>

          <div className="space-y-24">
            {/* Machine 1: Mitoya */}
            <div className="grid lg:grid-cols-2 gap-16 items-center group">
              <div className="order-2 lg:order-1 relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-spacecadet/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="/images/mitoya.jpg"
                  alt="Mitoya VM2515 Vision Measurement System"
                  className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black uppercase tracking-widest text-xs">Vision Capabilities</span>
                </div>
                <h4 className="text-3xl font-extrabold text-spacecadet mb-6 leading-tight">Mitoya VM2515 <span className="text-slate-300">2.5D</span></h4>
                <p className="text-lg text-slate-text mb-8 leading-relaxed font-medium">
                  High-precision vision measurement system with surface illumination, capable of detecting microscopic geometric tolerances that standard calipers miss.
                </p>
                <ul className="space-y-4">
                  {[
                    "Non-contact optical inspection",
                    "Surface illumination for blind hole features",
                    "Automated edge detection"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-spacecadet font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Machine 2: Almicro */}
            <div className="grid lg:grid-cols-2 gap-16 items-center group">
              <div className="order-1">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-accent font-black uppercase tracking-widest text-xs">Profile Verification</span>
                </div>
                <h4 className="text-3xl font-extrabold text-spacecadet mb-6 leading-tight">Almicro <span className="text-slate-300">300mm</span></h4>
                <p className="text-lg text-slate-text mb-8 leading-relaxed font-medium">
                  Industrial-grade screen profile projector with geometric DRO. Provides 10X magnification for verifying complex thread forms, radii, and chamfers against CAD overlays.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "10X Magnification",
                    "Geometric DRO readout",
                    "300mm Screen diameter",
                    "Surface & Contour illumination"
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-2 relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-spacecadet/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* Carousel effect for Almicro images if feasible, or just show main one */}
                <img
                  src="/images/almicro-1.jpg"
                  alt="Almicro Profile Projector"
                  className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Certification Block */}
            <div className="bg-spacecadet p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl mt-16">
              <div className="flex items-center space-x-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Traceability Guaranteed</h4>
                  <p className="text-white/60 text-sm">Material Test Reports (MTR) provided with every shipment.</p>
                </div>
              </div>
              <div className="h-px w-full md:w-px md:h-16 bg-white/10" />
              <div className="flex items-center space-x-3 text-sm font-bold tracking-wide">
                <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/30">ISO Compliant Process</span>
              </div>
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