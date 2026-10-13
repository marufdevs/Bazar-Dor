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
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto flex flex-col justify-between items-center gap-3 px-3 sm:px-5 md:gap-4">
        <div className="flex w-full flex-col justify-between items-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex justify-center items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="/bazar-hero.png"
              alt="Bazar Dor logo"
              width={80}
              height={80}
              loading="eager"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 object-contain"
            />
            <div className="flex flex-col justify-center items-start min-w-0">
              <Link
                href="/"
                className="text-[20px] font-bold whitespace-nowrap"
              >
                বাজার দর
              </Link>
              <span className="text-[12px] text-center sm:text-left">
                {date}
              </span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <DropDwon />
              </ul>
            </div>
          </div>
        </div>
        <Catagories />
      </div>
      <Marquee />
    </div>
  );
};

export default NavBar;
