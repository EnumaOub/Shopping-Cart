import { getBestSeller } from "../utils/itemsTools";
import initItems from '../assets/initItems.json';
import { CardProduct } from "../components/CardProduct";


export function BestSeller() {
    const bestSellers = getBestSeller(initItems, 3)
    return (
        <div id="best-seller">
            {bestSellers.map((product) => (
                <CardProduct
                    key={product.name.split(" ").join("")}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                    isAvailable={product.isAvailable}
                    rating={product.rating}
                />

            ))}
        </div>
        )
}