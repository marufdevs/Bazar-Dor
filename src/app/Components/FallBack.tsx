
import React from "react";

const FallBack = () => {
  return (
    <div className="w-full rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-6">
      {/* Loading Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F3E8]">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#C7DCC7] border-t-green-600" />
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 sm:text-base">
            পণ্যের তথ্য লোড হচ্ছে
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            অনুগ্রহ করে একটু অপেক্ষা করুন...
          </p>
        </div>
      </div>

      {/* Product Skeletons */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-3 w-3/4 rounded bg-gray-200" />
                <div className="h-2 w-1/3 rounded bg-gray-100" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div className="space-y-2">
                <div className="h-2 w-16 rounded bg-gray-100" />
                <div className="h-5 w-24 rounded bg-gray-200" />
              </div>

              <div className="h-6 w-14 rounded-full bg-gray-100" />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-gray-400">
        বাজার দর — প্রতিদিনের বাজারের আপডেট
      </p>
    </div>
  );
};

export default FallBack;
