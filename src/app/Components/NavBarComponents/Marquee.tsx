"use client";
import { Product } from "@/app/Types/NavMarqueeItems";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text"
// import "MarqueeText/styles.css"

const Marquee = () => {
  const [data, setData] = useState<Product[]>([]);
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

      <MarqueeText direction="right" duration={20} className="bg-[#f6f9f6] p-2">
        <div className="w-full text-center md:w-auto md:shrink-0 flex gap-8">
          {data.map((item) => {
            // console.log(item);
            return (
              <Link href={`/products/${item.id}`} key={item.id} className="flex">
                <span>
                  {item.categoryIcon} {item.nameBn} {item.today}/{item.unit}{" "}

                  {item.change.dir === "up" ? (
                    <span className="text-red-500">
                      ▲ {item.change.pct}%
                    </span>
                  ) : item.change.dir === "down" ? (
                    <span className="text-green-500">
                      ▼ {item.change.pct}%
                    </span>
                  ) : (
                    <span className="text-yellow-500">
                      - {item.change.pct}%
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </MarqueeText >

  );
};

export default Marquee;
