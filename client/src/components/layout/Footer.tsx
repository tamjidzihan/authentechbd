import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORE_INFO } from '@/data/products';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Laptop,
  Truck,
  RotateCcw,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top Value Assurance Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">100% Tested Devices</h4>
              <p className="text-xs text-slate-400">
                Every pre-owned laptop passes a comprehensive 25-point hardware diagnostic before sale.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="p-2.5 rounded-xl bg-orange-600/20 text-orange-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Best Market Price</h4>
              <p className="text-xs text-slate-400">
                Transparent and competitive pricing across laptops, routers, and computer accessories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Warranty & Service</h4>
              <p className="text-xs text-slate-400">
                Dedicated replacement guarantee and up to 2 years free service support on laptops.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Store Pickup & Courier</h4>
              <p className="text-xs text-slate-400">
                In-store physical verification in Shahzadpur, Sirajganj, or secure courier delivery across BD.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5">
                <Image src="/images/logo.png" alt="AuthenTech BD" fill className="object-contain" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  <span className="text-orange-500">A</span>uthen
                  <span className="text-violet-400">T</span>ech BD
                </span>
                <p className="text-xs text-slate-400 font-semibold">{STORE_INFO.tagline}</p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              AuthenTech BD is your trusted technology destination in Bangladesh for premium pre-owned enterprise laptops, high-speed networking routers, productivity keyboards, storage drives, and surveillance equipment.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-violet-900/40 text-violet-300 text-xs font-semibold rounded-lg border border-violet-700/50">
                {STORE_INFO.motto}
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products?category=laptops" className="hover:text-white transition-colors">
                  Pre-Owned Laptops
                </Link>
              </li>
              <li>
                <Link href="/products?category=routers" className="hover:text-white transition-colors">
                  Routers & Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="/products?category=keyboards" className="hover:text-white transition-colors">
                  Keyboards
                </Link>
              </li>
              <li>
                <Link href="/products?category=mice" className="hover:text-white transition-colors">
                  Wireless & Optical Mice
                </Link>
              </li>
              <li>
                <Link href="/products?category=storage" className="hover:text-white transition-colors">
                  Pen Drives & Storage
                </Link>
              </li>
              <li>
                <Link href="/products?category=speakers" className="hover:text-white transition-colors">
                  Multimedia Speakers
                </Link>
              </li>
              <li>
                <Link href="/products?category=cctv" className="hover:text-white transition-colors">
                  CCTV & Surveillance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Information & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Full Catalog
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition-colors">
                  Testing Checklist & Warranty
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About AuthenTech BD
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Store Directions & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Physical Shop & Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white font-medium">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp: +880 1352-272986
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© 2026 AuthenTech BD. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sirajganj, Bangladesh</span>
          <span>•</span>
          <span>Tested & Verified Quality</span>
        </div>
      </div>
    </footer>
  );
}
