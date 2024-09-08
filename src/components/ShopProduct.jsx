import { useParams } from "react-router-dom";
import initItems from '../assets/initItems.json';
import { CardProduct } from "../components/CardProduct";
import { getProdById } from "../utils/itemsTools";

export function ShopProduct() {
  const { productId } = useParams();
  const product = getProdById(initItems, productId);
  console.log(productId);
  
  return (
    <CardProduct
        key={product.name.split(" ").join("")}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
        description={product.description}
        isAvailable={product.isAvailable}
        rating={product.rating}
    />
);
}