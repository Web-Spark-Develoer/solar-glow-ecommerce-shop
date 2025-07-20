import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppRedirect = () => {
    const message = "Hello! I'm interested in learning more about UVC Solar products and services.";
    const whatsappUrl = `https://wa.me/2349031899544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="chat-widget w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lift"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-lift border border-gray-200 z-50 overflow-hidden slide-up">
          
          {/* Header */}
          <div className="bg-gradient-primary p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold">UVC Solar Support</h3>
                <p className="text-sm text-white/90">We're online now!</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="p-4 space-y-4">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm font-inter text-gray-700">
                Hi there! 👋 Welcome to UVC Solar. How can we help you today?
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Quick Actions</p>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Chat on WhatsApp</p>
                    <p className="text-xs text-gray-600">Get instant support</p>
                  </div>
                  <div className="text-green-500 group-hover:translate-x-1 transition-transform">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
              </button>

              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Request Quote</p>
                    <p className="text-xs text-gray-600">Free consultation</p>
                  </div>
                </div>
              </button>

              <button className="w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Book Installation</p>
                    <p className="text-xs text-gray-600">Schedule visit</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Contact Info */}
            <div className="border-t pt-3 mt-4">
              <p className="text-xs text-gray-500 text-center">
                Available 24/7 • Response time: ~2 minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}