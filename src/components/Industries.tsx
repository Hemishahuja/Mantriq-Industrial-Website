import { Card, CardContent } from "@/components/ui/card";
import automotiveIcon from "@/assets/icon-automotive.jpg";
import aerospaceIcon from "@/assets/icon-aerospace.jpg";
import oilGasIcon from "@/assets/icon-oil-gas.jpg";
import medicalIcon from "@/assets/icon-medical.jpg";
import constructionIcon from "@/assets/icon-construction.jpg";
import marineIcon from "@/assets/icon-marine.jpg";
import { cn } from "@/lib/utils";

const Industries = () => {
  const industries = [
    {
      name: "Automotive",
      icon: automotiveIcon,
      description: "Precision components for automotive manufacturing and aftermarket applications."
    },
    {
      name: "Aerospace",
      icon: aerospaceIcon,
      description: "High-precision parts meeting aerospace industry standards and certifications."
    },
    {
      name: "Oil & Gas",
      icon: oilGasIcon,
      description: "Durable components designed for harsh environments in the energy sector."
    },
    {
      name: "Medical",
      icon: medicalIcon,
      description: "Precision medical device components with strict quality requirements."
    },
    {
      name: "Construction",
      icon: constructionIcon,
      description: "Heavy-duty components for construction equipment and infrastructure."
    },
    {
      name: "Marine",
      icon: marineIcon,
      description: "Corrosion-resistant parts for marine and offshore applications."
    }
  ];

  return (
    <section id="industries" className="py-20 bg-[var(--page-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--spacecadet)] mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-[color-mix(in_oklab,var(--text-body)_85%,white)] max-w-3xl mx-auto">
            Our precision CNC machining capabilities serve diverse industries across Canada, 
            delivering components that meet the highest standards of quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={industry.name} 
              className={cn(`group hover:shadow-xl t-lift ease-lift hover-lift cursor-pointer animate-scale-in hover-glow stagger-${index + 1}`)}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center t-lift ease-lift micro-lift hover-scale animate-float"
                     style={{ backgroundColor: "color-mix(in oklab, var(--oceansteel) 12%, white)" }}>
                  <img 
                    src={industry.icon} 
                    alt={industry.name}
                    className="w-12 h-12 object-contain ease-lift transition-transform t-lift group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--spacecadet)] mb-3 t-hover ease-lift transition-colors group-hover:text-[var(--oceansteel)]">
                  {industry.name}
                </h3>
                <p className="text-[color-mix(in_oklab,var(--text-body)_80%,white)] t-hover ease-lift transition-colors group-hover:text-[var(--text-body)]">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
