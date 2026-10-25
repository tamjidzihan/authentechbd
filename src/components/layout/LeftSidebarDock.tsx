'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  Wifi,
  Keyboard,
  Mouse,
  HardDrive,
  Speaker,
  Camera,
  Cpu,
  Monitor,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

const dockCategories = [
  { name: 'Pre-Owned Laptops', icon: Laptop, href: '/products?category=laptops' },
  { name: 'Routers & Wi-Fi', icon: Wifi, href: '/products?category=routers' },
  { name: 'Keyboards', icon: Keyboard, href: '/products?category=keyboards' },
  { name: 'Mice & Pointers', icon: Mouse, href: '/products?category=mice' },
  { name: 'Storage & Drives', icon: HardDrive, href: '/products?category=storage' },
  { name: 'Audio & Speakers', icon: Speaker, href: '/products?category=speakers' },
  { name: 'CCTV & Security', icon: Camera, href: '/products?category=cctv' },
  { name: 'Displays & Monitors', icon: Monitor, href: '/products?category=laptops' },
  { name: 'Hardware & CPUs', icon: Cpu, href: '/products?category=laptops' },
];

export default function LeftSidebarDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden xl:block fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300">
      <div className="relative flex items-center">
        {/* Toggle open/close handle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-7 top-1/2 -translate-y-1/2 w-7 h-10 bg-[#253d4e] hover:bg-[#2b38d1] text-white flex items-center justify-center rounded-r-lg shadow-md transition-colors"
          title={isOpen ? 'Collapse Category Dock' : 'Expand Category Dock'}
        >
          {isOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>

        {/* Sidebar container */}
        <div
          className={`bg-white border-y border-r border-[#e0e6ef] shadow-xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'w-64 rounded-r-2xl' : 'w-14 rounded-r-xl'
          }`}
        >
          <div className="p-2 border-b border-[#f1f5f9] flex items-center justify-between">
            <span className={`text-[11px] font-bold text-[#425a8b] uppercase tracking-wider pl-1.5 ${!isOpen && 'hidden'}`}>
              Browse Categories
            </span>
            <Menu className="w-4 h-4 text-[#425a8b] mx-auto" />
          </div>

          <ul className="py-2 space-y-1">
            {dockCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-3.5 py-2.5 text-[#253d4e] hover:text-[#2b38d1] hover:bg-[#f4f6fa] transition-colors group"
                    title={item.name}
                  >
                    <Icon className="w-5 h-5 shrink-0 text-[#7e7e7e] group-hover:text-[#2b38d1] transition-colors" />
                    {isOpen && (
                      <span className="text-xs font-semibold truncate flex-1">
                        {item.name}
                      </span>
                    )}
                    {isOpen && (
                      <ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1] group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
