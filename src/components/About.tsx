import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Cog } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Latest Technology",
      description: "Continuous investment in cutting-edge CNC machinery and manufacturing technology"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Products",
      description: "Rigorous quality control ensuring every component meets the highest standards"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Knowledgeable professionals with decades of precision machining experience"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Customer Service",
      description: "Dedicated support ensuring project success from conception to delivery"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Mantriq Industrial
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p className="font-semibold text-foreground">
                <strong>Mantriq Industrial has been providing high-quality precision engineering services 
                to diverse Canadian industries, delivering components that perform in demanding environments.</strong>
              </p>
              
              <p>
                Many of these industries require specialist components that perform in demanding environments. 
                We understand the critical nature of precision manufacturing and the importance of reliable, 
                high-quality parts in your operations.
              </p>
              
              <p>
                Mantriq Industrial is a Canadian-owned business. Our commitment to investing in the best technology, 
                manufacturing quality products, employing knowledgeable people, and insisting on high levels of 
                customer service forms the four pillars of our success.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Four Pillars */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Four Pillars to Our Success
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">
                        {pillar.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-foreground mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
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

export default About;