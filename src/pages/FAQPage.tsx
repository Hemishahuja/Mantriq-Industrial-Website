import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  { q: "What are your typical lead times?", a: "Most production orders deliver in 7-8 weeks. We provide a firm technical ETA upon PO confirmation." },
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "We specialize in volume production. Our standard MOQ is 1,000 units per line item to maintain efficiency." },
  { q: "What tolerances do you support?", a: "We specialize in standard industrial tolerances (±0.005\" / ±0.1mm). We typically decline ultra-precision work requiring tighter than ±0.0005\"." },
  { q: "Where is the manufacturing located?", a: "Production is handled at our technically vetted high-volume cells in India, with technical coordination and support from our Toronto office." },
  { q: "What materials do you machine?", a: "We've specialized in Stainless Steel (304/316), Aluminum (6061), Brass, and high-performance engineering plastics." },
  { q: "Do you offer DDP fulfillment (Landed Costs)?", a: "Yes. Our standard proposals include DDP Toronto or your facility door. We handle duties and international logistics." }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Technical FAQ | Mantriq Industrial"
        description="Answers to common questions regarding lead times, MOQs, tolerances, and our high-volume logistics framework."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Knowledge Desk</h1>
              <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
                Technical Questions<span className="text-accent">.</span>
              </h2>
              <p className="text-xl text-slate-text leading-relaxed opacity-80">
                Clear answers for wholesalers, buyers, and technical coordinators looking to scale their industrial supply chain.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-polarice/30 p-10 md:p-14 rounded-[48px] border border-border">
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 pb-4">
                    <AccordionTrigger className="text-lg font-bold text-spacecadet hover:text-primary transition-colors hover:no-underline text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-text leading-relaxed opacity-80 pt-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center space-y-8">
              <div className="w-16 h-16 bg-polarice rounded-2xl flex items-center justify-center mx-auto border border-border">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-spacecadet tracking-tight">Have a custom technical inquiry?</h3>
              <Link to="/contact" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-primary hover:underline decoration-2 underline-offset-8">
                Consult with an Engineer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
