import { Product } from "@/app/Types/SingleProduct";

interface Props {
  categoryProducts: Product[];
}

const CatergoryPageHeroComponents = ({ categoryProducts }: Props) => {
  const category = categoryProducts[0];
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-6 md:p-8 lg:px-10">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-3xl sm:h-16 sm:w-16 sm:text-4xl">
        {category.categoryIcon || "🛒"}
      </span>
      <div className="min-w-0">
        <h1 className="break-words text-lg font-bold sm:text-xl md:text-2xl">
          {categoryProducts[0].categoryNameBn}
        </h1>
        <p className="mt-1 text-sm text-gray-600 sm:text-base">
          মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
    </div>
  );
};

export default CatergoryPageHeroComponents;
