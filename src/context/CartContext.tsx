'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '@/types/product';
import { STORE_INFO } from '@/data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  generateWhatsAppLink: (singleProduct?: Product) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('authentech_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('authentech_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const generateWhatsAppLink = (singleProduct?: Product) => {
    const phone = STORE_INFO.whatsapp;
    if (singleProduct) {
      const text = encodeURIComponent(
        `Hello AuthenTech BD! I am interested in inquiring about:\n\n` +
        `📦 *Product:* ${singleProduct.name}\n` +
        `💰 *Price:* ৳${singleProduct.price.toLocaleString('en-BD')}\n` +
        `⚙️ *Condition:* ${singleProduct.condition}\n` +
        `🔗 *Link:* ${typeof window !== 'undefined' ? window.location.origin : ''}/products/${singleProduct.slug}\n\n` +
        `Please confirm availability, condition details, and store pickup/courier process.`
      );
      return `https://wa.me/${phone}?text=${text}`;
    }

    if (cart.length === 0) {
      const text = encodeURIComponent(`Hello AuthenTech BD! I would like to inquire about your premium laptops and accessories.`);
      return `https://wa.me/${phone}?text=${text}`;
    }

    let text = `Hello AuthenTech BD! I would like to request an order/quotation for the following items:\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}* (Qty: ${item.quantity}) - ৳${(item.product.price * item.quantity).toLocaleString('en-BD')}\n`;
    });
    text += `\n*Total Estimated Amount: ৳${totalPrice.toLocaleString('en-BD')}*\n\n`;
    text += `Please check stock and share the delivery/payment procedure.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
