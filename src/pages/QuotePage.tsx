import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FileText, ShieldCheck, Truck, ArrowRight } from "lucide-react";

export default function QuotePage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const netlifyFormData = new FormData();
      netlifyFormData.append("form-name", "rfq");
      Object.entries(formData).forEach(([key, value]) => netlifyFormData.append(key, value));

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Submission failed. Please email info@mantriqindustrial.ca", variant: "destructive" });
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Request Technical Proposal | Mantriq Industrial"
        description="Share your technical drawings and volume requirements for a comprehensive landed-cost proposal. Canadian support, global scale."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-20 items-start">

              {/* Left Column: Form Info & Trust */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 leading-none">Technical RFQ</h1>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
                    Get Your Proposal<span className="text-primary">.</span>
                  </h2>
                  <p className="text-lg text-slate-text leading-relaxed opacity-80">
                    Submit your production requirements for a detailed analysis and firm landed-cost quotation.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: FileText, title: "Drawing Review", desc: "Technical DFM feedback included." },
                    { icon: ShieldCheck, title: "Landed Costs", desc: "Total price delivered to your dock." },
                    { icon: Truck, title: "Fast Lead Times", desc: "Predictable 7-8 week delivery." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start bg-polarice/30 p-6 rounded-3xl border border-border">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-border mr-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-spacecadet text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-text text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 border-l-4 border-primary bg-spacecadet text-white rounded-r-3xl space-y-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Toronto Office</p>
                    <p className="text-sm opacity-80 leading-relaxed">
                      18 King Street East, Suite 1400<br />
                      Toronto, Ontario M5C 1C4 Canada
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">Direct Line</p>
                      <p className="text-sm font-bold">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">Email Desk</p>
                      <p className="text-sm font-bold">info@mantriqindustrial.ca</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: RFQ Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-10 md:p-14 rounded-[48px] border border-border shadow-2xl shadow-primary/5">
                  <form onSubmit={onSubmit} name="rfq" data-netlify="true" className="space-y-8">
                    <input type="hidden" name="form-name" value="rfq" />
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Name</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Company</label>
                      <Input name="company" value={formData.company} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Email Address</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Message / Requirements</label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="min-h-[160px] rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all py-4" placeholder="Briefly describe your components and requirements." />
                    </div>
                    <Button type="submit" disabled={submitting} className="w-full h-18 bg-accent hover:bg-spacecadet text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-accent/20">
                      {submitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-center text-[10px] text-slate-text uppercase tracking-widest font-bold opacity-50 pt-4">
                      Secure Submission • 24hr Technical Review
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
