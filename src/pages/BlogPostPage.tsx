import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Choosing the Right Fastener Grade",
    slug: "choosing-the-right-fastener-grade",
    date: "2024-12-10",
    summary: "A buyer’s guide to common grades for screws and studs, with when to specify SS 304/316 vs mild steel or brass.",
    fullContent: `
      <h2>The Foundation of Durability</h2>
      <p>Selecting the right fastener grade is crucial for ensuring the performance, safety, and cost-effectiveness of your CNC machined components. Different materials offer varying levels of strength, corrosion resistance, and machinability.</p>
      
      <h3>Stainless Steel: The Industrial Standard</h3>
      <p><strong>SS 304:</strong> The most common stainless steel grade, offering excellent corrosion resistance and formability. Ideal for general-purpose applications where moderate environmental exposure is expected.</p>
      <p><strong>SS 316:</strong> Superior corrosion resistance, specifically engineered for marine or chemical environments. Contains molybdenum to resist pitting and crevice corrosion.</p>
      
      <h3>Carbon & Mild Steel</h3>
      <p>A cost-effective solution for structural applications where corrosion resistance is Managed via secondary plating. Offers excellent strength and machinability for high-volume automotive and infrastructure hardware.</p>
      
      <h3>Copper & Specialized Alloys</h3>
      <p>Used primarily for high-conductivity electrical components or where specific thermal properties are required. Requires specialized tool geometry to maintain surface integrity during volume runs.</p>
    `
  },
  {
    title: "Cost Advantage: India vs NA Sourcing",
    slug: "cost-advantage-manufacturing-india-vs-canada",
    date: "2024-11-25",
    summary: "Compare the landed costs of manufacturing in India versus North American shops.",
    fullContent: `
      <h2>The Global Production Shift</h2>
      <p>Landed cost includes not just the manufacturing price but also shipping, duties, and logistics. For bulk-standard CNC components, our technically coordinated cells in India offer significant advantages.</p>
      
      <h3>1. Labor Economics</h3>
      <p>Leveraging global labor differentials allows for a reduction in per-unit costs by up to 35% without requiring a compromise on material grade or inspection standards.</p>
      
      <h3>2. Shipping Aggregation</h3>
      <p>By consolidating ocean freight and optimizing last-mile delivery to Toronto, we reduce the overhead typically associated with international procurement.</p>
      
      <h3>3. Technical Guardrails</h3>
      <p>The key to success in global sourcing is the technical oversight. Our Toronto office manages the DFM and quality gatekeeping, ensuring that what arrives at your dock matches your print exactly.</p>
    `
  }
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Analysis Not Found</h1>
          <Link to="/blog" className="text-primary font-bold hover:underline">Return to Insights</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Mantriq Industrial Insights`}
        description={post.summary}
      />
      <Header />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-text hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            {/* Article Header */}
            <header className="mb-16">
              <div className="flex items-center space-x-6 mb-8 text-[10px] font-black uppercase tracking-widest text-slate-text opacity-50">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-3 h-3 mr-1" />
                  Editorial Team
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-spacecadet tracking-tighter leading-tight">
                {post.title}<span className="text-accent">.</span>
              </h1>
            </header>

            {/* Article Content */}
            <article className="prose prose-slate max-w-none prose-headings:text-spacecadet prose-headings:font-extrabold prose-headings:tracking-tight prose-p:text-slate-text prose-p:leading-relaxed prose-p:opacity-80 prose-li:text-slate-text prose-li:opacity-80 pb-20 border-b border-border">
              <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
            </article>

            {/* Footer CTA */}
            <div className="mt-20 p-12 bg-polarice/30 rounded-[48px] border border-border flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h4 className="text-xl font-bold text-spacecadet mb-2 tracking-tight">Need a technical review?</h4>
                <p className="text-sm text-slate-text opacity-70">Schedule a DFM analysis for your next volume production run.</p>
              </div>
              <Link to="/quote" className="h-14 px-8 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-spacecadet transition-all shadow-xl shadow-primary/10 flex items-center">
                Start RFQ
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
