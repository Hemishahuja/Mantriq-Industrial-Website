import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const cases = [
  {
    title: "NorthernCam Screw Batch",
    meta: "100,000 pcs | Carbon steel | Zinc plated",
    summary:
      "Bulk-standard machine screws produced in India and delivered to Leeds, UK — on time, zero defects in the sample lot.",
    result: "Zero defects (sample), on-time, landed-cost saving vs UK sourcing.",
  },
  {
    title: "Canadian HVAC Brackets",
    meta: "50,000 pcs | Mild steel | Black oxide",
    summary:
      "Batch production of HVAC brackets for Canadian wholesale. Repeatable quality at standard tolerances, reliable delivery windows.",
    result: "Consistent gauge and finish; stable cycle time for predictable lead time.",
  },
];

export default function CaseStudiesPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      <Helmet>
        <title>Bulk CNC Case Studies | Mantriq Industrial</title>
        <meta
          name="description"
          content="Proof from real batches: NorthernCam screw lot and Canadian HVAC brackets. Bulk CNC fastener manufacturing in India with reliable lead times."
        />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Case Studies</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Evidence you can act on. Standard-tolerance batches delivered on time with predictable landed costs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {cases.map((c) => (
              <Card key={c.title} className="hover-lift">
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                  <CardDescription>{c.meta}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>{c.summary}</p>
                  <p className="text-sm"><strong>Result:</strong> {c.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button className="hover-scale" onClick={() => (window.location.href = "/quote")}>
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
