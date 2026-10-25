'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCategory, ProductCondition } from '@/types/product';
import ProductCard from '@/components/products/ProductCard';
import {
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  ShieldCheck,
  Check,
} from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as ProductCategory | null;
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(90000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Condition filter
      if (selectedCondition !== 'all') {
        if (selectedCondition === 'pre-owned' && !product.condition.includes('Pre-Owned')) {
          return false;
        }
        if (selectedCondition === 'new' && product.condition !== 'Brand New') {
          return false;
        }
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesModel = product.model.toLowerCase().includes(query);
        const matchesSpecs = product.keySpecs.some((s) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesModel && !matchesSpecs) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // default order
    });
  }, [selectedCategory, selectedCondition, maxPrice, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedCondition('all');
    setSearchQuery('');
    setMaxPrice(90000);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedCondition !== 'all' ||
    searchQuery.trim() !== '' ||
    maxPrice < 90000;

  return (
    <div className="bg-slate-50 min-h-screen py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Bar */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Product Catalog & Inventory
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse verified pre-owned laptops, networking devices, keyboards, and accessories.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-violet-700" />
                  Filter Catalog
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Search filter input */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Search Catalog</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter by keyword..."
                    className="w-full text-xs py-2 pl-8 pr-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2.5">Category</label>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between font-semibold transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-violet-50 text-violet-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Categories</span>
                    <span>{PRODUCTS.length}</span>
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between font-semibold transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-violet-50 text-violet-800'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span>{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2.5">
                  Condition Grade
                </label>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setSelectedCondition('all')}
                    className={`w-full text-left px-3 py-2 rounded-xl font-semibold flex items-center justify-between ${
                      selectedCondition === 'all'
                        ? 'bg-violet-50 text-violet-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Conditions</span>
                    {selectedCondition === 'all' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setSelectedCondition('pre-owned')}
                    className={`w-full text-left px-3 py-2 rounded-xl font-semibold flex items-center justify-between ${
                      selectedCondition === 'pre-owned'
                        ? 'bg-violet-50 text-violet-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>Pre-Owned (100% Tested)</span>
                    {selectedCondition === 'pre-owned' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setSelectedCondition('new')}
                    className={`w-full text-left px-3 py-2 rounded-xl font-semibold flex items-center justify-between ${
                      selectedCondition === 'new'
                        ? 'bg-violet-50 text-violet-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>Brand New</span>
                    {selectedCondition === 'new' && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span>Max Budget:</span>
                  <span className="text-violet-700">৳{maxPrice.toLocaleString('en-BD')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="90000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-violet-700 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>৳500</span>
                  <span>৳90,000</span>
                </div>
              </div>
            </div>

            {/* Quality assurance box */}
            <div className="bg-violet-900 text-white p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h4 className="text-xs font-bold text-white">AuthenTech Quality</h4>
              </div>
              <p className="text-xs text-violet-200 leading-relaxed">
                Need advice on which laptop fits your programming or office requirements? Contact us directly on WhatsApp or call our shop.
              </p>
            </div>
          </aside>

          {/* Product Listing Main Area */}
          <main className="lg:col-span-3 space-y-6">
            {/* Top Bar with count, active chips, and sort */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <span className="text-xs font-bold text-slate-800">
                  Showing <span className="text-violet-700">{filteredProducts.length}</span> of {PRODUCTS.length} products
                </span>

                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 bg-violet-50 px-3 py-1.5 rounded-xl border border-violet-200"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                </button>
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-slate-400 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-hidden focus:border-violet-600"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active filter badges */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-700 font-semibold px-2.5 py-1 rounded-lg border border-violet-200">
                    Category: {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedCondition !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-700 font-semibold px-2.5 py-1 rounded-lg border border-violet-200">
                    Condition: {selectedCondition === 'pre-owned' ? 'Pre-Owned' : 'Brand New'}
                    <button onClick={() => setSelectedCondition('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-700 font-semibold px-2.5 py-1 rounded-lg border border-violet-200">
                    &quot;{searchQuery}&quot;
                    <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-slate-400 hover:text-red-500 font-semibold underline underline-offset-2 ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid or Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-xs">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">No products match your criteria</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                  Try adjusting your price filter, keyword, or selecting &quot;All Categories&quot; to discover our inventory.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-violet-700 hover:bg-violet-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end lg:hidden">
          <div className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900">Filters</span>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">Category</label>
              <div className="space-y-1 text-xs">
                <button
                  onClick={() => { setSelectedCategory('all'); setIsMobileFilterOpen(false); }}
                  className="w-full text-left py-2 px-3 rounded-lg font-semibold bg-slate-50"
                >
                  All Categories
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setIsMobileFilterOpen(false); }}
                    className="w-full text-left py-2 px-3 rounded-lg font-semibold hover:bg-slate-50"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Close & Apply */}
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-violet-700 text-white font-bold text-xs py-3 rounded-xl"
            >
              Apply Filters ({filteredProducts.length} items)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-slate-400">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
