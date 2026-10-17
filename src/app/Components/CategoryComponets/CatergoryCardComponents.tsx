"use client";
import { Product } from "@/app/Types/SingleProduct";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
type SortOption = "default" | "price-asc" | "price-desc";

const CatergoryCardComponents = ({
  categoryProducts,
}: {
  categoryProducts: Product[];
}) => {
    const [allProducts, setAllProducts] = useState(categoryProducts)

  const handleSortChange = (value: SortOption) => {
    console.log(value);
    const DataFecth = (value: string) => {
      if (value === "default") {
        setAllProducts(categoryProducts);
      }
      if (value === "price-asc") {
        const filteredProducts = [...categoryProducts].sort(
          (a, b) => a.today - b.today,
        );

        setAllProducts(filteredProducts);
      }
      if (value === "price-desc") {
        const filteredProducts = [...categoryProducts].sort(
          (a, b) => b.today - a.today,
        );

        setAllProducts(filteredProducts);
      }
    };
    DataFecth(value);
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-3">
        <label
          htmlFor="product-sort"
          className="text-sm font-medium text-base-content"
        >
          সাজান
        </label>

        <div className="relative">
          <select
            id="product-sort"
            defaultValue={"default"}
            onChange={(e) => handleSortChange(e.target.value as SortOption)}
            className="appearance-none cursor-pointer rounded-lg border border-base-300 bg-base-100 py-2 pl-3 pr-10 text-sm font-medium text-base-content outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[16px] font-normal">
          মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {allProducts.map((item: Product) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white/80 p-3 sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0F5F0] text-xl">
                    {item.image}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.nameBn}
                    </h3>
                    <p className="text-xs text-gray-500">প্রতি কেজি</p>
                  </div>
                </div>

                {/* Today's price and price change */}
                <div className="mt-4 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-base font-bold text-gray-900">
                      {item.today}{" "}
                      <span className="text-xs font-normal">টাকা</span>
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full px-2 py-1 text-[10px] font-medium text-green-500">
                    ▼ {Math.abs(item.change.pct)}%
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatergoryCardComponents;
