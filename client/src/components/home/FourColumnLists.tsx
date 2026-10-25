'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { Star, ArrowRight } from 'lucide-react';

export default function FourColumnLists() {
  const topRated = PRODUCTS.filter((p) => (p.rating || 0) >= 4.5).slice(0, 3);
  const bestSelling = PRODUCTS.filter((p) => (p.soldCount || 0) > 20).slice(0, 3);
  const onSale = PRODUCTS.filter((p) => (p.discountPercent || 0) >= 10).slice(0, 3);
  const topFeatured = PRODUCTS.filter((p) => p.featured).slice(0, 3);

  const columns = [
    { title: 'Top Rated', products: topRated },
    { title: 'Best Selling', products: bestSelling },
    { title: 'On Sale', products: onSale },
    { title: 'Top Featured', products: topFeatured },
  ];

  return (
    <section className="py-14 bg-[#f8fafd] border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-5">
              {/* Column Title with Bottom Line */}
              <div className="pb-3 border-b-2 border-[#2b38d1]/30 flex items-center justify-between">
                <h3 className="text-base font-black text-[#253d4e] tracking-tight">
                  {col.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#2b38d1]"></div>
              </div>

              {/* 3 Horizontal Product Items */}
              <div className="space-y-4">
                {col.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#e0e6ef] hover:border-[#2b38d1] transition-all group hover-up"
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-20 h-20 relative rounded-xl overflow-hidden bg-[#f4f6fa] shrink-0 border border-[#f0f3f8]"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`}>
                        <h4 className="text-xs font-bold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors truncate">
                          {product.name}
                        </h4>
                      </Link>

                      <div className="flex items-center gap-1 text-[10px] text-[#fd9636] my-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-[#fd9636]" />
                          ))}
                        </div>
                        <span className="text-[#7e7e7e]">({product.reviewCount || 20})</span>
                      </div>

                      <div className="flex items-baseline gap-1.5">
                        <strong className="text-xs font-black text-[#2b38d1]">
                          ৳{product.price.toLocaleString('en-BD')}
                        </strong>
                        {product.originalPrice && (
                          <span className="text-[10px] text-[#7e7e7e] line-through">
                            ৳{product.originalPrice.toLocaleString('en-BD')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Wide Horizontal Full-Width Banner Strip */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#2b38d1] via-[#1e2a9c] to-[#0e224a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-[#3bb77e] text-white text-[10px] font-black rounded-md uppercase tracking-wider">
              Diagnostic Lab Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              100% Tested Pre-Owned Laptops with 15-Day Replacement
            </h3>
            <p className="text-xs text-blue-100">
              Every device passes our 25-point hardware diagnostic test before handover. Visit our Siraj Plaza showroom or get fast courier delivery anywhere in Bangladesh.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/warranty"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              View Diagnostic Report
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#fd9636] hover:bg-[#e5692a] text-white font-bold text-xs transition-colors shadow-lg"
            >
              Shop All Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
