import Cards from "@/components/cards/Cards";
import { getProducts } from "../../../helpers/product.helper";

const Home = async () => {
  const products = await getProducts();

  return (
    <div className="flex justify-center items-center">
      <Cards products={products} />
    </div>
  );
};

export default Home;
