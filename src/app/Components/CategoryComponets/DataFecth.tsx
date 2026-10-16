import { Product } from "@/app/Types/SingleProduct";
import Link from "next/link";
import CatergoryPageHeroComponents from "./CatergoryPageHeroComponents";
interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}
const DataFecth = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const result = await res.json();
  const categoryProducts = result.filter((item: Product) => {
    return item.category === categoryId;
  });
  
  return (
    <div className="flex flex-col gap-10">
      <CatergoryPageHeroComponents categoryProducts={categoryProducts} />
      <div className="flex flex-col gap-5">
        <p className="text-[16px] font-normal">
          মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {categoryProducts.map((item: Product) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white/80 p-3 sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0F5F0] text-xl">
                    {item.image}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.nameBn}
                    </h3>
                    <p className="text-xs text-gray-500">প্রতি কেজি</p>
                  </div>
                </div>

                {/* Today's price and price change */}
                <div className="mt-4 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-base font-bold text-gray-900">
                      {item.today}{" "}
                      <span className="text-xs font-normal">টাকা</span>
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full px-2 py-1 text-[10px] font-medium text-green-500">
                    ▼ {Math.abs(item.change.pct)}%
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataFecth;
