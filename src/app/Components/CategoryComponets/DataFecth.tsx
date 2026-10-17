import { Product } from "@/app/Types/SingleProduct";
import CatergoryPageHeroComponents from "./CatergoryPageHeroComponents";
import CatergoryCardComponents from "./CatergoryCardComponents";
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
  // console.log(categoryProducts);
  

  return (
    <div className="flex flex-col gap-10">
      <CatergoryPageHeroComponents categoryProducts={categoryProducts} />
      <CatergoryCardComponents categoryProducts={categoryProducts} />
    </div>
  );
};

export default DataFecth;
