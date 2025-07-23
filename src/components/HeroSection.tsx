import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Battery, Zap } from 'lucide-react';
import heroBackground from '/lovable-uploads/381af2a3-897a-475e-a48a-949306347fdf.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Power Your Future with
            <span className="text-yellow-400 block">Clean Solar Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transform your home or business with premium solar solutions. 
            Save money, reduce your carbon footprint, and gain energy independence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              View Products
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500/20 p-4 rounded-full mb-4">
                <Sun className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Solar Panels</h3>
              <p className="text-gray-300 text-sm">High-efficiency panels with 25-year warranty</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-500/20 p-4 rounded-full mb-4">
                <Battery className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Storage</h3>
              <p className="text-gray-300 text-sm">Advanced battery systems for 24/7 power</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Inverters</h3>
              <p className="text-gray-300 text-sm">Intelligent power conversion technology</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;