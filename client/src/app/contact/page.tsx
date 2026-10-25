'use client';

import React, { useState } from 'react';
import { STORE_INFO } from '@/data/products';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'laptop',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello AuthenTech BD!\nMy Name: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'N/A'}\nInterest: ${formData.interest}\nMessage: ${formData.message || 'I would like to inquire about laptops/accessories.'}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block">
            Visit Us or Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact AuthenTech BD
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Have questions about a pre-owned laptop specification, router availability, or warranty? Call us, chat on WhatsApp, or visit our store in Shahzadpur.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Store Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-violet-700 text-white flex items-center justify-center font-black">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">AuthenTech BD Store</h3>
                  <p className="text-xs text-slate-500">Siraj Plaza, Shahzadpur</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Store Address</p>
                    <p className="text-slate-600 mt-0.5">{STORE_INFO.address}</p>
                    <p className="text-xs text-slate-400 mt-1">3rd Floor, Siraj Plaza, Monirampur Bazar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-violet-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Phone Hotline</p>
                    <a href={`tel:${STORE_INFO.phone}`} className="text-violet-700 font-bold hover:underline block mt-0.5">
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">WhatsApp Chat</p>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello AuthenTech BD!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline block mt-0.5"
                    >
                      +880 1352-272986
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Email Address</p>
                    <a href={`mailto:${STORE_INFO.email}`} className="text-slate-600 hover:underline block mt-0.5">
                      {STORE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Shop Hours</p>
                    <p className="text-slate-600 mt-0.5">{STORE_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="bg-linear-to-r from-violet-900 to-slate-900 text-white p-6 rounded-3xl space-y-3">
              <h4 className="text-sm font-bold">Fastest Response via WhatsApp</h4>
              <p className="text-xs text-violet-200">
                Send a quick text or photo of the device you want. Our staff typically responds within minutes during business hours.
              </p>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Us on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Send an Online Inquiry</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the details below and we will contact you directly with pricing and stock availability.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-violet-50 rounded-2xl border border-violet-100 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Inquiry Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you {formData.name}. Our AuthenTech BD team has received your message and will call you back at {formData.phone} shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward to WhatsApp for Instant Reply
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number (with WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Interested Product / Category</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600 font-medium"
                    >
                      <option value="Pre-Owned Laptop">Pre-Owned Laptop (HP / Dell / Lenovo / MacBook)</option>
                      <option value="Router">High-Speed Wi-Fi Router</option>
                      <option value="Keyboard / Mouse">Keyboard or Mouse</option>
                      <option value="Storage / Pen Drive">Pen Drive / SSD / Storage</option>
                      <option value="CCTV Camera">CCTV Security System</option>
                      <option value="General Question">General Inquiry / Store Visit</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Your Message / Specifications Needed</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred budget, processor (Core i5/i7/Ryzen), RAM, or required features..."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-violet-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-xs transition-all text-sm"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
