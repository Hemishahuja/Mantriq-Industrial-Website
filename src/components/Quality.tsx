import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Award, Users } from "lucide-react";

const Quality = () => {
  const qualityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rigorous Standards",
      description: "All aspects of our business managed to the highest quality standards with full traceability"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Advanced Inspection",
      description: "State-of-the-art inspection facilities including CMM, digital gauges, and shadowgraph equipment"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Continuous Improvement", 
      description: "Procedures and processes continually reviewed and improved for superior service delivery"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Visits",
      description: "We welcome customers to visit our facility to inspect our capabilities firsthand"
    }
  ];

  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quality Assurance
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p className="font-semibold text-foreground animate-fade-in stagger-1">
                <strong>Mantriq Industrial has built an invaluable reputation for quality and service. 
                We provide superior service by managing all aspects of our business to rigorous standards 
                and maintain full traceability throughout our management systems.</strong>
              </p>
              
              <p className="animate-fade-in stagger-2">
                Quality is never compromised, and our procedures and processes are continually reviewed 
                and improved to ensure that our customers receive products and services to the highest standard.
              </p>
              
              <p className="animate-fade-in stagger-3">
                Our impressive inspection facilities include high-quality digital and conventional gauges 
                and instruments, Coordinate Measuring Machines (CMM), and Shadowgraph equipment for 
                comprehensive quality verification.
              </p>
              
              <p className="animate-fade-in stagger-4">
                We welcome our customers to visit our manufacturing facility to inspect our capabilities 
                for themselves and witness our commitment to quality firsthand.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift hover-glow transition-all duration-300 animate-scale-in stagger-5"
            >
              Learn More About Our Quality Process
            </Button>
          </div>

          {/* Right Content - Quality Features */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualityFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="glass-strong hover-lift hover-glow animate-scale-in transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale animate-pulse-glow">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;