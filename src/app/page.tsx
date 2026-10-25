import React from 'react';
import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import TestingGuarantee from '@/components/home/TestingGuarantee';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StoreLocationSection from '@/components/home/StoreLocationSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <TestingGuarantee />
      <StoreLocationSection />
    </div>
  );
}
