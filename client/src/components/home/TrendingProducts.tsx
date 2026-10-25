'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Eye, Heart, GitCompare, ShoppingBag, Check } from 'lucide-react';

export default function TrendingProducts() {
  const { addToCart, cart } = useCart();
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'LAPTOPS') return p.category === 'laptops';
    if (activeTab === 'ROUTERS') return p.category === 'routers' || p.category === 'cctv';
    if (activeTab === 'ACCESSORIES') return ['keyboards', 'mice', 'storage', 'speakers'].includes(p.category);
    return true;
  }).slice(0, 10);

  return (
    <section className="py-14 bg-[#fbfbfb] border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-5 border-b border-[#e0e6ef] mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#253d4e] tracking-tight">
              Trending Products
            </h2>
            <p className="text-xs text-[#7e7e7e] mt-1">
              Top requested laptops and computer accessories this month.
            </p>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider text-[#7e7e7e]">
            {['ALL', 'LAPTOPS', 'ROUTERS', 'ACCESSORIES'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2.5 -mb-5 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#2b38d1] text-[#2b38d1]'
                    : 'border-transparent hover:text-[#253d4e]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column Grid x 2 Rows (10 Products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredProducts.map((product) => {
            const isInCart = cart.some((i) => i.product.id === product.id);
            return (
              <div
                key={product.id}
                className="group p-4 rounded-2xl border border-[#e0e6ef] bg-white hover-up hover:border-[#2b38d1] transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {/* Tools on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button className="w-7 h-7 rounded-full bg-white shadow-md border border-[#e0e6ef] text-[#7e7e7e] hover:text-[#2b38d1] flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white shadow-md border border-[#e0e6ef] text-[#7e7e7e] hover:text-[#2b38d1] flex items-center justify-center">
                    <GitCompare className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-7 h-7 rounded-full bg-white shadow-md border border-[#e0e6ef] text-[#7e7e7e] hover:text-[#2b38d1] flex items-center justify-center"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Discount Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#3bb77e] text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                    -{product.discountPercent || 10}%
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f4f6fa] mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Information */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#7e7e7e] uppercase">{product.brand}</span>
                  <Link href={`/products/${product.slug}`}>
                    <h4 className="text-xs font-bold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[11px] text-[#fd9636]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#fd9636]" />
                      ))}
                    </div>
                    <span className="text-[#7e7e7e] font-semibold text-[10px]">({product.reviewCount || 25})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pt-1">
                    <strong className="text-sm font-black text-[#2b38d1]">
                      ৳{product.price.toLocaleString('en-BD')}
                    </strong>
                    {product.originalPrice && (
                      <span className="text-[11px] text-[#7e7e7e] line-through font-semibold">
                        ৳{product.originalPrice.toLocaleString('en-BD')}
                      </span>
                    )}
                  </div>

                  {/* Key feature bullets */}
                  <ul className="text-[10px] text-[#7e7e7e] space-y-0.5 pt-2 border-t border-[#f1f5f9]">
                    {product.keySpecs.slice(0, 2).map((s, idx) => (
                      <li key={idx} className="truncate">• {s}</li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart button */}
                <div className="mt-3 pt-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isInCart
                        ? 'bg-[#e0e6ef] text-[#253d4e]'
                        : 'bg-[#f4f6fa] hover:bg-[#2b38d1] text-[#253d4e] hover:text-white border border-[#e0e6ef]'
                    }`}
                  >
                    {isInCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    {isInCart ? 'In Quote' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
