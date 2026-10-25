import React from 'react';
import Hero from '@/components/home/Hero';
import BrandStrip from '@/components/home/BrandStrip';
import CategoryGrid from '@/components/home/CategoryGrid';
import FlashDeals from '@/components/home/FlashDeals';
import TrendingProducts from '@/components/home/TrendingProducts';
import PromoBanners from '@/components/home/PromoBanners';
import TopSellingColumns from '@/components/home/TopSellingColumns';
import FourColumnLists from '@/components/home/FourColumnLists';
import StoreLocationSection from '@/components/home/StoreLocationSection';
import BlogSection from '@/components/home/BlogSection';
import FeaturePillars from '@/components/home/FeaturePillars';
import NewsletterStrip from '@/components/home/NewsletterStrip';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Slider & 2x2 Promo Grid */}
      <Hero />

      {/* 2. Brand Strip */}
      <BrandStrip />

      {/* 3. Browse By Categories */}
      <CategoryGrid />

      {/* 4. Flash Deals (2 Countdown Big Cards + Banner + 4 Deal Cards) */}
      <FlashDeals />

      {/* 5. Trending Products (5 cols x 2 rows = 10 cards with category tabs) */}
      <TrendingProducts />

      {/* 6. 3 Promo Banners */}
      <PromoBanners />

      {/* 7. Top Selling Products (3 cols mini-cards + 2 dark wide banners + 4 brand quick cards) */}
      <TopSellingColumns />

      {/* 8. 4-Column Widgets (Top Rated, Best Selling, On Sale, Top Featured) + Diagnostic Guarantee Banner */}
      <FourColumnLists />

      {/* 9. Physical Showroom & Store Location at Siraj Plaza */}
      <StoreLocationSection />

      {/* 10. Latest News & Articles (Blog Section) */}
      <BlogSection />

      {/* 11. Feature Pillars (Trust Badges) */}
      <FeaturePillars />

      {/* 12. Newsletter Subscription Strip */}
      <NewsletterStrip />
    </div>
  );
}
