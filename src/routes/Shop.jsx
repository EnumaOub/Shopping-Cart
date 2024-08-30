import { CardProduct } from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Shop() {
    return (
        <div id="shop">
            <Header 
            name = "Welcome to SHOP"
            >
            </Header>
            <CardProduct 
                name="Mystic Sword"
                imageUrl="https://cdna.artstation.com/p/assets/images/images/069/570/688/large/nathanael-k-louis-demon-sword-finish.jpg?1700484389"
                price={99.99}
                description="A sword with mystical powers."
                onAddToCart={() => console.log('TEST cart!')}
                isAvailable={true}
                rating={4.5}
                />
            <Footer />
        </div>
    );
}