'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { STORE_INFO, PRODUCTS } from '@/data/products';
import {
  Search,
  ShoppingBag,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Laptop,
} from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter products for instant search preview
  const searchResults = searchQuery.trim().length > 1
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Tested Pre-Owned Laptops & Accessories
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-400" />
              {STORE_INFO.address.split(',')[0]}, Monirampur Bazar, Shahzadpur
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="font-semibold text-slate-200">{STORE_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD! I am looking for a laptop/accessory.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp Live Chat
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 md:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-slate-200 shadow-xs bg-white p-0.5">
            <Image
              src="/images/logo.png"
              alt="AuthenTech BD Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
          <div>
            <div className="flex items-center text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-tight">
              <span className="text-orange-600">A</span>
              <span>uthen</span>
              <span className="text-violet-700">T</span>
              <span>ech BD</span>
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Premium Laptops & Accessories
            </p>
          </div>
        </Link>

        {/* Search Bar with instant autocomplete */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search HP EliteBook, Dell Latitude, Core i7, Routers, SSD..."
              className="w-full pl-10 pr-24 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600 focus:ring-3 focus:ring-violet-600/15 transition-all text-slate-900 placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors"
            >
              Search
            </button>
          </form>

          {/* Instant Search Results Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 divide-y divide-slate-100">
              <div className="p-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50">
                Matching Products
              </div>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-3 p-3 hover:bg-violet-50/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden relative shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{product.name}</p>
                    <p className="text-[11px] text-slate-500">{product.condition} • {product.keySpecs[0]}</p>
                  </div>
                  <span className="text-xs font-extrabold text-violet-700">
                    ৳{product.price.toLocaleString('en-BD')}
                  </span>
                </Link>
              ))}
              <div className="p-2 text-center bg-slate-50">
                <button
                  onMouseDown={() => router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)}
                  className="text-xs font-bold text-violet-700 hover:text-violet-900 inline-flex items-center gap-1"
                >
                  View all search results <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/products?category=laptops"
            className="hidden lg:inline-flex items-center gap-1.5 bg-violet-50 hover:bg-violet-100 text-violet-800 font-semibold text-xs px-3.5 py-2 rounded-xl transition-colors border border-violet-200/60"
          >
            <Laptop className="w-4 h-4 text-violet-700" />
            <span>Pre-Owned Laptops</span>
          </Link>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD! I am looking for a product.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs px-3.5 py-2 rounded-xl transition-colors border border-emerald-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Quotation / Inquiry Cart trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-slate-700 hover:text-violet-700 bg-slate-50 hover:bg-violet-50 rounded-xl transition-colors border border-slate-200/80"
            aria-label="View quotation cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-slate-700 hover:text-violet-700 md:hidden bg-slate-50 rounded-xl border border-slate-200/80"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Secondary Category Navigation */}
      <nav className="hidden md:block bg-slate-50/80 border-t border-slate-200/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-2.5 gap-6">
          <div className="flex items-center gap-6 font-semibold text-slate-700 shrink-0">
            <Link href="/" className="hover:text-violet-700 transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-violet-700 transition-colors">
              All Products
            </Link>
            <Link href="/products?category=laptops" className="hover:text-violet-700 text-violet-700 flex items-center gap-1 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              Pre-Owned Laptops
            </Link>
            <Link href="/products?category=routers" className="hover:text-violet-700 transition-colors">
              Routers
            </Link>
            <Link href="/products?category=keyboards" className="hover:text-violet-700 transition-colors">
              Keyboards
            </Link>
            <Link href="/products?category=mice" className="hover:text-violet-700 transition-colors">
              Mice
            </Link>
            <Link href="/products?category=storage" className="hover:text-violet-700 transition-colors">
              Pen Drives & Storage
            </Link>
            <Link href="/products?category=speakers" className="hover:text-violet-700 transition-colors">
              Speakers
            </Link>
            <Link href="/products?category=cctv" className="hover:text-violet-700 transition-colors">
              CCTV Cameras
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 shrink-0">
            <Link href="/warranty" className="hover:text-violet-700 transition-colors">
              Testing Guarantee
            </Link>
            <Link href="/about" className="hover:text-violet-700 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-violet-700 transition-colors">
              Store Location
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-20 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-violet-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Search
            </button>
          </form>

          {/* Links */}
          <div className="space-y-1 font-semibold text-sm text-slate-800 pt-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              All Products & Catalog
            </Link>
            <Link
              href="/products?category=laptops"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg bg-violet-50 text-violet-800 font-bold"
            >
              Pre-Owned Laptops (100% Tested)
            </Link>
            <Link
              href="/products?category=routers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Routers & Networking
            </Link>
            <Link
              href="/products?category=keyboards"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Keyboards
            </Link>
            <Link
              href="/products?category=mice"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Mice
            </Link>
            <Link
              href="/products?category=storage"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Pen Drives & Storage
            </Link>
            <Link
              href="/products?category=speakers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Speakers & Audio
            </Link>
            <Link
              href="/products?category=cctv"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              CCTV & Surveillance
            </Link>
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <Link
                href="/warranty"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-600"
              >
                Testing Guarantee & Warranty
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-600"
              >
                About AuthenTech BD
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-600"
              >
                Store Location & Directions
              </Link>
            </div>
          </div>

          {/* Store Info box */}
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">AuthenTech BD Shop:</p>
            <p>{STORE_INFO.address}</p>
            <p className="font-semibold text-violet-700">Phone: {STORE_INFO.phone}</p>
          </div>
        </div>
      )}
    </header>
  );
}
