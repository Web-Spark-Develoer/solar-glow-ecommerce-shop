import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Home, Building, Settings, Phone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete home solar solutions with battery backup systems",
      features: ["Rooftop installation", "Grid-tie systems", "Off-grid solutions", "Smart monitoring"]
    },
    {
      icon: Building,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses and industries",
      features: ["Industrial systems", "Energy audits", "Custom solutions", "Maintenance plans"]
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Professional maintenance and repair services for all solar systems",
      features: ["Regular inspections", "Performance optimization", "Component replacement", "Emergency repairs"]
    },
    {
      icon: Sun,
      title: "Consultation & Design",
      description: "Expert consultation and custom system design services",
      features: ["Site assessment", "Energy analysis", "Custom design", "ROI calculations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Solar Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing maintenance, we provide comprehensive 
            solar solutions tailored to your specific energy needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Go Solar?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and energy assessment. 
            Our experts will design the perfect solar solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;