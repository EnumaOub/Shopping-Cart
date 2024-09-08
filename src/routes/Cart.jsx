
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";

import { CartContext } from "../components/CartProvider";


export function Cart() {
    console.log("Cart")

    const { cart } = useContext(CartContext);

    return (
        <div id="cart">
            <div id="cart-info">
                {cart.map((elem) => (
                    <div key={elem.name} id={elem.name.split(" ").join('')}>
                        <div>{elem.name}</div>
                        <div>{elem.price}</div>
                        <div>{elem.qt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}