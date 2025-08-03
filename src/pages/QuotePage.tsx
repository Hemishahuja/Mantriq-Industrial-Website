import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

export default function QuotePage() {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validateFiles(input: HTMLInputElement) {
    const files = input.files;
    if (!files) return true;
    const allowed = [".step", ".stp", ".dxf"];
    for (const f of Array.from(files)) {
      const ext = f.name.toLowerCase().slice(f.name.lastIndexOf("."));
      if (!allowed.includes(ext)) {
        setError("Only .STEP, .STP, .DXF files are allowed.");
        return false;
      }
      if (f.size > 10 * 1024 * 1024) {
        setError("Each file must be ≤ 10 MB.");
        return false;
      }
    }
    return true;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
    const email = String(formData.get("email") || "");
    const qty = Number(formData.get("batch") || 0);
    const filesInput = form.querySelector<HTMLInputElement>('input[type="file"][name="files"]');

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError("Please enter a valid email.");
      return;
    }
    if (Number.isNaN(qty) || qty < 1000) {
      setError("Batch size must be at least 1000 pcs.");
      return;
    }
    if (filesInput && !validateFiles(filesInput)) return;

    setSubmitting(true);

    // Netlify Forms submission (no-code email to sales)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "rfq",
        ...Object.fromEntries(formData as any),
      } as any).toString(),
    })
      .then(() => {
        // GA4 conversion event (placeholder)
        if (window.gtag) {
          window.gtag("event", "generate_lead", { method: "rfq_form" });
        }
        // Preserve UTM params on redirect
        const qs = window.location.search || "";
        window.location.href = "/thank-you" + qs;
      })
      .catch(() => {
        setError("Submission failed. Please try again or email sales@mantriqindustrial.ca.");
        setSubmitting(false);
      });
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mantriq Industrial",
    "url": "https://mantriq.example.com",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" }
  };

  return (
    <>
      <Helmet>
        <title>Request Bulk CNC Quote | Upload Your Drawing | Mantriq</title>
        <meta
          name="description"
          content="Submit your RFQ for bulk-standard CNC fasteners. Upload STEP or DXF, specify batch size, material, finish, tolerances, and delivery location."
        />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <section ref={ref} className="reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)]">Request Quote</h1>
          <p className="mt-3 text-[color-mix(in_oklab,var(--text-body)_80%,white)]">
            Send drawings and requirements for a fast, no‑obligation price. We focus on bulk-standard parts.
          </p>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>RFQ Form</CardTitle>
              <CardDescription>Provide as much detail as possible for accurate landed-costs.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Netlify Forms: visible form with proper name */}
              <form
                name="rfq"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="grid md:grid-cols-2 gap-4"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value="rfq" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <label className="flex flex-col gap-1">
                  <span>First name</span>
                  <input required className="border rounded-lg px-3 py-2" name="firstName" />
                </label>
                <label className="flex flex-col gap-1">
                  <span>Last name</span>
                  <input required className="border rounded-lg px-3 py-2" name="lastName" />
                </label>
                <label className="flex flex-col gap-1 md:col-span-2">
                  <span>Company</span>
                  <input className="border rounded-lg px-3 py-2" name="company" />
                </label>
                <label className="flex flex-col gap-1">
                  <span>Email</span>
                  <input required type="email" className="border rounded-lg px-3 py-2" name="email" />
                </label>
                <label className="flex flex-col gap-1">
                  <span>Phone</span>
                  <input className="border rounded-lg px-3 py-2" name="phone" />
                </label>
                <label className="flex flex-col gap-1">
                  <span>Batch size (pcs)</span>
                  <input required type="number" className="border rounded-lg px-3 py-2" name="batch" min={1000} />
                </label>
                <label className="flex flex-col gap-1">
                  <span>Material</span>
                  <select name="material" className="border rounded-lg px-3 py-2">
                    <option>SS 304</option>
                    <option>SS 316</option>
                    <option>Brass</option>
                    <option>Mild Steel</option>
                    <option>Aluminium</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span>Finish</span>
                  <select name="finish" className="border rounded-lg px-3 py-2">
                    <option>None</option>
                    <option>Zinc</option>
                    <option>Black oxide</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span>Tolerance policy</span>
                  <select name="tolerance" className="border rounded-lg px-3 py-2">
                    <option>Standard production tolerances</option>
                    <option>Other (attach note)</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 md:col-span-2">
                  <span>Delivery location (City, Country)</span>
                  <input className="border rounded-lg px-3 py-2" name="location" />
                </label>
                <label className="flex flex-col gap-1 md:col-span-2">
                  <span>Project details</span>
                  <textarea className="border rounded-lg px-3 py-2 min-h-32" name="details" required />
                </label>
                <label className="flex flex-col gap-1 md:col-span-2">
                  <span>Upload drawings (.STEP, .DXF)</span>
                  <input type="file" className="border rounded-lg px-3 py-2" name="files" multiple />
                </label>

                {error && <div className="md:col-span-2 text-red-600 text-sm">{error}</div>}

                <div className="md:col-span-2">
                  <Button className="hover-scale" type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit RFQ"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
