export type ProductCategory = 
  | 'laptops'
  | 'routers'
  | 'keyboards'
  | 'mice'
  | 'storage'
  | 'speakers'
  | 'cctv';

export type ProductCondition = 'Pre-Owned Grade A+' | 'Pre-Owned Grade A' | 'Brand New';

export interface TestingChecklist {
  batteryHealth: string;
  displayStatus: string;
  keyboardTrackpad: string;
  portsConnectivity: string;
  thermalPerformance: string;
  testedBy: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  condition: ProductCondition;
  inStock: boolean;
  stockCount?: number;
  soldCount?: number;
  shortDescription: string;
  description: string;
  image: string;
  galleryImages: string[];
  keySpecs: string[];
  fullSpecs: ProductSpec[];
  warranty: string;
  rating?: number;
  reviewCount?: number;
  testingChecklist?: TestingChecklist;
  featured?: boolean;
  popular?: boolean;
  isDeal?: boolean;
  discountPercent?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  excerpt: string;
}
