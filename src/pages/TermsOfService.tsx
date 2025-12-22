import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Terms of Service | Mantriq Industrial"
                description="Standard terms and conditions for industrial procurement and technical coordination."
            />
            <Header />
            <main className="pt-40 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-spacecadet prose-headings:font-extrabold prose-p:text-slate-text prose-p:opacity-80">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">Terms of Service<span className="text-accent">.</span></h1>

                        <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-12">Last Updated: December 20, 2025</p>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">1. Services & Scope</h2>
                            <p>Mantriq Industrial provides technical coordination, manufacturing management, and international logistics services. All services are governed by these terms and any subsequent technical Purchase Orders (POs).</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">2. Technical Specifications</h2>
                            <p>Clients are responsables for the accuracy of provided blueprints and material specifications. We manufacture according to the confirmed "Golden Print" agreed upon during the RFQ process.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">3. Quotations & Validity</h2>
                            <p>Manufacturing quotes are typically valid for 15 days due to fluctuations in raw material pricing and international freight costs, unless otherwise stated in writing.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">4. Quality & Rejection</h2>
                            <p>All claims regarding dimensional non-conformity must be submitted within 15 days of receipt of goods at the delivery dock. Claims must be accompanied by detailed inspection reports.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">5. Limitation of Liability</h2>
                            <p>Mantriq Industrial's liability for any order is limited to the cost of the replacement parts or a refund of the invoice amount for the non-conforming items.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
