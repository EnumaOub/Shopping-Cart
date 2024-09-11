

import { useContext, useEffect } from "react";
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { CartContext } from "../components/CartProvider";



export function Cart() {
    console.log("Cart")

    const { cart, removeFromCart, reduceFromCart, emptyCart, addFromCart } = useContext(CartContext);

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
            {cart.map((item, index) => (
              <CartItem key={index}>
                <ImageWrapper>
                  <ProductImage src={item.imageUrl} alt={item.name} />
                </ImageWrapper>
                <ProductDetails>
                  <ProductName>{item.name}</ProductName>
                  <QuantityWrapper>
                    <QuantityLabel>Quantity: {item.qt}</QuantityLabel>
                    <ButtonWrapper>
                      <ReduceButton onClick={() => reduceFromCart(item.name)}>-</ReduceButton>
                      <AddingButton onClick={() => addFromCart(item.name)}>+</AddingButton>
                    </ButtonWrapper>
                  </QuantityWrapper>
                  <Price>Total: {(item.price * item.qt).toFixed(2)} Gold</Price>
                </ProductDetails>
                <RemoveButton onClick={() => removeFromCart(item.name)}><Icon path={mdiDelete} size={.7} /></RemoveButton>
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

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityLabel = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;


const ButtonWrapper = styled.div`
display: flex;
gap: 10px;
`;

const ReduceButton = styled.button`
padding: 10px;
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

const AddingButton = styled.button`
padding: 10px;
background-color: #2ecc71;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #27ae60;
}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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