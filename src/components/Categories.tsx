import Link from "next/link";
import { categories } from "../../lib/products";
const imgs = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1541643600914-78b084683601",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
];
export default function Categories() {
  return (
    <section className="container-webshop py-10">
      <div className="hide-scrollbar flex gap-6 overflow-x-auto">
        {categories.map((c, i) => (
          <Link
            key={c}
            href={`/shop?category=${encodeURIComponent(c)}`}
            className="group min-w-[100px] text-center"
          >
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-slate-100 shadow transition group-hover:-translate-y-1">
              <img
                src={`${imgs[i]}?auto=format&fit=crop&w=300&q=80`}
                alt={c}
                className="h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-sm font-bold">{c}</p>
            <p className="text-xs text-slate-500">
              {[120, 86, 54, 72, 36, 96, 68, 45][i]} Items
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
