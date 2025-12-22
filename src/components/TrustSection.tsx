import { ShieldCheck, Truck, Clock, Award, Globe, Factory } from "lucide-react";

const TrustSection = () => {
    const trustItems = [
        {
            icon: ShieldCheck,
            title: "Quality Guaranteed",
            description: "ISO-compliant QC with 100% part traceability and inspection reports."
        },
        {
            icon: Award,
            title: "Canadian Support",
            description: "Expert technical assistance and local account management in Toronto."
        },
        {
            icon: Globe,
            title: "Global Supply",
            description: "Strategic partnerships with high-volume facilities for cost optimization."
        },
        {
            icon: Truck,
            title: "Hassle-Free Logistics",
            description: "DDP shipping options. We handle clearings, duties, and final delivery."
        },
        {
            icon: Clock,
            title: "Reliable Lead Times",
            description: "Consistent 7-8 week turnarounds for high-volume production runs."
        },
        {
            icon: Factory,
            title: "Volume Scalability",
            description: "Optimized for orders from 1,000 to 1M+ units per month."
        }
    ];

    return (
        <section className="py-24 bg-polarice relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                        Reliability Engineered
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-spacecadet mb-6 tracking-tight leading-tight">
                        The Preferred Choice for High-Volume OEM Parts.
                    </h3>
                    <p className="text-lg text-slate-text leading-relaxed">
                        We bridge the gap between global manufacturing efficiency and local accountability, ensuring your production line never stops.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-spacecadet mb-3">
                                {item.title}
                            </h4>
                            <p className="text-slate-text leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Brand Promise Footer */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-spacecadet text-white">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-2xl font-bold mb-2">Ready to optimize your supply chain?</h4>
                        <p className="opacity-70">Get a specialized technical proposal for your next project.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs uppercase tracking-widest opacity-50">Local Technical Office</p>
                            <p className="font-bold flex items-center justify-end">
                                <Globe className="w-4 h-4 mr-2 text-accent" />
                                Toronto, ON
                            </p>
                        </div>
                        <button className="bg-accent text-white px-8 py-4 rounded-xl font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all text-sm">
                            Request Quotation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
