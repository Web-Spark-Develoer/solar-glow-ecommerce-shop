import React, { useState } from 'react';
import { Menu, X, Search, MessageCircle, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Green Frame */}
      <div className="h-2 bg-gradient-primary w-full"></div>
      
      {/* Navigation */}
      <header className="bg-brand-cream sticky top-2 z-50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 animate-spin-slow">
                  <Sun className="h-8 w-8 text-accent/50" />
                </div>
              </div>
              <span className="text-2xl font-montserrat font-bold text-primary">
                UVC Solar
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-inter font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/shop" 
                className={({ isActive }) => 
                  `font-inter font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                Shop
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-inter font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/financing" 
                className={({ isActive }) => 
                  `font-inter font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                Financing
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-inter font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 bg-primary text-primary-foreground rounded-md hover:scale-105 transition-transform">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 bg-primary text-primary-foreground rounded-md hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary/20 bg-brand-cream">
              <div className="flex flex-col space-y-3">
                <NavLink to="/" className="text-foreground hover:text-accent font-inter px-2 py-1">Home</NavLink>
                <NavLink to="/shop" className="text-foreground hover:text-accent font-inter px-2 py-1">Shop</NavLink>
                <NavLink to="/about" className="text-foreground hover:text-accent font-inter px-2 py-1">About Us</NavLink>
                <NavLink to="/financing" className="text-foreground hover:text-accent font-inter px-2 py-1">Financing</NavLink>
                <NavLink to="/contact" className="text-foreground hover:text-accent font-inter px-2 py-1">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}