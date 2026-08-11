import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "../../lib/products";
import ProductCard from "./ProductCard";
export default function FeaturedProducts() {
  return (
    <section className="container-webshop py-8">
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-black md:text-3xl">Featured Products</h2>
        <Link
          href="/shop"
          className="flex items-center gap-1 text-sm font-bold text-[#6d35d8]"
        >
          View All <ArrowRight size={17} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products
          .filter((p) => p.featured)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </section>
  );
}
