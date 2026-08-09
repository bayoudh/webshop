"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Headphones,
  Heart, Home, Menu, Package, Search, ShieldCheck, ShoppingBag,
  ShoppingCart, UserRound, RotateCcw, Star, Tag, Watch
} from "lucide-react";

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

const categories = [
  ["Clothing", "👕", "120 Items"],
  ["Shoes", "👟", "86 Items"],
  ["Bags", "👜", "54 Items"],
  ["Watches", "⌚", "72 Items"],
  ["Sunglasses", "🕶️", "36 Items"],
  ["Electronics", "🎧", "96 Items"],
  ["Beauty", "🧴", "68 Items"],
  ["Jewelry", "💎", "45 Items"]
];

const products: Product[] = [
  {
    name: "Nike Air Max 270",
    price: 129.99,
    oldPrice: 159.99,
    rating: 5,
    reviews: 128,
    badge: "-20%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Women's Handbag",
    price: 89.99,
    rating: 5,
    reviews: 96,
    badge: "New",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Smart Watch Series 8",
    price: 349.99,
    oldPrice: 399.99,
    rating: 5,
    reviews: 156,
    badge: "-15%",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Ray-Ban Sunglasses",
    price: 159.99,
    rating: 5,
    reviews: 78,
    badge: "New",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Chanel Eau De Parfum",
    price: 129.99,
    oldPrice: 149.99,
    rating: 5,
    reviews: 64,
    badge: "-10%",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Sony WH-1000XM5",
    price: 399.99,
    rating: 5,
    reviews: 112,
    badge: "New",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=700&q=85"
  }
];

function Header({ cart }: { cart: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-7 px-5 lg:px-10">
        <a href="#" className="flex shrink-0 items-center gap-2 text-[27px] font-extrabold tracking-tight">
          <ShoppingBag className="h-8 w-8 text-[#6937d7]" strokeWidth={2.1} />
          WebShop
        </a>

        <button className="hidden h-10 items-center gap-2 rounded-xl bg-[#6937d7] px-5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#5630b8] md:flex">
          <Menu size={18} /> Categories
        </button>

        <div className="relative hidden max-w-[435px] flex-1 lg:block">
          <input
            placeholder="Search for products..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-5 pr-12 text-sm outline-none transition focus:border-[#8b5cf6] focus:ring-4 focus:ring-purple-100"
          />
          <Search className="absolute right-4 top-3 h-5 w-5" />
        </div>

        <nav className="ml-auto hidden items-center gap-7 text-sm font-medium lg:flex">
          <a className="flex items-center gap-2 text-[#6937d7]" href="#"><Home size={19}/> Home</a>
          <a className="flex items-center gap-2 hover:text-[#6937d7]" href="#products"><ShoppingCart size={19}/> Shop</a>
          <a className="flex items-center gap-2 hover:text-[#6937d7]" href="#"><Tag size={19}/> Deals</a>
          <button className="flex items-center gap-1 hover:text-[#6937d7]">Pages <ChevronDown size={16}/></button>
        </nav>

        <div className="flex items-center gap-4">
          <IconBadge icon={<Heart size={21}/>} count={3}/>
          <IconBadge icon={<ShoppingBag size={21}/>} count={cart}/>
          <UserRound className="hidden h-5 w-5 md:block" />
        </div>
      </div>
    </header>
  );
}

