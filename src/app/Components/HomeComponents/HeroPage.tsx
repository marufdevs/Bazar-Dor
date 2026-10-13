"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroPage = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-6 md:flex-row md:gap-8 md:p-8 lg:px-10">
      <div className="flex w-full flex-col items-start md:flex-1">
        <span className="mb-3 inline-flex rounded-full bg-[#E0F2E8] px-3 py-1 text-xs font-medium text-green-700 sm:text-sm">
          {date}
        </span>

        <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#202820] sm:text-3xl lg:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#687168] sm:text-base">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:scale-[0.98] sm:text-base"
        >
          সব পণ্য দেখুন
        </button>
      </div>

      <div className="flex w-full shrink-0 items-center justify-center md:w-[240px] lg:w-[280px]">
        <Image
          src="/bazar-hero.png"
          width={280}
          height={280}
          alt="বাজারের তাজা সবজি ও ফলের ঝুড়ি"
          priority
          className="h-auto w-40 object-contain sm:w-48 md:w-full"
        />
      </div>
    </div>
  );
};

export default HeroPage;
