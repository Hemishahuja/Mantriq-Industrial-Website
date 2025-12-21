import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Technical Support | Mantriq Industrial"
        description="Connect with our Toronto engineering office for project consultations, DFM reviews, and high-volume CNC production planning."
      />
      <Header />
      <main className="pt-32 pb-32">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;