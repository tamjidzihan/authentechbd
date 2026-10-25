import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function PromoBanners() {
  return (
    <section className="py-10 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Promo 1: Audio */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#fdf2e9] border border-[#fae4d3] flex items-center justify-between relative overflow-hidden group hover-up">
            <div className="space-y-2 z-10 max-w-[60%]">
              <span className="text-[10px] font-black uppercase text-[#fd9636] tracking-wider">
                Weekend Special
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#253d4e] leading-snug">
                Multimedia Speakers & Audio
              </h3>
              <p className="text-xs text-[#7e7e7e]">Starting from ৳1,850</p>
              <div className="pt-2">
                <Link
                  href="/products?category=speakers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#fd9636] hover:bg-[#e5692a] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="w-28 h-28 relative shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop"
                alt="Speakers"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Promo 2: Routers */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#e6f4f1] border border-[#d2ebe6] flex items-center justify-between relative overflow-hidden group hover-up">
            <div className="space-y-2 z-10 max-w-[60%]">
              <span className="text-[10px] font-black uppercase text-[#3bb77e] tracking-wider">
                Super Speed
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#253d4e] leading-snug">
                Dual-Band Gigabit Routers
              </h3>
              <p className="text-xs text-[#7e7e7e]">Up to 1200 Mbps AC</p>
              <div className="pt-2">
                <Link
                  href="/products?category=routers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#3bb77e] hover:bg-[#2e9c68] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="w-28 h-28 relative shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop"
                alt="Routers"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Promo 3: Pre-Owned Laptops */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#eaf3fb] border border-[#d5e7f7] flex items-center justify-between relative overflow-hidden group hover-up">
            <div className="space-y-2 z-10 max-w-[60%]">
              <span className="text-[10px] font-black uppercase text-[#2b38d1] tracking-wider">
                100% Tested Lab
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#253d4e] leading-snug">
                Executive Laptops & Ultrabooks
              </h3>
              <p className="text-xs text-[#7e7e7e]">15d Replacement Warranty</p>
              <div className="pt-2">
                <Link
                  href="/products?category=laptops"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#2b38d1] hover:bg-[#1f2aa6] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="w-28 h-28 relative shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400&auto=format&fit=crop"
                alt="Laptops"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
