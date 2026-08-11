import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, ShieldCheck, Star, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { getProduct, products } from "../../../../lib/products";
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  return (
    <>
      <Header />
      <main className="container-webshop py-8">
        <Link
          href="/shop"
          className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"
        >
          <ArrowLeft size={17} />
          Back to shop
        </Link>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-slate-50">
            <img
              src={p.image}
              alt={p.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-[#6d35d8]">
              {p.category}
            </span>
            <h1 className="mt-4 text-4xl font-black">{p.name}</h1>
            <div className="mt-4 flex gap-2">
              <Star className="fill-amber-400 text-amber-400" size={18} />
              <b>{p.rating}</b>
              <span className="text-sm text-slate-500">
                ({p.reviews} reviews)
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <b className="text-3xl">${p.price.toFixed(2)}</b>
              {p.oldPrice && (
                <span className="pt-2 text-slate-400 line-through">
                  ${p.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="mt-5 leading-7 text-slate-600">{p.description}</p>
            {p.sizes && (
              <div className="mt-7">
                <b className="text-sm">Size</b>
                <div className="mt-3 flex gap-2">
                  {p.sizes.map((s) => (
                    <button
                      key={s}
                      className="rounded-lg border px-4 py-2 text-sm font-bold hover:border-[#6d35d8]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <AddToCart product={p} />
            <div className="mt-7 grid gap-3 border-t pt-6 sm:grid-cols-3">
              <span className="flex gap-2 text-xs font-bold">
                <Truck size={18} className="text-[#6d35d8]" />
                Free shipping
              </span>
              <span className="flex gap-2 text-xs font-bold">
                <ShieldCheck size={18} className="text-[#6d35d8]" />
                Secure payment
              </span>
              <span className="flex gap-2 text-xs font-bold">
                <Heart size={18} className="text-[#6d35d8]" />
                Easy returns
              </span>
            </div>
          </div>
        </div>
        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-black">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products
              .filter((x) => x.id !== p.id && x.category === p.category)
              .slice(0, 4)
              .map((x) => (
                <ProductCard key={x.id} product={x} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