function IconBadge({ icon, count }: { icon: React.ReactNode; count: number }) {
  return (
    <button className="relative transition hover:scale-110">
      {icon}
      <span className="absolute -right-2 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#6937d7] px-1 text-[10px] font-bold text-white">
        {count}
      </span>
    </button>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      eyebrow: "SUMMER SALE",
      title: <>Discover The Latest<br/>Trends in Fashion</>,
      copy: <>Explore our new collection of stylish clothing, shoes,<br className="hidden md:block"/> accessories and more. Get up to <b className="text-[#6937d7]">50% off!</b></>,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=88"
    },
    {
      eyebrow: "NEW COLLECTION",
      title: <>Fresh Looks.<br/>Made For You.</>,
      copy: <>Discover premium styles selected for your next<br className="hidden md:block"/> everyday look. <b className="text-[#6937d7]">Shop the collection.</b></>,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=88"
    }
  ];

  const next = () => setSlide((s) => (s + 1) % slides.length);
  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
  const current = slides[slide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#faf4ff] via-[#fff6fb] to-[#f4edff]">
      <div className="mx-auto grid min-h-[360px] max-w-[1500px] grid-cols-1 items-center px-8 md:grid-cols-2 lg:min-h-[360px] lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
            transition={{ duration: .35 }}
            className="relative z-10 py-12"
          >
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-[#6937d7]">{current.eyebrow}</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-1.5px] md:text-5xl lg:text-[48px]">{current.title}</h1>
            <p className="mt-4 text-sm leading-6 text-slate-600">{current.copy}</p>
            <div className="mt-6 flex gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-[#6937d7] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-[#5630b8]">
                Shop Now <ArrowRight size={18}/>
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:border-purple-300">View Deals</button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative hidden h-full items-end justify-center md:flex">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt="Fashion collection"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: .98 }}
              transition={{ duration: .45 }}
              className="h-[360px] w-full object-cover object-center mix-blend-multiply"
            />
          </AnimatePresence>
          <div className="absolute right-0 top-16 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur">
            <p className="text-sm text-slate-500">New Customer?</p>
            <p className="text-xl font-bold text-[#6937d7]">Get 10% Off</p>
            <p className="text-sm text-slate-500">For your first order</p>
            <div className="my-3 h-px bg-slate-200"/>
            <p className="text-xs text-slate-500">Use Code: <b className="text-[#6937d7]">NEW10</b></p>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-8 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:block"><ArrowLeft size={18}/></button>
      <button onClick={next} className="absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:block"><ArrowRight size={18}/></button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={`h-2 w-2 rounded-full ${i === slide ? "bg-[#6937d7]" : "bg-white"}`}/>)}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-[1160px] px-5 pt-5">
      <div className="grid grid-cols-4 gap-5 md:grid-cols-8">
        {categories.map(([name, emoji, count], i) => (
          <motion.a
            href="#products"
            key={name}
            whileHover={{ y: -5 }}
            className="group text-center"
          >
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-sm transition group-hover:shadow-lg ${["bg-purple-50","bg-pink-50","bg-emerald-50","bg-orange-50","bg-amber-50","bg-blue-50","bg-rose-50","bg-green-50"][i]}`}>
              {emoji}
            </div>
            <p className="mt-2 text-sm font-semibold">{name}</p>
            <p className="mt-1 text-xs text-slate-500">{count}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: .2 }}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="relative overflow-hidden rounded-lg bg-slate-50">
        <span className={`absolute left-2 top-2 z-10 rounded-full px-2.5 py-1 text-[11px] font-bold ${product.badge === "New" ? "bg-green-100 text-green-600" : "bg-pink-100 text-pink-600"}`}>
          {product.badge}
        </span>
        <button onClick={() => setLiked(!liked)} className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-1.5 shadow-sm">
          <Heart size={17} className={liked ? "fill-pink-500 text-pink-500" : "text-slate-400"}/>
        </button>
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: .35 }}
          src={product.image}
          alt={product.name}
          className="h-[180px] w-full object-cover"
        />
      </div>

      <div className="pt-3">
        <h3 className="truncate text-sm font-semibold">{product.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          {product.oldPrice && <del className="text-xs text-slate-400">${product.oldPrice.toFixed(2)}</del>}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs">
            <span className="flex text-amber-400">{Array.from({length: product.rating}).map((_, i) => <Star key={i} size={13} fill="currentColor"/>)}</span>
            <span className="text-slate-400">({product.reviews})</span>
          </div>
          <button onClick={onAdd} className="rounded-lg border border-purple-200 p-2 text-[#6937d7] transition hover:bg-[#6937d7] hover:text-white">
            <ShoppingCart size={17}/>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Benefits() {
  const items = [
    [Package, "Free Shipping", "On orders over $50"],
    [ShieldCheck, "Secure Payment", "100% secure payment"],
    [Headphones, "24/7 Support", "Dedicated support"],
    [RotateCcw, "Easy Returns", "30 day return policy"]
  ];
  return (
    <section className="mx-auto mt-5 max-w-[1160px] px-5 pb-8">
      <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-5 md:grid-cols-4">
        {items.map(([Icon, title, text], i) => (
          <div key={String(title)} className={`flex items-center gap-4 ${i !== 0 ? "md:border-l md:border-slate-200 md:pl-7" : ""}`}>
            <Icon className="h-8 w-8 shrink-0 text-[#6937d7]" strokeWidth={1.7}/>
            <div>
              <p className="text-sm font-bold">{String(title)}</p>
              <p className="mt-1 text-xs text-slate-500">{String(text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function webshopHome() {
  const [cart, setCart] = useState(2);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main>
      <Header cart={cart}/>
      <div className="lg:hidden px-5 pt-4">
        <div className="relative">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." className="h-11 w-full rounded-xl border border-slate-200 pl-4 pr-10 outline-none"/>
          <Search className="absolute right-3 top-3 h-5 w-5"/>
        </div>
      </div>
      <Hero/>
      <Categories/>

      <section id="products" className="mx-auto max-w-[1160px] px-5 pt-7">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight">Featured Products</h2>
          <a href="#products" className="flex items-center gap-1 text-sm font-semibold text-[#6937d7]">View All <ArrowUpRight size={17}/></a>
        </div>

        <div className="mb-5 lg:hidden">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Filter products..." className="w-full rounded-lg border p-3 text-sm outline-none focus:border-purple-400"/>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {filtered.map(product => (
            <ProductCard key={product.name} product={product} onAdd={() => setCart(c => c + 1)}/>
          ))}
        </div>
      </section>

      <Benefits/>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        © 2026 webshop. All rights reserved.
      </footer>
    </main>
  );
}