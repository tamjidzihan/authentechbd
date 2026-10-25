import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import MobileNav from '@/components/layout/MobileNav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://authentechbd.com'),
  title: 'AuthenTech BD — Premium Laptops & Computer Accessories',
  description: 'AuthenTech BD offers 100% tested pre-owned laptops, high-speed routers, keyboards, mice, storage, speakers, and CCTV cameras in Sirajganj, Bangladesh. Best Quality, Best Price, Best Service.',
  keywords: [
    'AuthenTech BD',
    'Pre-owned laptops Bangladesh',
    'Used laptops Sirajganj',
    'HP EliteBook',
    'Dell Latitude',
    'Lenovo ThinkPad',
    'Computer Accessories',
    'Shahzadpur laptop shop',
    'Routers and CCTV BD'
  ],
  authors: [{ name: 'AuthenTech BD' }],
  openGraph: {
    title: 'AuthenTech BD — Premium Laptops & Accessories',
    description: '100% Tested Pre-Owned Laptops, Routers, Keyboards, and CCTV in Shahzadpur, Sirajganj. Warranty Support & Best Prices.',
    url: 'https://authentechbd.com',
    siteName: 'AuthenTech BD',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'AuthenTech BD Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased font-sans pb-16 md:pb-0">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
