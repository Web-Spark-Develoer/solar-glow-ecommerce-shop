import React from 'react';
import { Shield, Users, Award, Wrench } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "All our solar panels come with industry-leading warranty coverage"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of solar installation experience"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the highest quality components from trusted manufacturers"
    },
    {
      icon: Wrench,
      title: "Full Service",
      description: "From consultation to installation and maintenance support"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose UVC Solar?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience in renewable energy, we're committed to 
            providing sustainable solar solutions that power your future while protecting the environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Leading Solar Innovation in Nigeria</h3>
            <p className="text-lg text-muted-foreground mb-6">
              UVC Solar has been at the forefront of Nigeria's renewable energy revolution, 
              helping thousands of homes and businesses transition to clean, sustainable power solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Over 10,000 successful installations nationwide</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Partnerships with leading international manufacturers</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 customer support and maintenance services</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">50MW+</div>
              <div className="text-sm text-muted-foreground">Power Generated</div>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;