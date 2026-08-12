"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CarteContext";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export default function CheckoutClient() {
  const { items, subtotal, clearCart } = useCart();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Tunisia",
  });

  const [payment, setPayment] = useState("card");
  const [shipping, setShipping] = useState("standard");
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const shippingPrice =
    shipping === "express" ? 14.99 : subtotal >= 50 ? 0 : 7.99;

  const total = subtotal + shippingPrice;

  const updateField = (field: keyof FormData, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!items.length) return;

    const orderId = `SHOP-${Date.now()}`;

    const order = {
      orderId,
      customer: form,
      payment,
      shipping,
      items,
      subtotal,
      shippingPrice,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("webshop-last-order", JSON.stringify(order));

    setOrderNumber(orderId);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <>
        <Header />

        <main className="container-webshop flex min-h-[65vh] items-center justify-center py-16">
          <div className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <CheckCircle2
              size={70}
              className="mx-auto text-green-500"
            />

            <h1 className="mt-6 text-3xl font-black">
              Order Confirmed!
            </h1>

            <p className="mt-3 text-slate-500">
              Thank you for your purchase. Your order has been received.
            </p>

            <div className="mt-6 rounded-2xl bg-purple-50 p-5">
              <p className="text-sm text-slate-500">
                Order number
              </p>

              <p className="mt-1 text-xl font-black text-[#6d35d8]">
                {orderNumber}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/"
                className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="flex-1 rounded-xl bg-[#6d35d8] px-5 py-3 text-sm font-bold text-white"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (!items.length) {
    return (
      <>
        <Header />

        <main className="container-webshop flex min-h-[65vh] items-center justify-center py-16">
          <div className="text-center">
            <ShoppingBag
              size={60}
              className="mx-auto text-slate-300"
            />

            <h1 className="mt-5 text-3xl font-black">
              Your cart is empty
            </h1>

            <p className="mt-2 text-slate-500">
              Add products before going to checkout.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block rounded-xl bg-[#6d35d8] px-6 py-3 font-bold text-white"
            >
              Start Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#fcfbfe] py-10">
        <div className="container-webshop">
          <Link
            href="/cart"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#6d35d8]"
          >
            <ArrowLeft size={17} />
            Back to cart
          </Link>

          <div className="mb-8">
            <p className="text-xs font-black tracking-widest text-[#6d35d8]">
              webshop CHECKOUT
            </p>

            <h1 className="mt-2 text-4xl font-black">
              Checkout
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-8 lg:grid-cols-[1fr_380px]"
          >
            <div className="space-y-6">
              {/* Customer information */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-50 text-[#6d35d8]">
                    <ShoppingBag size={20} />
                  </div>

                  <div>
                    <h2 className="font-black">
                      Contact Information
                    </h2>

                    <p className="text-xs text-slate-500">
                      We'll use this information for your order.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="First name"
                    required
                    value={form.firstName}
                    onChange={(value) =>
                      updateField("firstName", value)
                    }
                  />

                  <Input
                    label="Last name"
                    required
                    value={form.lastName}
                    onChange={(value) =>
                      updateField("lastName", value)
                    }
                  />

                  <Input
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                  />

                  <Input
                    label="Phone"
                    required
                    value={form.phone}
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                  />
                </div>
              </section>

              {/* Address */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-50 text-[#6d35d8]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h2 className="font-black">
                      Shipping Address
                    </h2>

                    <p className="text-xs text-slate-500">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Input
                      label="Address"
                      required
                      value={form.address}
                      onChange={(value) =>
                        updateField("address", value)
                      }
                    />
                  </div>

                  <Input
                    label="City"
                    required
                    value={form.city}
                    onChange={(value) =>
                      updateField("city", value)
                    }
                  />

                  <Input
                    label="Postal code"
                    required
                    value={form.postalCode}
                    onChange={(value) =>
                      updateField("postalCode", value)
                    }
                  />

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold">
                      Country
                    </label>

                    <select
                      value={form.country}
                      onChange={(e) =>
                        updateField("country", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#6d35d8]"
                    >
                      <option>Tunisia</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>Portugal</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <Truck className="text-[#6d35d8]" />

                  <h2 className="font-black">
                    Shipping Method
                  </h2>
                </div>

                <div className="grid gap-3">
                  <ShippingOption
                    value="standard"
                    selected={shipping}
                    onSelect={setShipping}
                    title="Standard Shipping"
                    description="3–5 business days"
                    price={
                      subtotal >= 50
                        ? "FREE"
                        : "$7.99"
                    }
                  />

                  <ShippingOption
                    value="express"
                    selected={shipping}
                    onSelect={setShipping}
                    title="Express Shipping"
                    description="1–2 business days"
                    price="$14.99"
                  />
                </div>
              </section>

              {/* Payment */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <CreditCard className="text-[#6d35d8]" />

                  <h2 className="font-black">
                    Payment Method
                  </h2>
                </div>

                <div className="grid gap-3">
                  <PaymentOption
                    value="card"
                    selected={payment}
                    onSelect={setPayment}
                    title="Credit / Debit Card"
                  />

                  <PaymentOption
                    value="paypal"
                    selected={payment}
                    onSelect={setPayment}
                    title="PayPal"
                  />

                  <PaymentOption
                    value="cash"
                    selected={payment}
                    onSelect={setPayment}
                    title="Cash on Delivery"
                  />
                </div>

                {payment === "card" && (
                  <div className="mt-5 grid gap-4">
                    <Input
                      label="Card number"
                      placeholder="4242 4242 4242 4242"
                      required
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiration"
                        placeholder="MM / YY"
                        required
                      />

                      <Input
                        label="CVV"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Summary */}
            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-black">
                Order Summary
              </h2>

              <div className="mt-5 max-h-72 space-y-4 overflow-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />

                      <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#6d35d8] px-1 text-[10px] font-bold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <p className="text-sm font-bold">
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Subtotal
                  </span>

                  <b>${subtotal.toFixed(2)}</b>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Shipping
                  </span>

                  <b>
                    {shippingPrice === 0
                      ? "FREE"
                      : `$${shippingPrice.toFixed(2)}`}
                  </b>
                </div>

                <div className="flex justify-between border-t border-slate-100 pt-4 text-xl">
                  <span className="font-black">
                    Total
                  </span>

                  <b>${total.toFixed(2)}</b>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-[#6d35d8] py-4 font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-[#5522b9]"
              >
                Place Order · ${total.toFixed(2)}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock size={14} />
                Secure frontend checkout
              </div>
            </aside>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange?.(e.target.value)
        }
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#6d35d8] focus:ring-4 focus:ring-purple-50"
      />
    </div>
  );
}

function ShippingOption({
  value,
  selected,
  onSelect,
  title,
  description,
  price,
}: {
  value: string;
  selected: string;
  onSelect: (value: string) => void;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
        selected === value
          ? "border-[#6d35d8] bg-purple-50"
          : "border-slate-200 hover:border-purple-300"
      }`}
    >
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

      <b className="text-sm text-[#6d35d8]">
        {price}
      </b>
    </button>
  );
}

function PaymentOption({
  value,
  selected,
  onSelect,
  title,
}: {
  value: string;
  selected: string;
  onSelect: (value: string) => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
        selected === value
          ? "border-[#6d35d8] bg-purple-50"
          : "border-slate-200 hover:border-purple-300"
      }`}
    >
      <span
        className={`grid h-5 w-5 place-items-center rounded-full border-2 ${
          selected === value
            ? "border-[#6d35d8]"
            : "border-slate-300"
        }`}
      >
        {selected === value && (
          <span className="h-2.5 w-2.5 rounded-full bg-[#6d35d8]" />
        )}
      </span>

      <span className="text-sm font-bold">
        {title}
      </span>
    </button>
  );
}