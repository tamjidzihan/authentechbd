'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { STORE_INFO } from '@/data/products';
import { Home, Laptop, MessageCircle, MapPin, ShoppingBag } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors ${
          pathname === '/' ? 'text-violet-700' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <Link
        href="/products"
        className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors ${
          pathname.startsWith('/products') ? 'text-violet-700' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Laptop className="w-5 h-5" />
        <span>Products</span>
      </Link>

      {/* WhatsApp Float Trigger */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD! I am looking for a laptop/accessory.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-emerald-600 py-1 px-2 rounded-xl"
      >
        <div className="w-9 h-9 -mt-4 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md">
          <MessageCircle className="w-5 h-5" />
        </div>
        <span>WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors ${
          pathname === '/contact' ? 'text-violet-700' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <MapPin className="w-5 h-5" />
        <span>Store</span>
      </Link>

      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded-xl text-slate-500 hover:text-slate-800 relative"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>Quote</span>
        {totalItems > 0 && (
          <span className="absolute top-0 right-2 bg-orange-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
