import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ChevronRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="RFQ Received | Mantriq Industrial"
        description="Your technical RFQ has been successfully received. Our engineering team will review your requirements within 24 business hours."
      />
      <Header />
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto py-20 px-10 bg-polarice/30 rounded-[60px] border border-border relative overflow-hidden">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-spacecadet tracking-tighter mb-6">Transmission Received.</h1>
            <p className="text-xl text-slate-text leading-relaxed opacity-80 mb-12">
              Your technical RFQ has been submitted to our Toronto technical office. An engineer will review your drawings and respond within 24 business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/" className="inline-flex items-center justify-center h-16 px-10 bg-spacecadet text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Return Home
              </Link>
              <Link to="/case-studies" className="inline-flex items-center justify-center h-16 px-10 bg-white text-primary border border-border rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-polarice transition-colors">
                View Performance Cases
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="mt-20">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-text opacity-40">Reference: RFQ-SUBMISSION-CONFIRMED</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
