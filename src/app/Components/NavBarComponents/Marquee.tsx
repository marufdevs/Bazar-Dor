"use client";
import { NavCataGories } from "@/app/Types/NavCatergories";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [data, setData] = useState<NavCataGories[]>([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const handleMarquee = async () => {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/products",
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
    handleMarquee();
  }, []);
  return (
    <div className="w-full text-center md:w-auto md:shrink-0 flex gap-8">
      {data.map((item) => {
        console.log(item);
        return (
          <Link href={`/${item.id}`} key={item.id}>
            <span>{item.nameBn}</span>
            <span>{}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Marquee;
