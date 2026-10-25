import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORE_INFO } from '@/data/products';
import {
  ShieldCheck,
  ArrowRight,
  MapPin,
  Laptop,
  CheckCircle,
  Cpu,
  BatteryCharging,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial from-violet-900/10 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text / Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Value badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>100% Tested Pre-Owned Laptops & Accessories</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology You Can <span className="text-violet-700">Trust</span>. Verified Quality for{' '}
              <span className="bg-linear-to-r from-orange-600 to-violet-700 bg-clip-text text-transparent">
                Every Workload
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore authentic pre-owned laptops (HP EliteBook, Dell Latitude, Lenovo ThinkPad) and high-speed networking accessories in Bangladesh. Each device undergoes our certified 25-point hardware inspection with dedicated warranty support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/products?category=laptops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-violet-700/20 transition-all hover:gap-3"
              >
                <Laptop className="w-4 h-4" />
                Browse Pre-Owned Laptops
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                Visit Store in Shahzadpur
              </Link>
            </div>

            {/* Quick Guarantees checklist */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25-Point Diagnostic</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-violet-600 shrink-0" />
                <span>15d Replacement Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Verified Best Prices</span>
              </div>
            </div>
          </div>

          {/* Right Product Spotlight Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-4 sm:p-5 shadow-2xl shadow-violet-900/10 border border-slate-200/80">
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-slate-800">Featured Business Workhorse</span>
                </div>
                <span className="text-xs font-extrabold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                  Pre-Owned Grade A+
                </span>
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop"
                  alt="HP EliteBook 840 G8"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  100% Tested Lab Certified
                </div>
              </div>

              {/* Specs & Pricing */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  HP EliteBook 840 G8 Core i5 11th Gen
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  All-metal magnesium chassis • Intel Iris Xe • Backlit Keyboard
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-violet-600" />
                    <span>16GB RAM / 512GB SSD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                    <span>89% Battery Health</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Special Price</span>
                    <span className="text-2xl font-black text-slate-900">৳48,500</span>
                  </div>

                  <Link
                    href="/products/hp-elitebook-840-g8-core-i5-11th-gen"
                    className="inline-flex items-center gap-1.5 bg-violet-700 hover:bg-violet-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-sm">
                AT
              </div>
              <div className="text-xs">
                <p className="font-bold text-white leading-tight">AuthenTech BD Verified</p>
                <p className="text-[11px] text-slate-400">Siraj Plaza, Shahzadpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
