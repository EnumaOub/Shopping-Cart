import { getBestSeller } from "../utils/itemsTools";
import styled from 'styled-components';
import initItems from '../assets/initItems.json';
import { CardProduct } from "../components/CardProduct";


export function BestSeller() {
    const bestSellers = getBestSeller(initItems, 4)
    return (
        <BestSellerContainer>
      <h1>Best Reviewed Products</h1>
      <ProductGrid>
        {bestSellers.map(product => (
            <CardProduct
                key={product.name.split(" ").join("")}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
                isAvailable={product.isAvailable}
                rating={product.rating}
                />
        ))}
      </ProductGrid>
    </BestSellerContainer>
        )
}

const BestSellerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333;
    font-family: 'MedievalSharp', cursive;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CardProductWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;