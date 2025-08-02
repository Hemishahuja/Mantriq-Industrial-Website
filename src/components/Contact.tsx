import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      details: "info@mantriqindustrial.ca",
      subtitle: "Send us your requirements"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Ontario, Canada",
      subtitle: "Serving all of Canada"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM EST",
      subtitle: "Emergency support available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your precision machining needs? Contact our expert team 
            for a consultation and custom quote tailored to your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-strong hover-glow animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-fade-in stagger-1">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="border-input hover-scale transition-all duration-200" />
                  </div>
                  <div className="animate-fade-in stagger-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="border-input hover-scale transition-all duration-200" />
                  </div>
                </div>

                <div className="animate-fade-in stagger-3">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" className="border-input hover-scale transition-all duration-200" />
                </div>

                <div className="animate-fade-in stagger-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@company.com" className="border-input hover-scale transition-all duration-200" />
                </div>

                <div className="animate-fade-in stagger-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+1 (555) 123-4567" className="border-input hover-scale transition-all duration-200" />
                </div>

                <div className="animate-fade-in stagger-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <Input placeholder="e.g., Automotive, Aerospace, Medical" className="border-input hover-scale transition-all duration-200" />
                </div>

                <div className="animate-fade-in stagger-7">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Please describe your machining requirements, materials, quantities, tolerances, and timeline..."
                    className="border-input min-h-[120px] hover-scale transition-all duration-200"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift hover-glow transition-all duration-300 animate-scale-in stagger-8"
                >
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Our experienced team is ready to help you with your precision machining needs. 
                Contact us today to discuss your project requirements and receive a custom quote.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="glass-strong hover-lift hover-glow animate-scale-in transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 hover-scale animate-pulse-glow">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="glass-strong bg-primary/5 hover-glow animate-fade-in stagger-5">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3">
                  Why Choose Mantriq Industrial?
                </h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="animate-fade-in stagger-1">• Canadian-owned and operated</li>
                  <li className="animate-fade-in stagger-2">• Serving industries nationwide</li>
                  <li className="animate-fade-in stagger-3">• State-of-the-art CNC equipment</li>
                  <li className="animate-fade-in stagger-4">• Rigorous quality control</li>
                  <li className="animate-fade-in stagger-5">• Competitive pricing</li>
                  <li className="animate-fade-in stagger-6">• Fast turnaround times</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;