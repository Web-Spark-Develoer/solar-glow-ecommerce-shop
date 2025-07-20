import React, { useState, useEffect } from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Lekki, Lagos",
      rating: 5,
      text: "UVC Solar transformed our home! We've cut our electricity bills by 80% and never worry about power outages anymore. The installation was professional and quick.",
      avatar: "AJ"
    },
    {
      name: "Fatima Abdullahi",
      location: "Ikeja, Lagos", 
      rating: 5,
      text: "The battery backup system has been a game-changer for our family business. Even during grid failures, we keep running. Excellent customer service too!",
      avatar: "FA"
    },
    {
      name: "Chinedu Okafor",
      location: "Victoria Island, Lagos",
      rating: 5,
      text: "I was skeptical about solar in Lagos, but UVC Solar proved me wrong. The system works perfectly even during rainy season. Best investment I've made!",
      avatar: "CO"
    },
    {
      name: "Aisha Mohammed",
      location: "Surulere, Lagos",
      rating: 5,
      text: "The financing option made it so affordable. Now I'm saving money every month instead of paying crazy electricity bills. Thank you UVC Solar!",
      avatar: "AM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-brand-dark-green text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
            Join thousands of satisfied customers across Lagos who've made the switch to solar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 min-h-[300px] flex flex-col justify-center">
              <Quote className="h-12 w-12 text-accent mb-6" />
              
              <div className="space-y-6">
                <p className="text-lg font-inter leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-montserrat font-bold text-primary">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-montserrat font-bold">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>

          {/* Interactive Map Area */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
                We Serve All of Lagos
              </h3>
              
              {/* Simplified Lagos Map Illustration */}
              <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
                  <p className="font-montserrat font-semibold text-lg">Lagos, Nigeria</p>
                  <p className="text-white/80 font-inter">Serving 20+ LGAs</p>
                </div>
                
                {/* Floating location pins */}
                <div className="absolute top-4 left-8 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-16 right-6 w-4 h-4 bg-accent rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-4 left-16 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              </div>
              
              {/* Service Areas */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-inter">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Victoria Island
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Lekki
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Ikeja
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Surulere
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Yaba
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    And More...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full floating-animation"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
    </section>
  );
}