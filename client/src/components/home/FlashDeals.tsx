'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Eye, Heart, GitCompare, ShoppingBag, Check } from 'lucide-react';

export default function FlashDeals() {
  const { addToCart, cart, generateWhatsAppLink } = useCart();
  const [activeTab, setActiveTab] = useState('ALL');

  // Simulated live countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    mins: 38,
    secs: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const topDeals = PRODUCTS.filter((p) => p.isDeal).slice(0, 2);
  const gridDeals = PRODUCTS.filter((p) => p.isDeal).slice(2, 6);

  return (
    <section className="py-14 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-5 border-b border-[#e0e6ef] mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#253d4e] tracking-tight">
              Flash Deals
            </h2>
            <p className="text-xs text-[#7e7e7e] mt-1">
              Special tested laptops and accessories with dedicated warranty this month.
            </p>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider text-[#7e7e7e]">
            {['ALL', 'BEST SELLER', 'MOST VIEWED', 'TOP BRANDS'].map((tab) => (
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

        {/* Top Deals Row (2 Big Cards + 1 Vertical Banner) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Card 1 & 2: Big Top Deals */}
          {topDeals.map((deal) => {
            const isInCart = cart.some((i) => i.product.id === deal.id);
            return (
              <div
                key={deal.id}
                className="lg:col-span-5 rounded-3xl border border-[#e0e6ef] p-6 hover:shadow-lg transition-all relative overflow-hidden bg-white group flex flex-col justify-between"
              >
                {/* Red Top Deals Ribbon */}
                <div className="absolute top-0 right-0 bg-[#ea580c] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-xs z-10">
                  Top Deals
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Left Thumbnail & Countdown */}
                  <div className="sm:col-span-5 space-y-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f4f6fa] border border-[#e0e6ef]">
                      <Image
                        src={deal.image}
                        alt={deal.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Countdown Boxes */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <div className="bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg py-1.5">
                        <span className="block text-xs font-black text-[#253d4e]">{timeLeft.days}</span>
                        <span className="text-[9px] text-[#7e7e7e] font-semibold">Days</span>
                      </div>
                      <div className="bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg py-1.5">
                        <span className="block text-xs font-black text-[#253d4e]">{timeLeft.hours}</span>
                        <span className="text-[9px] text-[#7e7e7e] font-semibold">Hours</span>
                      </div>
                      <div className="bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg py-1.5">
                        <span className="block text-xs font-black text-[#253d4e]">{timeLeft.mins}</span>
                        <span className="text-[9px] text-[#7e7e7e] font-semibold">Mins</span>
                      </div>
                      <div className="bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg py-1.5">
                        <span className="block text-xs font-black text-[#253d4e]">{timeLeft.secs}</span>
                        <span className="text-[9px] text-[#7e7e7e] font-semibold">Secs</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Details */}
                  <div className="sm:col-span-7 space-y-2.5">
                    <span className="text-[11px] font-bold text-[#7e7e7e] uppercase">{deal.brand}</span>
                    <Link href={`/products/${deal.slug}`} className="block">
                      <h3 className="text-sm font-extrabold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors line-clamp-2 leading-snug">
                        {deal.name}
                      </h3>
                    </Link>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[11px] text-[#fd9636]">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#fd9636]" />
                        ))}
                      </div>
                      <span className="text-[#7e7e7e] font-semibold ml-1">({deal.reviewCount})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-xl font-black text-[#2b38d1]">
                        ৳{deal.price.toLocaleString('en-BD')}
                      </span>
                      {deal.originalPrice && (
                        <span className="text-xs text-[#7e7e7e] line-through font-semibold">
                          ৳{deal.originalPrice.toLocaleString('en-BD')}
                        </span>
                      )}
                    </div>

                    {/* Progress Bar (Available / Sold) */}
                    <div className="space-y-1 pt-1">
                      <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#3bb77e] h-full rounded-full"
                          style={{
                            width: `${((deal.soldCount || 10) / ((deal.soldCount || 10) + (deal.stockCount || 5))) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] font-semibold text-[#7e7e7e]">
                        <span>Available: <strong className="text-[#253d4e]">{deal.stockCount}</strong></span>
                        <span>Sold: <strong className="text-[#253d4e]">{deal.soldCount}</strong></span>
                      </div>
                    </div>

                    {/* Bullet features */}
                    <ul className="text-[11px] text-[#7e7e7e] space-y-1 pt-2 border-t border-[#f1f5f9]">
                      {deal.keySpecs.slice(0, 3).map((spec, i) => (
                        <li key={i} className="line-clamp-1">• {spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between gap-3">
                  <a
                    href={generateWhatsAppLink(deal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#3bb77e] hover:underline"
                  >
                    Quick WhatsApp Inquiry
                  </a>
                  <button
                    onClick={() => addToCart(deal, 1)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                      isInCart
                        ? 'bg-[#e0e6ef] text-[#253d4e]'
                        : 'bg-[#253d4e] hover:bg-[#2b38d1] text-white shadow-xs'
                    }`}
                  >
                    {isInCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    {isInCart ? 'In Quote' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Vertical Banner (col-lg-2) */}
          <div className="hidden xl:flex lg:col-span-2 rounded-3xl bg-linear-to-b from-[#2b38d1] to-[#0e224a] text-white p-6 flex-col justify-between shadow-sm">
            <div>
              <span className="bg-[#fd9636] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                New Arrivals
              </span>
              <h3 className="text-lg font-black mt-3 leading-snug">
                Pre-Owned Laptops
              </h3>
              <p className="text-xs text-slate-300 mt-1">Special Flash Sale</p>
            </div>

            <div className="pt-6">
              <p className="text-xs text-emerald-400 font-bold mb-3">100% Tested Lab</p>
              <Link
                href="/products?category=laptops"
                className="block text-center bg-white text-[#253d4e] hover:bg-[#3bb77e] hover:text-white font-bold text-xs py-2.5 rounded-lg transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Row of 4 Standard Deal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridDeals.map((product) => {
            const isInCart = cart.some((i) => i.product.id === product.id);
            return (
              <div
                key={product.id}
                className="group p-5 rounded-2xl border border-[#e0e6ef] bg-white hover-up hover:border-[#2b38d1] transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {/* Floating Tools on Hover */}
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
                  <span className="bg-[#fd9636] text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                    -{product.discountPercent || 12}%
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#f4f6fa] mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#7e7e7e] uppercase">{product.brand}</span>
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
                    <span className="text-[#7e7e7e] font-semibold text-[10px]">({product.reviewCount || 30})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pt-1">
                    <strong className="text-base font-black text-[#2b38d1]">
                      ৳{product.price.toLocaleString('en-BD')}
                    </strong>
                    {product.originalPrice && (
                      <span className="text-xs text-[#7e7e7e] line-through font-semibold">
                        ৳{product.originalPrice.toLocaleString('en-BD')}
                      </span>
                    )}
                  </div>

                  {/* Stock bar */}
                  <div className="space-y-1 pt-1">
                    <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#3bb77e] h-full rounded-full w-2/3" />
                    </div>
                    <div className="flex justify-between text-[10px] font-semibold text-[#7e7e7e]">
                      <span>Available: {product.stockCount || 8}</span>
                      <span>Sold: {product.soldCount || 15}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart button */}
                <div className="mt-4 pt-3 border-t border-[#f1f5f9]">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isInCart
                        ? 'bg-[#e0e6ef] text-[#253d4e]'
                        : 'bg-[#253d4e] hover:bg-[#2b38d1] text-white shadow-xs'
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
