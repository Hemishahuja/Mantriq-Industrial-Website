import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quality from "@/components/Quality";

const QualityPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Quality />
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;