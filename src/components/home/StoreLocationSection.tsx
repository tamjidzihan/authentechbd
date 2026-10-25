import React from 'react';
import { STORE_INFO } from '@/data/products';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ShieldCheck,
  Building,
} from 'lucide-react';

export default function StoreLocationSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
                Physical Shop & Service Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Visit AuthenTech BD in Shahzadpur, Sirajganj
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome you to visit our retail shop to experience our pre-owned laptops firsthand. Run performance tests, check display quality, and consult directly with our technical team before taking your device home.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Physical Address</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Landmark: Monirampur Bazar, 3rd Floor, Siraj Plaza
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Hotline</h4>
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="text-xs font-bold text-violet-700 hover:underline"
                    >
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">WhatsApp Chat</h4>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:underline"
                    >
                      +880 1352-272986
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Shop Hours</h4>
                  <p className="text-xs text-slate-600">
                    {STORE_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Store Now
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD! Can you give me directions to Siraj Plaza?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Map Visual & Store Trust Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-700 text-white flex items-center justify-center font-black">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Siraj Plaza Branch</h3>
                    <p className="text-xs text-slate-500">Monirampur Bazar, Shahzadpur</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Open Today
                </span>
              </div>

              {/* Simulated Map Card with directions */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 bg-radial from-violet-900/5 to-slate-900/20" />
                <div className="relative z-10 max-w-sm space-y-2">
                  <MapPin className="w-8 h-8 text-orange-600 mx-auto animate-bounce" />
                  <p className="text-xs font-bold text-slate-900">
                    Siraj Plaza (3rd Floor), Monirampur Bazar, Shahzadpur
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Sirajganj, Bangladesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Monirampur+Bazar+Shahzadpur+Sirajganj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-bold text-violet-700 bg-white hover:bg-slate-50 px-4 py-2 rounded-xl shadow-xs border border-slate-200 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-the-spot laptop diagnostics and testing bench available</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Windows installation & essential productivity software setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated replacement warranty verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
