import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/products';

export default function BrandStrip() {
  return (
    <div className="py-6 border-b border-[#e0e6ef] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 overflow-x-auto py-2">
          {BRANDS.map((brand, idx) => (
            <Link
              key={idx}
              href={`/products?search=${encodeURIComponent(brand.name)}`}
              className="text-xs sm:text-sm font-black text-[#94a3b8] hover:text-[#253d4e] transition-colors shrink-0 tracking-widest px-3 py-1 rounded-md hover:bg-[#f4f6fa]"
            >
              {brand.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
