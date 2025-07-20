import React from 'react';
import { Battery, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function FeaturesSection() {
  const features = [
    {
      icon: Battery,
      title: "Solar Batteries",
      description: "High-capacity lithium batteries for reliable energy storage. Store power for when you need it most.",
      features: ["Long-lasting performance", "Fast charging technology", "Weather resistant"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "MPPT Controllers",
      description: "Advanced charge controllers that maximize your solar panel efficiency and protect your investment.",
      features: ["Maximum power tracking", "Smart monitoring", "Overcharge protection"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Hybrid Inverters",
      description: "Convert DC power to AC with precision. Seamless integration with your home electrical system.",
      features: ["Pure sine wave output", "Grid-tie capability", "Backup power switching"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Complete solar energy systems designed for Nigerian homes. Quality components that work together seamlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-8">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground font-inter">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="ghost" 
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-full"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center slide-up">
          <div className="inline-flex items-center gap-4 bg-white p-8 rounded-2xl shadow-glow">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                Ready to Go Solar?
              </h3>
              <p className="text-muted-foreground font-inter">
                Get a free consultation and custom quote for your home
              </p>
            </div>
            <Button className="hero-button">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}