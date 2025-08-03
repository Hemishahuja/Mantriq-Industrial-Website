import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export default function QualityTraceabilityPage() {
  const ref = useReveal<HTMLDivElement>();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
      { "@type": "ListItem", "position": 2, "name": "Quality & Traceability", "item": "/quality" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Quality & Traceability | Standard Tolerance, On‑Time | Mantriq</title>
        <meta
          name="description"
          content="100% in‑process checks, 2.5D vision system, material certs. Roadmap to ISO 9001 (Q4 2026). Download our QA flowchart."
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Quality & Traceability</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Repeatability over ultra‑tight precision. Standard-tolerance parts delivered on time with full traceability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>In‑Process Checks</CardTitle>
                <CardDescription>Every shift, every batch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Critical dimensions verified during production to catch drift early.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>2.5D Vision System</CardTitle>
                <CardDescription>Fast, objective measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Rapid inspection of heads, threads, and lengths on sample intervals.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Material Certs</CardTitle>
                <CardDescription>Heat and grade documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Trace each lot back to raw stock with certificate attachments on request.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 flex gap-4">
            <a href="/qa-flowchart.pdf" className="inline-block">
              <Button className="hover-scale" asChild={false}>Download QA flowchart</Button>
            </a>
            <Button className="hover-scale" onClick={() => (window.location.href = "/quote")}>
              Start Your Project
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[var(--deep-navy)]">Roadmap to ISO 9001 (Q4 2026)</h2>
            <ul className="list-disc pl-6 mt-3 text-sm space-y-1">
              <li>Gap analysis and documentation phase</li>
              <li>Internal audits and training</li>
              <li>Certification body readiness and audit</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
