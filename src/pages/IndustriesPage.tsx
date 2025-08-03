import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Match other pages: neutral page background and NO outer card wrapper */}
      <main className="pt-16 bg-[var(--page-bg)]">
        <section className="container mx-auto px-4 py-12">
          <Industries />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
