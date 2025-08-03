import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ThankYouPage() {
  // Fire GA conversion on load (in case redirect happened without event)
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "generate_lead", { method: "rfq_form_thank_you" });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You | Mantriq Industrial</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Thank you</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Your RFQ has been submitted. Our team will reply within one business day.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="hover-scale" onClick={() => (window.location.href = "/")}>Back to Home</Button>
            <Button variant="outline" className="hover-scale" onClick={() => (window.location.href = "/case-studies")}>
              View Case Studies
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
