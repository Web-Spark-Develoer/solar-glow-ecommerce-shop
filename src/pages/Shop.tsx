import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChatWidget from '../components/LiveChatWidget';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { Button } from '../components/ui/button';
import { products, Product } from '../data/products';
import { useCart } from '../hooks/useCart';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isCartOpen,
    openCart,
    closeCart
  } = useCart();

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'batteries', name: 'Solar Batteries', count: products.filter(p => p.category === 'batteries').length },
    { id: 'controllers', name: 'MPPT Controllers', count: products.filter(p => p.category === 'controllers').length },
    { id: 'inverters', name: 'Hybrid Inverters', count: products.filter(p => p.category === 'inverters').length },
    { id: 'panels', name: 'Solar Panels', count: products.filter(p => p.category === 'panels').length },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleViewProduct = (product: Product) => {
    // For now, we'll just scroll to the product or implement a modal
    console.log('View product:', product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Shop Banner */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Solar Products Store
          </h1>
          <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
            Browse our complete range of solar batteries, controllers, inverters, and panels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 shadow-glow">
              <h3 className="font-montserrat font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-inter">{category.name}</span>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-white rounded-lg p-6 shadow-glow">
              <h3 className="font-montserrat font-bold text-lg mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-montserrat font-bold text-foreground">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-muted-foreground font-inter">
                  {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.name}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Cart Icon */}
                <Button
                  onClick={openCart}
                  variant="outline"
                  className="relative"
                >
                  <Grid className="h-5 w-5 mr-2" />
                  Cart ({getCartItemsCount()})
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onViewProduct={handleViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-600 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 font-inter">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
        cartTotal={getCartTotal()}
      />

      <LiveChatWidget />
      <Footer />
    </div>
  );
}