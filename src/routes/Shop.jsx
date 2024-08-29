import { CardProduct } from "../components/CardProduct";

export function Shop() {
    return (
        <div id="shop">
            <h1>Welcome to SHOP</h1>
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