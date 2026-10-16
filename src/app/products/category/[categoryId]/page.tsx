import CatergoryPageHeroComponents from "@/app/Components/CategoryComponets/CatergoryPageHeroComponents";
import DataFecth from "@/app/Components/CategoryComponets/DataFecth";
import React, { Suspense } from "react";
interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}


const CategoryPage =({ params }: PageProps) => {

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
          <Suspense fallback={<p>Loading…</p>}>
            <DataFecth params={params} />
          </Suspense>
      </div>
    </div>
  );
};

export default CategoryPage;
