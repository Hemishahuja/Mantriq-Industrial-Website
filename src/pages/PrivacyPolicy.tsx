import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Privacy Policy | Mantriq Industrial"
                description="Our commitment to protecting your technical data and business information."
            />
            <Header />
            <main className="pt-40 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-spacecadet prose-headings:font-extrabold prose-p:text-slate-text prose-p:opacity-80">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">Privacy Policy<span className="text-accent">.</span></h1>

                        <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-12">Last Updated: December 20, 2025</p>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">1. Technical Data & Information Security</h2>
                            <p>At Mantriq Industrial, we understand the sensitive nature of industrial blueprints, CAD files, and technical specifications. We treat all client-provided technical data with the highest level of confidentiality.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">2. Information Collection</h2>
                            <p>We collect information necessary to provide technical quotations and fulfillment services, including:</p>
                            <ul>
                                <li>Contact details (Name, Email, Phone Number)</li>
                                <li>Company Information & Industry context</li>
                                <li>Technical RFQ data (Blueprints, Material Specs, Volume Requirements)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">3. Usage of Data</h2>
                            <p>Your information is used exclusively for:</p>
                            <ul>
                                <li>Generating accurate manufacturing proposals</li>
                                <li>Coordinating production and quality control with our vetted cells</li>
                                <li>Managing international logistics and DDP fulfillment</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">4. Third-Party Disclosure</h2>
                            <p>We do not sell or trade your personal information. Technical data is shared only with our internal technical coordinators and vetted manufacturing partners under strict Non-Disclosure Agreements (NDAs).</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 tracking-tight">5. Contact Information</h2>
                            <p>For questions regarding our privacy practices, please contact our Toronto office at info@mantriqindustrial.ca.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
