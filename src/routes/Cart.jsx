
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";

import { CartContext } from "../components/CartProvider";


export function Cart() {
    console.log("Cart")

    const { cart, addToCart } = useContext(CartContext);
    useEffect(() => {
        addToCart("Test Cart in Site", 45613, 214)
        addToCart("Test Cart in Site", 4111, 25)
        addToCart("Test 22 Cart in Site", 145, 25)
    }, []);
        console.log(cart)
    return (
        <div id="cart">
            <Header 
            name = "Cart"
            tagline = "Ready to Change your life ?"
            >
            </Header>
            <div id="cart-info">
                {cart.map((elem) => (
                    <div key={elem.name} id={elem.name.split(" ").join('')}>
                        <div>{elem.name}</div>
                        <div>{elem.price}</div>
                        <div>{elem.qt}</div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}