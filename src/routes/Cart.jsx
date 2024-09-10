

import { useContext, useEffect } from "react";
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { CartContext } from "../components/CartProvider";



export function Cart() {
    console.log("Cart")

    const { cart, removeFromCart, reduceFromCart, emptyCart } = useContext(CartContext);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qt, 0);
    const shippingCost = 1; // Constant shipping cost in Silver
    const total = subtotal + shippingCost;
    console.log(cart)

    const handleCheckout = () => {
        emptyCart(); 
    };

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
                <Price>G {(elem.price * elem.qt).toFixed(2)}</Price>
              </ProductDetails>
            <RemoveButton onClick={() => removeFromCart(elem.name)}>
                <Icon path={mdiDelete} size={0.5} />
            </RemoveButton>
            <ReduceButton onClick={() => reduceFromCart(elem.name)}>
                -
            </ReduceButton>
          </CartItem>
        ))}
        </CartItemsContainer>
      )}

        <OrderSummary>
            <OrderTitle>Order Summary</OrderTitle>
            <SummaryItem>
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} Gold</span>
            </SummaryItem>
            <SummaryItem>
              <span>Shipping</span>
              <span>1 Silver</span>
            </SummaryItem>
            <SummaryTotal>
              <span>Total</span>
              <span>{total.toFixed(2)} Gold + 1 Silver</span>
            </SummaryTotal>
            <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </OrderSummary>
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

const ReduceButton = styled.button`
    margin: .5rem;
    padding: 10px 15px;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e67e22;
    }
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


const OrderSummary = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #f8f4ea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OrderTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-family: 'MedievalSharp', cursive;
  color: #333;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SummaryTotal = styled(SummaryItem)`
  font-weight: bold;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;