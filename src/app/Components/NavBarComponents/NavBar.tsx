
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
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/bazar-hero.png"
              alt="Bazar Dor logo"
              width={80}
              height={80}
              loading="eager"
              className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14 md:h-20 md:w-20"
            />

            <div className="flex min-w-0 flex-col items-start justify-center">
              <Link
                href="/"
                className="whitespace-nowrap text-base font-bold sm:text-xl"
              >
                বাজার দর
              </Link>

              <span className="text-left text-[10px] sm:text-xs">
                {date}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 rounded-full sm:w-10">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content z-1 mt-3 w-52 max-w-[calc(100vw-1rem)] rounded-box bg-base-100 p-2 shadow"
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
