import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

export default function FeaturePillars() {
  const features = [
    {
      icon: Truck,
      title: 'Free Courier Delivery',
      desc: 'Free courier across Bangladesh on all orders above ৳10,000.',
      color: 'text-[#2b38d1]',
      bg: 'bg-[#eef2ff]',
    },
    {
      icon: RotateCcw,
      title: '15-Day Replacement',
      desc: 'Hassle-free replacement guarantee on pre-owned enterprise laptops.',
      color: 'text-[#fd9636]',
      bg: 'bg-[#fff7ed]',
    },
    {
      icon: ShieldCheck,
      title: '100% Tested Lab Certified',
      desc: '25-point comprehensive hardware diagnostic report with every unit.',
      color: 'text-[#3bb77e]',
      bg: 'bg-[#ecfdf5]',
    },
    {
      icon: Headphones,
      title: '24/7 WhatsApp Support',
      desc: 'Instant consultation and direct quote confirmation on WhatsApp.',
      color: 'text-[#06b6d4]',
      bg: 'bg-[#ecfeff]',
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#e0e6ef] bg-[#fbfbfb] hover:border-[#2b38d1] hover:bg-white transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#253d4e] mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#7e7e7e] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
