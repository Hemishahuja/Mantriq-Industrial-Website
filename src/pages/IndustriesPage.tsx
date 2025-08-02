import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;