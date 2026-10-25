'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, MessageCircle, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, generateWhatsAppLink, cart } = useCart();
  const isInCart = cart.some((item) => item.product.id === product.id);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 w-full bg-slate-50 overflow-hidden border-b border-slate-100">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Condition Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          <span
            className={`text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full shadow-xs backdrop-blur-md ${
              product.condition.includes('Pre-Owned')
                ? 'bg-violet-900/90 text-violet-100 border border-violet-700/50'
                : 'bg-emerald-900/90 text-emerald-100 border border-emerald-700/50'
            }`}
          >
            {product.condition}
          </span>
          {product.condition.includes('Pre-Owned') && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white/95 text-slate-800 px-2 py-0.5 rounded-md shadow-xs">
              <ShieldCheck className="w-3 h-3 text-amber-500" />
              100% Tested
            </span>
          )}
        </div>

        {/* Stock status indicator */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-white/90 backdrop-blur-xs text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            In Stock
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
            <span>{product.brand}</span>
            <span className="capitalize text-[11px] text-slate-600">{product.category}</span>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors line-clamp-2 leading-snug mb-2.5">
              {product.name}
            </h3>
          </Link>

          {/* Spec Badges (Star Tech inspired clarity without visual clutter) */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {product.keySpecs.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-md border border-slate-200/50"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-lg font-black text-slate-900 tracking-tight">
                ৳{product.price.toLocaleString('en-BD')}
              </span>
              {product.originalPrice && (
                <span className="text-xs font-medium text-slate-400 line-through ml-2">
                  ৳{product.originalPrice.toLocaleString('en-BD')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-600 font-semibold">
              Warranty: {product.warranty.includes('Replacement') ? '15d Repl.' : 'Official'}
            </span>
          </div>

          {/* Buttons: WhatsApp Inquiry + Add to Quote */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold py-2 px-2.5 rounded-xl border border-emerald-200 transition-colors"
              title="Direct WhatsApp Inquiry"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Inquire
            </a>

            <button
              onClick={() => addToCart(product, 1)}
              className={`inline-flex items-center justify-center gap-1 text-xs font-bold py-2 px-2.5 rounded-xl transition-all shadow-xs ${
                isInCart
                  ? 'bg-violet-100 text-violet-800 border border-violet-300'
                  : 'bg-violet-700 hover:bg-violet-800 text-white'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  In Quote
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  Add Quote
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
