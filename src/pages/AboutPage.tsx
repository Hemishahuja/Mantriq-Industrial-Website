import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-[-1]">
        <img
          src="/images/leadership-bg.png"
          alt=""
          className="w-full h-full object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/55" />
      </div>
      <SEO
        title="About Us | Precision Manufacturing Specialists | Mantriq Industrial"
        description="A Canadian-owned supplier of high-volume CNC components. Learn about our mission to bring predictability and precision to the industrial supply chain."
      />
      <Header />
      <main className="pt-32 pb-32">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;