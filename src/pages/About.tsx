import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChatWidget from '../components/LiveChatWidget';
import { Button } from '../components/ui/button';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make clean, reliable solar energy accessible to every Nigerian home and business, reducing dependence on unstable grid power."
    },
    {
      icon: Heart,
      title: "Our Vision", 
      description: "A Nigeria powered by clean energy, where every family enjoys uninterrupted, affordable electricity through solar solutions."
    },
    {
      icon: Award,
      title: "Our Promise",
      description: "Quality products, professional installation, and lifetime support. We stand behind every solar system we install."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "50MW+", label: "Solar Installed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            About UVC Solar
          </h1>
          <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
            Leading Nigeria's transition to clean, reliable solar energy with innovative solutions and exceptional service.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 slide-up">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-accent"></div>
              
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                UVC Solar Energy is Nigeria's premier solar solutions provider, founded with a simple mission: to bring reliable, clean energy to every Nigerian home and business.
              </p>
              
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                Since our inception, we've been at the forefront of Nigeria's renewable energy revolution, providing cutting-edge solar batteries, MPPT controllers, hybrid inverters, and high-efficiency panels that work perfectly in our tropical climate.
              </p>
              
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                Our team of certified engineers and technicians brings decades of combined experience in solar technology, ensuring every installation meets the highest standards of quality and performance.
              </p>
              
              <Button className="hero-button">
                Learn More About Our Services
              </Button>
            </div>

            {/* 3D Isometric Illustration Placeholder */}
            <div className="relative fade-in">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-24 w-24 text-primary mx-auto mb-6 floating-animation" />
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Expert Team
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    50+ certified solar engineers and technicians serving Lagos and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              The principles that guide everything we do at UVC Solar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="feature-card text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-brand-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90 font-inter">
              Making a difference, one solar installation at a time
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-inter font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-glow">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Ready to Join the Solar Revolution?
            </h2>
            <p className="text-xl text-muted-foreground font-inter mb-8">
              Let's discuss how UVC Solar can power your home or business with clean, reliable energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-button">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Our Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LiveChatWidget />
      <Footer />
    </div>
  );
}