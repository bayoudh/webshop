import type { Product } from "./types/product";
export const products: Product[] = [
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Lightweight everyday sneakers with a comfortable cushioned sole and a clean modern silhouette.",
    colors: ["#111827", "#f5f5f5", "#6d35d8"],
    sizes: ["40", "41", "42", "43", "44"],
    featured: true,
  },
  {
    id: "womens-handbag",
    name: "Women's Handbag",
    category: "Bags",
    price: 89.99,
    rating: 4.7,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    description:
      "Elegant structured handbag with a practical interior and refined everyday styling.",
    colors: ["#f4a6b8", "#111827"],
    badge: "New",
    featured: true,
  },
  {
    id: "smart-watch-series-8",
    name: "Smart Watch Series 8",
    category: "Watches",
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85",
    description:
      "Premium smartwatch with a bright display, fitness tracking and all-day battery life.",
    colors: ["#111827", "#d1d5db"],
    featured: true,
  },
  {
    id: "classic-sunglasses",
    name: "Classic Sunglasses",
    category: "Sunglasses",
    price: 159.99,
    rating: 4.6,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    description:
      "Timeless sunglasses with a polished frame and versatile lenses for everyday wear.",
    colors: ["#111827"],
    badge: "New",
    featured: true,
  },
  {
    id: "rose-parfum",
    name: "Rose Eau De Parfum",
    category: "Beauty",
    price: 129.99,
    oldPrice: 149.99,
    rating: 4.7,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    description:
      "A fresh floral fragrance with soft rose, warm musk and an elegant finish.",
    colors: ["#f5b6c8"],
    featured: true,
  },
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 399.99,
    rating: 4.8,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description:
      "Comfortable over-ear headphones with immersive sound and adaptive noise cancellation.",
    colors: ["#e5e7eb", "#111827"],
    badge: "New",
    featured: true,
  },
  {
    id: "lavender-dress",
    name: "Lavender Midi Dress",
    category: "Clothing",
    price: 74.99,
    oldPrice: 99.99,
    rating: 4.6,
    reviews: 51,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    description:
      "Soft lavender midi dress designed for a polished look from daytime events to dinner.",
    colors: ["#c4a7e7", "#111827"],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "gold-necklace",
    name: "Minimal Gold Necklace",
    category: "Jewelry",
    price: 59.99,
    rating: 4.8,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
    description:
      "Delicate gold-tone necklace that layers beautifully with everyday outfits.",
    colors: ["#d4af37"],
    badge: "New",
  },
];
export const categories = [
  "Clothing",
  "Shoes",
  "Bags",
  "Watches",
  "Sunglasses",
  "Electronics",
  "Beauty",
  "Jewelry",
];
export const getProduct = (id: string) => products.find((p) => p.id === id);
