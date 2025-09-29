import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    projectDetails: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Netlify Forms submission
      const netlifyFormData = new FormData();
      netlifyFormData.append("form-name", "contact");
      netlifyFormData.append("firstName", formData.firstName);
      netlifyFormData.append("lastName", formData.lastName);
      netlifyFormData.append("company", formData.company);
      netlifyFormData.append("email", formData.email);
      netlifyFormData.append("phone", formData.phone);
      netlifyFormData.append("industry", formData.industry);
      netlifyFormData.append("projectDetails", formData.projectDetails);

      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (netlifyResponse.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });

        // If Zapier webhook is provided, trigger it too
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify({
              ...formData,
              timestamp: new Date().toISOString(),
              triggered_from: window.location.origin,
            }),
          });
        }

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          industry: "",
          projectDetails: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-fade-in stagger-1">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      className="border-input hover-scale transition-all duration-200"
                      required 
                    />
                  </div>
                  <div className="animate-fade-in stagger-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      className="border-input hover-scale transition-all duration-200"
                      required 
                    />
                  </div>
                </div>

                <div className="animate-fade-in stagger-3">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name" 
                    className="border-input hover-scale transition-all duration-200" 
                  />
                </div>

                <div className="animate-fade-in stagger-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com" 
                    className="border-input hover-scale transition-all duration-200"
                    required 
                  />
                </div>

                <div className="animate-fade-in stagger-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="border-input hover-scale transition-all duration-200" 
                  />
                </div>

                <div className="animate-fade-in stagger-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <Input 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="e.g., Automotive, Aerospace, Medical" 
                    className="border-input hover-scale transition-all duration-200" 
                  />
                </div>

                <div className="animate-fade-in stagger-7">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Please describe your machining requirements, materials, quantities, tolerances, and timeline..."
                    className="border-input min-h-[120px] hover-scale transition-all duration-200"
                    required
                  />
                </div>

                <div className="animate-fade-in stagger-8">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Zapier Webhook URL (Optional)
                  </label>
                  <Input 
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://hooks.zapier.com/hooks/catch/..." 
                    className="border-input hover-scale transition-all duration-200" 
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Add your Zapier webhook URL for additional integrations (optional)
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift hover-glow transition-all duration-300 animate-scale-in stagger-9"
                >
                  {isLoading ? "Sending..." : "Send Quote Request"}
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
                  className={cn(`glass-strong hover-lift hover-glow hover-scale animate-scale-in ease-lift stagger-${index + 1}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 micro-lift hover-scale t-lift animate-pulse-glow">
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
            <Card className={cn("glass-strong bg-primary/5 hover-glow hover-lift ease-lift animate-fade-in stagger-10")}>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3 t-fade ease-lift">
                  Why Choose Mantriq Industrial?
                </h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="animate-fade-in stagger-1 t-fade ease-lift">• Canadian-owned and operated</li>
                  <li className="animate-fade-in stagger-2 t-fade ease-lift">• Serving industries nationwide</li>
                  <li className="animate-fade-in stagger-3 t-fade ease-lift">• State-of-the-art CNC equipment</li>
                  <li className="animate-fade-in stagger-4 t-fade ease-lift">• Rigorous quality control</li>
                  <li className="animate-fade-in stagger-5 t-fade ease-lift">• Competitive pricing</li>
                  <li className="animate-fade-in stagger-6 t-fade ease-lift">• Fast turnaround times</li>
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
