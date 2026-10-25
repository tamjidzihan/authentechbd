import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Subtitle and Slider Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#e0e6ef] mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#253d4e] tracking-tight">
              Featured Categories
            </h2>
            <p className="text-xs text-[#7e7e7e] mt-1">
              Choose your verified technology products from our featured categories.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white flex items-center justify-center text-[#7e7e7e] transition-colors"
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white flex items-center justify-center text-[#7e7e7e] transition-colors"
              aria-label="Next categories"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group p-4 rounded-2xl bg-white border border-[#e0e6ef] hover:border-[#2b38d1] text-center hover-up transition-all flex flex-col items-center justify-between"
            >
              <div className="w-16 h-16 rounded-full bg-[#f4f6fa] overflow-hidden relative mx-auto mb-3 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors leading-tight line-clamp-1">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-[#7e7e7e] mt-1 font-medium">
                  {cat.count} items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
