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
    <div className="max-w-7xl mx-auto text-center justify-center md:w-auto md:shrink-0 flex gap-8">
      {data.map((item) => {
        return ( 
          <Link href={`/${item.slug}`} key={item.id}>
            <span>{item.nameBn}</span>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Catagories;
