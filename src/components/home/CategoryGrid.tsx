import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/products';
import {
  Laptop,
  Wifi,
  Keyboard,
  Mouse,
  HardDrive,
  Speaker,
  Camera,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-6 h-6 text-violet-600" />,
  Wifi: <Wifi className="w-6 h-6 text-blue-600" />,
  Keyboard: <Keyboard className="w-6 h-6 text-emerald-600" />,
  Mouse: <Mouse className="w-6 h-6 text-orange-600" />,
  HardDrive: <HardDrive className="w-6 h-6 text-amber-600" />,
  Speaker: <Speaker className="w-6 h-6 text-pink-600" />,
  Camera: <Camera className="w-6 h-6 text-cyan-600" />,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block mb-1">
              Curated Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 hover:text-violet-900 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:shadow-lg ${
                cat.id === 'laptops'
                  ? 'bg-linear-to-br from-violet-50/70 to-purple-50/40 border-violet-200/80 hover:border-violet-400'
                  : 'bg-slate-50/70 hover:bg-white border-slate-200/70 hover:border-violet-300'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-violet-700">
                <span>{cat.count} Items Available</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Sirajganj Store Info Card */}
          <Link
            href="/contact"
            className="p-5 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                <span className="text-sm font-black text-orange-400">AT</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                Shahzadpur Store
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Siraj Plaza (3rd Floor), Monirampur Bazar. Visit for live hands-on testing!
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-700/80 flex items-center justify-between text-xs font-bold text-orange-400">
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
