import { render, screen, prettyDOM, queryByAttribute  } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useContext, useEffect } from "react";

import { CartProvider, CartContext } from "../components/CartProvider";

beforeEach(() => {
    // clear the mock to avoid side effects and start the count with 0 for every test
    vi.clearAllMocks();
});

describe('CartProvider', () => {
    it('add an element to cart', () => {
        const TestComp = ({
            name,
            price,
            qt
        }) => {
            const { cart, addToCart } = useContext(CartContext);
            useEffect(() => {
                addToCart(name, price, qt)
              }, []);
            return (
                <div>
                <p id="name">{cart[0]?.name}</p>
                <p id="price">{cart[0]?.price}</p>
                <p id="qt">{cart[0]?.qt}</p>
                </div>
            )
        };

        [
            {
              name: 'Test A',
              price: 50,
              qt: 3,
            },
            {
                name: 'Test B',
                price: 3,
                qt: 5,
              },
          ].forEach(({ name, price, qt }) => {

            const renderId = render(
                <CartProvider>
                    <TestComp
                    name={name}
                    price={price}
                    qt={qt}
                    />
                </CartProvider>
            );
            const getById = queryByAttribute.bind(null, 'id');
            expect(getById(renderId.container, "name").textContent).toEqual(name);
            expect(getById(renderId.container, "price").textContent).toEqual(String(price))
            expect(getById(renderId.container, "qt").textContent).toEqual(String(qt))
          });
    });

    it('append element after another', () => {
        const TestComp = ({
            arr
        }) => {
            const { cart, addToCart } = useContext(CartContext);
            useEffect(() => {
                arr.forEach(({ name, price, qt }) => addToCart(name, price, qt))
              }, []);
            return (
                <div>
                <p id="name">{cart[0]?.name}</p>
                <p id="price">{cart[0]?.price}</p>
                <p id="qt">{cart[0]?.qt}</p>
                </div>
            )
        };

        const cartData = [
            {
              name: 'Test A',
              price: 50,
              qt: 3,
            },
            {
                name: 'Test A',
                price: 50,
                qt: 5,
              },
          ]

        const renderId = render(
            <CartProvider>
                <TestComp
                arr={cartData}
                />
            </CartProvider>
        );
        const totQt = cartData.reduce((accumulator, currentValue) => accumulator + currentValue.qt, 0)
        const getById = queryByAttribute.bind(null, 'id');
        expect(getById(renderId.container, "name").textContent).toEqual(cartData[0].name);
        expect(getById(renderId.container, "price").textContent).toEqual(String(cartData[0].price))
        expect(getById(renderId.container, "qt").textContent).toEqual(String(totQt))

    });


  });