'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/products';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="py-14 bg-white border-b border-[#e0e6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#e0e6ef] mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#253d4e] tracking-tight">
              Latest News & Articles
            </h2>
            <p className="text-xs text-[#7e7e7e] mt-1">
              Tech guides, pre-owned laptop buying checklists, and networking tips from our lab.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white hover:border-[#2b38d1] text-[#7e7e7e] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next"
              className="w-8 h-8 rounded-full border border-[#e0e6ef] bg-[#f4f6fa] hover:bg-[#2b38d1] hover:text-white hover:border-[#2b38d1] text-[#7e7e7e] flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-[#e0e6ef] bg-white overflow-hidden hover-up hover:border-[#2b38d1] transition-all flex flex-col justify-between"
            >
              {/* Post Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f6fa]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#2b38d1] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-xs">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-[#7e7e7e]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#2b38d1]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#fd9636]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-[#253d4e] group-hover:text-[#2b38d1] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[11px] text-[#7e7e7e] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f1f5f9]">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2b38d1] group-hover:text-[#1f2aa6] transition-colors">
                    Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
