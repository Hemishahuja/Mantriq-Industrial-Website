import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const netlifyFormData = new FormData();
      netlifyFormData.append("form-name", "contact");
      Object.entries(formData).forEach(([key, value]) => netlifyFormData.append(key, value));

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        toast({ title: "Message Sent", description: "Our technical team will contact you within 24 hours." });
        setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Connect With Us</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Technical Support<span className="text-primary">.</span>
            </h3>
            <p className="text-lg text-slate-text leading-relaxed opacity-80">
              Our Toronto-based engineering team is available for technical consultations, DFM reviews, and high-volume project planning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-polarice/30 rounded-[32px] border border-border">
              <Phone className="w-6 h-6 text-primary mb-4" />
              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-2">Direct Line</p>
              <p className="text-spacecadet font-extrabold">+1 (555) 123-4567</p>
            </div>
            <div className="p-8 bg-polarice/30 rounded-[32px] border border-border">
              <Mail className="w-6 h-6 text-primary mb-4" />
              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-2">Email Desk</p>
              <p className="text-spacecadet font-extrabold">info@mantriqindustrial.ca</p>
            </div>
          </div>

          <div className="p-10 bg-spacecadet rounded-[40px] text-white relative overflow-hidden">
            <div className="relative z-10">
              <MapPin className="w-8 h-8 text-accent mb-6" />
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Toronto Headquarters</h4>
              <p className="opacity-60 text-sm leading-relaxed mb-8">
                18 King Street East, Suite 1400<br />
                Toronto, Ontario M5C 1C4 Canada
              </p>
              <div className="flex items-center text-xs font-black uppercase tracking-widest text-accent">
                <Globe className="w-4 h-4 mr-2" />
                <span>Serving North America</span>
              </div>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-10 md:p-14 rounded-[48px] border border-border shadow-2xl shadow-primary/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">First Name</label>
                <Input name="firstName" value={formData.firstName} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Last Name</label>
                <Input name="lastName" value={formData.lastName} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Company</label>
              <Input name="company" value={formData.company} onChange={handleInputChange} className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Email Address</label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="h-14 rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-spacecadet/80 ml-1">Technical Requirements</label>
              <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="min-h-[160px] rounded-2xl border-border bg-polarice/5 focus:bg-white transition-all py-4" placeholder="How can our technical team help?" />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full h-16 bg-primary hover:bg-spacecadet text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/10">
              {isLoading ? "Transmitting..." : "Send Message"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
