import { CardProduct } from "../components/CardProduct";
import Header from "../components/Header";

export function Shop() {
    return (
        <div id="shop">
            <Header 
            name = "Welcome to SHOP"
            >
            </Header>
            <CardProduct 
                name="Mystic Sword"
                imageUrl="https://example.com/mystic-sword.jpg"
                price={99.99}
                description="A sword with mystical powers."
                onAddToCart={() => console.log('TEST cart!')}
                isAvailable={true}
                rating={4.5}
                />
        </div>
    );
}