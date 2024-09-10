

import { useContext, useEffect } from "react";
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { CartContext } from "../components/CartProvider";



export function Cart() {
    console.log("Cart")

    const { cart, removeFromCart, reduceFromCart } = useContext(CartContext);
    console.log(cart)

    return (
        <CartPageContainer>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty.</EmptyCart>
      ) : (
        <CartItemsContainer>
          {cart.map((elem) => (
          <CartItem key={elem.name.split(" ").join('')}>
            <ProductDetails>
                <ProductName>{elem.name}</ProductName>
                <Quantity>Quantity: {elem.qt}</Quantity>
                <Price>${(elem.price * elem.qt).toFixed(2)}</Price>
              </ProductDetails>
            <RemoveButton onClick={() => removeFromCart(elem.name)}>
                <Icon path={mdiDelete} size={1} />
            </RemoveButton>
            <RemoveButton onClick={() => reduceFromCart(elem.name)}>
                -
            </RemoveButton>
          </CartItem>
        ))}
        </CartItemsContainer>
      )}
    </CartPageContainer>
    );
}

const CartPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-family: 'MedievalSharp', cursive;
    color: #333;
  }
`;

const EmptyCart = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItem = styled.div`
  padding: 20px;
  background-color: #f8f4ea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Quantity = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  padding: 10px 15px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;
