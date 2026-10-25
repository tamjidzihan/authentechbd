'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ChevronLeft, ChevronRight, ArrowRight, ShoppingBag, Check } from 'lucide-react';

export default function TopSellingColumns() {
  const { addToCart, cart } = useCart();

  // Top selling products (take 6 products, 2 rows of 3 columns)
  const topSelling = PRODUCTS.slice(0, 6);

  return (
    <section className="py-14 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#e0e6ef] mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#253d4e] tracking-tight">
              Top Selling Products
            </h2>
            <p className="text-xs text-[#7e7e7e] mt-1">
              Customer favorites with the highest verified ratings and order volume.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white hover:border-[#2b38d1] text-[#7e7e7e] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next"
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white hover:border-[#2b38d1] text-[#7e7e7e] flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Columns Grid of Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topSelling.map((product) => {
            const isInCart = cart.some((i) => i.product.id === product.id);
            return (
              <div
                key={product.id}
                className="group p-4 rounded-2xl border border-[#e0e6ef] bg-white hover-up hover:border-[#2b38d1] transition-all flex items-center gap-4 relative"
              >
                {/* Product Image */}
                <Link
                  href={`/products/${product.slug}`}
                  className="w-28 h-28 relative rounded-xl overflow-hidden bg-[#f4f6fa] shrink-0 border border-[#f0f3f8]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discountPercent && (
                    <span className="absolute top-1.5 left-1.5 bg-[#3bb77e] text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                      -{product.discountPercent}%
                    </span>
                  )}
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#7e7e7e] uppercase tracking-wide">
                    {product.brand}
                  </span>
                  <Link href={`/products/${product.slug}`}>
                    <h4 className="text-xs font-bold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors truncate">
                      {product.name}
                    </h4>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[11px] text-[#fd9636] my-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#fd9636]" />
                      ))}
                    </div>
                    <span className="text-[#7e7e7e] text-[10px] font-semibold">
                      ({product.reviewCount || 30})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <strong className="text-sm font-black text-[#2b38d1]">
                      ৳{product.price.toLocaleString('en-BD')}
                    </strong>
                    {product.originalPrice && (
                      <span className="text-[10px] text-[#7e7e7e] line-through">
                        ৳{product.originalPrice.toLocaleString('en-BD')}
                      </span>
                    )}
                  </div>

                  {/* Add to Quote Button */}
                  <button
                    onClick={() => addToCart(product, 1)}
                    className={`mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      isInCart
                        ? 'bg-[#3bb77e] text-white'
                        : 'bg-[#f4f6fa] text-[#253d4e] hover:bg-[#2b38d1] hover:text-white border border-[#e0e6ef]'
                    }`}
                  >
                    {isInCart ? <Check className="w-3 h-3" /> : <ShoppingBag className="w-3 h-3" />}
                    {isInCart ? 'In Quote' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Wide Dark Promotional Banners (Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Banner 1 */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-r from-[#0e224a] to-[#1e3a8a] text-white overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="relative z-10 max-w-sm space-y-2">
              <span className="inline-block px-3 py-1 bg-[#fd9636] text-white text-[10px] font-black rounded-md uppercase tracking-wider">
                Limited Stock Flash
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Pre-Owned Core i5 & i7 Enterprise Laptops
              </h3>
              <p className="text-xs text-blue-200">
                100% Tested hardware with 15-day replacement & 2-year service warranty.
              </p>
              <div className="pt-3">
                <Link
                  href="/products?category=laptops"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0e224a] hover:bg-[#fd9636] hover:text-white font-bold text-xs transition-colors shadow-md"
                >
                  Explore Laptops <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            {/* Background Graphic Accent */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-[16px] border-white/20"></div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-r from-[#0f4c81] to-[#047857] text-white overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="relative z-10 max-w-sm space-y-2">
              <span className="inline-block px-3 py-1 bg-[#3bb77e] text-white text-[10px] font-black rounded-md uppercase tracking-wider">
                Networking & Security
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                High-Speed Gigabit Routers & CCTV Systems
              </h3>
              <p className="text-xs text-emerald-100">
                Dual-band Wi-Fi coverage up to 1200Mbps & 1080P night-vision surveillance.
              </p>
              <div className="pt-3">
                <Link
                  href="/products?category=routers"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0f4c81] hover:bg-[#3bb77e] hover:text-white font-bold text-xs transition-colors shadow-md"
                >
                  Shop Networking <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            {/* Background Graphic Accent */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-[16px] border-white/20"></div>
            </div>
          </div>
        </div>

        {/* 4 Brand / Category Quick Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/products?category=laptops"
            className="p-4 rounded-2xl border border-[#e0e6ef] bg-[#fbfbfb] hover:bg-white hover:border-[#2b38d1] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-black text-[#253d4e] group-hover:text-[#2b38d1] transition-colors block">
                HP Business Laptops
              </span>
              <span className="text-[10px] text-[#7e7e7e]">Starting from ৳28,500</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#7e7e7e] group-hover:text-[#2b38d1] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/products?category=laptops"
            className="p-4 rounded-2xl border border-[#e0e6ef] bg-[#fbfbfb] hover:bg-white hover:border-[#2b38d1] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-black text-[#253d4e] group-hover:text-[#2b38d1] transition-colors block">
                Dell Latitude Series
              </span>
              <span className="text-[10px] text-[#7e7e7e]">Starting from ৳26,500</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#7e7e7e] group-hover:text-[#2b38d1] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/products?category=routers"
            className="p-4 rounded-2xl border border-[#e0e6ef] bg-[#fbfbfb] hover:bg-white hover:border-[#2b38d1] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-black text-[#253d4e] group-hover:text-[#2b38d1] transition-colors block">
                TP-Link & Tenda Wi-Fi
              </span>
              <span className="text-[10px] text-[#7e7e7e]">Starting from ৳1,650</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#7e7e7e] group-hover:text-[#2b38d1] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/products?category=cctv"
            className="p-4 rounded-2xl border border-[#e0e6ef] bg-[#fbfbfb] hover:bg-white hover:border-[#2b38d1] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-black text-[#253d4e] group-hover:text-[#2b38d1] transition-colors block">
                Hikvision & EZVIZ CCTV
              </span>
              <span className="text-[10px] text-[#7e7e7e]">Starting from ৳1,850</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#7e7e7e] group-hover:text-[#2b38d1] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
