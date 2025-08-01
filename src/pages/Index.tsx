import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Quality from "@/components/Quality";
import Materials from "@/components/Materials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Industries />
        <Capabilities />
        <Quality />
        <Materials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
