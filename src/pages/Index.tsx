import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
      { label: "Tolerance", value: "Industrial standard" },
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

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [miniFormData, setMiniFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleMiniInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMiniFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMiniSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const netlifyFormData = new FormData();
      netlifyFormData.append("form-name", "mini-contact");
      netlifyFormData.append("name", miniFormData.name);
      netlifyFormData.append("email", miniFormData.email);
      netlifyFormData.append("message", miniFormData.message);

      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (netlifyResponse.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you! We'll respond within 24 hours.",
        });
        setMiniFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Please try again or visit the full contact page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
<Helmet>
  <title>Mantriq Industrial</title>
  <meta
    name="description"
    content="Leading Canadian supplier of high-quality precision CNC machined components. Serving automotive, aerospace, oil & gas, medical, construction and marine industries across Canada."
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

        {/* Enhanced Contact Us section */}
        <section id="contact" className="py-20 bg-[var(--polarice)]">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--spacecadet)] mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-[var(--text-body)] max-w-3xl mx-auto">
                Ready to discuss your project? Contact our expert team for a consultation, custom quote, and response within 24 hours. Predictable costs, fast turnaround.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[var(--spacecadet)] mb-6">
                  Quick Contact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="hover-lift hover-glow animate-fade-in stagger-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[var(--oceansteel)]/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-[var(--oceansteel)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--spacecadet)] mb-1">Phone</h4>
                          <p className="text-[var(--text-body)] font-medium">+1 (555) 123-4567</p>
                          <p className="text-xs text-muted-foreground">Call for immediate assistance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift hover-glow animate-fade-in stagger-2">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[var(--oceansteel)]/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-[var(--oceansteel)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--spacecadet)] mb-1">Email</h4>
                          <p className="text-[var(--text-body)] font-medium">info@mantriqindustrial.ca</p>
                          <p className="text-xs text-muted-foreground">Send your requirements</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift hover-glow animate-fade-in stagger-3">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[var(--oceansteel)]/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-[var(--oceansteel)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--spacecadet)] mb-1">Location</h4>
                          <p className="text-[var(--text-body)] font-medium">Ontario, Canada</p>
                          <p className="text-xs text-muted-foreground">Serving all of Canada</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift hover-glow animate-fade-in stagger-4">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[var(--oceansteel)]/10 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[var(--oceansteel)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--spacecadet)] mb-1">Business Hours</h4>
                          <p className="text-[var(--text-body)] font-medium">Mon-Fri: 8AM-6PM EST</p>
                          <p className="text-xs text-muted-foreground">Emergency support available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Why Us Teaser */}
                <Card className="bg-[var(--oceansteel)]/5 hover-glow animate-fade-in stagger-5">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[var(--spacecadet)] mb-3">Why Choose Mantriq?</h4>
                    <ul className="text-[var(--text-body)] space-y-2 text-sm">
                      <li>• Canadian-owned and operated</li>
                      <li>• Nationwide service with predictable ETAs</li>
                      <li>• State-of-the-art CNC equipment</li>
                      <li>• Rigorous quality control & traceability</li>
                      <li>• Competitive pricing for bulk-standard parts</li>
                      <li>• Fast 4-8 week turnaround</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Mini Quote Form */}
              <Card className="hover-lift animate-slide-in-right">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--spacecadet)] mb-6">
                    Quick Quote Request
                  </h3>
                  <p className="text-[var(--text-body)] mb-6 text-sm">
                    Fill out this form for a fast response. For detailed projects, visit our full contact page.
                  </p>
                  <form 
                    name="mini-contact" 
                    method="POST" 
                    data-netlify="true"
                    onSubmit={handleMiniSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="mini-contact" />
                    <div className="animate-fade-in stagger-1">
                      <label className="block text-sm font-medium text-[var(--spacecadet)] mb-2">Name *</label>
                      <Input 
                        name="name"
                        value={miniFormData.name}
                        onChange={handleMiniInputChange}
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="animate-fade-in stagger-2">
                      <label className="block text-sm font-medium text-[var(--spacecadet)] mb-2">Email *</label>
                      <Input 
                        type="email" 
                        name="email"
                        value={miniFormData.email}
                        onChange={handleMiniInputChange}
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                    <div className="animate-fade-in stagger-3">
                      <label className="block text-sm font-medium text-[var(--spacecadet)] mb-2">Message *</label>
                      <Textarea 
                        name="message"
                        value={miniFormData.message}
                        onChange={handleMiniInputChange}
                        placeholder="Briefly describe your project (materials, quantity, timeline)..." 
                        rows={4}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isLoading}
                      className="w-full"
                    >
                      {isLoading ? "Sending..." : "Get Free Quote"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Or <a href="/contact" className="text-[var(--oceansteel)] hover:underline">visit full contact page</a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clients Served section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--spacecadet)] mb-6 text-center">Clients Served</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[var(--oceansteel)]" />
                  Northern Cam
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-body)]">Automotive precision parts manufacturer based in Ontario.</p>
              </CardContent>
            </Card>
            {/* Add more clients if needed */}
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-[var(--spacecadet)] text-white py-14">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to compare your landed costs?</h3>
              <p className="text-white/85">Upload your drawings and requirements. We'll respond within one business day.</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" onClick={() => (window.location.href = "/quote")}>Request Quote</Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/blog")}>
                Read Insights
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
