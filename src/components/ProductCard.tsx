import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewProduct }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
              Out of Stock
            </span>
          )}
          {discount > 0 && (
            <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-md font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onViewProduct(product)}
            className="p-2 bg-white/90 hover:bg-white"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {product.category.replace('_', ' ')}
        </div>

        {/* Name */}
        <h3 className="font-montserrat font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-accent fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full mt-4 hero-button"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}