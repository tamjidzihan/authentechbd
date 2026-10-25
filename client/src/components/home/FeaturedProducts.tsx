'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

type Tab = 'all' | 'laptops' | 'networking' | 'accessories';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return p.popular || p.featured;
    if (activeTab === 'laptops') return p.category === 'laptops';
    if (activeTab === 'networking') return p.category === 'routers' || p.category === 'cctv';
    if (activeTab === 'accessories') return ['keyboards', 'mice', 'storage', 'speakers'].includes(p.category);
    return true;
  });

  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Tabs Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Hand-Picked Selection
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Tech & Accessories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-violet-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Top Picks
            </button>
            <button
              onClick={() => setActiveTab('laptops')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'laptops'
                  ? 'bg-violet-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Pre-Owned Laptops
            </button>
            <button
              onClick={() => setActiveTab('networking')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'networking'
                  ? 'bg-violet-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Routers & CCTV
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'accessories'
                  ? 'bg-violet-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Keyboards & Storage
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-violet-300 transition-all"
          >
            <span>View All {PRODUCTS.length} Products in Catalog</span>
            <ArrowRight className="w-4 h-4 text-violet-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}
