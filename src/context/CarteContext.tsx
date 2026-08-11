"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../../lib/types/product";
type Item = Product & { quantity: number };
type Ctx = {
  items: Item[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, q: number) => void;
  cartCount: number;
  subtotal: number;
  clearCart: () => void;
};
const CartContext = createContext<Ctx | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    try {
      const x = localStorage.getItem("shopio-cart");
      if (x) setItems(JSON.parse(x));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("shopio-cart", JSON.stringify(items));
  }, [items]);
  const value = useMemo<Ctx>(
    () => ({
      items,
      addToCart: (p) =>
        setItems((c) => {
          const f = c.find((x) => x.id === p.id);
          return f
            ? c.map((x) =>
                x.id === p.id ? { ...x, quantity: x.quantity + 1 } : x,
              )
            : [...c, { ...p, quantity: 1 }];
        }),
      removeFromCart: (id) => setItems((c) => c.filter((x) => x.id !== id)),
      updateQuantity: (id, q) =>
        setItems((c) =>
          q < 1
            ? c.filter((x) => x.id !== id)
            : c.map((x) => (x.id === id ? { ...x, quantity: q } : x)),
        ),
      cartCount: items.reduce((s, x) => s + x.quantity, 0),
      subtotal: items.reduce((s, x) => s + x.price * x.quantity, 0),
      clearCart: () => setItems([]),
    }),
    [items],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw Error("useCart must be used inside CartProvider");
  return c;
}
