import { Factory, Truck, Building2, Anchor, Zap, Plane, Cog, Car } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "Automotive",
      icon: Car,
      description: "High-volume precision components for OEM assembly lines and tier‑1 suppliers."
    },
    {
      name: "Aerospace",
      icon: Plane,
      description: "Critical components meeting stringent aerospace standards for durability and weight."
    },
    {
      name: "Industrial Mach.",
      icon: Cog,
      description: "Custom wear parts and structural components for heavy machinery and automation."
    },
    {
      name: "Renewable Energy",
      icon: Zap,
      description: "Specialized parts for solar, wind, and energy storage infrastructure projects."
    },
    {
      name: "Construction",
      icon: Building2,
      description: "Durable metal hardware and fastening systems for large-scale infrastructure."
    },
    {
      name: "Marine & Offshore",
      icon: Anchor,
      description: "Corrosion-resistant components engineered for harsh saltwater environments."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <div
          key={industry.name}
          className="group relative bg-white p-10 rounded-[40px] border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-polarice rounded-2xl flex items-center justify-center mb-8 border border-border group-hover:bg-primary transition-colors duration-500">
              <industry.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-extrabold text-spacecadet mb-4 tracking-tight group-hover:text-primary transition-colors">
              {industry.name}
            </h3>
            <p className="text-slate-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {industry.description}
            </p>
          </div>
          {/* Subtle background element */}
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        </div>
      ))}
    </div>
  );
};

export default Industries;
