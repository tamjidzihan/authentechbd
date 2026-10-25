import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORE_INFO } from '@/data/products';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f4f6fa] text-[#4f5d77] pt-14 pb-8 border-t border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#e0e6ef]">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border border-[#e0e6ef] shadow-xs">
                <Image src="/images/logo.png" alt="AuthenTech BD" fill className="object-contain" />
              </div>
              <div>
                <span className="text-xl font-black text-[#253d4e] tracking-tight">
                  <span className="text-[#fd9636]">A</span>uthen
                  <span className="text-[#2b38d1]">T</span>ech BD
                </span>
                <p className="text-[10px] text-[#7e7e7e] font-bold uppercase tracking-wider">
                  {STORE_INFO.tagline}
                </p>
              </div>
            </Link>

            <p className="text-xs text-[#7e7e7e] leading-relaxed max-w-sm">
              Your trusted destination in Bangladesh for tested pre-owned enterprise laptops, high-performance routers, keyboards, storage drives, and surveillance equipment.
            </p>

            <ul className="space-y-2 text-xs text-[#253d4e]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2b38d1] shrink-0 mt-0.5" />
                <span className="text-[#7e7e7e]">{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fd9636] shrink-0" />
                <span className="font-semibold text-[#253d4e]">Call Us: </span>
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#2b38d1] font-bold">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#3bb77e] shrink-0" />
                <span className="font-semibold text-[#253d4e]">WhatsApp: </span>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3bb77e] font-bold"
                >
                  {STORE_INFO.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7e7e7e] shrink-0" />
                <span className="font-semibold text-[#253d4e]">Email: </span>
                <a href={`mailto:${STORE_INFO.email}`} className="text-[#7e7e7e] hover:text-[#2b38d1]">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#7e7e7e] shrink-0 mt-0.5" />
                <span className="text-[#7e7e7e]">{STORE_INFO.hours}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white border border-[#e0e6ef] text-[#2b38d1] hover:bg-[#2b38d1] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white border border-[#e0e6ef] text-[#ef4444] hover:bg-[#ef4444] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#e0e6ef] text-[#3bb77e] hover:bg-[#3bb77e] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-black text-[#253d4e] uppercase tracking-wider mb-4 border-b border-[#e0e6ef] pb-2">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#7e7e7e]">
              <li>
                <Link href="/products?category=laptops" className="hover:text-[#2b38d1] transition-colors">
                  Pre-Owned Laptops
                </Link>
              </li>
              <li>
                <Link href="/products?category=routers" className="hover:text-[#2b38d1] transition-colors">
                  Routers & Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="/products?category=keyboards" className="hover:text-[#2b38d1] transition-colors">
                  Mechanical Keyboards
                </Link>
              </li>
              <li>
                <Link href="/products?category=mice" className="hover:text-[#2b38d1] transition-colors">
                  Optical & Wireless Mice
                </Link>
              </li>
              <li>
                <Link href="/products?category=storage" className="hover:text-[#2b38d1] transition-colors">
                  Pen Drives & Storage
                </Link>
              </li>
              <li>
                <Link href="/products?category=speakers" className="hover:text-[#2b38d1] transition-colors">
                  Multimedia Speakers
                </Link>
              </li>
              <li>
                <Link href="/products?category=cctv" className="hover:text-[#2b38d1] transition-colors">
                  CCTV & Surveillance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Information & Trust */}
          <div>
            <h4 className="text-xs font-black text-[#253d4e] uppercase tracking-wider mb-4 border-b border-[#e0e6ef] pb-2">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-[#7e7e7e]">
              <li>
                <Link href="/about" className="hover:text-[#2b38d1] transition-colors">
                  About AuthenTech BD
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-[#2b38d1] transition-colors">
                  25-Point Diagnostic Lab
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-[#2b38d1] transition-colors">
                  15-Day Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2b38d1] transition-colors">
                  Showroom Directions
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#2b38d1] transition-colors">
                  Full Catalog & Inventory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Payment */}
          <div>
            <h4 className="text-xs font-black text-[#253d4e] uppercase tracking-wider mb-4 border-b border-[#e0e6ef] pb-2">
              Payment & Delivery
            </h4>
            <p className="text-xs text-[#7e7e7e] leading-relaxed mb-3">
              We accept direct mobile payments, bank transfers, and cash upon in-store showroom inspection.
            </p>

            <div className="space-y-2 text-xs font-bold text-[#253d4e]">
              <div className="flex items-center gap-1.5 text-xs text-[#253d4e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3bb77e]" />
                <span>bKash / Nagad / Rocket</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#253d4e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3bb77e]" />
                <span>Bank Deposit / Transfer</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#253d4e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3bb77e]" />
                <span>Cash On Store Pickup</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#253d4e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3bb77e]" />
                <span>Steadfast & SA Paribahan Courier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7e7e7e] gap-3">
          <p>© 2026 <strong className="text-[#253d4e]">AuthenTech BD</strong>. All rights reserved. Siraj Plaza (3rd Floor), Shahzadpur, Sirajganj.</p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/warranty" className="hover:text-[#2b38d1]">
              Warranty Terms
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-[#2b38d1]">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#2b38d1]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
