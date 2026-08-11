"use client";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CarteContext";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { cartCount } = useCart();
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim())
      location.href = `/shop?search=${encodeURIComponent(q.trim())}`;
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-webshop flex h-[74px] items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6d35d8] text-white">
            <ShoppingBag size={21} />
          </span>
          webshop
        </Link>
        <Link
          href="/shop"
          className="hidden rounded-xl bg-[#6d35d8] px-5 py-3 text-sm font-bold text-white md:block"
        >
          Categories
        </Link>
        <form
          onSubmit={go}
          className="relative hidden max-w-md flex-1 md:block"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for products..."
            className="h-11 w-full rounded-xl border border-slate-200 pl-4 pr-11 outline-none focus:border-[#6d35d8]"
          />
          <button className="absolute right-1 top-1 grid h-9 w-9 place-items-center">
            <Search size={19} />
          </button>
        </form>
        <nav className="ml-auto hidden items-center gap-7 text-sm font-bold md:flex">
          <Link href="/" className="text-[#6d35d8]">
            Home
          </Link>
          <Link href="/shop">Shop</Link>
          <Link href="/shop?sort=deal">Deals</Link>
        </nav>
        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-slate-100 sm:grid">
            <Heart size={20} />
          </button>
          <Link
            href="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-slate-100"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#6d35d8] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-slate-100 sm:grid">
            <UserRound size={20} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 p-4 md:hidden">
          <form onSubmit={go} className="mb-4">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="h-11 w-full rounded-xl border px-4"
            />
          </form>
          <div className="grid gap-3 text-sm font-bold">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop?sort=deal">Deals</Link>
            <Link href="/cart">Cart ({cartCount})</Link>
          </div>
        </div>
      )}
    </header>
  );
}
