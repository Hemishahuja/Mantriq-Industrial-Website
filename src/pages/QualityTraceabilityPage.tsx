import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, Search, ChevronRight, Binary } from "lucide-react";

export default function QualityTraceabilityPage() {
  const steps = [
    {
      icon: Search,
      title: "In-Process Verification",
      desc: "Dimensional checks performed at fixed intervals during the production cycle to ensure zero tolerance drift."
    },
    {
      icon: Binary,
      title: "Vision Metrology",
      desc: "Automated 2.5D vision systems provide high-speed, objective measurement of critical features and surface finishes."
    },
    {
      icon: FileCheck,
      title: "Full Lot Traceability",
      desc: "Every batch is linked to its raw material heat number and production metrics, ensuring complete supply chain accountability."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Quality & Traceability | Technical Standards | Mantriq Industrial"
        description="Learn about our rigorous quality control protocols, automated vision metrology, and full lot traceability for high-volume CNC production."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Technical Governance</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Precision Verified<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed opacity-80">
              We maintain a rigorous quality management system designed specifically for the repeatability requirements of high-volume industrial fasteners and prismatic hardware.
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group bg-polarice/30 p-10 rounded-[40px] border border-border hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 border border-border group-hover:bg-primary transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-spacecadet mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* ISO Roadmap */}
          <div className="mt-32 p-12 md:p-24 bg-spacecadet rounded-[60px] text-white flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
            <div className="flex-1 z-10">
              <div className="flex items-center space-x-3 text-accent mb-6">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest">Global Standards</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight">ISO 9001 Roadmap.</h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
                <p>Our India production cells are currently operating under strict internal quality gates, with full ISO 9001:2015 certification status targeted for Q1 2026.</p>
                <ul className="space-y-4 text-sm font-bold text-white/80">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" /> Gap Analysis & Documentation (Active)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white/20 rounded-full mr-3" /> Pre-Certification Internal Audit</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white/20 rounded-full mr-3" /> Final Certification Body Review</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 z-10">
              <Link to="/quote" className="inline-flex items-center h-16 px-12 bg-accent text-white rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20">
                Request QA Protocols
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
