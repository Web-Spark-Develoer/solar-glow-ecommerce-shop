import React from 'react';
import { CreditCard, Calculator, Clock, CheckCircle, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChatWidget from '../components/LiveChatWidget';
import { Button } from '../components/ui/button';

export default function Financing() {
  const plans = [
    {
      name: "EasyPay 6 Months",
      duration: "6 months",
      downPayment: "30%",
      monthlyRate: "0% interest",
      features: [
        "No interest charges",
        "Quick approval process",
        "Flexible payment dates",
        "Installation after down payment"
      ],
      popular: false
    },
    {
      name: "EasyPay 12 Months",
      duration: "12 months",
      downPayment: "25%",
      monthlyRate: "2.5% monthly",
      features: [
        "Low monthly interest",
        "Extended payment period",
        "Professional installation included",
        "5-year warranty coverage"
      ],
      popular: true
    },
    {
      name: "EasyPay 18 Months",
      duration: "18 months",
      downPayment: "20%",
      monthlyRate: "3% monthly",
      features: [
        "Lowest down payment",
        "Maximum payment flexibility",
        "Premium support package",
        "Free maintenance first year"
      ],
      popular: false
    }
  ];

  const requirements = [
    "Valid Nigerian ID (NIN, Driver's License, or International Passport)",
    "Proof of income (Salary slip, Bank statement, or Business registration)",
    "Utility bill (Not older than 3 months)",
    "Two guarantors with valid ID",
    "Bank account statement (Last 3 months)",
    "Passport photographs (2 copies)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Affordable Solar Financing
          </h1>
          <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
            Don't let upfront costs stop you from going solar. Our flexible financing plans make clean energy affordable for every Nigerian family.
          </p>
        </div>
      </div>

      {/* Financing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Choose Your Payment Plan
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Flexible financing options designed to fit your budget and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`feature-card relative ${plan.popular ? 'ring-2 ring-accent' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-montserrat font-bold text-primary">
                    {plan.downPayment}
                  </div>
                  <p className="text-muted-foreground font-inter">Down payment</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-inter">Duration:</span>
                    <span className="font-semibold">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-inter">Monthly rate:</span>
                    <span className="font-semibold">{plan.monthlyRate}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-inter">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'hero-button' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Choose This Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              How Our Financing Works
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Simple, transparent process to get you solar powered in days
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Submit your application with required documents. Get pre-approved in 24 hours.",
                icon: CreditCard
              },
              {
                step: "02", 
                title: "Site Survey",
                description: "Our engineers visit your location for free assessment and custom system design.",
                icon: Calculator
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation within 3-5 days of down payment and approval.",
                icon: Clock
              },
              {
                step: "04",
                title: "Start Saving",
                description: "Begin enjoying clean energy while making affordable monthly payments.",
                icon: CheckCircle
              }
            ].map((step, index) => (
              <div 
                key={step.step}
                className="text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-accent font-montserrat font-bold text-lg mb-2">
                  {step.step}
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Application Requirements
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              What you need to qualify for our financing program
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-glow">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-muted-foreground">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-brand-dark-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8">
            Contact our financing specialists today and take the first step towards energy independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://wa.me/2349031899544?text=I%20would%20like%20to%20learn%20more%20about%20UVC%20Solar%20financing%20options', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
              size="lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Apply via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Download Application Form
            </Button>
          </div>
        </div>
      </section>

      <LiveChatWidget />
      <Footer />
    </div>
  );
}