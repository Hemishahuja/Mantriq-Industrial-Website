import { ChevronRight } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      name: "Stainless Steel",
      description: "Seamless and welded pipes, tubes, and bars. Optimized for extreme corrosion resistance and high-temp durability."
    },
    {
      name: "Carbon & Alloy Steel",
      description: "Round (4–105mm), Hex (8–108mm), and Square bars. Premium alloy grades for high-performance structural needs."
    },
    {
      name: "Aluminum & Non-Ferrous",
      description: "6061-T6, Brass, and Copper. High-speed machining for lightweight aerospace and electrical components."
    },
    {
      name: "Precision Tubes & Pipes",
      description: "ERW/CRW welded and seamless. Range: 1/8\" NPS to 12\" NPS (5mm to 600mm) across multiple technical grades."
    },
    {
      name: "Engineering Plastics",
      description: "Acetal, Nylon, PEEK, and PTFE. Precision machining for lightweight, low-friction B2B applications."
    },
    {
      name: "Custom Sourcing",
      description: "Strategic partnerships with leading global mills to source custom alloy steels and specialized wires for volume production."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((mat, i) => (
          <div
            key={i}
            className="group bg-polarice/30 p-10 rounded-[32px] border border-border hover:bg-spacecadet hover:translate-y-[-8px] transition-all duration-500"
          >
            <h3 className="text-2xl font-extrabold text-spacecadet mb-4 tracking-tight group-hover:text-accent transition-colors">
              {mat.name}
            </h3>
            <p className="text-slate-text leading-relaxed text-sm opacity-80 group-hover:text-white/60 transition-colors mb-8">
              {mat.description}
            </p>
            <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
              <span>Technical Specs</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Certification Note */}
      <div className="mt-20 p-10 bg-white border border-border rounded-[32px] flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-spacecadet mb-2 underline decoration-accent decoration-2 underline-offset-4">Vetted Strategic Supply Chain</h4>
          <p className="text-sm text-slate-text opacity-70">We leverage long-standing partnerships with reputable global stockists to ensure consistent material quality.</p>
        </div>
        <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4 text-sm">Review Technical QA Standards</button>
      </div>
    </div>
  );
};

export default Materials;