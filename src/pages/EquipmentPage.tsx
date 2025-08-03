import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

/**
 * TODO: Replace placeholder machine data with real make/model/qty/cycle rate from factory.
 */
const machines = [
  { makeModel: "Haas ST-20Y", qty: 6, process: "CNC Turning (Ø 2–50 mm)", cyclePerHour: "Up to 120 pcs/hr" },
  { makeModel: "Haas VF-2", qty: 4, process: "CNC Milling (≤ 300 mm)", cyclePerHour: "Up to 40 pcs/hr" },
  { makeModel: "Thread Roller - 2-Die", qty: 3, process: "Thread Rolling", cyclePerHour: "Up to 300 pcs/hr" },
];

export default function EquipmentPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      <Helmet>
        <title>Equipment & Capacity | Mantriq Industrial</title>
        <meta name="description" content="Bulk CNC capacity in India: turning Ø 2–50 mm, milling ≤ 300 mm. Scaled for 1k–1M pieces. View machine list and cycle rates." />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Equipment & Capacity</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Built for bulk-standard fasteners. Single vetted partner in India. Batches from 1k to 1M pieces.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {machines.map((m) => (
              <Card key={m.makeModel} className="hover-lift">
                <CardHeader>
                  <CardTitle>{m.makeModel}</CardTitle>
                  <CardDescription>{m.process}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Qty:</strong> {m.qty}</li>
                    <li><strong>Cycle rate:</strong> {m.cyclePerHour}</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button className="hover-scale" onClick={() => (window.location.href = "/contact")}>
              View Schedule
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
