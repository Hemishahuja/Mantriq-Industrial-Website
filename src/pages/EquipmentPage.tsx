import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Cog, LayoutGrid, Zap } from "lucide-react";

export default function EquipmentPage() {
  const machines = [
    { name: "CNC Turning Centers", specs: "Ø 2–50 mm capability", qty: 6, detail: "Swiss-type and multi-spindle automated bar feeding." },
    { name: "Vertical Milling Centers", specs: "40\" x 20\" work envelope", qty: 4, detail: "High-torque spindles for aggressive productivity." },
    { name: "Thread & Form Rolling", specs: "High-speed 2-die systems", qty: 3, detail: "Cold-formed precision threading for maximum strength." },
    { name: "Metrology & Inspection", specs: "CMM & Automated Vision", qty: 2, detail: "Full dimensional logging and surface verification." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Equipment & Manufacturing Capacity | Mantriq Industrial"
        description="View our high-volume CNC machine list including multi-spindle turning and 4-axis milling centers. Engineered for million-piece lot sizes."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-4xl mb-20">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Global Capacity</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Production Powerhouse<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed opacity-80">
              We maintain a high-density footprint of precision machinery optimized for the recurring production of industrial fasteners and complex prismatic components.
            </p>
          </div>

          {/* Machine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machines.map((m, i) => (
              <div key={i} className="group bg-polarice/30 p-10 rounded-[40px] border border-border hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 border border-border group-hover:bg-primary transition-colors duration-500">
                  <Cog className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-spacecadet mb-4 tracking-tight">{m.name}</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">{m.specs}</p>
                  <p className="text-slate-text text-xs leading-relaxed opacity-70">{m.detail}</p>
                </div>
                <div className="pt-6 border-t border-border flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary">
                  <span>Inventory Qty</span>
                  <span className="text-spacecadet">{m.qty} Units</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-32 p-12 md:p-20 bg-spacecadet rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tighter">Ready for Volume Scaling.</h3>
              <p className="text-white/60 mb-8 md:mb-0">Whether you need 1,000 or 1,000,000 pieces, our technically coordinated cells are ready to integrate with your production schedule.</p>
            </div>
            <Link to="/quote" className="inline-flex items-center h-16 px-10 bg-accent text-white rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20">
              Reserve Capacity
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
