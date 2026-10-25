'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { STORE_INFO } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import {
  ShieldCheck,
  MessageCircle,
  Phone,
  Plus,
  Check,
  ChevronRight,
  Battery,
  Monitor,
  Keyboard,
  Cpu,
  RotateCcw,
  MapPin,
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const { addToCart, cart, generateWhatsAppLink } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const isInCart = cart.some((item) => item.product.id === product.id);

  return (
    <div className="bg-slate-50 min-h-screen py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-slate-900 transition-colors">
            Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link
            href={`/products?category=${product.category}`}
            className="capitalize hover:text-slate-900 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Active Image */}
              <div className="relative aspect-4/3 w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Condition Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full shadow-xs backdrop-blur-md ${
                      product.condition.includes('Pre-Owned')
                        ? 'bg-violet-900/90 text-violet-100 border border-violet-700/50'
                        : 'bg-emerald-900/90 text-emerald-100 border border-emerald-700/50'
                    }`}
                  >
                    {product.condition}
                  </span>
                  {product.condition.includes('Pre-Owned') && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/95 text-slate-900 px-2.5 py-1 rounded-lg shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                      100% Tested
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/95 text-emerald-700 px-3 py-1 rounded-full shadow-xs border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    In Stock ({product.stockCount || 'Available'})
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        selectedImage === img
                          ? 'border-violet-600 ring-2 ring-violet-600/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Image src={img} alt={`${product.name} thumb ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Store Pickup Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <p className="font-bold text-slate-900">Available for Store Hands-on Testing</p>
                  <p>Visit Siraj Plaza (3rd Floor), Monirampur Bazar, Shahzadpur to test this machine before purchasing.</p>
                </div>
              </div>
            </div>

            {/* Right Product Details & Action Console */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-violet-700 uppercase tracking-wider mb-2">
                  <span>{product.brand}</span>
                  <span>•</span>
                  <span>Model: {product.model}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {product.keySpecs.map((spec, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Price Box */}
              <div className="p-5 rounded-2xl bg-violet-50/60 border border-violet-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">Price in BDT:</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-slate-900">
                      ৳{product.price.toLocaleString('en-BD')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        ৳{product.originalPrice.toLocaleString('en-BD')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Verified Best Price
                  </span>
                </div>
              </div>

              {/* Warranty Assurance Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <p className="font-bold">Official AuthenTech Warranty Support</p>
                  <p>{product.warranty}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md shadow-emerald-600/20 transition-all text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order / Inquire via WhatsApp
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-2xl transition-all text-xs sm:text-sm shadow-xs ${
                      isInCart
                        ? 'bg-violet-100 text-violet-800 border border-violet-300'
                        : 'bg-violet-700 hover:bg-violet-800 text-white'
                    }`}
                  >
                    {isInCart ? (
                      <>
                        <Check className="w-4 h-4" />
                        In Quotation List
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add to Quotation
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-2xl transition-colors text-xs sm:text-sm border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-violet-700" />
                    Call: {STORE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Testing Checklist */}
        {product.testingChecklist && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block mb-1">
                Transparency & Diagnostics
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                AuthenTech 100% Tested Diagnostic Report
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every pre-owned machine is evaluated and certified by our in-house lab before listing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Battery className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Battery Capacity</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">{product.testingChecklist.batteryHealth}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Monitor className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Display & Panel</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">{product.testingChecklist.displayStatus}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Keyboard className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Keyboard & ClickPad</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">{product.testingChecklist.keyboardTrackpad}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Ports & Motherboard</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">{product.testingChecklist.portsConnectivity}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Thermal Benchmark</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">{product.testingChecklist.thermalPerformance}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-violet-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-violet-900">Tested & Approved By</h4>
                  <p className="text-xs text-violet-700 font-semibold mt-0.5">{product.testingChecklist.testedBy}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Specifications Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block mb-1">
              Technical Specifications
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Detailed Spec Sheet
            </h2>
          </div>

          <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden text-xs sm:text-sm">
            {product.fullSpecs.map((spec, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                }`}
              >
                <span className="font-bold text-slate-700">{spec.label}</span>
                <span className="sm:col-span-2 text-slate-900 font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Related & Recommended Gear
              </h2>
              <Link
                href="/products"
                className="text-xs font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1"
              >
                Browse All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
