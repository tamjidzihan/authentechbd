import React from 'react';
import Link from 'next/link';
import { STORE_INFO } from '@/data/products';
import {
  ShieldCheck,
  RotateCcw,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';

export default function WarrantyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparent Customer Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Warranty Policy & Testing Standards
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            At AuthenTech BD, we stand firmly behind the quality of every device we sell. Review our comprehensive warranty terms, diagnostic guarantees, and claim procedures below.
          </p>
        </div>

        {/* 2 Major Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">15-Day Direct Replacement Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your pre-owned laptop encounters any hardware malfunction or hardware defect within 15 days of purchase, AuthenTech BD will replace it with an equivalent or superior device, or provide an instant resolution.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Covers Motherboard, Processor, RAM, and SSD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Covers Display panel, Inverter, and Keyboard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Immediate evaluation at our Shahzadpur store</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2-Year Free Service Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For full 2 years following your purchase, our expert lab technicians provide free labor support for repairs, internal cleaning, thermal paste re-application, and driver/OS troubleshooting.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero labor charge for hardware service</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Free internal dust cleaning and fan servicing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hardware upgrade assistance (RAM/SSD install)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand New Accessories Warranty */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-violet-700" />
            Warranty on Brand New Accessories
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All brand-new items—including TP-Link & Tenda Wi-Fi routers, Logitech keyboards and mice, SanDisk & Kingston flash drives, and Hikvision CCTV systems—carry their full official manufacturer warranty (ranging from 1 year to 5 years). We assist you directly with warranty claims.
          </p>
        </div>

        {/* Claim Procedure */}
        <div className="bg-violet-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">How to Claim Warranty or Request Service</h3>
            <p className="text-xs text-violet-200">
              We make the process simple and transparent without bureaucratic delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-violet-800 text-amber-400 font-black text-sm flex items-center justify-center">
                1
              </div>
              <h4 className="text-sm font-bold">Contact Our Hotline</h4>
              <p className="text-xs text-violet-200">
                Call {STORE_INFO.phone} or send a WhatsApp message describing the symptom or issue.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-violet-800 text-amber-400 font-black text-sm flex items-center justify-center">
                2
              </div>
              <h4 className="text-sm font-bold">Bring or Courier Item</h4>
              <p className="text-xs text-violet-200">
                Bring the device to Siraj Plaza (3rd Floor), Shahzadpur, or send it via Sundarban/SA Paribahan courier.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-violet-800 text-amber-400 font-black text-sm flex items-center justify-center">
                3
              </div>
              <h4 className="text-sm font-bold">Prompt Resolution</h4>
              <p className="text-xs text-violet-200">
                Our technicians will inspect and replace or service the device according to your warranty terms.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-violet-800/80 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs px-5 py-3 rounded-xl shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-violet-700" />
              Call Support: {STORE_INFO.phone}
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD! I have a warranty question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
