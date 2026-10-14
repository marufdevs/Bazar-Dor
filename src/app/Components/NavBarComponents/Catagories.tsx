
"use client";
import { NavCataGories } from "@/app/Types/NavCatergories";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Catagories = () => {
  const [data, setData] = useState<NavCataGories[]>([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const handleCategories = async () => {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/categories",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setErr(err instanceof Error ? err.message : "Something went wrong");
      }
    };
    handleCategories();
  }, []);
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-2 px-3 py-3 sm:gap-3 sm:px-5 md:gap-4 lg:gap-5">
      {data.map((item) => {
        return (
          <Link
            href={`/products/category/${item.slug}`}
            key={item.id}
            className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#DFE8DF] bg-white px-2.5 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-200 hover:border-green-500 hover:bg-[#F0F5F0] hover:text-green-700 active:scale-95 sm:px-3 sm:py-1 sm:text-base"
          >
            <span>{item.nameBn}</span>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Catagories;
