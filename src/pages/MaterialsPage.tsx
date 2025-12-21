import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Materials from "@/components/Materials";
import SEO from "@/components/SEO";

const MaterialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industrial Materials & Alloys | Mantriq Industrial"
        description="High-output machining for Stainless Steel, Aluminum, Brass, and high-performance plastics. Full material certifications available for all production runs."
      />
      <Header />
      <main className="pt-32 pb-24">
        {/* Materials Hero */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Material Science</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Engineered for Performance<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed">
              Our high-volume production framework is optimized for a diverse range of metals and engineering plastics, ensuring optimal chip control and surface integrity for every grade.
            </p>
          </div>
        </section>

        <Materials />
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;