import React from "react";
interface PageProps {
  params: Promise<{
    idProduct: string;
  }>;
}

interface Item {
  division: string;
  market: string;
  max: number;
  min: number;
}
const ProductContent = async ({ params }: PageProps) => {
  const { idProduct } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${idProduct}`,
  );
  const result = await res.json();
  console.log(result);

  const min = Math.min(
    ...result.markets.map((item: Item) => {
      return item.min;
    }),
  );
  const max = Math.max(
    ...result.markets.map((item: Item) => {
      return item.min;
    }),
  );
  const prices = result.markets.map((item: Item) => {
    return item.min;
  });
  const average =
    prices.reduce((total: number, num: number) => {
      return total + num;
    }, 0) / prices.length;

  return (
    <div className="max-w-7xl m-auto flex flex-col gap-6 pt-10 p-6">
      <span>
        হোম &gt; {result.categoryNameBn} &gt; {result.nameBn}
      </span>

      <div className="w-full rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {/* Left: Image and product details */}
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] sm:h-[72px] sm:w-[72px]">
              <span className="flex h-full w-full items-center justify-center text-3xl">
                {result.image}
              </span>
            </div>

            <div className="min-w-0">
              <h1 className="break-words text-xl font-bold leading-snug text-[#202820] sm:text-2xl">
                {result.nameBn}
              </h1>

              <p className="mt-1 text-xs text-[#697269] sm:text-sm">
                প্রতি কেজি · চাল
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[#303830] sm:text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                {result.change.dir === "up"
                  ? "বেড়েছে"
                  : result.change.dir === "down"
                    ? "কমেছে"
                    : "অপরিবর্তিত"}
                {result.change.dir !== "same" && <> · {result.change.pct}%</>}
              </p>
            </div>
          </div>

          {/* Right: Price panel */}
          <div className="flex w-full shrink-0 items-center justify-between gap-3 rounded-2xl bg-[#F0F5F0] px-4 py-3 sm:w-[106px] sm:flex-col sm:justify-center sm:gap-1 sm:px-3 sm:py-4 sm:text-center">
            <div className="sm:w-full">
              <p className="text-xs text-[#697269]">আজকের দাম</p>

              <p className="mt-1 text-2xl font-bold leading-tight text-[#202820]">
                {result.today}
              </p>

              <p className="mt-1 text-xs text-[#697269]">টাকা / কেজি</p>
            </div>

            <div className="shrink-0">
              {result.change.dir === "up" ? (
                <span className="text-xs font-semibold text-red-500">
                  ▲ {result.change.pct}%
                </span>
              ) : result.change.dir === "down" ? (
                <span className="text-xs font-semibold text-green-600">
                  ▼ {result.change.pct}%
                </span>
              ) : (
                <span className="text-xs font-semibold text-yellow-600">
                  — 0%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-5 md:p-6 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[#202820] sm:text-xl">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {/* Lowest Price */}
            <div className="min-w-0 rounded-2xl border border-[#E1E8E1] bg-white p-4 sm:p-5">
              <p className="text-sm text-[#697269]">সর্বনিম্ন দাম</p>

              <p className="mt-2 break-words text-2xl font-bold text-green-500 sm:text-3xl">
                {min} টাকা
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[#697269] sm:text-sm">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            {/* Highest Price */}
            <div className="min-w-0 rounded-2xl border border-[#E1E8E1] bg-white p-4 sm:p-5">
              <p className="text-sm text-[#697269]">সর্বোচ্চ দাম</p>

              <p className="mt-2 break-words text-2xl font-bold text-red-500 sm:text-3xl">
                {max} টাকা
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[#697269] sm:text-sm">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            {/* Average Price */}
            <div className="min-w-0 rounded-2xl border border-[#E1E8E1] bg-white p-4 sm:p-5">
              <p className="text-sm text-[#697269]">গড় দাম</p>

              <p className="mt-2 break-words text-2xl font-bold text-yellow-500 sm:text-3xl">
                {Math.round(average)} টাকা
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[#697269] sm:text-sm">
                সব বাজারের গড় মূল্য
              </p>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <h2 className="text-lg font-bold text-[#202820] sm:text-xl">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA]">
            <div className="w-full min-w-0">
              <table className="w-full table-fixed border-collapse text-left text-[10px] sm:text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-[#E1E8E1] text-[#737B73]">
                    <th className="break-words px-1 py-3 font-semibold sm:px-2 md:px-4">
                      বাজার
                    </th>
                    <th className="break-words px-1 py-3 font-semibold sm:px-2 md:px-4">
                      বিভাগ
                    </th>
                    <th className="break-words px-1 py-3 text-right font-semibold sm:px-2 md:px-4">
                      সর্বনিম্ন
                    </th>
                    <th className="break-words px-1 py-3 text-right font-semibold sm:px-2 md:px-4">
                      সর্বাধিক
                    </th>
                    <th className="break-words px-1 py-3 text-right font-semibold sm:px-2 md:px-4">
                      গড়
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {result.markets.map((item: Item, ind: number) => {
                    const average = (Number(item.min) + Number(item.max)) / 2;

                    return (
                      <tr
                        key={ind}
                        className={`border-b border-[#4B554B] last:border-b-0 ${
                          ind % 2 === 0 ? "bg-[#FAFCFA]" : "bg-[#F0F4F0]"
                        } transition-colors hover:bg-[#E8EFE8]`}
                      >
                        <td className="break-words px-1 py-3.5 text-[#202820] sm:px-2 md:px-4">
                          {item.market}
                        </td>

                        <td className="break-words px-1 py-3.5 text-[#202820] sm:px-2 md:px-4">
                          {item.division}
                        </td>

                        <td className="break-words px-1 py-3.5 text-right text-[#202820] sm:px-2 md:px-4">
                          {item.min} টাকা
                        </td>

                        <td className="break-words px-1 py-3.5 text-right text-[#202820] sm:px-2 md:px-4">
                          {item.max} টাকা
                        </td>

                        <td className="break-words px-1 py-3.5 text-right font-bold text-[#202820] sm:px-2 md:px-4">
                          {average.toFixed(2)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
