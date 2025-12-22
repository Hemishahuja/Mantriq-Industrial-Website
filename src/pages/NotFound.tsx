import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto py-20 px-10 bg-polarice/30 rounded-[60px] border border-border">
            <div className="w-20 h-20 bg-spacecadet rounded-3xl flex items-center justify-center mx-auto mb-10">
              <AlertCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-spacecadet tracking-tighter mb-6">Resource Missing.</h1>
            <p className="text-xl text-slate-text leading-relaxed opacity-80 mb-12">
              The technical documentation or page you are looking for has been moved or archived. Please return to the command center.
            </p>

            <Link to="/" className="inline-flex items-center justify-center h-16 px-10 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-spacecadet transition-all shadow-xl shadow-primary/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Return to Dashboard
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
