import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChatWidget from '../components/LiveChatWidget';
import { Button } from '../components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Contact UVC Solar
          </h1>
          <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
            Ready to switch to solar? Get in touch with our experts for a free consultation and custom quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lift border border-primary/10">
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Get Your Free Quote
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-montserrat font-bold text-green-600 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-inter"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-inter"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-inter"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-inter resize-none"
                      placeholder="Tell us about your solar energy needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hero-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Have questions about our solar solutions? Our team of experts is here to help you find the perfect solar system for your needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-xl shadow-glow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground font-inter">
                      Lagos, Nigeria<br />
                      Serving all Lagos LGAs and beyond
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-2">Call or WhatsApp</h3>
                    <a href="tel:+2349031899544" className="text-muted-foreground font-inter hover:text-primary transition-colors">
                      +234 903 189 9544
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-2">Email Us</h3>
                    <a href="mailto:info@uvcsolar.ng" className="text-muted-foreground font-inter hover:text-primary transition-colors">
                      info@uvcsolar.ng
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-2">Business Hours</h3>
                    <div className="text-muted-foreground font-inter">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency support only</p>
                      <p className="text-primary font-semibold mt-1">24/7 WhatsApp Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-primary p-6 rounded-xl text-white">
              <h3 className="font-montserrat font-bold text-lg mb-4">Need Immediate Help?</h3>
              <p className="text-white/90 font-inter mb-4">
                For urgent solar system issues or emergency support, contact us directly on WhatsApp.
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/2349031899544', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LiveChatWidget />
      <Footer />
    </div>
  );
}