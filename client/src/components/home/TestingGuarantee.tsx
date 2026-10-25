import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Battery,
  Monitor,
  Keyboard,
  Thermometer,
  Cpu,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const testItems = [
  {
    icon: <Battery className="w-5 h-5 text-emerald-600" />,
    title: 'Battery Health >85%',
    description: 'We run multiple charge/discharge cycles to verify authentic battery cell life. Never shipped with degraded batteries.',
  },
  {
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    title: 'Flawless Display Panel',
    description: '100% dead-pixel free, spotless, and tested for uniform brightness and zero backlight bleeding.',
  },
  {
    icon: <Keyboard className="w-5 h-5 text-purple-600" />,
    title: 'Tactile Keyboard & Trackpad',
    description: 'Every key is software-tested for tactile actuation, backlighting uniformity, and multi-finger precision gestures.',
  },
  {
    icon: <Thermometer className="w-5 h-5 text-orange-600" />,
    title: 'Thermals & Fresh Paste',
    description: 'Stress-tested under 100% load with Cinebench/AIDA64. Fans cleaned and premium thermal paste applied.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-cyan-600" />,
    title: 'Ports & Motherboard Health',
    description: 'High-speed testing of all Thunderbolt, USB-C, HDMI, audio jacks, Wi-Fi 6, and Bluetooth modules.',
  },
  {
    icon: <RotateCcw className="w-5 h-5 text-pink-600" />,
    title: '15-Day Replacement Guarantee',
    description: 'If you discover any hardware defect within 15 days, we provide an immediate direct replacement or solution.',
  },
];

export default function TestingGuarantee() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800 text-violet-300 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Certified Pre-Owned Standards
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How AuthenTech BD Tests Every Laptop
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Buying a pre-owned laptop shouldn’t feel like a gamble. We decouple cosmetic grading from functional health: every device we sell is guaranteed <span className="text-white font-bold">100% functionally perfect</span> before leaving our shop.
          </p>
        </div>

        {/* 6 Diagnostic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700/80 hover:border-violet-500/50 p-6 rounded-2xl transition-all hover:bg-slate-800/90 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span>{item.title}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside the section */}
        <div className="bg-linear-to-r from-violet-950 to-slate-800 border border-violet-800/60 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Want to inspect a laptop in person?
            </h4>
            <p className="text-xs text-slate-300">
              Visit our Shahzadpur store at Siraj Plaza (3rd Floor) to test laptops side-by-side on our workbench.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/warranty"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
            >
              Learn About Warranty
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
