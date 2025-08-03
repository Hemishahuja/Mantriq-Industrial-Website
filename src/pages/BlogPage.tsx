import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const posts = [
  {
    title: "Choosing the Right Fastener Grade",
    date: "2025-07-10",
    summary:
      "A buyer’s guide to common grades for screws and studs, with when to specify SS 304/316 vs mild steel or brass.",
  },
  {
    title: "Bulk vs Precision Machining: Cost Drivers",
    date: "2025-07-24",
    summary:
      "Where bulk-standard CNC wins on landed cost — and when ultra-tight tolerances justify premium precision shops.",
  },
];

export default function BlogPage() {
  const ref = useReveal<HTMLDivElement>();
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Mantriq Insights",
    "description": "Insights on bulk CNC fastener manufacturing in India, procurement, and operations."
  };

  return (
    <>
      <Helmet>
        <title>Blog & Insights | Mantriq Industrial</title>
        <meta
          name="description"
          content="Bi‑weekly insights on bulk CNC fastener manufacturing in India, materials, and cost drivers for wholesalers."
        />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Insights</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Practical content for buyers of bulk-standard fasteners.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {posts.map((p) => (
              <Card key={p.title} className="hover-lift">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{new Date(p.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{p.summary}</p>
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
