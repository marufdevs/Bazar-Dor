import AllProducts from "./Components/HomeComponents/AllProducts";
import HeroPage from "./Components/HomeComponents/HeroPage";
import PriceDown from "./Components/HomeComponents/PriceDown";
import PriceUp from "./Components/HomeComponents/PriceUp";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 pt-12 pb-12">
      <HeroPage />
      <PriceUp />
      <PriceDown />
      <AllProducts />
    </div>
  );
}
