import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { CartItem } from '../hooks/useCart';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  cartTotal: number;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  cartTotal
}: CartSidebarProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    
    // Create WhatsApp message
    const orderItems = cartItems.map(item => 
      `• ${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const message = `New Order Request:

${orderItems}

Total: ${formatPrice(cartTotal)}

Please confirm availability and provide delivery details.`;

    const whatsappUrl = `https://wa.me/2349031899544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsCheckingOut(false);
      onClearCart();
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl slide-in-right overflow-hidden">
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-primary text-white">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6" />
              <h2 className="text-xl font-montserrat font-bold">Shopping Cart</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-montserrat font-semibold text-gray-600 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 font-inter">
                  Add some solar products to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-montserrat font-semibold text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">
                          {formatPrice(item.price)}
                        </span>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 h-7 w-7"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="font-semibold text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 h-7 w-7"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Subtotal: {formatPrice(item.price * item.quantity)}
                        </span>
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onRemoveFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-montserrat font-bold">Total:</span>
                <span className="text-xl font-montserrat font-bold text-primary">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              
              <div className="space-y-2">
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full hero-button bg-green-600 hover:bg-green-700"
                >
                  {isCheckingOut ? 'Redirecting...' : 'Checkout via WhatsApp'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={onClearCart}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center font-inter">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}