import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quality from "@/components/Quality";
import SEO from "@/components/SEO";

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
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;