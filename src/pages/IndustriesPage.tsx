import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import SEO from "@/components/SEO";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industries Served | Mantriq Industrial"
        description="High-volume CNC machined parts for Automotive, Aerospace, Infrastructure, and Marine sectors. Canadian support and global fulfillment."
      />
      <Header />

      <main className="pt-32 pb-24">
        {/* Industry Hero */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Market Focus</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Industrial Versatility<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed">
              Our precision manufacturing framework is optimized for the volume requirements and quality standards of North America's most demanding sectors.
            </p>
          </div>
        </section>

        {/* Industries Component Integrated directly into layout */}
        <section className="container mx-auto px-4">
          <Industries />
        </section>

        {/* Performance Callout */}
        <section className="container mx-auto px-4 mt-32">
          <div className="bg-polarice/30 rounded-[48px] p-12 md:p-20 border border-border flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-spacecadet mb-6 tracking-tight">Don't see your industry?</h3>
            <p className="text-slate-text max-w-2xl mb-8 leading-relaxed">
              Our technical coordinators specialize in analyzing technical drawings for any high-volume application. If it's turned or milled, we can likely optimize its supply chain.
            </p>
            <a href="/contact" className="text-primary font-bold hover:underline decoration-2 underline-offset-4">Contact our technical office today</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
