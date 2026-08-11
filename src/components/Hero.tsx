"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
const slides = [
  {
    title: "Discover The Latest Trends in Fashion",
    text: "Explore our new collection of stylish clothing, shoes, accessories and more. Get up to 50% off!",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Style That Moves With You",
    text: "Fresh seasonal essentials designed for everyday comfort and effortless confidence.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Upgrade Your Everyday Look",
    text: "Save on selected fashion, accessories and tech. Limited-time offers available now.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
  },
];
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section className="overflow-hidden rounded-b-3xl bg-[#faf6ff]">
      <div className="container-webshop relative min-h-[440px]">
        <button
          onClick={() => setI((i - 1 + slides.length) % slides.length)}
          className="absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setI((i + 1) % slides.length)}
          className="absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg"
        >
          <ChevronRight />
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
            className="grid min-h-[440px] items-center gap-8 px-12 py-12 md:grid-cols-2 md:px-20"
          >
            <div>
              <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#6d35d8]">
                SUMMER SALE
              </span>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
                {s.title}
              </h1>
              <p className="mt-5 max-w-lg leading-7 text-slate-600">{s.text}</p>
              <div className="mt-7 flex gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#6d35d8] px-6 py-3.5 text-sm font-bold text-white"
                >
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link
                  href="/shop?sort=deal"
                  className="rounded-xl border bg-white px-6 py-3.5 text-sm font-bold"
                >
                  View Deals
                </Link>
              </div>
            </div>
            <div className="relative hidden h-[390px] overflow-hidden rounded-[40%_60%_50%_50%] md:block">
              <motion.img
                src={s.image}
                alt="Fashion"
                className="h-full w-full object-cover"
                animate={{ scale: [1.05, 1] }}
                transition={{ duration: 5 }}
              />
              <div className="absolute right-6 top-8 rounded-2xl bg-white/90 p-5 shadow-xl">
                <p className="text-xs text-slate-500">New Customer?</p>
                <p className="text-xl font-black text-[#6d35d8]">Get 10% Off</p>
                <p className="text-sm text-slate-500">
                  Code: <b>NEW10</b>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, x) => (
            <button
              key={x}
              onClick={() => setI(x)}
              className={`h-2.5 rounded-full ${x === i ? "w-7 bg-[#6d35d8]" : "w-2.5 bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
