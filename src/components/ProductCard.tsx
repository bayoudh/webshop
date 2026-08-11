"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "../../lib/types/product";
import { useCart } from "../context/CarteContext";
export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();
  const d = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Link href={`/products/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.4 }}
          />
        </Link>
        {d > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600">
            -{d}%
          </span>
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow ${liked ? "text-pink-500" : "text-slate-500"}`}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="p-4">
        <Link
          href={`/products/${product.id}`}
          className="font-bold hover:text-[#6d35d8]"
        >
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <b className="text-lg">${product.price.toFixed(2)}</b>
          {product.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <b>{product.rating}</b>
          <span className="text-slate-400">({product.reviews})</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-200 py-2.5 text-sm font-bold text-[#6d35d8] hover:bg-[#6d35d8] hover:text-white"
        >
          <ShoppingCart size={17} />
          Add to cart
        </button>
      </div>
    </motion.article>
  );
}
