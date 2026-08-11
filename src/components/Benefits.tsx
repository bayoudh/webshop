import { Headphones, RefreshCw, ShieldCheck, Truck } from "lucide-react";
const b = [
  [Truck, "Free Shipping", "On orders over $50"],
  [ShieldCheck, "Secure Payment", "100% secure payment"],
  [Headphones, "24/7 Support", "Dedicated support"],
  [RefreshCw, "Easy Returns", "30 day return policy"],
] as const;
export default function Benefits() {
  return (
    <section className="container-webshop py-10">
      <div className="grid rounded-2xl bg-slate-50 md:grid-cols-4">
        {b.map(([I, t, s]) => (
          <div
            key={t}
            className="flex items-center gap-4 border-b p-5 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <I className="text-[#6d35d8]" size={28} />
            <div>
              <b>{t}</b>
              <p className="mt-1 text-xs text-slate-500">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
