import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import CartSidebar from './CartSidebar';
import logo from '/lovable-uploads/5ddafeae-85d2-4112-9540-7a843f24341b.png';

const Header = () => {
  const { cartItems, isCartOpen, openCart, closeCart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="UVC Solar" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-primary">UVC Solar</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Shop</Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/admin" className="text-foreground hover:text-primary transition-colors">Admin</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={openCart}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
        cartTotal={getCartTotal()}
      />
    </>
  );
};

export default Header;