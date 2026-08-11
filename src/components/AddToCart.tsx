"use client";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CarteContext";
import type { Product } from "../../lib/types/product";
export default function AddToCart({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
      className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6d35d8] py-4 font-bold text-white hover:bg-[#5522b9]"
    >
      {added ? (
        <>
          <Check />
          Added to cart
        </>
      ) : (
        <>
          <ShoppingCart />
          Add to cart
        </>
      )}
    </button>
  );
}
