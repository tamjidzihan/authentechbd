'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { STORE_INFO, PRODUCTS, CATEGORIES } from '@/data/products';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  GitCompare,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Laptop,
} from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const [searchCategory, setSearchCategory] = useState('All categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim().length > 1
    ? PRODUCTS.filter((p) =>
        (searchCategory === 'All categories' || p.category === searchCategory) &&
        (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.model.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      let url = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
      if (searchCategory !== 'All categories') {
        url += `&category=${encodeURIComponent(searchCategory)}`;
      }
      router.push(url);
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e0e6ef] shadow-xs">
      {/* 1. Top Bar */}
      <div className="bg-[#f4f6fa] border-b border-[#e0e6ef] text-[11px] text-[#7e7e7e] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/about" className="hover:text-[#2b38d1] transition-colors">
              About Us
            </Link>
            <Link href="/warranty" className="hover:text-[#2b38d1] transition-colors">
              Testing Guarantee
            </Link>
            <Link href="/contact" className="hover:text-[#2b38d1] transition-colors">
              Store Location
            </Link>
          </div>

          <div className="text-center mx-auto lg:mx-0 flex items-center gap-1.5 font-medium">
            <span>Special Service:</span>
            <span className="font-bold text-[#3bb77e]">100% Tested Pre-Owned Laptops with Warranty</span>
          </div>

          <div className="flex items-center gap-5 text-right font-medium">
            <span className="hidden sm:inline-block">
              Need help? Call Us:{' '}
              <a href={`tel:${STORE_INFO.phone}`} className="font-bold text-[#3bb77e] hover:underline">
                {STORE_INFO.phone}
              </a>
            </span>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#253d4e]">BDT (৳)</span>
              <span>|</span>
              <span className="font-semibold text-[#253d4e]">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header (Search + Logo + Account/Cart Tools) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#e0e6ef] bg-white p-0.5">
            <Image
              src="/images/logo.png"
              alt="AuthenTech BD"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="flex items-center text-lg sm:text-xl font-black text-[#253d4e] tracking-tight leading-tight">
              <span className="text-[#ea580c]">A</span>
              <span>uthen</span>
              <span className="text-[#2b38d1]">T</span>
              <span>ech BD</span>
            </div>
            <p className="text-[10px] font-bold text-[#7e7e7e] tracking-wider uppercase">
              Technology Marketplace
            </p>
          </div>
        </Link>

        {/* Ecom Style Search Box (Category Dropdown + Input + Search Button) */}
        <div className="flex-1 max-w-2xl relative hidden md:block">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg overflow-hidden focus-within:border-[#2b38d1] focus-within:ring-2 focus-within:ring-[#2b38d1]/10 transition-all"
          >
            {/* Category Dropdown */}
            <div className="relative shrink-0 border-r border-[#e0e6ef]">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="appearance-none bg-transparent py-2.5 pl-3.5 pr-8 text-xs font-bold text-[#253d4e] cursor-pointer focus:outline-hidden"
              >
                <option value="All categories">All categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#7e7e7e] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search for laptops, models, accessories..."
              className="flex-1 px-4 py-2.5 text-xs text-[#253d4e] bg-transparent focus:outline-hidden placeholder:text-[#94a3b8]"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#253d4e] hover:bg-[#2b38d1] text-white text-xs font-bold transition-colors flex items-center justify-center"
              aria-label="Search items"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#e0e6ef] overflow-hidden z-50 divide-y divide-[#f1f5f9]">
              <div className="p-2 text-[10px] font-bold text-[#7e7e7e] uppercase tracking-wider bg-[#f8fafe]">
                Matched Products
              </div>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-3 p-3 hover:bg-[#f4f6fa] transition-colors"
                >
                  <div className="w-9 h-9 bg-[#f4f6fa] rounded-md overflow-hidden relative shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#253d4e] truncate">{product.name}</p>
                    <p className="text-[11px] text-[#7e7e7e]">{product.condition} • {product.keySpecs[0]}</p>
                  </div>
                  <span className="text-xs font-bold text-[#2b38d1]">
                    ৳{product.price.toLocaleString('en-BD')}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Ecom Header Right Icons (Account, Wishlist, Cart, Compare) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#253d4e] hover:text-[#2b38d1] transition-colors"
          >
            <User className="w-5 h-5 text-[#425a8b]" />
            <span className="hidden xl:inline">Account</span>
          </Link>

          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#253d4e] hover:text-[#2b38d1] transition-colors relative"
          >
            <Heart className="w-5 h-5 text-[#425a8b]" />
            <span className="hidden xl:inline">Wishlist</span>
            <span className="absolute -top-1.5 -right-2 bg-[#3bb77e] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Quotation Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 text-xs font-bold text-[#253d4e] hover:text-[#2b38d1] transition-colors cursor-pointer group"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#425a8b] group-hover:text-[#2b38d1] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#fd9636] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="hidden xl:block text-left">
              <span className="text-[10px] font-semibold text-[#7e7e7e] block">Cart / Quote</span>
              <span className="text-xs font-bold text-[#2b38d1]">
                ৳{totalPrice.toLocaleString('en-BD')}
              </span>
            </div>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#253d4e] md:hidden rounded-lg hover:bg-[#f4f6fa]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. Main Navigation Bar (Clean Ecom style) */}
      <nav className="hidden md:block bg-white border-t border-[#e0e6ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-bold text-[#253d4e]">
          <div className="flex items-center gap-7 py-3">
            <Link href="/" className="text-[#2b38d1] flex items-center gap-1.5">
              <span>Home</span>
            </Link>
            <Link href="/products" className="hover:text-[#2b38d1] transition-colors">
              Shop Grid
            </Link>
            <Link href="/products?category=laptops" className="hover:text-[#2b38d1] flex items-center gap-1 transition-colors">
              <span className="bg-[#fd9636] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                Hot
              </span>
              <span>Pre-Owned Laptops</span>
            </Link>
            <Link href="/products?category=routers" className="hover:text-[#2b38d1] transition-colors">
              Routers & Wi-Fi
            </Link>
            <Link href="/products?category=keyboards" className="hover:text-[#2b38d1] transition-colors">
              Keyboards
            </Link>
            <Link href="/products?category=mice" className="hover:text-[#2b38d1] transition-colors">
              Mice
            </Link>
            <Link href="/products?category=storage" className="hover:text-[#2b38d1] transition-colors">
              Pen Drives
            </Link>
            <Link href="/products?category=cctv" className="hover:text-[#2b38d1] transition-colors">
              CCTV Cameras
            </Link>
          </div>

          <div className="flex items-center gap-4 text-[#7e7e7e]">
            <Link href="/warranty" className="hover:text-[#2b38d1] flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3bb77e]" />
              100% Tested Lab
            </Link>
            <Link href="/contact" className="hover:text-[#2b38d1] font-semibold">
              Shahzadpur Store
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#e0e6ef] bg-white p-5 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full text-xs p-2.5 bg-[#f4f6fa] border border-[#e0e6ef] rounded-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#253d4e] text-white px-2.5 py-1 rounded text-xs"
            >
              Search
            </button>
          </form>

          <div className="space-y-2 text-xs font-bold text-[#253d4e]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              Home
            </Link>
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              All Products
            </Link>
            <Link href="/products?category=laptops" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#2b38d1]">
              Pre-Owned Laptops (100% Tested)
            </Link>
            <Link href="/products?category=routers" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              Routers & Networking
            </Link>
            <Link href="/products?category=keyboards" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              Keyboards
            </Link>
            <Link href="/products?category=mice" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              Mice
            </Link>
            <Link href="/products?category=storage" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              Pen Drives & Storage
            </Link>
            <Link href="/products?category=cctv" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              CCTV & Surveillance
            </Link>
            <div className="pt-2 border-t border-[#f1f5f9] space-y-1">
              <Link href="/warranty" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[#7e7e7e]">
                Testing Guarantee & Policy
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[#7e7e7e]">
                Shahzadpur Store Location
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
