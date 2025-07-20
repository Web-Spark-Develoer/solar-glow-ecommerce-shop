import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Phone, Calendar, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Sunny, your solar assistant. How can I help?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    whatsapp: '',
    preferredTime: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { label: "Battery Specs", message: "Tell me about battery specifications and options" },
    { label: "Inverter Options", message: "What inverter options do you have available?" },
    { label: "Pricing", message: "Can you provide pricing information for solar systems?" },
    { label: "Installation", message: "How does the installation process work?" }
  ];

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-bot', {
        body: {
          message: content,
          conversationHistory: messages.slice(-5) // Send last 5 messages for context
        }
      });

      if (error) throw error;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: data.reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I apologize, but I'm having trouble responding right now. Please try again or contact us directly on WhatsApp.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (message: string) => {
    sendMessage(message);
  };

  const handleCallbackSubmit = () => {
    if (!callbackForm.name || !callbackForm.whatsapp) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and WhatsApp number",
        variant: "destructive"
      });
      return;
    }

    const callbackMessage = `Schedule callback request:
Name: ${callbackForm.name}
WhatsApp: ${callbackForm.whatsapp}
Preferred Time: ${callbackForm.preferredTime || 'Anytime'}`;

    sendMessage(callbackMessage);
    setShowCallbackForm(false);
    setCallbackForm({ name: '', whatsapp: '', preferredTime: '' });
    
    toast({
      title: "Callback Scheduled",
      description: "We'll contact you soon on WhatsApp!",
    });
  };

  const handleRequestQuote = () => {
    const conversationSummary = messages
      .filter(m => m.type === 'user')
      .map(m => m.content)
      .join('\n');
    
    const whatsappMessage = encodeURIComponent(
      `Quote Request from Website Chat:\n\nConversation Summary:\n${conversationSummary}\n\nPlease provide a detailed quote for the discussed solar solutions.`
    );
    
    window.open(`https://wa.me/2349031899544?text=${whatsappMessage}`, '_blank');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-background border border-border rounded-lg shadow-2xl flex flex-col animate-scale-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <h3 className="font-semibold font-['Montserrat']">Chat with Sunny</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-primary-foreground hover:bg-primary/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-['Inter']">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-muted-foreground p-3 rounded-lg">
              <p className="text-sm">Sunny is typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {!showCallbackForm && (
        <div className="p-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction(action.message)}
                className="text-xs"
              >
                {action.label}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCallbackForm(true)}
              className="flex-1 text-xs"
            >
              <Phone className="w-3 h-3 mr-1" />
              Schedule Callback
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRequestQuote}
              className="flex-1 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Request Quote
            </Button>
          </div>
        </div>
      )}

      {/* Callback Form */}
      {showCallbackForm && (
        <div className="p-4 border-t border-border space-y-3">
          <h4 className="font-semibold text-sm">Schedule a Callback</h4>
          <Input
            placeholder="Your Name"
            value={callbackForm.name}
            onChange={(e) => setCallbackForm(prev => ({ ...prev, name: e.target.value }))}
            className="text-sm"
          />
          <Input
            placeholder="WhatsApp Number"
            value={callbackForm.whatsapp}
            onChange={(e) => setCallbackForm(prev => ({ ...prev, whatsapp: e.target.value }))}
            className="text-sm"
          />
          <Input
            placeholder="Preferred Time (optional)"
            value={callbackForm.preferredTime}
            onChange={(e) => setCallbackForm(prev => ({ ...prev, preferredTime: e.target.value }))}
            className="text-sm"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={handleCallbackSubmit} className="flex-1">
              Schedule
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowCallbackForm(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Input */}
      {!showCallbackForm && (
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              size="sm"
              onClick={() => sendMessage(inputMessage)}
              disabled={isLoading || !inputMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;