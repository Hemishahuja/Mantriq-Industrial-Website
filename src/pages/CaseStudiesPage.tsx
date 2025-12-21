import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Target, ShieldCheck, History } from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Batch Performance: HVAC Components",
      meta: "50,000 pcs | Mild Steel | Black Oxide",
      summary: "Critical bracket production for a major Canadian HVAC distributor. We optimized the tooling strategy to maintain ±0.005\" tolerances across the entire lot.",
      result: "100% On-time delivery with 0.0% reject rate across three recurring lots."
    },
    {
      title: "Fastener Scale: Infrastructure Kit",
      meta: "100,000 pcs | Carbon Steel | Zinc Plated",
      summary: "Bulk production of bespoke machine screws for large-scale infrastructure projects. Integrated DDP fulfillment directly to the assembly site.",
      result: "30% Reduction in landed-cost vs incumbent local sourcing without compromising quality."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="High-Volume Case Studies | Mantriq Industrial"
        description="Proof of scale and precision. Review real-world manufacturing performance for high-volume HVAC and infrastructure components."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Proven Results</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Technical Performance<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed opacity-80">
              Evidence of our commitment to repeatability and predictable supply chain logistics for mission-critical industrial components.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {cases.map((c, i) => (
              <div key={i} className="group bg-polarice/30 p-12 rounded-[48px] border border-border hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-start">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-border">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{c.meta}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-spacecadet mb-6 tracking-tight group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-slate-text leading-relaxed opacity-80 mb-10 flex-grow">{c.summary}</p>

                <div className="w-full pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center">
                    <ShieldCheck className="w-5 h-5 text-accent mr-3" />
                    <span className="text-sm font-bold text-spacecadet">{c.result}</span>
                  </div>
                  <Link to="/quote" className="text-xs font-black uppercase tracking-widest text-primary flex items-center group-hover:underline decoration-2 underline-offset-4">
                    Request Similar Scale
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* History Note */}
          <div className="mt-32 p-10 bg-spacecadet rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10 overflow-hidden relative">
            <div className="z-10 flex items-center gap-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <History className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight">Vetted Performance.</h4>
                <p className="text-white/50 text-sm max-w-md">Our technical team has successfully coordinated over 5,000,000 precision parts delivered across North America.</p>
              </div>
            </div>
            <Link to="/contact" className="z-10 text-xs font-black uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-8">Explore Technical Archives</Link>
            <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
