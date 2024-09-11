import PropTypes from 'prop-types'; 
import styled from 'styled-components';
import { CartContext } from "../components/CartProvider";
import { useContext, useState } from "react";

export function CardProduct({ 
    name, 
    imageUrl, 
    price, 
    description = '', 
    isAvailable = true, 
    rating = null }) {

    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); 
  
    const onAddToCart = () => {
      if (quantity > 0) {
        addToCart(name, price.toFixed(2), quantity, imageUrl);
      }
    };
  
    const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (value >= 1) {
        setQuantity(value);
      }
    };

    return (
      <Card>
        <Image src={imageUrl} alt={name} />
        <Info>
          <ProductName>{name}</ProductName>
          {description && <Description>{description}</Description>}
          {rating && <Rating>Rating: {rating}/5</Rating>}
          <ProductPrice>{price.toFixed(2)} G</ProductPrice>

          <QuantityWrapper>
            <QuantityLabel>Quantity:</QuantityLabel>
            <QuantityInput 
              type="number" 
              defaultValue={quantity} 
              min="1" 
              onChange={handleQuantityChange} 
            />
          </QuantityWrapper>

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
    isAvailable: PropTypes.bool,    
    rating: PropTypes.number, 
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f39c12;
`;

const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-family: 'MedievalSharp', cursive;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #f39c12;
  margin-bottom: 20px;
`;

// Quantity styling
const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const QuantityLabel = styled.span`
  font-size: 1rem;
  margin-right: 10px;
  color: #333;
`;

const QuantityInput = styled.input`
  width: 70px;
  padding: 10px;
  font-size: 1.1rem;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  /* Interaction states */
  &:hover {
    border-color: #f39c12;
  }
  
  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
  }

  /* Hide default number input arrows on Chrome/Safari */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows on Firefox */
  -moz-appearance: textfield;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f39c12')};
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#e67e22')};
  }
`;