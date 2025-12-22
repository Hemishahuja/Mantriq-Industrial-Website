import { Shield, Eye, Award, CheckCircle2 } from "lucide-react";

const Quality = () => {
  const certifications = [
    { title: "ISO 9001:2015", desc: "Quality Management System" },
    { title: "UKAS Standards", desc: "Accredited Supply Network" }
  ];

  const inspectionTech = [
    {
      icon: Eye,
      title: "2.5D Vision Systems",
      description: "Automated optical inspection for high-precision geometries and surface finish verification."
    },
    {
      icon: Shield,
      title: "CMM Verification",
      description: "Coordinate Measuring Machines for complex prismatic part inspections and tolerance logging."
    },
    {
      icon: Award,
      title: "Process Traceability",
      description: "Digital lot tracking from raw material intake to final delivery at your dock."
    }
  ];

  return (
    <div className="space-y-32">
      {/* Certifications Strip */}
      <section className="bg-spacecadet py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
            {certifications.map((cert, i) => (
              <div key={i} className="text-center md:text-left border-l border-white/10 pl-8">
                <h4 className="text-accent font-black text-2xl mb-2">{cert.title}</h4>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Inspection Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {inspectionTech.map((tech, i) => (
            <div key={i} className="bg-polarice/30 p-12 rounded-[40px] border border-border flex flex-col items-start hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 border border-border group-hover:bg-primary transition-colors duration-500">
                <tech.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-spacecadet mb-6 tracking-tight">{tech.title}</h3>
              <p className="text-slate-text leading-relaxed opacity-80 mb-8">{tech.description}</p>
              <div className="mt-auto">
                <span className="flex items-center text-xs font-black uppercase tracking-widest text-primary">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
                  100% Inspection Rate
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quality;
