
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropDwon from "./DropDwon";
import Marquee from "./Marquee";
import Catagories from "./Catagories";

const NavBar = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return (
    <div className="bg-base-100 shadow-sm flex flex-col justify-center items-center gap-5">
      <div className="navbar max-w-7xl mx-auto flex flex-col justify-between items-center gap-3 px-2 sm:px-5 md:gap-4">
        <div className="flex w-full flex-col justify-between items-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex justify-center items-center gap-2 sm:gap-3 min-w-0 w-full sm:w-auto">
            <Image
              src="/bazar-hero.png"
              alt="Bazar Dor logo"
              width={80}
              height={80}
              loading="eager"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 object-contain"
            />
            <div className="flex flex-col justify-center items-start min-w-0">
              <Link
                href="/"
                className="text-lg sm:text-xl font-bold whitespace-nowrap"
              >
                বাজার দর
              </Link>
              <span className="text-[11px] sm:text-xs text-left">
                {date}
              </span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0 self-end sm:self-auto">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 sm:w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 max-w-[calc(100vw-1rem)] p-2 shadow"
              >
                <DropDwon />
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full min-w-0">
          <Catagories />
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default NavBar;
