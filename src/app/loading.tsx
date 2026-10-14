
import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#FAFCFA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 animate-pulse rounded-xl bg-[#E8F0E8] sm:h-16 sm:w-16" />

            <div className="space-y-2">
              <div className="h-5 w-24 animate-pulse rounded bg-gray-200 sm:w-32" />
              <div className="h-3 w-32 animate-pulse rounded bg-gray-100 sm:w-40" />
            </div>
          </div>

          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Loading Message */}
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#DFE8DF] bg-white p-4">
          <div className="h-6 w-6 shrink-0 animate-spin rounded-full border-2 border-[#D6E6D6] border-t-green-600" />

          <div>
            <h2 className="text-sm font-bold text-gray-800 sm:text-base">
              পণ্যের তথ্য লোড হচ্ছে...
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              অনুগ্রহ করে একটু অপেক্ষা করুন।
            </p>
          </div>
        </div>

        {/* Category Skeleton */}
        <div className="mb-8 flex flex-wrap gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-20 animate-pulse rounded-full bg-gray-200 sm:w-24"
            />
          ))}
        </div>

        {/* Section Heading */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-gray-100" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border border-[#DFE8DF] bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-[#E8F0E8]" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-3 w-1/3 rounded bg-gray-100" />
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-16 rounded bg-gray-100" />
                  <div className="h-5 w-24 rounded bg-gray-200" />
                </div>

                <div className="h-6 w-14 rounded-full bg-gray-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-center text-xs text-gray-400">
          বাজার দর — প্রতিদিনের বাজারের আপডেট
        </p>
      </div>
    </main>
  );
};

export default Loading;
