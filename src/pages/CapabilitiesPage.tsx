import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Capabilities from "@/components/Capabilities";

const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
};

export default CapabilitiesPage;