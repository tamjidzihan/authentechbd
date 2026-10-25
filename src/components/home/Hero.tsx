'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const slides = [
  {
    tag: 'NEW ARRIVAL',
    discount: '-15%',
    subtitle: 'AuthenTech Certified Business Laptop',
    title: 'HP EliteBook 840 G8',
    bullets: [
      '14.0" FHD IPS Anti-Glare 400 nits',
      'Intel Core i5-1135G7 • 16GB RAM',
      '89% Verified Battery Health • Tested Lab',
    ],
    price: '৳48,500',
    originalPrice: '৳53,000',
    link: '/products/hp-elitebook-840-g8-core-i5-11th-gen',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
    bgGradient: 'from-[#425a8b] to-[#1e2a4a]',
  },
  {
    tag: 'BEST SELLER',
    discount: '-10%',
    subtitle: 'Executive Carbon Fiber Ultrabook',
    title: 'Dell Latitude 7420 Carbon',
    bullets: [
      'Intel Core i7 11th Gen • 16GB LPDDR4x',
      '512GB High-Speed M.2 NVMe SSD',
      '92% Battery Health • 15d Replacement Guarantee',
    ],
    price: '৳54,000',
    originalPrice: '৳59,000',
    link: '/products/dell-latitude-7420-core-i7-11th-gen-carbon',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop',
    bgGradient: 'from-[#2b38d1] to-[#0e224a]',
  },
  {
    tag: 'HOT DEAL',
    discount: '-12%',
    subtitle: 'Legendary Multi-Core Workhorse',
    title: 'ThinkPad T14 Gen 2 Ryzen',
    bullets: [
      'AMD Ryzen 5 PRO 5650U 6-Core 12-Thread',
      'Military-Grade MIL-STD 810H Chassis',
      '100% Dead-Pixel Free Screen Guarantee',
    ],
    price: '৳49,500',
    originalPrice: '৳55,000',
    link: '/products/lenovo-thinkpad-t14-gen-2-amd-ryzen-5-pro',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop',
    bgGradient: 'from-[#1e293b] to-[#0f172a]',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const active = slides[currentSlide];

  return (
    <section className="pt-6 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Slider (col-lg-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className={`relative rounded-3xl overflow-hidden bg-linear-to-r ${active.bgGradient} text-white p-7 sm:p-10 flex-1 flex flex-col justify-between shadow-sm min-h-[380px] sm:min-h-[440px]`}>
              {/* Background laptop visual */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 lg:opacity-60 pointer-events-none overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover object-center translate-x-8 translate-y-4 scale-110"
                  priority
                />
              </div>

              {/* Top tags */}
              <div className="relative z-10 flex items-center gap-2 mb-4">
                <span className="bg-[#fd9636] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  {active.discount}
                </span>
                <span className="bg-[#3bb77e] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  {active.tag}
                </span>
              </div>

              {/* Main titles */}
              <div className="relative z-10 max-w-md space-y-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-200">
                  {active.subtitle}
                </h3>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight tracking-tight">
                  {active.title}
                </h1>

                {/* Bullets */}
                <ul className="space-y-1.5 py-3 text-xs sm:text-sm text-slate-200">
                  {active.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3bb77e] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {active.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    {active.originalPrice}
                  </span>
                </div>
              </div>

              {/* Buttons & Slide Indicators */}
              <div className="relative z-10 pt-6 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <Link
                    href={active.link}
                    className="inline-flex items-center gap-2 bg-white text-[#253d4e] hover:bg-[#3bb77e] hover:text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition-all"
                  >
                    <span>Shop now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#3bb77e] px-4 py-3 transition-colors"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlide === idx ? 'w-7 bg-[#3bb77e]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Small Promo Banners (col-lg-5, 2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Banner 1: Pre-Owned Laptops */}
            <Link
              href="/products?category=laptops"
              className="group p-5 rounded-3xl bg-[#f0e8f6] border border-[#e5d8ee] hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <span className="text-[11px] font-bold text-[#7e7e7e] uppercase tracking-wider block mb-1">
                  New Arrivals
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#253d4e] leading-snug group-hover:text-[#2b38d1] transition-colors">
                  Laptop Collection
                </h4>
                <p className="text-[11px] font-bold text-[#3bb77e] mt-1">100% Tested Lab</p>
              </div>
              <div className="mt-4 pt-2">
                <span className="text-xs font-bold text-[#2b38d1] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Banner 2: Routers & Wi-Fi */}
            <Link
              href="/products?category=routers"
              className="group p-5 rounded-3xl bg-[#e6f4f1] border border-[#d2ebe6] hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <span className="text-[11px] font-bold text-[#7e7e7e] uppercase tracking-wider block mb-1">
                  High-Speed Wi-Fi
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#253d4e] leading-snug group-hover:text-[#2b38d1] transition-colors">
                  Gigabit Routers
                </h4>
                <p className="text-[11px] font-bold text-[#3bb77e] mt-1">Dual-Band AC1200</p>
              </div>
              <div className="mt-4 pt-2">
                <span className="text-xs font-bold text-[#2b38d1] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Banner 3: Keyboards & Mice */}
            <Link
              href="/products?category=keyboards"
              className="group p-5 rounded-3xl bg-[#fdf2e9] border border-[#fae4d3] hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <span className="text-[11px] font-bold text-[#7e7e7e] uppercase tracking-wider block mb-1">
                  Productivity Gear
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#253d4e] leading-snug group-hover:text-[#2b38d1] transition-colors">
                  Keyboards & Mice
                </h4>
                <p className="text-[11px] font-bold text-[#fd9636] mt-1">Wireless & Mechanical</p>
              </div>
              <div className="mt-4 pt-2">
                <span className="text-xs font-bold text-[#2b38d1] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Banner 4: CCTV Security */}
            <Link
              href="/products?category=cctv"
              className="group p-5 rounded-3xl bg-[#eaf3fb] border border-[#d5e7f7] hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <span className="text-[11px] font-bold text-[#7e7e7e] uppercase tracking-wider block mb-1">
                  24/7 Security
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#253d4e] leading-snug group-hover:text-[#2b38d1] transition-colors">
                  CCTV Cameras
                </h4>
                <p className="text-[11px] font-bold text-[#3bb77e] mt-1">Smart 360 & Night Vision</p>
              </div>
              <div className="mt-4 pt-2">
                <span className="text-xs font-bold text-[#2b38d1] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
