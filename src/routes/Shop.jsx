import initItems from '../assets/initItems.json';
import styled from 'styled-components';
import {
    Outlet,
    NavLink,
    useLoaderData,
} from "react-router-dom";
import { useState } from 'react';

import { getProdByCategories } from "../utils/itemsTools";

export function loader() {
    const products = initItems;
    return { products };
}


export function Shop() {
  const { products } = useLoaderData();
  const categories = getProdByCategories(products);
  console.log(categories)
  const [openCategories, setOpenCategories] = useState(Object.keys(categories).reduce((a, v) => ({ ...a, [v]: false}), {}) );


  const toggleCategory = (category) => {
    const newState = !openCategories[category];
    setOpenCategories((prevState) => ({
      ...Object.keys(categories).reduce((a, v) => ({ ...a, [v]: false}), {}) ,
      [category]: newState
    }));
  };

  return (
      <div id="shop">

          <ShopContainer>
          <Sidebar>
              <h2>Categories</h2>
              {Object.keys(categories).map((category) => (
              <CategorySection key={category}>
                  <CategoryTitle onClick={() => toggleCategory(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <DropdownIcon>{openCategories[category] ? '-' : '+'}</DropdownIcon>
                  </CategoryTitle>
                  {openCategories[category] && (
                  <ProductList>
                      {categories[category].map((product) => (
                      <StyledNavLink
                          key={product.id}
                          to={`/shop/${product.id}`} // Link to individual product pages
                          className={({ isActive, isPending }) =>
                              isActive
                              ? "active"
                              : isPending
                              ? "pending"
                              : ""        
                  }
                      >
                          {product.name ? (
                              <>
                                  {product.name}
                              </>
                          ) : (
                              <i>No Name</i>
                          )}{" "}
                          {product.rating } / 5
                      </StyledNavLink>
                      ))}
                  </ProductList>
                  )}
              </CategorySection>
              ))}
          </Sidebar>
              <Main>
                  <Outlet /> 
              </Main>
          </ShopContainer>
      </div>
  );
}

const ShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  min-height: calc(100vh - 120px);
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: #f8f4ea;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    h2 {
        margin-bottom: 20px;
        font-family: 'MedievalSharp', cursive;
    }
`;

const Main = styled.main`
  width: 70%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  flex: 1;
  overflow: auto;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #e67e22;
  }

  &:hover {
    background-color: #d35400;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #f39c12;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const DropdownIcon = styled.span`
  font-size: 1.5rem;
  margin-left: .5rem;
`;

const ProductList = styled.div`
  padding-left: 20px;
  margin-top: 10px;
`;
