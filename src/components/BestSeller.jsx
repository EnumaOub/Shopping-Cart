import { getBestSeller } from "../tools/itemsTools";
import initItems from '../assets/initItems.json';



export default function BestSeller() {
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