import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "Choosing the Right Fastener Grade",
    slug: "choosing-the-right-fastener-grade",
    date: "2024-12-10",
    summary: "A buyer’s guide to common grades for screws and studs, with when to specify SS 304/316 vs mild steel or brass."
  },
  {
    title: "Cost Advantage: India vs NA Sourcing",
    slug: "cost-advantage-manufacturing-india-vs-canada",
    date: "2024-11-25",
    summary: "Compare the landed costs of manufacturing. How labor differentials and shipping aggregation drive up to 35% savings."
  },
  {
    title: "Bulk vs Precision Machining Drivers",
    slug: "bulk-vs-precision-machining-cost-drivers",
    date: "2024-11-12",
    summary: "Where bulk-standard CNC wins on landed cost — and when ultra-tight tolerances justify premium precision shops."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industrial Insights & Manufacturing Blog | Mantriq Industrial"
        description="Technical guides on material selection, cost optimization, and high-volume CNC production strategies for industrial wholesalers."
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 leading-none">Industrial Insights</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight mb-8">
              Technical Intelligence<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-slate-text leading-relaxed opacity-80">
              Expert analysis on global production economics, material science, and supply chain optimization for the modern OEM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <div key={i} className="group bg-polarice/30 p-10 rounded-[40px] border border-border hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="flex items-center space-x-4 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-text opacity-50">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    Editorial Team
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-spacecadet mb-6 tracking-tight group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed opacity-70 mb-10 flex-grow">{post.summary}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary hover:underline decoration-2 underline-offset-8">
                  Read Analysis
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-polarice/20 border border-border rounded-[48px] text-center">
            <h4 className="text-xl font-bold text-spacecadet mb-4">Stay Informed on Global Capacity</h4>
            <p className="text-slate-text text-sm mb-8 opacity-60">Get our bi-monthly technical brief on production windows and material trends.</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input type="email" placeholder="Your work email" className="flex-grow h-14 px-6 rounded-2xl border border-border bg-white" />
              <button className="h-14 px-8 bg-spacecadet text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-colors">Join Brief</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
