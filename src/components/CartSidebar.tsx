import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, X, Plus, Minus, Trash2, CreditCard, User, Phone, MapPin } from 'lucide-react';
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

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  cartTotal
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    whatsapp: '',
    address: ''
  });
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  const handleCheckout = () => {
    if (!showCheckout) {
      setShowCheckout(true);
      return;
    }

    if (!customerInfo.name || !customerInfo.whatsapp || !customerInfo.address) {
      alert('Please fill in all customer information fields');
      return;
    }

    setIsCheckingOut(true);

    const orderSummary = cartItems.map(item => 
      `• ${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const totalAmount = formatPrice(cartTotal);
    
    const whatsappMessage = encodeURIComponent(
      `🛒 New Order from UVC Solar Website\n\n` +
      `👤 Customer: ${customerInfo.name}\n` +
      `📞 WhatsApp: ${customerInfo.whatsapp}\n` +
      `📍 Delivery Address: ${customerInfo.address}\n\n` +
      `📦 Order Items:\n${orderSummary}\n\n` +
      `💰 Total Amount: ${totalAmount}\n\n` +
      `Please confirm this order and provide payment instructions. Thank you!`
    );
    
    window.open(`https://wa.me/2349031899544?text=${whatsappMessage}`, '_blank');
    
    // Clear cart and reset form after order
    setTimeout(() => {
      onClearCart();
      setCustomerInfo({ name: '', whatsapp: '', address: '' });
      setShowCheckout(false);
      setIsCheckingOut(false);
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
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6" />
              <h2 className="text-xl font-bold">
                {showCheckout ? 'Checkout' : 'Shopping Cart'}
              </h2>
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!showCheckout ? (
              /* Cart Items View */
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-500">
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
                          <h4 className="font-semibold text-sm line-clamp-2">
                            {item.name}
                          </h4>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-blue-600">
                              {formatPrice(item.price)}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="p-1 h-7 w-7"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              
                              <span className="text-sm font-semibold w-8 text-center">
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
              </>
            ) : (
              /* Checkout Form */
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Order Summary</h3>
                  <div className="space-y-1 text-sm">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 font-semibold flex justify-between">
                      <span>Total:</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      WhatsApp Number
                    </Label>
                    <Input
                      id="whatsapp"
                      value={customerInfo.whatsapp}
                      onChange={(e) => setCustomerInfo({...customerInfo, whatsapp: e.target.value})}
                      placeholder="+234 XXX XXX XXXX"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Delivery Address
                    </Label>
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      placeholder="Enter your complete delivery address"
                      rows={3}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4 bg-gray-50">
              {!showCheckout && (
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              )}
              
              <div className="space-y-2">
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {isCheckingOut ? 'Processing...' : 
                   showCheckout ? 'Confirm & Pay via WhatsApp' : 'Proceed to Checkout'}
                </Button>
                
                {showCheckout && (
                  <Button
                    variant="outline"
                    onClick={() => setShowCheckout(false)}
                    className="w-full"
                  >
                    Back to Cart
                  </Button>
                )}
                
                {!showCheckout && (
                  <Button
                    variant="outline"
                    onClick={onClearCart}
                    className="w-full"
                  >
                    Clear Cart
                  </Button>
                )}
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                {showCheckout ? 
                  'Click confirm to send your order via WhatsApp' :
                  'Secure checkout powered by WhatsApp'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;