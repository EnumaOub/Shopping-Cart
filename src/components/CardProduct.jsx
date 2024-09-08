import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';
import { CartContext } from "../components/CartProvider";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CardProduct({ 
    name, 
    imageUrl, 
    price, 
    description = '', 
    isAvailable = true, 
    rating = null }) {

    const { addToCart } = useContext(CartContext);

    const onAddToCart = () => {
        addToCart(name, price.toFixed(2), 1)
    }

    return (
      <Card>
        <Image src={imageUrl} alt={name} />
        <Info>
          <h2>{name}</h2>
          {description && <p>{description}</p>}
          {rating && <p>Rating: {rating}/5</p>}
          <p>Price: {price.toFixed(2)} G</p>
          <Button disabled={!isAvailable} onClick={onAddToCart}>
            {isAvailable ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </Info>
      </Card>
    );
};


CardProduct.propTypes = {
    name: PropTypes.string.isRequired,          
    imageUrl: PropTypes.string.isRequired,      
    price: PropTypes.number.isRequired,        
    description: PropTypes.string,
    onAddToCart: PropTypes.func, 
    isAvailable: PropTypes.bool,    
    rating: PropTypes.number, 
};

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 20rem;
  height: auto;
  display: block;
  align-item: center;
`;

const Info = styled.div`
  padding: 16px;
  text-align: center;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  p {
    margin: 8px 0;
  }
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

