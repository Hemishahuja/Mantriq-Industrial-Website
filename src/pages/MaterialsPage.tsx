import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Materials from "@/components/Materials";

const MaterialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Materials />
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;