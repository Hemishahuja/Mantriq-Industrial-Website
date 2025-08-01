import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Settings, Zap, Target } from "lucide-react";

const Capabilities = () => {
  const turningCapabilities = [
    "Manufacturing turned components from 2mm to 300mm",
    "Live tooling, cross drilling and milling capabilities", 
    "Large batch volumes to single prototype components",
    "Latest automated barfeed technology",
    "Automated unmanned night running for competitive pricing"
  ];

  const millingCapabilities = [
    "Milled components from 400mm to 1000mm",
    "Twin pallet CNC machines for high volume batches",
    "CNC machines with 4th and 5th axis capabilities", 
    "Single pallet high speed drilling machines",
    "Large batch volumes to single prototype components"
  ];

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CNC Turning",
      description: "State-of-the-art fixed head and sliding head CNC turning capabilities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "CNC Milling", 
      description: "Advanced multi-axis milling for complex geometries and precision parts"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "24/7 Operation",
      description: "Automated systems enable continuous production for faster delivery"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <strong>Mantriq Industrial continually invests in the latest CNC machinery, including 
            CNC fixed head, sliding head CNC & CNC milling machines</strong>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CNC Turning */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-primary" />
                CNC Turning Capabilities
              </h3>
              <ul className="space-y-4">
                {turningCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CNC Milling */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-primary" />
                CNC Milling Capabilities
              </h3>
              <ul className="space-y-4">
                {millingCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Learn More About Our Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;