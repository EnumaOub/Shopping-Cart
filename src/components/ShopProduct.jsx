import { useParams } from "react-router-dom";
import styled from 'styled-components';
import initItems from '../assets/initItems.json';
import { CardProduct } from "../components/CardProduct";
import { getProdById } from "../utils/itemsTools";

export function ShopProduct() {
  const { productId } = useParams();
  const product = getProdById(initItems, productId);
  console.log(productId)
  
  return (
    <ProductDetailContainer>
        <CardProduct
            key={product.name.split(" ").join("")}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            description={product.description}
            isAvailable={product.isAvailable}
            rating={product.rating}
        />
    </ProductDetailContainer>
    );
}

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;