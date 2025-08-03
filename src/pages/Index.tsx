import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Home page redesign:
 * - Unique layout distinct from inner pages
 * - Adds KPI strip, cost advantage explainer, process timeline, and social proof
 * - All CTAs guide to /quote
 */
export default function Index() {
  const kpis = [
    { label: "MOQ per line", value: "1,000 pcs" },
    { label: "Lead time", value: "4–8 weeks" },
    { label: "Materials", value: "SS 304/316, Brass, MS, Al" },
    { label: "Tolerance", value: "Standard production" },
  ];

  const steps = [
    { t: "01 — RFQ", d: "Share drawings, material, qty, finish, and delivery city." },
    { t: "02 — DFM + Quote", d: "We confirm manufacturability and landed cost." },
    { t: "03 — Production", d: "In‑process checks; 2.5D vision inspections." },
    { t: "04 — Shipment", d: "Consolidated routing with predictable ETAs." },
  ];

  const logos = [
    "Automotive", "Construction", "Marine", "Aerospace"
  ];

  return (
    <>
      <Helmet>
        <title>Bulk‑Standard CNC Fasteners — India Manufacturing, Predictable Landed Cost | Mantriq</title>
        <meta
          name="description"
          content="Bulk‑standard CNC fasteners manufactured in India with predictable landed cost. MOQ 1,000 pcs, 4–8 week lead times, standard tolerances."
        />
      </Helmet>
      <Header />
      <main>
        <Hero />

        {/* KPI strip */}
        <section className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {kpis.map((k) => (
              <Card key={k.label} className="hover-lift">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-[var(--spacecadet)]">{k.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-[var(--oceansteel)]">{k.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Value prop section (distinct from inner pages) */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--spacecadet)]">Why bulk‑standard beats precision on landed cost</h2>
              <p className="mt-4 text-[color-mix(in_oklab,var(--text-body)_85%,white)]">
                If you don’t need ultra‑tight tolerances, you shouldn’t be paying precision‑shop rates. We specialize in repeatable,
                standard‑tolerance parts at volume—where labor economics and shipping aggregation create real savings.
              </p>
              <ul className="mt-6 space-y-3 text-[var(--text-body)]">
                <li>• Labor differential without precision premiums</li>
                <li>• Consolidated routing for predictable ETAs</li>
                <li>• Standardized processes for repeatability</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <Button onClick={() => (window.location.href = "/quote")}>Get a Quote</Button>
                <Button variant="outline" onClick={() => (window.location.href = "/cost-advantage")}>
                  Compare Your Costs
                </Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover-lift">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Turning</CardTitle>
                </CardHeader>
                <CardContent>
                  Ø 2–50 mm, threads, knurling, slotting. Batch production with sample inspections.
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Milling</CardTitle>
                </CardHeader>
                <CardContent>
                  Up to 300 mm. Fixtures for repeatability. Surface finishing options.
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  SS 304/316, Brass, Mild Steel, Aluminium. Certificates on request.
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">QA & Traceability</CardTitle>
                </CardHeader>
                <CardContent>
                  In‑process checks, 2.5D vision system. Roadmap to ISO 9001.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="bg-[var(--polarice)] py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)]">How we work</h2>
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {steps.map((s) => (
                <Card key={s.t} className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-[var(--oceansteel)]">{s.t}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--text-body)]">{s.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button onClick={() => (window.location.href = "/quote")}>Start Your RFQ</Button>
            </div>
          </div>
        </section>

        {/* Social proof mini-strip */}
        <section className="container mx-auto px-4 py-12">
          <p className="uppercase text-xs tracking-wider text-[var(--spacecadet)]/70">Trusted in</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {logos.map((l) => (
              <div key={l} className="rounded-md border border-[color-mix(in_oklab,var(--spacecadet)_15%,transparent)] bg-white py-3 text-center text-sm text-[var(--spacecadet)]">
                {l}
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-[var(--spacecadet)] text-white py-14">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to compare your landed costs?</h3>
              <p className="text-white/85">Upload your drawings and requirements. We’ll respond within one business day.</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" onClick={() => (window.location.href = "/quote")}>Request Quote</Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/case-studies")}>
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
