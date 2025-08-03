import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export default function CostAdvantagePage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      <Helmet>
        <title>Low-Cost CNC Machining in India | Landed Cost Savings | Mantriq</title>
        <meta
          name="description"
          content="Compare your landed costs. India-based bulk CNC fastener manufacturing with shipping aggregation and predictable lead times."
        />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Cost Advantage</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Up to 35% landed-cost savings vs North American shops — driven by labor economics and shipping aggregation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Labor Differential</CardTitle>
                <CardDescription>India vs UK/US</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Bulk-standard work captures the most value from wage differentials without requiring ultra-tight tolerances.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Shipping Aggregation</CardTitle>
                <CardDescription>Batch & route planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Consolidated ocean + last-mile courier for predictable ETAs. Duties/fees forecasted upfront.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Standardization</CardTitle>
                <CardDescription>Repeatability over precision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We focus on repeatable, standard-tolerance parts — the best leverage for cost leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <Button className="hover-scale" onClick={() => (window.location.href = "/quote")}>
              Compare Your Costs
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
