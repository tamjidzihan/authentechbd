'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { STORE_INFO } from '@/data/products';
import { X, Trash2, Plus, Minus, MessageCircle, Phone, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    generateWhatsAppLink,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-violet-700" />
              <h2 className="text-lg font-bold text-slate-900">Quotation & Inquiry Cart</h2>
              <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-1">Your inquiry list is empty</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Browse our premium pre-owned laptops, routers, and computer accessories.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100 relative group"
                  >
                    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden relative shrink-0 border border-slate-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-6">
                      <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mb-1 ${
                        item.product.condition.includes('Pre-Owned')
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {item.product.condition}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm font-bold text-violet-700 mt-1">
                        ৳{item.product.price.toLocaleString('en-BD')}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold text-slate-800 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-600 font-medium transition-colors pt-2 block"
                >
                  Clear all items
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {cart.length > 0 && (
            <div className="border-t border-slate-100 p-6 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">Estimated Total:</span>
                <span className="text-xl font-extrabold text-slate-900">
                  ৳{totalPrice.toLocaleString('en-BD')}
                </span>
              </div>

              <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-800">
                <p className="font-semibold mb-0.5">Physical Store & Courier Ready</p>
                <p>Send your inquiry to verify live stock, test condition, or arrange local pickup & courier delivery.</p>
              </div>

              <div className="space-y-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order / Inquire via WhatsApp
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-3 rounded-xl transition-all text-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-violet-700" />
                    Call Shop
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 bg-violet-50 hover:bg-violet-100 text-violet-800 font-medium py-2.5 px-3 rounded-xl transition-all text-xs"
                  >
                    View Shop Location
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
