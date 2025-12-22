import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Percent, Truck, Scale } from "lucide-react";

export default function CostAdvantagePage() {
  const advantages = [
    {
      icon: Scale,
      title: "Labor Economics",
      desc: "Up to 35% reduction in production costs for volume lots by leveraging global labor differentials without quality compromise."
    },
    {
      icon: Truck,
      title: "Consolidated Logistics",
      desc: "Automated route planning and shipping aggregation reduce landed overhead. We handle the duties, so you just receive the parts."
    },
    {
      icon: Percent,
      title: "Volume Scalability",
      desc: "Our technical cells are optimized for recurring batches of 1,000 to 1,000,000 pieces, offering maximum efficiency at scale."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cost Leadership in Precision Machining | Mantriq Industrial"
        description="Optimize your procurement with up to 35% landed-cost savings. We combine global production scale with Canadian support and logistics."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Strategic Value</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Predictable Landed Costs<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed opacity-80">
              We eliminate the traditional trade-off between price and reliability by integrating global production economics with rigorous Canadian technical oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="group bg-polarice/30 p-10 rounded-[40px] border border-border hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 border border-border group-hover:bg-primary transition-colors duration-500">
                  <adv.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-spacecadet mb-4 tracking-tight">{adv.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed opacity-70 mb-8">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison Banner */}
          <div className="mt-32 p-12 md:p-24 bg-primary rounded-[60px] text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight">Compare Your Current Spend.</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-xl">
                Send us your last technical RFQ or drawing set. We'll provide a transparent landed-cost comparison within 48 business hours.
              </p>
              <Link to="/quote" className="inline-flex items-center h-16 px-12 bg-white text-primary rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                Request Technical Analysis
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block w-96 h-96 bg-accent rounded-full absolute right-[-5%] top-[-10%] blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
