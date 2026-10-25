import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORE_INFO } from '@/data/products';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Building,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden bg-white shadow-md p-1 border border-slate-200">
            <Image src="/images/logo.png" alt="AuthenTech BD" fill className="object-contain" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About AuthenTech BD
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Founded with a singular commitment to trust, transparent grading, and technical excellence. AuthenTech BD is Bangladesh’s dedicated retailer for certified pre-owned laptops, high-performance networking gear, and productivity accessories.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3 text-center">
            <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Tested Quality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We reject the industry practice of selling untested &quot;as-is&quot; pre-owned laptops. Every unit undergoes multi-hour benchmark tests before ever reaching our customer shelves.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3 text-center">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Best Price Guarantee</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We maintain direct wholesale connections to pass maximum value to students, developers, and corporate professionals across Sirajganj and Bangladesh.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Dedicated Service</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our relationship doesn’t end when you leave the store. We provide a 15-day replacement guarantee and ongoing technical support for your peace of mind.
            </p>
          </div>
        </div>

        {/* Physical Shop Presence */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block">
                Local Omnichannel Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Shahzadpur Storefront in Siraj Plaza
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Located on the 3rd Floor of Siraj Plaza in Monirampur Bazar, Shahzadpur, our physical shop features a dedicated workbench where buyers can inspect laptops, run stress benchmarks, and compare models side-by-side.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white px-5 py-3 rounded-xl shadow-xs transition-colors"
                >
                  <Building className="w-4 h-4" />
                  Visit Our Store
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 py-3"
                >
                  Explore Catalog
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl space-y-4">
              <h4 className="text-base font-bold text-white">Store Information</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{STORE_INFO.address}</p>
              <p className="text-xs font-bold text-orange-400">Phone: {STORE_INFO.phone}</p>
              <p className="text-xs text-emerald-400 font-semibold">WhatsApp: +880 1352-272986</p>
              <p className="text-xs text-slate-400">Hours: {STORE_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
