import { ChevronRight } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      name: "Stainless Steel",
      description: "Grades 303, 304, 316, and 400-series. Optimized for corrosion resistance and industrial durability."
    },
    {
      name: "Mild Steel",
      description: "1018, 12L14, and custom alloy steels. The workhorse material for high-volume structural components."
    },
    {
      name: "Aluminum Alloys",
      description: "6061-T6, 7075, and 2000-series. High-speed machining for lightweight aerospace and automotive parts."
    },
    {
      name: "Brass & Copper",
      description: "High-conductivity grades for electrical and plumbing applications. Superior surface finish results."
    },
    {
      name: "Engineering Plastics",
      description: "Acetal, Nylon, PEEK, and PTFE. Precision machining for lightweight, low-friction applications."
    },
    {
      name: "Exotic Alloys",
      description: "Inconel, Titanium, and Cobalt. Specialized tooling and feed strategies for high-temp environments."
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
          <h4 className="text-xl font-bold text-spacecadet mb-2 underline decoration-accent decoration-2 underline-offset-4">Full Material Certifications</h4>
          <p className="text-sm text-slate-text opacity-70">We provide mill reports and chemical analysis for every production lot.</p>
        </div>
        <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4 text-sm">Download Sample MTRs</button>
      </div>
    </div>
  );
};

export default Materials;