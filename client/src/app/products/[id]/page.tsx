import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import ProductDetailView from '@/components/products/ProductDetailView';

export const instant = false;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.slug === id || p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.popular)
  ).slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
