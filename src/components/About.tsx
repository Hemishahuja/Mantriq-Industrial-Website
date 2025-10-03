import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

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
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Mantriq Industrial
            </h2>
            
            <div className="text-base sm:text-lg text-muted-foreground mb-8 space-y-4">
              <p className="font-semibold text-foreground animate-fade-in stagger-1 t-fade ease-lift">
                <strong>Mantriq Industrial has been providing high-quality precision engineering services 
                to diverse Canadian industries, delivering components that perform in demanding environments.</strong>
              </p>
              
              <p className="animate-fade-in stagger-2 t-fade ease-lift">
                Many of these industries require specialist components that perform in demanding environments. 
                We understand the critical nature of precision manufacturing and the importance of reliable, 
                high-quality parts in your operations.
              </p>
              
              <p className="animate-fade-in stagger-3 t-fade ease-lift">
                Mantriq Industrial is a Canadian-owned business. Our commitment to investing in the best technology, 
                manufacturing quality products, employing knowledgeable people, and insisting on high levels of 
                customer service forms the four pillars of our success.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift micro-lift hover-glow ease-lift t-lift animate-scale-in stagger-4"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Four Pillars */}
            <div className="animate-slide-in-right">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center stagger-0 t-lift ease-lift">
                Four Pillars to Our Success
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                  <Card 
                    key={index} 
                    className={cn(`glass-strong hover-lift hover-glow hover-scale animate-scale-in ease-lift stagger-${index + 1}`)}
                  >
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 micro-lift hover-scale t-lift animate-pulse-glow">
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

      {/* Team Section - Full width below */}
      <div className="mt-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center stagger-5 t-lift ease-lift">
            Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover-lift hover-glow hover-scale animate-scale-in ease-lift stagger-6">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 micro-lift hover-scale t-lift">
                  <div className="text-primary font-bold text-lg sm:text-xl">HA</div>
                </div>
                <h4 className="font-bold text-foreground mb-2">Hemish Ahuja</h4>
                <p className="text-sm text-muted-foreground mb-2">Founder and CTO</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Hemish Ahuja founded Mantriq Industrial to deliver innovative precision manufacturing solutions backed by cutting-edge technology.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift hover-glow hover-scale animate-scale-in ease-lift stagger-7">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 micro-lift hover-scale t-lift">
                  <div className="text-primary font-bold text-lg sm:text-xl">HL</div>
                </div>
                <h4 className="font-bold text-foreground mb-2">Himanshu Loomba</h4>
                <p className="text-sm text-muted-foreground mb-2">Founding Chief Engineer</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Himanshu Loomba brings over 10 years of expertise in precision machining, leading our engineering team with innovative problem-solving.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
