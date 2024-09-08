

import { useContext, useEffect } from "react";

import { CartContext } from "../components/CartProvider";


export function Cart() {
    console.log("Cart")

    const { cart } = useContext(CartContext);

    return (
        <div id="cart">
            <div id="cart-info">
                {
                cart.length > 0 ? (
                cart.map((elem) => (
                    <div key={elem.name} id={elem.name.split(" ").join('')}>
                        <div>{elem.name}</div>
                        <div>{elem.price}</div>
                        <div>{elem.qt}</div>
                    </div>
                ))
                ) :
                (
                    <div>
                        No Product on Cart 
                    </div>
                )
                
                }
            </div>
        </div>
    );
}