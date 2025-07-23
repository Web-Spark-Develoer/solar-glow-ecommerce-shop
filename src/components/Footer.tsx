import React from 'react';
import { Sun, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2349031899544', '_blank');
  };

  return (
    <footer className="bg-brand-dark-green text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5ddafeae-85d2-4112-9540-7a843f24341b.png" 
                alt="UVC Solar" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-montserrat font-bold">UVC Solar</span>
            </div>
            <p className="text-white/80 font-inter leading-relaxed">
              Leading provider of solar energy solutions in Nigeria. Empowering homes and businesses with clean, reliable power.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://facebook.com/UVC.SolarEnergy" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/UVC_Solar" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/UVC.SolarEnergy" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/UVC_SolarEnergy" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 font-inter">
              <li><a href="/" className="text-white/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/shop" className="text-white/80 hover:text-accent transition-colors">Shop</a></li>
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-montserrat font-bold mb-6">Our Products</h3>
            <ul className="space-y-4 font-inter">
              <li><a href="/shop?category=batteries" className="text-white/80 hover:text-accent transition-colors">Solar Batteries</a></li>
              <li><a href="/shop?category=controllers" className="text-white/80 hover:text-accent transition-colors">MPPT Controllers</a></li>
              <li><a href="/shop?category=inverters" className="text-white/80 hover:text-accent transition-colors">Hybrid Inverters</a></li>
              <li><a href="/shop?category=panels" className="text-white/80 hover:text-accent transition-colors">Solar Panels</a></li>
              <li><a href="/shop" className="text-white/80 hover:text-accent transition-colors">View All Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 font-inter">
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Lagos, Nigeria</p>
                  <p className="text-white/60 text-sm">Serving all Lagos LGAs</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+2349031899544" className="text-white/80 hover:text-accent transition-colors">
                  +234 903 189 9544
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@uvcsolar.ng" className="text-white/80 hover:text-accent transition-colors">
                  info@uvcsolar.ng
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">24/7 Support</p>
                  <p className="text-white/60 text-sm">Always here to help</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-6"
              >
                <Phone className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-inter text-sm text-center md:text-left">
              © 2024 UVC Solar Energy. All rights reserved. Powering Nigeria with clean energy.
            </p>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="/privacy" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="/warranty" className="text-white/60 hover:text-accent transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}