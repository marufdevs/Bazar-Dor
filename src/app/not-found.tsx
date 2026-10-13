"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Home,
  ArrowLeft,
  ShoppingBasket,
  CircleHelp,
} from "lucide-react";

export default function NotFoundPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim()) {
      window.location.href = `/?search=${encodeURIComponent(search.trim())}`;
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff7f6] px-4 py-12 text-gray-900">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl" />

      <section className="relative z-10 w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 animate-bounce items-center justify-center rounded-3xl bg-red-100 text-red-600 shadow-lg shadow-red-200/50">
          <ShoppingBasket size={40} strokeWidth={1.7} />
        </div>

        {/* 404 */}
        <div className="relative mb-3">
          <h1 className="select-none text-8xl font-black tracking-tighter text-red-600 sm:text-9xl">
            404
          </h1>
          <span className="absolute -right-1 top-0 rotate-12 text-3xl sm:right-20">
            ✦
          </span>
          <span className="absolute bottom-2 left-3 -rotate-12 text-2xl sm:left-24">
            ✳
          </span>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Oops! Page not found
        </p>

        <h2 className="mb-4 text-2xl font-extrabold sm:text-4xl">
          এই পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          পৃষ্ঠাটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে অথবা আপনি ভুল লিংকে
          এসেছেন। চলুন, আবার সঠিক জায়গায় ফিরে যাই।
        </p>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mb-6 flex max-w-lg items-center gap-2 rounded-2xl border border-red-100 bg-white p-2 shadow-lg shadow-red-100/60 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-100"
        >
          <Search className="ml-2 shrink-0 text-red-500" size={21} />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="পণ্য বা ক্যাটাগরি খুঁজুন..."
            aria-label="পণ্য বা ক্যাটাগরি খুঁজুন"
            className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
          >
            খুঁজুন
          </button>
        </form>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
          >
            <Home size={19} />
            হোমপেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3.5 font-semibold text-red-700 transition hover:-translate-y-1 hover:bg-red-50"
          >
            <ArrowLeft size={19} />
            আগের পৃষ্ঠায় যান
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500">
          <CircleHelp size={17} className="text-red-500" />
          <span>
            সাহায্য দরকার?{" "}
            <Link
              href="/"
              className="font-semibold text-red-600 underline-offset-4 hover:underline"
            >
              Bazar Dor
            </Link>
            -এ ফিরে যান।
          </span>
        </div>
      </section>
    </main>
  );
}
