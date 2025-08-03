import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "What are your typical lead times?", a: "4–8 weeks door-to-door depending on batch size and finish. We provide firm ETAs at PO." },
  { q: "What is your MOQ?", a: "1,000 pieces per line item." },
  { q: "What tolerances do you support?", a: "Standard production tolerances. We politely decline ultra‑tight precision work (e.g., tighter than ±0.02 mm)." },
  { q: "What materials do you machine?", a: "SS 304/316, brass, mild steel, aluminium for fasteners and hardware." },
  { q: "Do you offer design, assembly or prototyping?", a: "No. We focus on bulk-standard CNC turning/milling, thread-rolling, and surface finishing (zinc, black‑oxide)." },
  { q: "Where are parts manufactured?", a: "Exclusively in India via our single vetted partner factory." },
  { q: "Payment terms?", a: "Typically 30% deposit, balance on pre‑shipment; options vary by order size and client history." },
];

export default function FAQPage() {
  const ref = useReveal<HTMLDivElement>();
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Bulk CNC FAQ — Lead Times, MOQ, Tolerances | Mantriq</title>
        <meta name="description" content="Answers to common questions about bulk CNC fastener manufacturing in India: lead times, MOQ (1k), tolerances, materials, and scope." />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">FAQ</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Straight answers for wholesalers and buyers of bulk-standard fasteners.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {faqs.map((f) => (
              <Card key={f.q} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{f.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
