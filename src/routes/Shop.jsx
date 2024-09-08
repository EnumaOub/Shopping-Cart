import { CardProduct } from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBestSeller } from "../tools/itemsTools";
import initItems from '../assets/initItems.json';

export function Shop() {
    const bestSellers = getBestSeller(initItems, 3)
    return (
        <div id="shop">
            <Header 
            name = "Welcome to SHOP"
            >
            </Header>

            {bestSellers.map((product) =>(
                <CardProduct 
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
                isAvailable={product.isAvailable}
                rating={product.rating}
                />

            ))}
            <Footer />
        </div>
    );
}