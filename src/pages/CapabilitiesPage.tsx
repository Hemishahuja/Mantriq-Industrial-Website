import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Capabilities from "@/components/Capabilities";

const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 bg-[var(--page-bg)]">
        {/* Wrap in a neutral page background to avoid light blue full-bleed */}
        {/* Remove outer white card to match other pages */}
        <section className="container mx-auto px-4 py-12">
          <Capabilities />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
