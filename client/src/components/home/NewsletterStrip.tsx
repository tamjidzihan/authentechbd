'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#0e224a] text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-black uppercase text-[#fd9636] tracking-wider">
              Weekly Shipment Alert
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Subscribe & Get Instant Price Drop Alerts
            </h3>
            <p className="text-xs text-slate-300">
              Be the first to know about freshly arrived Grade A+ enterprise laptops, routers, and computer accessories.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-4">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-900/60 border border-emerald-500/50 rounded-2xl text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are now subscribed to our price alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-4 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#fd9636] focus:bg-white/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#fd9636] hover:bg-[#e5692a] text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-400 mt-2 text-center lg:text-left">
              We respect your privacy. No spam, only genuine stock updates and discounts.
            </p>
          </div>

          {/* Right Product Collage / Badge */}
          <div className="lg:col-span-3 hidden lg:flex items-center justify-end gap-3 opacity-90">
            <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=200&auto=format&fit=crop"
                alt="Laptop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=200&auto=format&fit=crop"
                alt="Router"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=200&auto=format&fit=crop"
                alt="Keyboard"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
