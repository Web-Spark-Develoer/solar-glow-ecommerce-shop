import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import heroBackground from '../assets/hero-background.jpg';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Sun Motif Overlay */}
      <div className="absolute top-20 right-20 opacity-30">
        <div className="relative">
          <div className="w-32 h-32 bg-accent/20 rounded-full"></div>
          <div className="absolute inset-0 animate-spin-slow">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-accent/40 origin-bottom"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  top: '-1rem',
                  left: '50%',
                  marginLeft: '-2px'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-6 slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
              Hello, Lagos!
              <br />
              <span className="text-accent">Power Your Life</span>
              <br />
              with UVC Solar
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-inter max-w-2xl">
              Reliable, affordable solar solutions tailored to Nigerian homes
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="hero-button text-lg px-8 py-4 bg-primary hover:bg-primary/90"
                size="lg"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                className="text-accent hover:text-accent/80 text-lg font-semibold px-8 py-4 border-2 border-accent hover:bg-accent/10"
                size="lg"
              >
                View Financing Options
              </Button>
            </div>
          </div>

          {/* Feature Video/Animation Placeholder */}
          <div className="relative lg:pl-12 fade-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                  <p className="font-montserrat font-semibold">Watch Our Solar Solutions in Action</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full floating-animation"></div>
          </div>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            {/* Installation & Warranty */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-bright-green rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-white">Installation & Warranty</h3>
              <p className="text-white/90 font-inter">Professional Installation. 5-year support guarantee.</p>
            </div>

            {/* EasyBuy Financing */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-bright-green rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-white">EasyBuy Financing</h3>
            </div>

            {/* 24/7 Support */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-bright-green rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l.707.707L12 3.61l-.707-.707L12 2.196zM12 20.804l.707.707L12 22.218l-.707-.707L12 20.804zM2.196 12l.707-.707L3.61 12l-.707.707L2.196 12zM20.804 12l.707-.707L22.218 12l-.707.707L20.804 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-white">24/7 After-Sales Support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}