import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t bg-[#faf9fc]">
      <div className="container-webshop grid gap-8 py-12 md:grid-cols-4">
        <div>
          <b className="text-2xl">webshop</b>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Modern shopping for fashion, accessories, beauty and technology.
          </p>
        </div>
        <div>
          <b>Shop</b>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <Link href="/shop">All Products</Link>
            <Link href="/shop?category=Clothing">Clothing</Link>
            <Link href="/shop?category=Shoes">Shoes</Link>
          </div>
        </div>
        <div>
          <b>Help</b>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <span>Shipping</span>
            <span>Returns</span>
            <span>Payment</span>
          </div>
        </div>
        <div>
          <b>Newsletter</b>
          <p className="mt-3 text-sm text-slate-500">
            Get offers and new collection updates.
          </p>
          <div className="mt-3 flex">
            <input
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-l-xl border px-3 py-2 text-sm"
            />
            <button className="rounded-r-xl bg-[#6d35d8] px-4 text-sm font-bold text-white">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} webshop. All rights reserved.
      </div>
    </footer>
  );
}
