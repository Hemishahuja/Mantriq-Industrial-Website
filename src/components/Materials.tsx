import { Card, CardContent } from "@/components/ui/card";

const Materials = () => {
  const materials = [
    {
      name: "Steel",
      description: "Manufacture of components from steel in both commercial grade and bespoke grades for demanding applications."
    },
    {
      name: "Stainless Steel", 
      description: "Components manufactured from various stainless steel grades including 316, 304 & 303 for corrosion resistance."
    },
    {
      name: "Aluminum",
      description: "Manufacturing of lightweight components utilizing aluminum in both commercial grade and specialized alloys."
    },
    {
      name: "Brass",
      description: "Extensive knowledge in machining various brass grades for turning, milling, and crimping applications."
    },
    {
      name: "Bronze",
      description: "Manufacturing bronze components from commercial to cast bronze for specialized industrial applications."
    },
    {
      name: "Copper",
      description: "Precision copper components and bends for heating, cooling, and electrical industries leveraging thermal properties."
    },
    {
      name: "Plastics",
      description: "Machining various plastic grades including acetal, nylon, and engineering plastics for specialized applications."
    }
  ];

  return (
    <section id="materials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Materials We Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our machining capabilities include producing components in a wide range of materials. 
            We offer diverse material options to service customer needs and supply high-performance 
            CNC milled and turned quality components.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-md h-full"
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {material.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Each material is carefully selected and processed to meet specific application requirements, 
              ensuring optimal performance in your industry's demanding environments. Our expertise 
              in material selection and processing helps deliver components that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;