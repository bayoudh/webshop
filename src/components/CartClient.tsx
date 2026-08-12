"use client";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CarteContext";
export default function CartClient() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();
  const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 7.99;
  const total = subtotal + shipping;
  return (
    <>
      <Header />
      <main className="container-webshop min-h-[65vh] py-10">
        <p className="text-xs font-black tracking-widest text-[#6d35d8]">
          YOUR BAG
        </p>
        <h1 className="mt-2 text-4xl font-black">Shopping Cart</h1>
        {!items.length ? (
          <div className="mt-12 rounded-3xl border border-dashed p-16 text-center">
            <ShoppingBag className="mx-auto text-slate-300" size={55} />
            <h2 className="mt-5 text-2xl font-black">Your cart is empty</h2>
            <p className="mt-2 text-slate-500">
              Add something you love and it will appear here.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-xl bg-[#6d35d8] px-6 py-3 font-bold text-white"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-4 rounded-2xl border p-4">
                  <Link
                    href={`/products/${i.id}`}
                    className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-50"
                  >
                    <img
                      src={i.image}
                      alt={i.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between">
                      <Link href={`/products/${i.id}`} className="font-bold">
                        {i.name}
                      </Link>
                      <button onClick={() => removeFromCart(i.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{i.category}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border">
                        <button
                          onClick={() => updateQuantity(i.id, i.quantity - 1)}
                          className="p-2"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">
                          {i.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(i.id, i.quantity + 1)}
                          className="p-2"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <b>${(i.price * i.quantity).toFixed(2)}</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-black">Order Summary</h2>
              <div className="mt-6 grid gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <b>${subtotal.toFixed(2)}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping</span>
                  <b>{shipping ? `$${shipping.toFixed(2)}` : "Free"}</b>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg">
                    <b>Total</b>
                    <b>${total.toFixed(2)}</b>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-xl bg-[#6d35d8] py-3.5 text-center font-bold text-white hover:bg-[#5522b9]"
              >
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
