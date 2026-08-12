"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "../../lib/products";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
export default function ShopClient() {
  const p = useSearchParams();
  const [cat, setCat] = useState(p.get("category") || "All");
  const [q, setQ] = useState(p.get("search") || "");
  const [sort, setSort] = useState(p.get("sort") || "featured");
  const list = useMemo(() => {
    const a = products.filter(
      (x) =>
        (cat === "All" || x.category === cat) &&
        (!q ||
          `${x.name} ${x.category}`.toLowerCase().includes(q.toLowerCase())),
    );
    return [...a].sort((x, y) =>
      sort === "price-low"
        ? x.price - y.price
        : sort === "price-high"
          ? y.price - x.price
          : sort === "rating"
            ? y.rating - x.rating
            : sort === "deal"
              ? (y.oldPrice ? y.oldPrice - y.price : 0) -
                (x.oldPrice ? x.oldPrice - x.price : 0)
              : Number(y.featured) - Number(x.featured),
    );
  }, [cat, q, sort]);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfbfe]">
        <div className="container-webshop py-10">
          <div className="rounded-3xl bg-linear-to-r from-purple-50 to-pink-50 p-8">
            <p className="text-xs font-black tracking-widest text-[#6d35d8]">
              SHOP COLLECTION
            </p>
            <h1 className="mt-2 text-4xl font-black">
              Find your next favorite
            </h1>
            <p className="mt-2 text-slate-500">
              Browse fashion, accessories, beauty and electronics.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="hide-scrollbar flex gap-2 overflow-x-auto">
              {["All", ...categories].map((x) => (
                <button
                  key={x}
                  onClick={() => setCat(x)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${cat === x ? "bg-[#6d35d8] text-white" : "bg-white ring-1 ring-slate-200"}`}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-xl border px-4 py-2.5 text-sm sm:w-56"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border bg-white px-3 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="deal">Best deals</option>
                <option value="price-low">Price: low</option>
                <option value="price-high">Price: high</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>
          <p className="my-6 text-sm text-slate-500">
            {list.length} products found
          </p>
          {list.length ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {list.map((x) => (
                <ProductCard key={x.id} product={x} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-16 text-center">
              <h2 className="text-xl font-black">No products found</h2>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
